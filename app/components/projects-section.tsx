import { ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";
import { featuredProjects } from "~/content/projects";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

export default function ProjectsSection() {
  return (
    <ProfileSection>
      <LinkHeader id="projects">Featured projects</LinkHeader>
      <p className="mx-auto mt-6 max-w-3xl text-center text-slate-600 dark:text-slate-400">
        A few of the developer tools and experiments I&apos;ve been building
        around agent workflows, multi-repo coordination, and lower-friction
        product teams.
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
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
              </div>
              <FolderGit2 className="mt-1 h-5 w-5 shrink-0 text-indigo-400" />
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
                  className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200"
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
