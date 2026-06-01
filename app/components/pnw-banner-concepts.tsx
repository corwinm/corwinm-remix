import { Link } from "react-router";
import ContactSocialLinks from "./contact-social-links";
import {
  heroCtaLayoutClassNames,
  heroHeadingLines,
  heroMiddleLineOptions,
  heroPrimaryCta,
  heroSecondaryCtas,
} from "./hero-content";
import ProfileImage from "./profile-image";
import { Button } from "./ui/button";

export const pnwBannerImage = "/pnw-stars-banner.png";

export const bannerConcepts = [
  {
    id: "hero",
    label: "Option A",
    title: "Atmospheric homepage hero",
    href: "/banner-concepts/hero",
    summary:
      "Replaces the current hero treatment with the PNW stars scene while keeping the homepage content flow intact.",
  },
  {
    id: "divider",
    label: "Option B",
    title: "Scenic section divider",
    href: "/banner-concepts/divider",
    summary:
      "Keeps the existing hero and adds the banner as a quiet visual pause before Projects.",
  },
  {
    id: "contact",
    label: "Option C",
    title: "Connect card backdrop",
    href: "/banner-concepts/contact",
    summary:
      "Keeps the page mostly unchanged and brings the banner into the final Connect section.",
  },
] as const;

export type BannerConceptId = (typeof bannerConcepts)[number]["id"];

export function ConceptPreviewLinks({ active }: { active?: BannerConceptId }) {
  return (
    <nav className="mb-8 rounded-2xl border border-slate-200/80 bg-white/85 p-4 text-sm shadow-lg shadow-slate-900/5 backdrop-blur print:hidden dark:border-white/10 dark:bg-stone-950/80 dark:shadow-black/30">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Link
          to="/banner-concepts"
          viewTransition
          className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          ← All banner concepts
        </Link>
        <div className="flex flex-wrap gap-2">
          {bannerConcepts.map((concept) => (
            <Link
              key={concept.id}
              to={concept.href}
              viewTransition
              aria-current={concept.id === active ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-semibold transition ${
                concept.id === active
                  ? "bg-indigo-600 text-white dark:bg-indigo-400 dark:text-slate-950"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
              }`}
            >
              {concept.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function PnwBannerImage({ className = "" }: { className?: string }) {
  return (
    <img
      src={pnwBannerImage}
      alt="Starry Pacific Northwest mountain landscape"
      className={`h-full w-full object-cover ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

export function PnwHero() {
  const scenicHeadingLines = [
    heroHeadingLines[0],
    heroMiddleLineOptions[1],
    heroHeadingLines[2],
  ];

  return (
    <section className="relative my-6 overflow-hidden rounded-[2rem] bg-slate-950 text-center text-white shadow-2xl shadow-slate-950/30 md:text-left">
      <PnwBannerImage className="absolute inset-0 scale-105 opacity-85" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/78 to-slate-950/10" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/15 to-transparent" />
      <div className="relative px-6 py-12 md:px-12 md:py-16">
        <h1 className="text-4xl font-bold text-transparent md:text-7xl">
          {scenicHeadingLines.map((line, index) => (
            <span
              className="block bg-linear-to-r from-sky-100 to-indigo-200 bg-clip-text pb-4 pt-2"
              key={line}
            >
              {index === 1 ? (
                <span className="bg-linear-to-r from-sky-300 to-indigo-200 bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>
        <div className="relative mt-2 md:mt-10">
          <ProfileImage />
          <div className="mt-8 flex justify-center md:mt-16 md:justify-start">
            <div className={heroCtaLayoutClassNames.container}>
              <Button
                asChild
                variant="gradient"
                className={heroCtaLayoutClassNames.primaryButton}
              >
                <a href={heroPrimaryCta.href}>{heroPrimaryCta.label}</a>
              </Button>
              <div className={heroCtaLayoutClassNames.secondaryGroup}>
                {heroSecondaryCtas.map((cta) => (
                  <Button
                    key={cta.href}
                    asChild
                    variant="outline"
                    className={`${heroCtaLayoutClassNames.secondaryButton} border-white/40 bg-white/10 text-white hover:bg-white/20`}
                  >
                    {cta.href.startsWith("/") ? (
                      <Link to={cta.href} viewTransition>
                        {cta.label}
                      </Link>
                    ) : (
                      <a href={cta.href}>{cta.label}</a>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PnwSectionDivider() {
  return (
    <section
      aria-label="Pacific Northwest night sky divider"
      className="my-20 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-950/25"
    >
      <div className="relative h-56 md:h-72">
        <PnwBannerImage className="absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
        <div className="relative flex h-full items-end p-8 md:p-10">
          <div className="max-w-lg text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
              From ideas to systems
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A quiet pause before the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PnwContactSection() {
  return (
    <section>
      <h2
        id="contact"
        className="scroll-mt-28 text-center text-4xl font-bold tracking-tight md:text-5xl"
      >
        Connect with me
      </h2>
      <div className="mt-16">
        <div className="mx-auto max-w-2xl">
          <p className="mb-12 text-center text-lg text-stone-600 dark:text-stone-400">
            Want to talk software, developer tools, or AI-assisted workflows?
            I’m easiest to find on LinkedIn or Bluesky.
          </p>

          <div className="relative overflow-hidden rounded-2xl bg-slate-950 text-white shadow-2xl shadow-slate-950/30">
            <PnwBannerImage className="absolute inset-0 opacity-75" />
            <div className="absolute inset-0 bg-slate-950/62 backdrop-blur-[1px]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950 to-transparent" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col items-center gap-8 text-center">
                <div>
                  <h3 className="mb-2 bg-linear-to-r from-sky-200 to-indigo-200 bg-clip-text text-2xl font-bold text-transparent">
                    Find me online
                  </h3>
                  <p className="mb-8 text-slate-200">
                    I’m always up for a good conversation about building useful
                    things.
                  </p>
                  <ContactSocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
