import { describe, expect, it } from "vitest";
import { buildBlogArticleMeta } from "./blog-article";

describe("blog article metadata", () => {
  it("builds complete article and social-image metadata from the shared article model", () => {
    const meta = buildBlogArticleMeta({
      origin: "https://corwinmarsh.com",
      pathname: "/blog/example",
      frontmatter: {
        created: "2025-07-28",
        meta: [
          { title: "Example Post" },
          { name: "description", content: "A useful example." },
          { name: "og:image", content: "/blog-example.jpg" },
        ],
        image: {
          src: "/blog-example.jpg",
          alt: "Example title card",
          width: 1200,
          height: 630,
          socialType: "image/jpeg",
        },
      },
    });

    expect(meta).toEqual(
      expect.arrayContaining([
        { title: "Example Post" },
        { name: "description", content: "A useful example." },
        { property: "og:type", content: "article" },
        {
          property: "og:image",
          content: "https://corwinmarsh.com/blog-example.jpg",
        },
        { property: "og:image:alt", content: "Example title card" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/jpeg" },
        { name: "twitter:image:alt", content: "Example title card" },
        { property: "article:published_time", content: "2025-07-28" },
      ]),
    );
  });
});
