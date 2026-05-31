import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { heroHeadingLines, heroMiddleLineOptions } from "./hero-content";
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

  if (shouldReduceMotion) {
    return <span>{heroMiddleLineOptions[0]}</span>;
  }

  return (
    <span className="relative inline-block min-w-full md:min-w-[9.5em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={activeLine}
          className="inline-block"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {activeLine}
        </motion.span>
      </AnimatePresence>
    </span>
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
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <Button asChild variant="gradient">
              <a href="#projects">Projects</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/blog" viewTransition>
                Blog
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Connect</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
