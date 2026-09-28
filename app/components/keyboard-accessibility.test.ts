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

const layoutSource = readFileSync(
  new URL("./layout.tsx", import.meta.url),
  "utf8",
);

describe("skip to main content", () => {
  const skipLink = layoutSource.match(
    /<a\b[^>]*href="#main-content"[^>]*>[\s\S]*?<\/a>/,
  )?.[0];

  it("provides a native skip link before the shared header", () => {
    expect(skipLink).toBeDefined();
    expect(skipLink).toContain("Skip to main content");
    expect(layoutSource.indexOf(skipLink!)).toBeLessThan(
      layoutSource.indexOf("<Header"),
    );
  });

  it("reveals the link on focus above the sticky header", () => {
    expect(skipLink).toContain("sr-only");
    expect(skipLink).toContain("focus:not-sr-only");
    expect(skipLink).toContain("focus:fixed");
    expect(skipLink).toContain("focus:z-[60]");
    expect(skipLink).toContain("focus:ring-2");
  });

  it("targets the shared main without adding it to the tab order", () => {
    const main = layoutSource.match(/<main\b[^>]*>/)?.[0];
    expect(main).toContain('id="main-content"');
    expect(main).toContain("tabIndex={-1}");
    expect(layoutSource.match(/id="main-content"/g)).toHaveLength(1);
  });
});

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
