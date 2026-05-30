import { describe, expect, it } from "vitest";
import {
  buildRobotsTxt,
  buildRssFeed,
  buildSitemapXml,
  type SitemapEntry,
} from "./feeds";

const posts = [
  {
    slug: "oil-code",
    created: "2025-07-28",
    displayDate: "July 28, 2025",
    title: "The what, why, and how of Oil.code",
    description: "The what, why, and how of my journey creating oil.code.",
    img: "https://example.com/oil.jpg",
  },
];

describe("feed helpers", () => {
  it("builds a sitemap that includes public pages and blog posts", () => {
    const entries: SitemapEntry[] = [
      { path: "/", priority: "1.0" },
      { path: "/blog", priority: "0.8" },
      { path: "/blog/oil-code", lastmod: "2025-07-28", priority: "0.7" },
    ];

    const xml = buildSitemapXml("https://corwinmarsh.com", entries);

    expect(xml).toContain("<loc>https://corwinmarsh.com/</loc>");
    expect(xml).toContain("<loc>https://corwinmarsh.com/blog/oil-code</loc>");
    expect(xml).toContain("<lastmod>2025-07-28</lastmod>");
    expect(xml).not.toContain("wishlist");
  });

  it("builds an RSS feed from blog summaries", () => {
    const xml = buildRssFeed("https://corwinmarsh.com", posts);

    expect(xml).toContain("<channel>");
    expect(xml).toContain("<title>Corwin W. Marsh - Writing</title>");
    expect(xml).toContain("<link>https://corwinmarsh.com/blog/oil-code</link>");
    expect(xml).toContain(
      "The what, why, and how of my journey creating oil.code.",
    );
  });

  it("points robots.txt to the sitemap", () => {
    expect(buildRobotsTxt("https://corwinmarsh.com")).toBe(
      "User-agent: *\nAllow: /\nSitemap: https://corwinmarsh.com/sitemap.xml\n",
    );
  });
});
