import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = (fileName: string) =>
  readFileSync(new URL(`./${fileName}`, import.meta.url), "utf8");

describe("homepage decorative media", () => {
  it("gives the profile portrait a descriptive accessible name", () => {
    expect(readComponent("profile-image.tsx")).toContain(
      "alt={`Portrait of ${publicProfile.name}`}",
    );
  });

  it("hides the decorative contact background from assistive technology", () => {
    const contactSource = readComponent("contact-section.tsx");

    expect(contactSource).toMatch(
      /src=\{pnwBannerImage\}[\s\S]*?alt=""[\s\S]*?className="absolute inset-0/,
    );
    expect(contactSource).not.toContain(
      'alt="Starry Pacific Northwest mountain landscape"',
    );
  });

  it("hides decorative external-link icons from assistive technology", () => {
    const aboutSource = readComponent("about-section.tsx");
    const projectSource = readComponent("projects-section.tsx");
    const socialSource = readComponent("social-links.tsx");

    expect(aboutSource).toContain(
      '<ExternalLink aria-hidden className="h-3 w-3 text-gray-400" />',
    );
    expect(aboutSource.match(/<DecorativeExternalLink \/>/g)).toHaveLength(15);
    expect(projectSource).toMatch(/<ExternalLink\s+aria-hidden(?:="true")?/);
    expect(socialSource).toMatch(
      /<FontAwesomeIcon\s+aria-hidden="true"\s+icon=\{faExternalLinkSquareAlt\}/,
    );
  });
});
