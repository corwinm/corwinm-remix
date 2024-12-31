import { Link, useLoaderData } from "react-router";

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
  return postEntries.map(([fileName, mod]) =>
      postFromModule(fileName, mod as BlogMdxModule),
  );
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
