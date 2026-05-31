import { describe, expect, it } from "vitest";
import { heroHeadingLines, heroMiddleLineOptions } from "./hero-content";

describe("hero content", () => {
  it("leads with the chosen homepage identity", () => {
    expect(heroHeadingLines).toEqual([
      "Software Architect.",
      "Agentic Engineer.",
      "Dad.",
    ]);
  });

  it("rotates the middle line through agent-focused roles", () => {
    expect(heroMiddleLineOptions).toEqual([
      "Agentic Engineer.",
      "Agent Tamer.",
      "AI Toolsmith.",
      "Agent Wrangler.",
    ]);
  });

  it("keeps rotating lines shorter than the fixed lead line", () => {
    const [leadLine] = heroHeadingLines;

    expect(
      heroMiddleLineOptions.every((line) => line.length < leadLine.length),
    ).toBe(true);
  });
});
