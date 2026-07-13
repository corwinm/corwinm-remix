import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const componentSources = [
  "profile-link.tsx",
  "link-header.tsx",
  "social-links.tsx",
].map((fileName) => ({
  fileName,
  source: readFileSync(new URL(`./${fileName}`, import.meta.url), "utf8"),
}));

const socialLinksSource = componentSources.find(
  ({ fileName }) => fileName === "social-links.tsx",
)?.source;

describe("keyboard accessibility", () => {
  it.each(componentSources)(
    "$fileName provides an explicit keyboard focus indicator",
    ({ source }) => {
      expect(source).toContain("focus-visible:outline-none");
      expect(source).toContain("focus-visible:ring-2");
      expect(source).toContain("focus-visible:ring-offset-2");
    },
  );

  it("gives icon-only footer controls accessible names", () => {
    expect(socialLinksSource).toContain("aria-label={item.title}");
    expect(socialLinksSource).toContain('aria-label="Share this page"');
  });
});
