import { Link } from "react-router";
import { buildMeta, getOriginFromMatches } from "~/lib/seo";
import { type Route } from "./+types/banner-concepts";

const bannerImage = "/pnw-stars-banner.png";

export const meta: Route.MetaFunction = ({ matches }) => [
  ...buildMeta({
    origin: getOriginFromMatches(matches),
    pathname: "/banner-concepts",
    title: "PNW banner site concepts - Corwin W. Marsh",
    description:
      "Preview ways to bring Corwin Marsh’s PNW stars banner into the personal site.",
    image: bannerImage,
    imageAlt: "A starry Pacific Northwest mountain banner.",
    imageWidth: 3000,
    imageHeight: 1000,
    imageType: "image/png",
    noIndex: true,
  }),
];

function ConceptShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-2xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-stone-950/70 dark:shadow-black/30 md:p-6">
      <div className="mb-5 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function BannerImage({ className = "" }: { className?: string }) {
  return (
    <img
      src={bannerImage}
      alt="Starry Pacific Northwest mountain landscape"
      className={`h-full w-full object-cover ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

function HeroBackdropConcept() {
  return (
    <ConceptShell eyebrow="Option A" title="Atmospheric homepage hero">
      <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-slate-950 text-white">
        <BannerImage className="absolute inset-0 scale-105 opacity-80" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/72 to-slate-950/15" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
        <div className="relative flex min-h-[520px] max-w-2xl flex-col justify-end p-8 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
            Homepage hero direction
          </p>
          <h3 className="text-4xl font-bold tracking-tight md:text-6xl">
            Corwin Marsh
          </h3>
          <p className="mt-4 max-w-xl text-lg text-slate-200">
            Keep the current headline/copy, but move it into a calmer scenic
            hero treatment that feels more personal than a pure abstract
            gradient.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
              Connect with me
            </span>
            <span className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">
              Projects
            </span>
            <span className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">
              Blog
            </span>
          </div>
        </div>
      </div>
      <Link
        to="/banner-concepts/hero"
        viewTransition
        className="mt-5 inline-flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
      >
        View this as the homepage
      </Link>
    </ConceptShell>
  );
}

function SectionDividerConcept() {
  return (
    <ConceptShell eyebrow="Option B" title="Scenic section divider">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-white">
        <div className="relative h-56 md:h-72">
          <BannerImage className="absolute inset-0" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/30 to-slate-950/10" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
          <div className="relative flex h-full items-end p-8 md:p-10">
            <div className="max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
                Between sections
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                A quiet pause in the page.
              </h3>
            </div>
          </div>
        </div>
        <div className="grid gap-4 bg-slate-950 p-6 text-sm text-slate-300 md:grid-cols-3">
          <p>
            Adds personality without rebuilding the current hero or profile
            layout.
          </p>
          <p>Works well between About → Projects or above Connect.</p>
          <p>Lowest-risk option if you want the image to feel intentional.</p>
        </div>
      </div>
      <Link
        to="/banner-concepts/divider"
        viewTransition
        className="mt-5 inline-flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
      >
        View this as the homepage
      </Link>
    </ConceptShell>
  );
}

function ContactCardConcept() {
  return (
    <ConceptShell eyebrow="Option C" title="Connect card backdrop">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-8 text-center text-white md:p-12">
        <BannerImage className="absolute inset-0 opacity-75" />
        <div className="absolute inset-0 bg-slate-950/58 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950 to-transparent" />
        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
            Connect section
          </p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Find me online
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-slate-200">
            Keep the homepage structure intact, but make the final contact card
            feel like it belongs to the same visual world as the Bluesky banner.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white px-5 py-3 text-slate-950">
              Bluesky
            </span>
            <span className="rounded-full border border-white/30 px-5 py-3 text-white">
              LinkedIn
            </span>
            <span className="rounded-full border border-white/30 px-5 py-3 text-white">
              GitHub
            </span>
          </div>
        </div>
      </div>
      <Link
        to="/banner-concepts/contact"
        viewTransition
        className="mt-5 inline-flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
      >
        View this as the homepage
      </Link>
    </ConceptShell>
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
          Site integration concepts
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Three lightweight ways to bring the Bluesky banner aesthetic into the
          site without committing to a full redesign yet. Each option now links
          to a full-page preview showing how it would feel in the actual
          homepage flow.
        </p>
      </div>

      <div className="space-y-8">
        <HeroBackdropConcept />
        <SectionDividerConcept />
        <ContactCardConcept />
      </div>
    </div>
  );
}
