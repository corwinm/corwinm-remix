import { motion } from "motion/react";
import * as React from "react";
import { Link } from "react-router";

const focusRingClassName =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950";

export const ProfileLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.JSX.Element => (
  <motion.a
    className={`hover:underline text-blue-600 focus:text-blue-600 dark:text-blue-400 dark:focus:text-blue-400 inline ${focusRingClassName}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const MotionLink = motion.create(Link);

export const ProfileRouterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.JSX.Element => (
  <MotionLink
    className={`hover:underline text-blue-600 focus:text-blue-600 dark:text-blue-400 dark:focus:text-blue-400 inline ${focusRingClassName}`}
    to={href}
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </MotionLink>
);
