import { describe, expect, it } from "vitest";
import { heroHeadingLines, heroSummary } from "./hero-content";

describe("hero content", () => {
  it("leads with the Agent Tamer identity", () => {
    expect(heroHeadingLines).toEqual(["Agent Tamer.", "Tool builder.", "Dad."]);
    expect(heroSummary).toContain("AI coding agents");
    expect(heroSummary).toContain("control");
  });
});
