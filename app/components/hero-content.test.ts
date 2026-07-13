import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  heroHeadingLines,
  heroPrimaryCta,
  heroSecondaryCtas,
  heroCtaLayoutClassNames,
} from "./hero-content";

describe("hero content", () => {
  it("leads with the chosen homepage identity", () => {
    expect(heroHeadingLines).toEqual([
      "Software Architect.",
      "Agentic Engineer.",
      "Dad.",
    ]);
  });

  it("renders the chosen identity without rotating alternatives", () => {
    const heroSource = readFileSync(
      new URL("./hero.tsx", import.meta.url),
      "utf8",
    );

    expect(heroSource).not.toContain("RotatingMiddleLine");
    expect(heroSource).not.toContain("setInterval");
    expect(heroSource).not.toContain("heroMiddleLineOptions");
  });

  it("prioritizes connect as the primary hero CTA", () => {
    expect(heroPrimaryCta).toEqual({
      label: "Connect with me",
      href: "#contact",
    });
    expect(heroSecondaryCtas).toEqual([
      { label: "Projects", href: "#projects" },
      { label: "Blog", href: "/blog" },
    ]);
  });

  it("keeps hero CTAs inline on desktop and tap-friendly on mobile", () => {
    expect(heroCtaLayoutClassNames.container).toContain("md:flex-row");
    expect(heroCtaLayoutClassNames.secondaryGroup).toContain("grid-cols-2");
    expect(heroCtaLayoutClassNames.secondaryGroup).toContain("md:flex");
    expect(heroCtaLayoutClassNames.primaryButton).toContain("w-full");
    expect(heroCtaLayoutClassNames.secondaryButton).toContain("min-h-11");
  });
});
