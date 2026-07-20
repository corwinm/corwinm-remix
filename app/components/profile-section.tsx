import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

export default function ProfileSection({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      data-motion-entrance=""
      initial={{ opacity: 0, translateY: 64 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 1.6, delay: 0.6 }
      }
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}
