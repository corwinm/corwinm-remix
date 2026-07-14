import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const aboutSectionSource = readFileSync(
  new URL("./about-section.tsx", import.meta.url),
  "utf8",
);
const linkHeaderSource = readFileSync(
  new URL("./link-header.tsx", import.meta.url),
  "utf8",
);

describe("about section content", () => {
  it("uses the preferred currently learning labels", () => {
    expect(aboutSectionSource).toContain("Pi Agent");
    expect(aboutSectionSource).toContain("Agent Tooling");
    expect(aboutSectionSource).not.toContain(">pi<");
    expect(aboutSectionSource).not.toContain("Agent Tooling Patterns");
  });

  it("keeps the React Router label version-neutral", () => {
    expect(aboutSectionSource).toContain("React Router");
    expect(aboutSectionSource).not.toContain("React Router 7");
  });

  it("frames the homepage around developer experience and AI-assisted workflows", () => {
    expect(aboutSectionSource).toContain("developer experience");
    expect(aboutSectionSource).toContain("AI-assisted");
    expect(aboutSectionSource).toContain("engineering workflows");
    expect(aboutSectionSource).toContain("Currently building toward");
  });

  it("uses level-three headings for the About subsections", () => {
    expect(linkHeaderSource).toContain("<h2");

    for (const label of ["Technologies I love", "Currently building toward"]) {
      expect(aboutSectionSource).toContain(
        `<h3 className="font-semibold">${label}</h3>`,
      );
      expect(aboutSectionSource).not.toContain(
        `<p className="font-semibold">${label}</p>`,
      );
    }
  });
});
