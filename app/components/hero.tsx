import ProfileImage from "./profile-image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="my-6 text-center md:text-left">
      <h1 className="text-transparent text-4xl md:text-8xl font-bold">
        <motion.span
          className="block py-2 bg-clip-text bg-linear-to-r from-purple-500 to-red-500"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          Software Engineer.
        </motion.span>
        <motion.span
          className="block py-2 bg-clip-text bg-linear-to-r from-purple-500 to-red-500"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          Husband.
        </motion.span>
        <motion.span
          className="block py-2 bg-clip-text bg-linear-to-r from-purple-500 to-red-500"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Father.
        </motion.span>
      </h1>
      <div className="relative">
        <ProfileImage />
      </div>
    </section>
  );
}
