import {
  type CareerRole,
  currentCareerRole,
  previousCareerRoles,
} from "~/content/career";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

function Company({ role }: { role: CareerRole }) {
  if (role.company.url) {
    return (
      <ProfileLink href={role.company.url}>{role.company.name}</ProfileLink>
    );
  }

  return <span>{role.company.name}</span>;
}

function FeaturedExperienceCard({ role }: { role: CareerRole }) {
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

      <p className="mt-6 text-slate-700 dark:text-slate-300">
        {role.homepage.summary}
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Selected impact
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-3 text-slate-600 dark:text-slate-400">
          {role.homepage.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ExperienceCard({ role }: { role: CareerRole }) {
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

      <p className="mt-4 text-slate-700 dark:text-slate-300">
        {role.homepage.summary}
      </p>

      <ul className="mt-4 ml-5 list-disc space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {role.homepage.highlights.map((highlight) => (
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
        <FeaturedExperienceCard role={currentCareerRole} />

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Previous roles
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {previousCareerRoles.map((role) => (
              <ExperienceCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </div>
    </ProfileSection>
  );
}
