import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readComponent = (fileName: string) =>
  readFileSync(new URL(`./${fileName}`, import.meta.url), "utf8");

const componentSources = [
  "hero.tsx",
  "profile-image.tsx",
  "profile-section.tsx",
  "projects-section.tsx",
  "contact-section.tsx",
  "link-header.tsx",
  "profile-link.tsx",
  "social-links.tsx",
].map((fileName) => ({ fileName, source: readComponent(fileName) }));

const appStyles = readFileSync(new URL("../app.css", import.meta.url), "utf8");

describe("homepage reduced-motion support", () => {
  it.each(componentSources)(
    "$fileName reads the visitor's reduced-motion preference",
    ({ source }) => {
      expect(source).toContain("useReducedMotion");
      expect(source).toContain(
        "const shouldReduceMotion = useReducedMotion();",
      );
    },
  );

  it("keeps entrance markup SSR-stable and marks it for CSS overrides", () => {
    const heroSource = readComponent("hero.tsx");
    expect(heroSource).toContain('data-motion-entrance=""');
    expect(heroSource).toContain("initial={{ scale: 1.5, opacity: 0 }}");
    expect(heroSource).toContain("initial={{ y: 20, opacity: 0 }}");

    const profileSource = readComponent("profile-image.tsx");
    expect(profileSource).toContain('data-motion-entrance=""');
    expect(profileSource).toContain("initial={{ scale: 1.5, opacity: 0 }}");

    const profileSectionSource = readComponent("profile-section.tsx");
    expect(profileSectionSource).toContain('data-motion-entrance=""');
    expect(profileSectionSource).toContain(
      "initial={{ opacity: 0, translateY: 64 }}",
    );

    const projectsSource = readComponent("projects-section.tsx");
    expect(projectsSource).toContain('data-motion-entrance=""');
    expect(projectsSource).toContain("initial={{ opacity: 0, y: 24 }}");

    const contactSource = readComponent("contact-section.tsx");
    expect(contactSource).toContain('data-motion-entrance=""');
    expect(contactSource).toContain("initial={{ opacity: 0, y: 20 }}");
  });

  it("makes entrance content immediately visible with reduced motion before hydration", () => {
    expect(appStyles).toMatch(
      /@media \(prefers-reduced-motion: reduce\)[\s\S]*\[data-motion-entrance\][\s\S]*opacity: 1 !important;[\s\S]*transform: none !important;/,
    );
    expect(appStyles).toMatch(
      /@media \(prefers-reduced-motion: reduce\)[\s\S]*html \{[\s\S]*scroll-behavior: auto !important;/,
    );
    expect(appStyles).toMatch(
      /@media \(prefers-reduced-motion: reduce\)[\s\S]*\[data-slot="button"\][\s\S]*transition-duration: 0s !important;[\s\S]*transform: none !important;/,
    );
  });

  it("removes entrance transition duration when reduced motion is requested", () => {
    for (const fileName of [
      "hero.tsx",
      "profile-image.tsx",
      "profile-section.tsx",
      "projects-section.tsx",
      "contact-section.tsx",
    ]) {
      expect(readComponent(fileName)).toMatch(
        /transition=\{\s*shouldReduceMotion\s*\? \{ duration: 0 \}/,
      );
    }
  });

  it("disables hover and tap transforms on cards and animated links", () => {
    const contactSource = readComponent("contact-section.tsx");
    expect(contactSource.match(/const shouldReduceMotion/g)).toHaveLength(2);
    expect(contactSource).toContain(
      "whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}",
    );

    const linkHeaderSource = readComponent("link-header.tsx");
    expect(linkHeaderSource).toMatch(
      /whileHover=\{\s*shouldReduceMotion\s*\? undefined/,
    );
    expect(linkHeaderSource).toContain(
      "whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}",
    );

    const profileLinkSource = readComponent("profile-link.tsx");
    expect(profileLinkSource.match(/const shouldReduceMotion/g)).toHaveLength(
      2,
    );
    expect(
      profileLinkSource.match(/whileHover=\{\s*shouldReduceMotion/g),
    ).toHaveLength(2);
    expect(
      profileLinkSource.match(/whileTap=\{\s*shouldReduceMotion/g),
    ).toHaveLength(2);

    const socialLinksSource = readComponent("social-links.tsx");
    expect(
      socialLinksSource.match(/whileHover=\{\s*shouldReduceMotion/g),
    ).toHaveLength(2);
    expect(
      socialLinksSource.match(/whileTap=\{\s*shouldReduceMotion/g),
    ).toHaveLength(2);
  });
});
