import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { featuredProjects } from "./projects";

const projectsSectionSource = readFileSync(
  new URL("../components/projects-section.tsx", import.meta.url),
  "utf8",
);

function getProject(title: string) {
  const project = featuredProjects.find(
    (candidate) => candidate.title === title,
  );
  expect(project).toBeDefined();
  return project!;
}

describe("featured project stories", () => {
  it("connects oil.code and Arashi to their existing articles", () => {
    expect(getProject("oil.code").storyHref).toBe("/blog/oil-code");
    expect(getProject("Arashi").storyHref).toBe("/blog/arashi");
    expect(
      featuredProjects
        .filter((project) => project.storyHref)
        .map((project) => project.title),
    ).toEqual(["oil.code", "Arashi"]);
  });

  it("renders story CTAs as internal links when a story is available", () => {
    expect(projectsSectionSource).toContain("ProfileRouterLink");
    expect(projectsSectionSource).toContain("project.storyHref");
    expect(projectsSectionSource).toContain("Read the story");
    expect(projectsSectionSource).toContain('aria-hidden="true"');
  });
});
