import { motion } from "motion/react";
import LinkHeader from "./link-header";
import ProfileSection from "./profile-section";

interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "other";
}

const skills: Skill[] = [
  { name: "TypeScript", level: 5, category: "frontend" },
  { name: "React", level: 5, category: "frontend" },
  { name: "React Router 7", level: 4, category: "frontend" },
  { name: "Next.js", level: 4, category: "frontend" },
  { name: "TailwindCSS", level: 4, category: "frontend" },
  { name: "Tanstack React Query", level: 4, category: "frontend" },
  { name: "Single-Spa", level: 4, category: "frontend" },
  { name: "Vite", level: 4, category: "frontend" },
  { name: "Vercel", level: 3, category: "tools" },
  { name: "Playwright", level: 4, category: "frontend" },
  { name: "Angular", level: 4, category: "frontend" },
  { name: "Node.js", level: 5, category: "backend" },
  { name: "Python", level: 3, category: "backend" },
  { name: "Java", level: 3, category: "backend" },
  { name: "Go", level: 2, category: "backend" },
  { name: "C#", level: 3, category: "backend" },
  { name: "AWS", level: 3, category: "tools" },
  { name: "Terraform", level: 3, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "GitHub", level: 4, category: "tools" },
  { name: "Neovim", level: 3, category: "tools" },
  { name: "VSCode", level: 5, category: "tools" },
];

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools & Platforms" },
  { id: "other", label: "Other" },
];

export default function SkillsSection() {
  return (
    <ProfileSection>
      <LinkHeader id="skills">My Skills</LinkHeader>
      <div className="mt-16">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category.id,
          );

          if (categorySkills.length === 0) return null;

          return (
            <div key={category.id} className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{category.label}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white dark:bg-stone-700 rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getSkillLevelLabel(skill.level)}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-stone-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-red-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 20}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ProfileSection>
  );
}

function getSkillLevelLabel(level: number): string {
  switch (level) {
    case 1:
      return "Beginner";
    case 2:
      return "Basic";
    case 3:
      return "Intermediate";
    case 4:
      return "Advanced";
    case 5:
      return "Expert";
    default:
      return "";
  }
}
