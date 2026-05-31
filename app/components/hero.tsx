import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  heroCtaLayoutClassNames,
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
            className={heroCtaLayoutClassNames.container}
          >
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
                  className={heroCtaLayoutClassNames.secondaryButton}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
