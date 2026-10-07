import { MapPin, Briefcase } from "lucide-react";
import { publicProfile } from "~/content/profile";
import LinkHeader from "./link-header";
import { ProfileLink } from "./profile-link";
import ProfileSection from "./profile-section";

export default function AboutSection() {
  return (
    <ProfileSection>
      <LinkHeader id="about">A little about me:</LinkHeader>
      <div className="mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-2xl">
            Hi, I’m{" "}
            <span className="text-indigo-400 font-semibold">
              {publicProfile.firstName}
            </span>
            .
          </p>
          <p className="my-2 text-lg">
            I work at{" "}
            <ProfileLink href={publicProfile.employer.url}>
              {publicProfile.employer.name}
            </ProfileLink>{" "}
            in {publicProfile.city} as a {publicProfile.jobTitle}.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            I focus on developer experience, frontend platforms, people
            leadership, and AI-assisted engineering workflows that help teams
            ship maintainable software without losing control of the work.
          </p>
          <div className="flex items-center justify-center gap-4 my-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{publicProfile.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>Since 2014</span>
            </div>
          </div>
        </div>
      </div>
    </ProfileSection>
  );
}
