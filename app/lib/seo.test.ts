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
      title: "Blog - Corwin W. Marsh",
      description: "Blog posts on software engineering and developer tooling.",
      image: "/profile-2025.jpg",
      imageAlt: "Corwin W. Marsh profile photo",
      imageWidth: 1200,
      imageHeight: 630,
      imageType: "image/jpeg",
      type: "website",
    });

    expect(meta).toContainEqual({ title: "Blog - Corwin W. Marsh" });
    expect(meta).toContainEqual({
      name: "description",
      content: "Blog posts on software engineering and developer tooling.",
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
    expect(meta).toContainEqual({
      property: "og:image:width",
      content: "1200",
    });
    expect(meta).toContainEqual({
      property: "og:image:height",
      content: "630",
    });
    expect(meta).toContainEqual({
      property: "og:image:type",
      content: "image/jpeg",
    });
    expect(meta).toContainEqual({
      property: "og:image:alt",
      content: "Corwin W. Marsh profile photo",
    });
    expect(meta).toContainEqual({
      name: "twitter:image:alt",
      content: "Corwin W. Marsh profile photo",
    });
  });

  it("uses the dedicated social card and its dimensions by default", () => {
    const meta = buildMeta({ origin: "https://corwinmarsh.com" });

    expect(meta).toContainEqual({
      property: "og:image",
      content: "https://corwinmarsh.com/corwin-marsh-social.jpg",
    });
    expect(meta).toContainEqual({
      name: "twitter:image",
      content: "https://corwinmarsh.com/corwin-marsh-social.jpg",
    });
    expect(meta).toContainEqual({
      property: "og:image:width",
      content: "1200",
    });
    expect(meta).toContainEqual({
      property: "og:image:height",
      content: "630",
    });
    expect(meta).toContainEqual({
      property: "og:image:type",
      content: "image/jpeg",
    });
    expect(meta).toContainEqual({
      property: "og:image:alt",
      content:
        "Corwin W. Marsh, Software Architect — Frontend architecture, Developer tooling, and AI-assisted workflows — against a starry Pacific Northwest mountain landscape",
    });
    expect(meta).toContainEqual({
      name: "twitter:image:alt",
      content:
        "Corwin W. Marsh, Software Architect — Frontend architecture, Developer tooling, and AI-assisted workflows — against a starry Pacific Northwest mountain landscape",
    });
  });

  it("does not apply default dimensions or alt text to custom images", () => {
    const meta = buildMeta({
      origin: "https://corwinmarsh.com",
      image: "https://example.com/custom.jpg",
    });

    expect(meta).toContainEqual({
      property: "og:image",
      content: "https://example.com/custom.jpg",
    });
    expect(meta).not.toContainEqual(
      expect.objectContaining({ property: "og:image:width" }),
    );
    expect(meta).not.toContainEqual(
      expect.objectContaining({ property: "og:image:height" }),
    );
    expect(meta).not.toContainEqual(
      expect.objectContaining({ property: "og:image:alt" }),
    );
    expect(meta).not.toContainEqual(
      expect.objectContaining({ property: "og:image:type" }),
    );
    expect(meta).not.toContainEqual(
      expect.objectContaining({ name: "twitter:image:alt" }),
    );
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
