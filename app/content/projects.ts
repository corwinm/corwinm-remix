export interface ProjectLink {
  label: string;
  href: string;
}

export interface FeaturedProject {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
}

export interface ResumeProject {
  name: string;
  description: string;
  technologies: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "oil.code",
    category: "VS Code extension",
    description:
      "A VS Code extension inspired by oil.nvim that lets you edit your filesystem like a normal file so common file operations feel fast and keyboard friendly.",
    highlights: [
      "Built for developers who want an oil.nvim-style workflow without leaving VS Code.",
      "Supports create, move, rename, delete, preview, and directory navigation directly from the editor.",
    ],
    technologies: ["TypeScript", "VS Code API", "Vim workflows"],
    links: [
      {
        label: "Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=haphazarddev.oil-code",
      },
      {
        label: "GitHub",
        href: "https://github.com/corwinm/oil.code",
      },
    ],
  },
  {
    title: "Arashi",
    category: "CLI developer tool",
    description:
      "A Git worktree manager for meta-repositories that helps keep related repos aligned while working across a shared feature branch and workspace.",
    highlights: [
      "Designed for multi-repo development and spec-driven workflows.",
      "Includes commands for creating, switching, syncing, and setting up coordinated worktrees.",
    ],
    technologies: ["TypeScript", "Node.js", "Git", "CLI UX"],
    links: [
      {
        label: "Docs",
        href: "https://arashi.haphazard.dev",
      },
      {
        label: "Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=haphazarddev.arashi-vscode",
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/arashi",
      },
      {
        label: "GitHub",
        href: "https://github.com/corwinm/arashi",
      },
    ],
  },
  {
    title: "coding-agents-tmux",
    category: "tmux integration",
    description:
      "A tmux plugin and CLI for tracking, monitoring, and jumping between terminal coding-agent sessions, with support for busy, idle, and waiting states.",
    highlights: [
      "Makes it easier to manage multiple agent sessions from a single tmux workflow.",
      "Supports pi, opencode, and codex session discovery, switching, popups, and status summaries.",
    ],
    technologies: ["TypeScript", "tmux", "Terminal tooling", "Agent UX"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/corwinm/coding-agents-tmux",
      },
    ],
  },
  {
    title: "pi-extensions",
    category: "pi ecosystem",
    description:
      "A collection of installable pi extensions that explores small but useful workflow improvements for the pi coding agent experience.",
    highlights: [
      "Includes packages for asking user questions, copying code blocks, interactive review, and Vim-style quit commands.",
      "A place for experimenting with pragmatic extensions that make pi more ergonomic day to day.",
    ],
    technologies: ["TypeScript", "pi", "Extensions", "Developer experience"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HaphazardDev/pi-extensions",
      },
      {
        label: "pi.dev",
        href: "https://pi.dev",
      },
    ],
  },
];

export const resumeProjects: ResumeProject[] = featuredProjects.map(
  (project) => {
    const projectUrl =
      project.links.find((link) => link.label === "GitHub")?.href ??
      project.links[0]?.href ??
      "";

    return {
      name: `${project.title} - ${projectUrl.replace(/^https?:\/\//, "")}`,
      description: project.highlights[0] ?? project.description,
      technologies: project.technologies,
    };
  },
);
