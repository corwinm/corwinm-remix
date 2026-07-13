import SocialLinks from "./social-links";
import { publicProfile } from "~/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-300/80 bg-slate-200/80 p-8 print:hidden dark:border-stone-800/80 dark:bg-stone-900">
      <div className="max-w-4xl m-auto px-4 flex flex-col text-center md:text-left">
        <span className="font-bold text-xl">{publicProfile.name}</span>
        <div className="my-8 md:my-0 md:relative">
          <SocialLinks />
        </div>
        <span className="md:mt-4">
          All rights reserved © {publicProfile.name} {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
