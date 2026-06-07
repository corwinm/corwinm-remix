import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

interface Role {
  title: string;
  company: string;
  companyUrl?: string;
  duration: string;
  summary: string;
  highlights: string[];
}

const currentRole: Role = {
  title: "Sr. Software Architect",
  company: "Slalom",
  companyUrl: "https://www.slalom.com/",
  duration: "Aug 2015 - Present",
  summary:
    "Partner with clients and engineering teams to turn ambiguous requirements into production-ready software, with a focus on frontend architecture, developer experience, people leadership, maintainability, and confident delivery.",
  highlights: [
    "Manage 4 direct reports through regular 1:1s, career guidance, technical mentorship, and professional-development support.",
    "Led classes and coaching sessions that helped engineers adopt AI tools and workflows, including context engineering, agentic development, and spec-driven development.",
    "Helped teams define practical guardrails for AI-assisted delivery, including clearer context, smaller reviewable changes, and human-in-the-loop workflows.",
    "Led delivery across web, mobile, and serverless projects for clients in multiple industries.",
    "Architected React design system foundations for a program with more than 100 team members.",
    "Built shared OAuth2 login experiences and client libraries used across multiple applications.",
    "Implemented a React Single-Spa microfrontend for administration workflows spanning multiple product teams.",
  ],
};

const previousRoles: Role[] = [
  {
    title: "Jr. Software Engineer",
    company: "Intellicheck Mobilisa",
    duration: "Jul 2014 - Aug 2015",
    summary:
      "Contributed to identity verification products across internal tools, web applications, backend services, and mobile integrations.",
    highlights: [
      "Delivered bug fixes and features for internal C# applications.",
      "Improved an ASP.NET management tool used in military access control workflows.",
      "Strengthened backend services and iOS integrations for identity verification products.",
    ],
  },
  {
    title: "General Manager",
    company: "Domino's Pizza",
    duration: "Oct 2009 - Jun 2014",
    summary:
      "Built a foundation in leadership, hiring, and operations while learning how useful software can be for everyday teams.",
    highlights: [
      "Led teams, hired staff, and managed day-to-day store operations.",
      "Built Excel and VBA tools for food ordering and staffing that reduced waste and improved profitability.",
      "Shared those tools across the region, helping spark my transition into software engineering.",
    ],
  },
];

function Company({ role }: { role: Role }) {
  if (role.companyUrl) {
    return <ProfileLink href={role.companyUrl}>{role.company}</ProfileLink>;
  }

  return <span>{role.company}</span>;
}

function FeaturedExperienceCard({ role }: { role: Role }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
            Current role
          </p>
          <h3 className="mt-2 text-3xl font-bold">{role.title}</h3>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
            <Company role={role} />
          </p>
        </div>
        <p className="shrink-0 rounded-full bg-slate-100 px-4 py-2 text-sm italic text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {role.duration}
        </p>
      </div>

      <p className="mt-6 text-slate-700 dark:text-slate-300">{role.summary}</p>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Selected impact
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-3 text-slate-600 dark:text-slate-400">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ExperienceCard({ role }: { role: Role }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/30">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{role.title}</h3>
          <p className="mt-1 text-slate-700 dark:text-slate-300">
            <Company role={role} />
          </p>
        </div>
        <p className="shrink-0 text-sm italic text-slate-500 dark:text-slate-400">
          {role.duration}
        </p>
      </div>

      <p className="mt-4 text-slate-700 dark:text-slate-300">{role.summary}</p>

      <ul className="mt-4 ml-5 list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {role.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <ProfileSection>
      <LinkHeader id="experience">My experience:</LinkHeader>
      <p className="mx-auto mt-6 max-w-3xl text-center text-slate-600 dark:text-slate-400">
        A snapshot of the roles that shaped how I build products, lead teams,
        and tame developer-workflow chaos.
      </p>

      <div className="mt-16 space-y-8">
        <FeaturedExperienceCard role={currentRole} />

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Previous roles
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {previousRoles.map((role) => (
              <ExperienceCard
                key={`${role.company}-${role.title}`}
                role={role}
              />
            ))}
          </div>
        </div>
      </div>
    </ProfileSection>
  );
}
