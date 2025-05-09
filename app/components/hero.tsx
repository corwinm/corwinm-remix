import { motion } from "motion/react";
import { Link } from "react-router";
import ProfileImage from "./profile-image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="my-6 text-center md:text-left">
      <h1 className="text-transparent text-4xl md:text-8xl font-bold">
        <motion.span
          className="block pt-2 pb-4 bg-clip-text bg-linear-to-r from-purple-500 to-red-500"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <span>Software Engineer.</span>
        </motion.span>
        <motion.span
          className="block pb-4 bg-clip-text bg-linear-to-r from-purple-500 to-red-500"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <span>Husband.</span>
        </motion.span>
        <motion.span
          className="block pb-4 bg-clip-text bg-linear-to-r from-purple-500 to-red-500"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span>Father.</span>
        </motion.span>
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
              <Link to="/blog">Read My Blog</Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://www.linkedin.com/in/corwin-marsh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
