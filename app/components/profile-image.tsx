import { motion } from "motion/react";
import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <motion.img
      className="h-56 w-56 rounded-full z-0 m-auto mt-8 object-cover md:absolute md:right-0 md:top-32 md:mt-0"
      src="/profile-2025.jpg"
      width={224}
      height={224}
      alt="Corwin's profile"
      decoding="async"
      fetchPriority="high"
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
  );
};

export default ProfileImage;
