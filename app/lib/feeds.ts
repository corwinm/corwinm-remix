import { type BlogPostSummary } from "~/content/blog";
import { createCanonicalUrl, defaultSiteDescription, siteName } from "./seo";

export interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildSitemapXml(origin: string, entries: SitemapEntry[]) {
  const urls = entries
    .map((entry) => {
      const lines = [
        "  <url>",
        `    <loc>${escapeXml(createCanonicalUrl(origin, entry.path))}</loc>`,
      ];

      if (entry.lastmod) lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
      if (entry.changefreq) {
        lines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
      }
      if (entry.priority)
        lines.push(`    <priority>${entry.priority}</priority>`);

      lines.push("  </url>");
      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildRssFeed(origin: string, posts: BlogPostSummary[]) {
  const items = posts
    .map((post) => {
      const postUrl = createCanonicalUrl(origin, `/blog/${post.slug}`);
      const pubDate = post.created
        ? new Date(`${post.created}T00:00:00.000Z`).toUTCString()
        : undefined;

      return [
        "    <item>",
        `      <title>${escapeXml(post.title ?? post.slug)}</title>`,
        `      <link>${escapeXml(postUrl)}</link>`,
        `      <guid>${escapeXml(postUrl)}</guid>`,
        post.description
          ? `      <description>${escapeXml(post.description)}</description>`
          : undefined,
        pubDate ? `      <pubDate>${pubDate}</pubDate>` : undefined,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>${escapeXml(siteName)} - Blog</title>\n    <link>${escapeXml(createCanonicalUrl(origin, "/blog"))}</link>\n    <description>${escapeXml(defaultSiteDescription)}</description>\n${items}\n  </channel>\n</rss>\n`;
}

export function buildRobotsTxt(origin: string) {
  return `User-agent: *\nAllow: /\nSitemap: ${createCanonicalUrl(origin, "/sitemap.xml")}\n`;
}
