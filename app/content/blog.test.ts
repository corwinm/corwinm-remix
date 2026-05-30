import { describe, expect, it } from "vitest";
import {
  createBlogPostSummary,
  formatDisplayDate,
  getBlogPostSummaries,
} from "./blog";

describe("blog content helpers", () => {
  it("creates a summary from normalized frontmatter", () => {
    const post = createBlogPostSummary("./blog.example.mdx", {
      created: "2025-07-28",
      meta: [
        { title: "Example Post" },
        { name: "description", content: "A useful example." },
        { name: "og:image", content: "https://example.com/image.jpg" },
      ],
    });

    expect(post).toMatchObject({
      slug: "example",
      created: "2025-07-28",
      displayDate: "July 28, 2025",
      title: "Example Post",
      description: "A useful example.",
      img: "https://example.com/image.jpg",
    });
  });

  it("sorts posts newest first by ISO date", () => {
    const posts = getBlogPostSummaries({
      "./blog.old.mdx": {
        frontmatter: { created: "2024-01-01", meta: [{ title: "Old" }] },
      },
      "./blog.new.mdx": {
        frontmatter: { created: "2025-07-28", meta: [{ title: "New" }] },
      },
    });

    expect(posts.map((post) => post.slug)).toEqual(["new", "old"]);
  });

  it("formats ISO dates for display", () => {
    expect(formatDisplayDate("2024-01-01")).toBe("January 1, 2024");
  });
});
