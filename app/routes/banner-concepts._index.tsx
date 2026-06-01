import { Link } from "react-router";
import { PnwContactCard, pnwBannerImage } from "~/components/contact-section";
import { buildMeta, getOriginFromMatches } from "~/lib/seo";
import { type Route } from "./+types/banner-concepts";

export const meta: Route.MetaFunction = ({ matches }) => [
  ...buildMeta({
    origin: getOriginFromMatches(matches),
    pathname: "/banner-concepts",
    title: "Selected PNW banner direction - Corwin W. Marsh",
    description:
      "Preview the selected PNW stars banner treatment for the homepage contact section.",
    image: pnwBannerImage,
    imageAlt: "A starry Pacific Northwest mountain banner.",
    imageWidth: 3000,
    imageHeight: 1000,
    imageType: "image/png",
    noIndex: true,
  }),
];

function PreviewPanel({ mode }: { mode: "light" | "dark" }) {
  const isDark = mode === "dark";

  return (
    <section
      className={`rounded-3xl border p-5 shadow-2xl md:p-8 ${
        isDark
          ? "border-white/10 bg-stone-900 text-white shadow-black/30"
          : "border-slate-200 bg-slate-50 text-slate-950 shadow-slate-900/10"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.3em] ${
          isDark ? "text-indigo-300" : "text-indigo-500"
        }`}
      >
        {mode} mode preview
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight">
        Connect section context
      </h2>
      <p
        className={`mb-8 mt-3 text-base ${
          isDark ? "text-stone-300" : "text-stone-600"
        }`}
      >
        The chosen treatment keeps the homepage structure intact and gives the
        final contact card the PNW stars backdrop.
      </p>
      <PnwContactCard />
    </section>
  );
}

export default function BannerConcepts() {
  return (
    <div className="mx-auto w-full max-w-5xl py-12 md:py-16">
      <div className="mb-10 rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-stone-950/70 dark:shadow-black/30 md:p-10">
        <Link
          to="/"
          viewTransition
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          ← Back home
        </Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-indigo-500 dark:text-indigo-300">
          PNW stars banner
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-6xl">
          Selected contact card backdrop
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Option C is now the implemented direction: the homepage keeps its
          current hero and page flow, and the PNW stars image becomes the
          backdrop for the final Connect card.
        </p>
        <Link
          to="/banner-concepts/contact"
          viewTransition
          className="mt-8 inline-flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
        >
          View in the full homepage flow
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <PreviewPanel mode="light" />
        <PreviewPanel mode="dark" />
      </div>
    </div>
  );
}
