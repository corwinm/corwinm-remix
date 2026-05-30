import { buildRssFeed } from "~/lib/feeds";
import { getBlogPostSummaries } from "~/content/blog";
import { type Route } from "./+types/rss[.]xml";

export function loader({ request }: Route.LoaderArgs) {
  const posts = import.meta.glob("./blog.*.mdx", { eager: true });
  const origin = new URL(request.url).origin;

  return new Response(buildRssFeed(origin, getBlogPostSummaries(posts)), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "s-max-age=3600, stale-while-revalidate=86400, stale-if-error=604800",
    },
  });
}
