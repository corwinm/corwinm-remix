import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  heroHeadingLines,
  heroMiddleLineOptions,
  heroPrimaryCta,
  heroSecondaryCtas,
} from "./hero-content";
import ProfileImage from "./profile-image";
import { Button } from "./ui/button";

function RotatingMiddleLine() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || heroMiddleLineOptions.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveLineIndex(
        (currentIndex) => (currentIndex + 1) % heroMiddleLineOptions.length,
      );
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  const activeLine = heroMiddleLineOptions[activeLineIndex];

  const visibleTextClassName =
    "block overflow-visible pb-2 leading-[1.12] text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-300";

  if (shouldReduceMotion) {
    return (
      <span className={visibleTextClassName}>{heroMiddleLineOptions[0]}</span>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={activeLine}
        className={visibleTextClassName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {activeLine}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Hero() {
  return (
    <section className="relative my-6 text-center md:text-left">
      <h1 className="text-transparent text-4xl md:text-8xl font-bold">
        {heroHeadingLines.map((line, index) => (
          <motion.span
            className="block pt-2 pb-4 bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-300"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: index === 0 ? 0.75 : 1,
              delay: index * 0.15,
            }}
            key={line}
          >
            {index === 1 ? <RotatingMiddleLine /> : <span>{line}</span>}
          </motion.span>
        ))}
      </h1>
      <div className="relative">
        <ProfileImage />
        <div className="mt-8 flex justify-center md:justify-start md:mt-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex w-full max-w-md flex-col items-center gap-3 md:items-start"
          >
            <Button asChild variant="gradient" className="w-full sm:w-auto">
              <a href={heroPrimaryCta.href}>{heroPrimaryCta.label}</a>
            </Button>
            <div className="flex items-center gap-3 text-sm font-medium text-indigo-500 dark:text-indigo-200/90">
              {heroSecondaryCtas.map((cta, index) => (
                <span key={cta.href} className="flex items-center gap-3">
                  {cta.href.startsWith("/") ? (
                    <Link
                      className="transition-colors hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
                      to={cta.href}
                      viewTransition
                    >
                      {cta.label}
                    </Link>
                  ) : (
                    <a
                      className="transition-colors hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
                      href={cta.href}
                    >
                      {cta.label}
                    </a>
                  )}
                  {index < heroSecondaryCtas.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="text-indigo-400/70 dark:text-indigo-300/50"
                    >
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
