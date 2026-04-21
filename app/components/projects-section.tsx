import { ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
}

const featuredProjects: Project[] = [
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

export default function ProjectsSection() {
  return (
    <ProfileSection>
      <LinkHeader id="projects">Featured projects</LinkHeader>
      <p className="mx-auto mt-6 max-w-3xl text-center text-slate-600 dark:text-slate-400">
        A few of the developer tools and experiments I&apos;ve been building.
      </p>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
              </div>
              <FolderGit2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
            </div>

            <p className="mt-4 text-slate-700 dark:text-slate-300">
              {project.description}
            </p>

            <ul className="mt-4 ml-5 list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {project.links.map((link) => (
                <ProfileLink href={link.href} key={link.href}>
                  <span className="inline-flex items-center gap-1">
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </ProfileLink>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </ProfileSection>
  );
}
