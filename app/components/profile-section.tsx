import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function ProfileSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 64 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1.6, delay: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
