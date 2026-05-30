import { describe, expect, it } from "vitest";
import {
  buildMeta,
  createCanonicalUrl,
  defaultSiteDescription,
  getOriginFromMatches,
} from "./seo";

describe("seo helpers", () => {
  it("builds a complete default meta set with canonical and social tags", () => {
    const meta = buildMeta({
      origin: "https://corwinmarsh.com",
      pathname: "/blog",
      title: "Writing - Corwin W. Marsh",
      description: "Notes on software engineering and developer tooling.",
      image: "/profile-2025.jpg",
      type: "website",
    });

    expect(meta).toContainEqual({ title: "Writing - Corwin W. Marsh" });
    expect(meta).toContainEqual({
      name: "description",
      content: "Notes on software engineering and developer tooling.",
    });
    expect(meta).toContainEqual({
      property: "og:url",
      content: "https://corwinmarsh.com/blog",
    });
    expect(meta).toContainEqual({
      property: "og:image",
      content: "https://corwinmarsh.com/profile-2025.jpg",
    });
    expect(meta).toContainEqual({
      name: "twitter:site",
      content: "@CorwinMarsh",
    });
    expect(meta).toContainEqual({
      name: "twitter:card",
      content: "summary_large_image",
    });
  });

  it("normalizes canonical URLs without duplicate slashes", () => {
    expect(
      createCanonicalUrl("https://corwinmarsh.com/", "/blog/oil-code"),
    ).toBe("https://corwinmarsh.com/blog/oil-code");
  });

  it("finds the origin from root loader data", () => {
    expect(
      getOriginFromMatches([
        { id: "routes/blog", data: {} },
        { id: "root", data: { origin: "https://corwinmarsh.com" } },
      ]),
    ).toBe("https://corwinmarsh.com");
  });

  it("describes the site with specific positioning", () => {
    expect(defaultSiteDescription).toContain("software architect");
    expect(defaultSiteDescription).toContain("developer tooling");
  });
});
