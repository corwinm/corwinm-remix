import { Link } from "react-router";
import { getBlogPostSummaries } from "~/content/blog";
import { buildMeta, getOriginFromMatches } from "~/lib/seo";
import { type Route } from "./+types/blog._index";

export const meta: Route.MetaFunction = ({ matches }) => [
  ...buildMeta({
    origin: getOriginFromMatches(matches),
    pathname: "/blog",
    title: "Writing - Corwin W. Marsh",
    description:
      "Technical writing from Corwin Marsh on software engineering, developer tooling, and AI-assisted workflows.",
  }),
];

export async function loader() {
  return getBlogPostSummaries(
    import.meta.glob("./blog.*.mdx", { eager: true }),
  );
}

export default function Index({ loaderData }: Route.ComponentProps) {
  return (
    <div className="mx-auto py-16">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Notes on software engineering, developer tooling, and the occasional
          experiment that deserves a longer explanation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-12">
        {loaderData.map((post) => (
          <Link
            key={post.slug}
            to={post.slug}
            viewTransition
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-blue-600/50 dark:hover:shadow-blue-400/50 hover:shadow-2xl transition duration-300"
          >
            <div className="p-6">
              <h2
                className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400"
                style={{
                  viewTransitionName: `blog-title-${post.slug.replaceAll("./", "")}`,
                }}
              >
                {post.title}
              </h2>
            </div>
            {post.img ? (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title ?? ""}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-105 transition duration-500"
                  style={{
                    viewTransitionName: `blog-image-${post.slug.replaceAll("./", "")}`,
                  }}
                />
              </div>
            ) : (
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900 dark:to-indigo-950" />
            )}
            <div className="flex-1 p-6">
              <div className="flex flex-col h-full">
                {post.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {post.description}
                  </p>
                )}
                <div className="mt-auto">
                  {post.created && (
                    <time
                      dateTime={post.created}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      {post.displayDate}
                    </time>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
