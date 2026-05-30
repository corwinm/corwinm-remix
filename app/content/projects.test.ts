import { describe, expect, it } from "vitest";
import { featuredProjects, resumeProjects } from "./projects";

describe("project content", () => {
  it("features Agent Tamer as the agent-session tmux project", () => {
    const project = featuredProjects.find(
      (item) => item.title === "Agent Tamer",
    );

    expect(project).toBeDefined();
    expect(project?.category).toBe("agent session manager");
    expect(project?.description).toContain("terminal coding-agent sessions");
    expect(project?.links).toContainEqual({
      label: "GitHub",
      href: "https://github.com/corwinm/coding-agents-tmux",
    });
  });

  it("uses Agent Tamer in generated resume project content", () => {
    expect(
      resumeProjects.some((project) =>
        project.name.startsWith("Agent Tamer -"),
      ),
    ).toBe(true);
  });
});
