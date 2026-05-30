import { Link } from "react-router";
import { type Route } from "./+types/blog._index";

export const meta: Route.MetaFunction = () => [
  { title: "Writing - Corwin W. Marsh" },
  {
    name: "description",
    content:
      "Technical writing from Corwin Marsh on software engineering, developer tooling, and AI-assisted workflows.",
  },
  { property: "og:title", content: "Writing - Corwin W. Marsh" },
  {
    property: "og:description",
    content:
      "Technical writing from Corwin Marsh on software engineering, developer tooling, and AI-assisted workflows.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
];

type MdxFrontmatterMeta = { title?: string; name?: string; content?: string };

type BlogMdxModule = {
  frontmatter: {
    created?: string;
    meta: MdxFrontmatterMeta[];
  };
};

function postFromModule(fileName: string, mod: BlogMdxModule) {
  return {
    slug: fileName.replace(/\.mdx?$/, "").replace(/blog\./, ""),
    created: mod.frontmatter.created,
    title: mod.frontmatter.meta.find((meta: MdxFrontmatterMeta) => meta.title)
      ?.title,
    description: mod.frontmatter.meta.find(
      (meta: MdxFrontmatterMeta) => meta.name === "description",
    )?.content,
    img: mod.frontmatter.meta.find(
      (meta: MdxFrontmatterMeta) => meta.name === "og:image",
    )?.content,
  };
}

export async function loader() {
  const posts = import.meta.glob("./blog.*.mdx", { eager: true });
  const postEntries = Object.entries(posts);
  return postEntries
    .map(([fileName, mod]) => postFromModule(fileName, mod as BlogMdxModule))
    .sort((a, b) => {
      if (a.created && b.created) {
        const dateA = new Date(a.created.replace(/(\d+)(st|nd|rd|th)/, "$1"));
        const dateB = new Date(b.created.replace(/(\d+)(st|nd|rd|th)/, "$1"));
        return dateB.getTime() - dateA.getTime();
      }
      return 0;
    });
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
                  alt=""
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
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {post.created}
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
