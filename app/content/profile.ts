export const publicProfile = {
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
  socialImage: {
    path: "/corwin-marsh-social.jpg",
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: "Corwin W. Marsh, Software Architect — Frontend architecture, Developer tooling, and AI-assisted workflows — against a starry Pacific Northwest mountain landscape",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/corwin-marsh/",
    github: "https://github.com/corwinm",
    bluesky: "https://bsky.app/profile/corwinmarsh.com",
    resume: "/resume.pdf",
  },
} as const;
