import type { ReactNode } from "react";
import { motion } from "framer-motion";

type LinkHeaderProps = {
  id: string;
  children: ReactNode;
};

export default function LinkHeader({ id, children }: LinkHeaderProps) {
  return (
    <h2 className="font-bold text-4xl text-center pt-20" id={id}>
      <motion.a
        className="hover:underline inline-block"
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
