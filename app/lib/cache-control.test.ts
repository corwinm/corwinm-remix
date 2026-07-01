import { describe, expect, test } from "vitest";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "../..");

const cacheHeaderFiles = [
  "app/routes/_index.tsx",
  "app/routes/resume.tsx",
  "app/routes/wishlist.tsx",
  "app/routes/rss[.]xml.ts",
  "app/routes/sitemap[.]xml.ts",
  "app/routes/robots[.]txt.ts",
  "app/routes/blog.arashi.mdx",
  "app/routes/blog.introduction.mdx",
  "app/routes/blog.oil-code.mdx",
];

describe("route Cache-Control headers", () => {
  test.each(cacheHeaderFiles)(
    "%s uses Vercel-supported s-maxage directive",
    async (filePath) => {
      const source = await readFile(resolve(projectRoot, filePath), "utf8");

      expect(source).toContain("s-maxage=");
      expect(source).not.toContain("s-max-age=");
    },
  );
});
