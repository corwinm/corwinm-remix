import { json } from "@remix-run/node"; // or cloudflare/deno
import { Link, useLoaderData } from "@remix-run/react";
import * as introduction from "./blog.introduction.md";
import * as yearInReview2023 from "./blog.2023-year-in-review.md";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, "").replace(/blog\./, ""),
    created: mod.attributes.created,
    title: mod.attributes.meta.find((meta: any) => meta.title)?.title,
    description: mod.attributes.meta.find(
      (meta: any) => meta.name === "description",
    )?.content,
    img: mod.attributes.meta.find((meta: any) => meta.name === "og:image")
      ?.content,
  };
}

export async function loader() {
  return json([postFromModule(introduction), postFromModule(yearInReview2023)]);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <ul className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <li key={post.slug} className="max-w-xs">
          <Link to={post.slug} className="flex flex-col h-full">
            {post.img && <img src={post.img} alt="" className="object-cover" />}
            <span className="text-lg my-2">{post.title}</span>
            {post.description ? (
              <span className="text-gray-500 dark:text-gray-400">
                {post.description}
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
