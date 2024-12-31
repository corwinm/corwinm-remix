import { Link } from "react-router";
import { motion } from "framer-motion";
import * as React from "react";

export const ProfileLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element => (
  <motion.a
    className="hover:underline text-blue-600 focus:text-blue-600 dark:text-blue-400 dark:focus:text-blue-400 inline"
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
}): JSX.Element => (
  <MotionLink
    className="hover:underline text-blue-600 focus:text-blue-600 dark:text-blue-400 dark:focus:text-blue-400 inline"
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
