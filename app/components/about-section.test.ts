import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const aboutSectionSource = readFileSync(
  new URL("./about-section.tsx", import.meta.url),
  "utf8",
);
const normalizedAboutSectionSource = aboutSectionSource.replace(/\s+/g, " ");

describe("about section content", () => {
  it("removes the technology and aspirational tool lists", () => {
    expect(aboutSectionSource).not.toContain("Technologies I love");
    expect(aboutSectionSource).not.toContain("Currently building toward");
    expect(aboutSectionSource).not.toContain("<ul");
  });

  it("preserves the introduction and engineering focus", () => {
    expect(normalizedAboutSectionSource).toContain("Hi, I’m");
    expect(aboutSectionSource).toContain("publicProfile.employer.url");
    expect(aboutSectionSource).toContain("publicProfile.jobTitle");
    expect(aboutSectionSource).toContain("publicProfile.location");
    expect(aboutSectionSource).toContain("Since 2014");
    expect(normalizedAboutSectionSource).toContain(
      "I focus on developer experience, frontend platforms, people leadership, and AI-assisted engineering workflows that help teams ship maintainable software without losing control of the work.",
    );
  });
});
