import { getBlogPostSummaries } from "~/content/blog";
import { buildSitemapXml, type SitemapEntry } from "~/lib/feeds";
import { type Route } from "./+types/sitemap[.]xml";

export function loader({ request }: Route.LoaderArgs) {
  const posts = getBlogPostSummaries(
    import.meta.glob("./blog.*.mdx", { eager: true }),
  );
  const origin = new URL(request.url).origin;
  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "monthly", priority: "1.0" },
    { path: "/blog", changefreq: "weekly", priority: "0.8" },
    { path: "/resume", changefreq: "monthly", priority: "0.6" },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastmod: post.created,
      changefreq: "monthly" as const,
      priority: "0.7",
    })),
  ];

  return new Response(buildSitemapXml(origin, entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "s-max-age=3600, stale-while-revalidate=86400, stale-if-error=604800",
    },
  });
}
