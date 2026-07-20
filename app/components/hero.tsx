import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import {
  heroCtaLayoutClassNames,
  heroHeadingLines,
  heroPrimaryCta,
  heroSecondaryCtas,
} from "./hero-content";
import ProfileImage from "./profile-image";
import { Button } from "./ui/button";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative my-6 text-center md:text-left">
      <h1 className="text-transparent text-4xl md:text-8xl font-bold">
        {heroHeadingLines.map((line, index) => (
          <motion.span
            data-motion-entrance=""
            className="block pt-2 pb-4 bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-300"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: index === 0 ? 0.75 : 1,
                    delay: index * 0.15,
                  }
            }
            key={line}
          >
            <span>{line}</span>
          </motion.span>
        ))}
      </h1>
      <div className="relative">
        <ProfileImage />
        <div className="mt-8 flex justify-center md:justify-start md:mt-16">
          <motion.div
            data-motion-entrance=""
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: 0.6 }
            }
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
