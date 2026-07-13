import { describe, expect, it } from "vitest";
import { publicProfile } from "./profile";

describe("publicProfile", () => {
  it("keeps Corwin's public identity and career facts aligned", () => {
    expect(publicProfile).toMatchObject({
      name: "Corwin W. Marsh",
      firstName: "Corwin",
      jobTitle: "Senior Software Architect",
      city: "Seattle",
      location: "Greater Seattle Area",
      employer: {
        name: "Slalom",
        url: "https://www.slalom.com/",
      },
      imagePath: "/profile-2025.jpg",
      displayImagePath: "/profile-2025-448.jpg",
    });
  });

  it("keeps canonical profile and resume links in one place", () => {
    expect(publicProfile.links).toEqual({
      linkedin: "https://www.linkedin.com/in/corwin-marsh/",
      github: "https://github.com/corwinm",
      bluesky: "https://bsky.app/profile/corwinmarsh.com",
      resume: "/resume.pdf",
    });
  });
});
