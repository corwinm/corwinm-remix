#!/usr/bin/env node
import { createServer } from "node:net";
import { writeFile } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "public/resume.pdf");
const resumePath = "/resume";
const paper = {
  paperWidth: 8.5,
  paperHeight: 11,
  marginTop: 0.4,
  marginBottom: 0.4,
  marginLeft: 0.4,
  marginRight: 0.4,
  scale: 0.985,
};

const args = new Set(process.argv.slice(2));
const shouldBuild = !args.has("--skip-build");

function log(message) {
  console.log(`[resume:pdf] ${message}`);
}

function run(command, commandArgs, options = {}) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, commandArgs, {
      cwd: projectRoot,
      stdio: "inherit",
      shell: false,
      ...options,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolveRun();
      else reject(new Error(`${command} ${commandArgs.join(" ")} exited with ${code}`));
    });
  });
}

function getServerEntry() {
  const serverRoot = resolve(projectRoot, "build/server");
  const serverDir = readdirSync(serverRoot).find((entry) => existsSync(resolve(serverRoot, entry, "index.js")));

  if (!serverDir) {
    throw new Error("Could not find React Router server build. Run `pnpm build` first.");
  }

  return resolve(serverRoot, serverDir, "index.js");
}

function sleep(ms) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}

async function getAvailablePort() {
  return new Promise((resolvePort, reject) => {
    const server = createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => resolvePort(address.port));
    });
    server.on("error", reject);
  });
}

async function waitForHttp(url, label) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (response.ok) return;
    } catch {
      // Retry until server is ready.
    }
    await sleep(250);
  }
  throw new Error(`Timed out waiting for ${label}: ${url}`);
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
  }
  return response.json();
}

function detectChromePath() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }

  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ];

  const chromePath = candidates.find((candidate) => existsSync(candidate));
  if (!chromePath) {
    throw new Error("Could not find Chrome/Chromium. Set CHROME_PATH to the browser executable.");
  }
  return chromePath;
}

function connectToWebSocket(wsUrl) {
  return new Promise((resolveSocket, reject) => {
    const ws = new WebSocket(wsUrl);
    const pending = new Map();
    let id = 0;

    ws.addEventListener("open", () => {
      resolveSocket({
        send(method, params = {}) {
          const messageId = ++id;
          ws.send(JSON.stringify({ id: messageId, method, params }));
          return new Promise((resolveSend, rejectSend) => {
            pending.set(messageId, { resolveSend, rejectSend, method });
          });
        },
        close() {
          ws.close();
        },
      });
    });

    ws.addEventListener("error", reject);
    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (!message.id) return;

      const callbacks = pending.get(message.id);
      if (!callbacks) return;

      pending.delete(message.id);
      if (message.error) {
        callbacks.rejectSend(new Error(`${callbacks.method}: ${JSON.stringify(message.error)}`));
      } else {
        callbacks.resolveSend(message.result);
      }
    });
  });
}

async function waitForChrome(port) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      await fetchJson(`http://127.0.0.1:${port}/json/version`);
      return;
    } catch {
      await sleep(100);
    }
  }
  throw new Error("Timed out waiting for Chrome remote debugging.");
}

function getPdfPageCount(pdfBuffer) {
  const text = pdfBuffer.toString("latin1");
  const counts = [...text.matchAll(/\/Count\s+(\d+)/g)].map((match) => Number(match[1]));
  return counts.length ? Math.max(...counts) : null;
}

async function main() {
  if (shouldBuild) {
    log("Building production bundle...");
    await run("pnpm", ["build"]);
  } else {
    log("Skipping build because --skip-build was provided.");
  }

  const appPort = await getAvailablePort();
  const appUrl = `http://127.0.0.1:${appPort}${resumePath}`;
  const serverEntry = getServerEntry();
  log(`Starting production server on port ${appPort}...`);
  const appServer = spawn("pnpm", ["exec", "react-router-serve", serverEntry], {
    cwd: projectRoot,
    env: { ...process.env, PORT: String(appPort) },
    stdio: ["ignore", "pipe", "pipe"],
    shell: false,
  });

  const chromePath = detectChromePath();
  const chromePort = await getAvailablePort();
  const chromeUserDataDir = `/tmp/corwinm-resume-pdf-chrome-${process.pid}`;
  let chrome;

  try {
    appServer.stderr.on("data", (chunk) => process.stderr.write(chunk));
    await waitForHttp(appUrl, "resume page");

    log(`Launching Chrome from ${chromePath}...`);
    chrome = spawn(
      chromePath,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        `--remote-debugging-port=${chromePort}`,
        `--user-data-dir=${chromeUserDataDir}`,
        "about:blank",
      ],
      { stdio: "ignore" },
    );

    await waitForChrome(chromePort);
    const tab = await fetchJson(`http://127.0.0.1:${chromePort}/json/new?about:blank`, { method: "PUT" });
    const client = await connectToWebSocket(tab.webSocketDebuggerUrl);

    log("Rendering print CSS and waiting for fonts...");
    await client.send("Page.enable");
    await client.send("Runtime.enable");
    await client.send("Network.enable");
    await client.send("Network.setBlockedURLs", { urls: ["*://*/_vercel/*"] });
    await client.send("Emulation.setEmulatedMedia", { media: "print" });
    await client.send("Page.navigate", { url: appUrl });
    await sleep(1_000);
    await client.send("Runtime.evaluate", {
      expression: "document.fonts && document.fonts.ready ? document.fonts.ready.then(() => true) : true",
      awaitPromise: true,
    });

    log(`Writing ${outputPath}...`);
    const pdf = await client.send("Page.printToPDF", {
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: false,
      ...paper,
    });
    client.close();

    const pdfBuffer = Buffer.from(pdf.data, "base64");
    await writeFile(outputPath, pdfBuffer);

    const pageCount = getPdfPageCount(pdfBuffer);
    if (pageCount !== 1) {
      throw new Error(`Expected a one-page resume PDF, but generated ${pageCount ?? "an unknown number of"} pages.`);
    }

    log("Done. Generated a one-page PDF in the repo.");
  } finally {
    if (chrome) chrome.kill("SIGTERM");
    appServer.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
