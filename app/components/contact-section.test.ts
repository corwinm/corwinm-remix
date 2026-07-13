import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const contactSectionSource = readFileSync(
  new URL("./contact-section.tsx", import.meta.url),
  "utf8",
);
const linkHeaderSource = readFileSync(
  new URL("./link-header.tsx", import.meta.url),
  "utf8",
);

describe("contact section heading hierarchy", () => {
  it("nests the contact card heading directly below the section heading", () => {
    expect(linkHeaderSource).toContain("<h2");
    expect(contactSectionSource).toMatch(
      /<h3\b[^>]*text-2xl[^>]*>\s*Find me online\s*<\/h3>/,
    );
    expect(contactSectionSource).not.toMatch(
      /<h4\b[^>]*>\s*Find me online\s*<\/h4>/,
    );
  });
});
