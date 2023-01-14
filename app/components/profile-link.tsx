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
    className="hover:underline text-red-600 focus:text-red-600 inline-block"
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
