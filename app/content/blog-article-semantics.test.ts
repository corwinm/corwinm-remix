import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

const routeDirectory = new URL("../routes/", import.meta.url);
const componentDirectory = new URL("../components/", import.meta.url);
const articleFiles = readdirSync(routeDirectory).filter(
  (fileName) => fileName.startsWith("blog.") && fileName.endsWith(".mdx"),
);

describe("blog article semantics", () => {
  it("uses one shared semantic article shell", () => {
    const shell = readFileSync(
      new URL("blog-article.tsx", componentDirectory),
      "utf8",
    );

    expect(shell.match(/<h1\b/g)).toHaveLength(1);
    expect(shell).toContain("[&>h2]:text-2xl");
  });

  it.each(articleFiles)("uses the shared article shell in %s", (fileName) => {
    const source = readFileSync(new URL(fileName, routeDirectory), "utf8");

    expect(source).toContain("<BlogArticle");
    expect(source).toMatch(/^image:\n/m);
    expect(source).not.toContain("const articleImage");
    expect(source.includes("showDescription")).toBe(
      fileName === "blog.arashi.mdx",
    );
    expect(source.match(/<h2\b/g)?.length ?? 0).toBeGreaterThan(0);
    expect(source).not.toMatch(/<h1\b/);
    expect(source).not.toMatch(/<h3\b/);
    expect(source).not.toContain("<header");
    expect(source).not.toContain("[&>h2]:text-2xl");
  });

  it("labels the article return link as Blog", () => {
    const source = readFileSync(new URL("blog.tsx", routeDirectory), "utf8");

    expect(source).toContain("Back to Blog");
    expect(source).not.toContain("Back to overview");
  });
});
