import { type ReactNode } from "react";
import {
  formatDisplayDate,
  type BlogArticleImage,
  type BlogFrontmatter,
} from "~/content/blog";
import { buildMeta, type MetaDescriptor } from "~/lib/seo";

type BlogArticleFrontmatter = BlogFrontmatter & { image: BlogArticleImage };

type BuildBlogArticleMetaOptions = {
  origin?: string;
  pathname: string;
  frontmatter: BlogArticleFrontmatter;
};

type BlogArticleProps = {
  slug: string;
  frontmatter: BlogArticleFrontmatter;
  showDescription?: boolean;
  children: ReactNode;
};

function getMetaTitle(frontmatter: BlogFrontmatter) {
  return frontmatter.meta.find((item) => item.title)?.title;
}

function getMetaContent(frontmatter: BlogFrontmatter, name: string) {
  return frontmatter.meta.find((item) => item.name === name)?.content;
}

export function buildBlogArticleMeta({
  origin,
  pathname,
  frontmatter,
}: BuildBlogArticleMetaOptions): MetaDescriptor[] {
  const { image } = frontmatter;

  return buildMeta({
    origin,
    pathname,
    title: getMetaTitle(frontmatter),
    description: getMetaContent(frontmatter, "description"),
    image: getMetaContent(frontmatter, "og:image"),
    imageAlt: image.alt,
    imageWidth: image.width,
    imageHeight: image.height,
    imageType: image.socialType,
    type: "article",
    publishedTime: frontmatter.created,
  });
}

export function BlogArticle({
  slug,
  frontmatter,
  showDescription = false,
  children,
}: BlogArticleProps) {
  const title = getMetaTitle(frontmatter);
  const description = getMetaContent(frontmatter, "description");
  const { image } = frontmatter;

  return (
    <>
      <header className="py-12">
        <h1
          className="leading-relaxed text-3xl"
          style={{ viewTransitionName: `blog-title-${slug}` }}
        >
          {title}
        </h1>
        {showDescription && description && (
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">
            {description}
          </p>
        )}
        {frontmatter.created && (
          <time
            dateTime={frontmatter.created}
            className="leading-normal text-gray-600 dark:text-gray-300"
          >
            {formatDisplayDate(frontmatter.created)}
          </time>
        )}
      </header>

      <img
        src={image.src}
        alt={image.alt}
        title={image.title}
        width={image.width}
        height={image.height}
        className="h-auto max-w-full"
        style={{ viewTransitionName: `blog-image-${slug}` }}
      />

      <div className="max-w-3xl *:my-8 [&>p]:text-lg [&>p]:leading-relaxed [&>p>a]:text-blue-500 [&>h2]:text-2xl [&>h4]:text-xl [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:text-gray-600 dark:[&>blockquote]:text-gray-300 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:text-lg [&>ul]:leading-relaxed [&>pre]:max-w-full [&>pre]:overflow-x-auto [&>pre]:overflow-y-hidden [&>pre]:rounded-lg [&>pre]:border [&>pre]:border-gray-800 [&>pre]:bg-gray-950 [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:leading-relaxed [&>pre]:text-gray-100 [&>pre]:shadow-lg [&>pre>code]:block [&>pre>code]:w-max [&>pre>code]:whitespace-pre [&>img]:h-auto [&>img]:max-w-full">
        {children}
      </div>
    </>
  );
}
