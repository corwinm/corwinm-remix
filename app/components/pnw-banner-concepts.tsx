import { Link } from "react-router";
import { pnwBannerImage } from "./contact-section";

export { pnwBannerImage };

export function ConceptPreviewLinks() {
  return (
    <nav className="mb-8 rounded-2xl border border-slate-200/80 bg-white/85 p-4 text-sm shadow-lg shadow-slate-900/5 backdrop-blur print:hidden dark:border-white/10 dark:bg-stone-950/80 dark:shadow-black/30">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Link
          to="/banner-concepts"
          viewTransition
          className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          ← Selected banner direction
        </Link>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/banner-concepts/contact"
            viewTransition
            className="rounded-full bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-500 dark:bg-indigo-400 dark:text-slate-950 dark:hover:bg-indigo-300"
          >
            Full homepage preview
          </Link>
          <Link
            to="/"
            viewTransition
            className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
          >
            Live homepage route
          </Link>
        </div>
      </div>
    </nav>
  );
}
