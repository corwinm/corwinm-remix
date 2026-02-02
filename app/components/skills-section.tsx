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
  { name: "Fly.io", level: 3, category: "tools" },
  { name: "Terraform", level: 3, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "GitHub", level: 4, category: "tools" },
  { name: "Neovim", level: 3, category: "tools" },
  { name: "OpenCode", level: 4, category: "tools" },
  { name: "GitHub Copilot", level: 4, category: "tools" },
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
            <div key={category.id} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">{category.label}</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CircularProgress skill={skill} />
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

function CircularProgress({ skill }: { skill: Skill }) {
  const percentage = skill.level * 20;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const size = 128; // w-32 h-32
  const center = size / 2;

  return (
    <div className="relative w-32 h-32">
      <svg className="transform -rotate-90 w-32 h-32">
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-gray-200 dark:text-stone-700"
        />
        {/* Progress circle */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center text with skill name and level */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
        <motion.h4
          className="text-xs font-semibold text-center leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {skill.name}
        </motion.h4>
        <motion.span
          className="text-[10px] text-gray-600 dark:text-gray-400 text-center mt-0.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {getSkillLevelLabel(skill.level)}
        </motion.span>
      </div>
    </div>
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
