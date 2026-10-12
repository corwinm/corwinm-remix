import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { featuredProjects } from "../content/projects";
import ProjectsSection from "./projects-section";

const markup = renderToStaticMarkup(
  <MemoryRouter>
    <ProjectsSection />
  </MemoryRouter>,
);
const anchors = [...markup.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];

function anchorFor(href: string) {
  const anchor = anchors.find((match) => match[1].includes(`href="${href}"`));
  expect(anchor, `Expected a link to ${href}`).toBeDefined();
  return anchor!;
}

function textContent(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

describe("featured project link names", () => {
  it("adds hidden project context to every external link without changing destinations or behavior", () => {
    for (const project of featuredProjects) {
      for (const link of project.links) {
        const [, attributes, content] = anchorFor(link.href);
        expect(textContent(content)).toBe(`${link.label} for ${project.title}`);
        expect(content).toContain(
          `class="sr-only"> for ${project.title}</span>`,
        );
        expect(
          textContent(
            content.replace(/<span class="sr-only">[\s\S]*?<\/span>/g, ""),
          ),
        ).toBe(link.label);
        expect(attributes).toContain('target="_blank"');
        expect(attributes).toContain('rel="noopener noreferrer"');
      }
    }
  });

  it("adds hidden project context to story links while keeping them internal", () => {
    for (const project of featuredProjects.filter(
      (project) => project.storyHref,
    )) {
      const [, attributes, content] = anchorFor(project.storyHref!);
      expect(textContent(content)).toBe(`Read the story for ${project.title}`);
      expect(content).toContain(`class="sr-only"> for ${project.title}</span>`);
      expect(
        textContent(
          content.replace(/<span class="sr-only">[\s\S]*?<\/span>/g, ""),
        ),
      ).toBe("Read the story");
      expect(attributes).not.toContain("target=");
    }
  });
});
