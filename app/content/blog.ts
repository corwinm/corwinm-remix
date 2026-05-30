export type MdxFrontmatterMeta = {
  title?: string;
  name?: string;
  content?: string;
};

export type BlogFrontmatter = {
  created?: string;
  meta: MdxFrontmatterMeta[];
};

export type BlogMdxModule = {
  frontmatter: BlogFrontmatter;
};

export type BlogPostSummary = {
  slug: string;
  created?: string;
  displayDate?: string;
  title?: string;
  description?: string;
  img?: string;
};

function getMetaTitle(meta: MdxFrontmatterMeta[]) {
  return meta.find((item) => item.title)?.title;
}

function getMetaContent(meta: MdxFrontmatterMeta[], name: string) {
  return meta.find((item) => item.name === name)?.content;
}

export function formatDisplayDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00.000Z`));
}

export function createBlogPostSummary(
  fileName: string,
  frontmatter: BlogFrontmatter,
): BlogPostSummary {
  const slug = fileName.replace(/\.mdx?$/, "").replace(/\.\/blog\./, "");

  return {
    slug,
    created: frontmatter.created,
    displayDate: frontmatter.created
      ? formatDisplayDate(frontmatter.created)
      : undefined,
    title: getMetaTitle(frontmatter.meta),
    description: getMetaContent(frontmatter.meta, "description"),
    img: getMetaContent(frontmatter.meta, "og:image"),
  };
}

export function getBlogPostSummaries(
  posts: Record<string, unknown>,
): BlogPostSummary[] {
  return Object.entries(posts)
    .map(([fileName, mod]) =>
      createBlogPostSummary(fileName, (mod as BlogMdxModule).frontmatter),
    )
    .sort((a, b) => (b.created ?? "").localeCompare(a.created ?? ""));
}
