import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  new URL("../routes/blog._index.tsx", import.meta.url),
  "utf8",
);
const cardLink = source.match(/<Link\b[\s\S]*?>/)?.[0];
const heading = source.match(/<h2\b[\s\S]*?>/)?.[0];

describe("blog card keyboard focus", () => {
  it("gives card links an explicit focus-visible ring in both themes", () => {
    expect(cardLink).toBeDefined();
    for (const className of [
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-blue-600",
      "focus-visible:ring-offset-2",
      "focus-visible:ring-offset-white",
      "dark:focus-visible:ring-blue-400",
      "dark:focus-visible:ring-offset-slate-950",
    ]) {
      expect(cardLink).toContain(className);
    }
  });

  it("gives keyboard-focused titles the existing hover colors without removing hover styling", () => {
    expect(heading).toContain("group-focus-visible:text-blue-600");
    expect(heading).toContain("dark:group-focus-visible:text-blue-400");
    expect(heading).toContain("group-hover:text-blue-600");
    expect(heading).toContain("dark:group-hover:text-blue-400");
  });
});
