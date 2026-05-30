import { describe, expect, it } from "vitest";
import { heroHeadingLines, heroSummary } from "./hero-content";

describe("hero content", () => {
  it("leads with the chosen homepage identity", () => {
    expect(heroHeadingLines).toEqual([
      "Software Architect.",
      "Agent Tamer.",
      "Dad.",
    ]);
    expect(heroSummary).toBe("I build software and tame AI agents.");
  });
});
