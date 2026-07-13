import { publicProfile } from "~/content/profile";

export const siteName = publicProfile.name;
export const siteAuthor = publicProfile.name;
export const twitterHandle = "@CorwinMarsh";
export const defaultSiteDescription =
  "Corwin Marsh is a software architect in the Greater Seattle Area writing about frontend engineering, developer tooling, and AI-assisted software workflows.";
export const defaultOgImage = publicProfile.imagePath;

export type MetaDescriptor =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { tagName: "link"; rel: string; href: string };

export interface BuildMetaOptions {
  origin?: string;
  pathname?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageType?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
}

type RouteMatch = {
  id: string;
  data?: unknown;
};

export function getOriginFromMatches(
  matches: readonly (RouteMatch | undefined)[],
) {
  const rootData = matches.find((match) => match?.id === "root")?.data;

  if (
    rootData &&
    typeof rootData === "object" &&
    "origin" in rootData &&
    typeof rootData.origin === "string"
  ) {
    return rootData.origin;
  }

  return undefined;
}

function absoluteUrl(origin: string | undefined, value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const safeOrigin = origin?.replace(/\/$/, "") ?? "";
  const safePath = value.startsWith("/") ? value : `/${value}`;
  return `${safeOrigin}${safePath}`;
}

export function createCanonicalUrl(origin: string | undefined, pathname = "/") {
  const safeOrigin = origin?.replace(/\/$/, "") ?? "";
  const safePath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${safeOrigin}${safePath}`;
}

export function buildMeta({
  origin,
  pathname = "/",
  title = siteName,
  description = defaultSiteDescription,
  image = defaultOgImage,
  imageAlt,
  imageWidth,
  imageHeight,
  imageType,
  type = "website",
  noIndex = false,
  publishedTime,
}: BuildMetaOptions = {}): MetaDescriptor[] {
  const canonicalUrl = createCanonicalUrl(origin, pathname);
  const imageUrl = absoluteUrl(origin, image);
  const meta: MetaDescriptor[] = [
    { title },
    { name: "description", content: description },
    { name: "author", content: siteAuthor },
    { property: "og:site_name", content: siteName },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:image", content: imageUrl },
    { property: "og:url", content: canonicalUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: twitterHandle },
    { name: "twitter:creator", content: twitterHandle },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];

  if (imageWidth) {
    meta.push({ property: "og:image:width", content: String(imageWidth) });
  }

  if (imageHeight) {
    meta.push({ property: "og:image:height", content: String(imageHeight) });
  }

  if (imageType) {
    meta.push({ property: "og:image:type", content: imageType });
  }

  if (imageAlt) {
    meta.push({ property: "og:image:alt", content: imageAlt });
    meta.push({ name: "twitter:image:alt", content: imageAlt });
  }

  if (type === "article" && publishedTime) {
    meta.push({ property: "article:published_time", content: publishedTime });
  }

  if (noIndex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  return meta;
}
