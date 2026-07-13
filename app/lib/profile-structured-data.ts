const profile = {
  name: "Corwin W. Marsh",
  imagePath: "/profile-2025.jpg",
  jobTitle: "Senior Software Architect",
  location: "Greater Seattle Area",
  employer: {
    name: "Slalom",
    url: "https://www.slalom.com/",
  },
  sameAs: [
    "https://www.linkedin.com/in/corwin-marsh/",
    "https://github.com/corwinm",
    "https://bsky.app/profile/corwinmarsh.com",
  ],
} as const;

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
      name: profile.name,
      url: canonicalUrl,
      image: new URL(profile.imagePath, canonicalUrl).href,
      jobTitle: profile.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: profile.employer.name,
        url: profile.employer.url,
      },
      homeLocation: {
        "@type": "Place",
        name: profile.location,
      },
      sameAs: [...profile.sameAs],
    },
  } as const;
}
