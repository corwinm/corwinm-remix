import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { buildProfilePageStructuredData } from "./profile-structured-data";

describe("buildProfilePageStructuredData", () => {
  it("describes the homepage as Corwin's canonical public profile", () => {
    const structuredData = buildProfilePageStructuredData(
      "https://www.corwinmarsh.com/",
    );

    expect(structuredData).toEqual({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: "https://www.corwinmarsh.com/",
      mainEntity: {
        "@type": "Person",
        name: "Corwin W. Marsh",
        url: "https://www.corwinmarsh.com/",
        image: "https://www.corwinmarsh.com/profile-2025.jpg",
        jobTitle: "Senior Software Architect",
        worksFor: {
          "@type": "Organization",
          name: "Slalom",
          url: "https://www.slalom.com/",
        },
        homeLocation: {
          "@type": "Place",
          name: "Greater Seattle Area",
        },
        sameAs: [
          "https://www.linkedin.com/in/corwin-marsh/",
          "https://github.com/corwinm",
          "https://bsky.app/profile/corwinmarsh.com",
        ],
      },
    });
  });

  it("normalizes origins before building absolute URLs", () => {
    const structuredData = buildProfilePageStructuredData(
      "https://example.com/",
    );

    expect(structuredData.url).toBe("https://example.com/");
    expect(structuredData.mainEntity.image).toBe(
      "https://example.com/profile-2025.jpg",
    );
  });

  it("publishes the profile data on the homepage", () => {
    const routeSource = readFileSync(
      new URL("../routes/_index.tsx", import.meta.url),
      "utf8",
    );

    expect(routeSource).toContain("buildProfilePageStructuredData(origin)");
    expect(routeSource).toContain('type="application/ld+json"');
  });
});
