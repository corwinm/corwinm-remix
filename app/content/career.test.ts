import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  careerRoles,
  currentCareerRole,
  previousCareerRoles,
  resumeCareerRoles,
} from "./career";

const experienceSectionSource = readFileSync(
  new URL("../components/experience-section.tsx", import.meta.url),
  "utf8",
);
const resumeRouteSource = readFileSync(
  new URL("../routes/resume.tsx", import.meta.url),
  "utf8",
);

describe("career content", () => {
  it("keeps durable role facts in one canonical collection", () => {
    expect(
      careerRoles.map(({ id, title, company, duration, location }) => ({
        id,
        title,
        company: company.name,
        duration,
        location,
      })),
    ).toEqual([
      {
        id: "slalom",
        title: "Sr. Software Architect",
        company: "Slalom",
        duration: "Aug 2015 - Present",
        location: "Seattle, WA",
      },
      {
        id: "intellicheck-mobilisa",
        title: "Jr. Software Engineer",
        company: "Intellicheck Mobilisa",
        duration: "Jul 2014 - Aug 2015",
        location: "Port Townsend, WA",
      },
      {
        id: "dominos-pizza",
        title: "General Manager",
        company: "Domino's Pizza",
        duration: "Oct 2009 - Jun 2014",
        location: undefined,
      },
    ]);
  });

  it("provides view-specific content from the same role records", () => {
    expect(currentCareerRole.id).toBe("slalom");
    expect(previousCareerRoles.map((role) => role.id)).toEqual([
      "intellicheck-mobilisa",
      "dominos-pizza",
    ]);
    expect(resumeCareerRoles.map((role) => role.id)).toEqual([
      "slalom",
      "intellicheck-mobilisa",
    ]);

    expect(currentCareerRole.homepage.highlights).toContain(
      "Manage 4 direct reports through regular 1:1s, career guidance, technical mentorship, and professional-development support.",
    );
    expect(currentCareerRole.resume?.description).toContain(
      "Manage 4 direct reports through regular 1:1s, career guidance, technical mentorship, and professional-development support",
    );
  });

  it("makes the homepage and resume consume canonical career content", () => {
    expect(experienceSectionSource).toContain('from "~/content/career"');
    expect(resumeRouteSource).toContain('from "~/content/career"');
    expect(experienceSectionSource).not.toContain("const currentRole");
    expect(resumeRouteSource).not.toContain("const experiences");
  });

  it("keeps the React Router skill label version-neutral", () => {
    expect(resumeRouteSource).toContain('"React Router"');
    expect(resumeRouteSource).not.toContain("React Router 7");
  });
});
