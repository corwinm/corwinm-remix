import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const aboutSectionSource = readFileSync(
  new URL("./about-section.tsx", import.meta.url),
  "utf8",
);

describe("about section content", () => {
  it("uses the preferred currently learning labels", () => {
    expect(aboutSectionSource).toContain("Pi Agent");
    expect(aboutSectionSource).toContain("Agent Tooling");
    expect(aboutSectionSource).not.toContain(">pi<");
    expect(aboutSectionSource).not.toContain("Agent Tooling Patterns");
  });

  it("frames the homepage around developer experience and AI-assisted workflows", () => {
    expect(aboutSectionSource).toContain("developer experience");
    expect(aboutSectionSource).toContain("AI-assisted");
    expect(aboutSectionSource).toContain("engineering workflows");
    expect(aboutSectionSource).toContain("Currently building toward");
  });
});
