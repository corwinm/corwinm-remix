import { motion } from "motion/react";
import { type ReactNode } from "react";

type LinkHeaderProps = {
  id: string;
  children: ReactNode;
};

export default function LinkHeader({ id, children }: LinkHeaderProps) {
  return (
    <h2 className="font-bold text-4xl text-center pt-20" id={id}>
      <motion.a
        className="hover:underline inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
        href={`#${id}`}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.a>
    </h2>
  );
}
