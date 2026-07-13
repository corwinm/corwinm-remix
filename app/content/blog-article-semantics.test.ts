import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

const routeDirectory = new URL("../routes/", import.meta.url);
const articleFiles = readdirSync(routeDirectory).filter(
  (fileName) => fileName.startsWith("blog.") && fileName.endsWith(".mdx"),
);

describe("blog article semantics", () => {
  it.each(articleFiles)(
    "uses a semantic heading hierarchy in %s",
    (fileName) => {
      const source = readFileSync(new URL(fileName, routeDirectory), "utf8");

      expect(source.match(/<h1\b/g)).toHaveLength(1);
      expect(source.match(/<h2\b/g)?.length ?? 0).toBeGreaterThan(0);
      expect(source).toContain("[&>h2]:text-2xl");
      expect(source).not.toMatch(/<h3\b/);
    },
  );

  it("labels the article return link as Blog", () => {
    const source = readFileSync(new URL("blog.tsx", routeDirectory), "utf8");

    expect(source).toContain("Back to Blog");
    expect(source).not.toContain("Back to overview");
  });
});
