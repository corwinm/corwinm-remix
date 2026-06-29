import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const routeSource = readFileSync(
  fileURLToPath(new URL("../routes/blog._index.tsx", import.meta.url)),
  "utf8",
);

describe("blog index route copy", () => {
  it("uses Blog consistently for user-facing blog page labels and meta", () => {
    expect(routeSource).toContain('title: "Blog - Corwin W. Marsh"');
    expect(routeSource).toMatch(
      /description:\s*"Blog posts by Corwin Marsh about software engineering, developer tooling, and AI-assisted software workflows\."/,
    );
    expect(routeSource).toContain("Blog</h1>");
    expect(routeSource).not.toContain("Notes from the workbench");
  });
});
