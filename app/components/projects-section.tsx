import { motion } from "motion/react";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

const featuredProjects: Project[] = [
  {
    title: "Personal Website",
    description:
      "My personal website built with Remix, React, and TailwindCSS. Features a responsive design, dark mode support, and animated components.",
    technologies: ["Remix", "React", "TypeScript", "TailwindCSS", "Motion One"],
    imageUrl: "/projects/personal-site.jpg",
    repoUrl: "https://github.com/corwinm/corwinm-remix",
  },
  {
    title: "Project Two",
    description:
      "A sample project description. Replace with your actual project details.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/projects/placeholder.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "Another sample project description. Replace with your actual project details.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    imageUrl: "/projects/placeholder.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-three",
  },
];

export default function ProjectsSection() {
  return (
    <ProfileSection>
      <LinkHeader id="projects">Featured Projects</LinkHeader>
      <div className="mt-16 grid gap-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="grid md:grid-cols-2 gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <ProfileLink href={project.liveUrl}>View Live</ProfileLink>
                )}
                {project.repoUrl && (
                  <ProfileLink href={project.repoUrl}>View Code</ProfileLink>
                )}
              </div>
            </div>
            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ProfileSection>
  );
}
