import { buildRobotsTxt } from "~/lib/feeds";
import { type Route } from "./+types/robots[.]txt";

export function loader({ request }: Route.LoaderArgs) {
  const origin = new URL(request.url).origin;

  return new Response(buildRobotsTxt(origin), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "s-max-age=3600, stale-while-revalidate=86400, stale-if-error=604800",
    },
  });
}
