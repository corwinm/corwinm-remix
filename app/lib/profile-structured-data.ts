import { publicProfile } from "~/content/profile";

function normalizeOrigin(origin: string) {
  return `${origin.replace(/\/$/, "")}/`;
}

export function buildProfilePageStructuredData(origin: string) {
  const canonicalUrl = normalizeOrigin(origin);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: canonicalUrl,
    mainEntity: {
      "@type": "Person",
      name: publicProfile.name,
      url: canonicalUrl,
      image: new URL(publicProfile.imagePath, canonicalUrl).href,
      jobTitle: publicProfile.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: publicProfile.employer.name,
        url: publicProfile.employer.url,
      },
      homeLocation: {
        "@type": "Place",
        name: publicProfile.location,
      },
      sameAs: [
        publicProfile.links.linkedin,
        publicProfile.links.github,
        publicProfile.links.bluesky,
      ],
    },
  } as const;
}
