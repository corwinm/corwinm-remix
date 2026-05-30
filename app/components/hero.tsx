import { motion } from "motion/react";
import { Link } from "react-router";
import { heroHeadingLines } from "./hero-content";
import ProfileImage from "./profile-image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="my-6 text-center md:text-left">
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
            <span>{line}</span>
          </motion.span>
        ))}
      </h1>
      <div className="relative md:min-h-64">
        <ProfileImage />
        <div className="mt-8 flex justify-center md:justify-start md:mt-16 md:pr-72">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl"
          >
            <Button asChild variant="gradient">
              <a href="#projects">See featured projects</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/blog" viewTransition>
                Read the blog
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Connect with me</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
