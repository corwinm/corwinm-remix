import { motion } from "motion/react";
import React from "react";
import { publicProfile } from "~/content/profile";

const ProfileImage: React.FC = () => {
  return (
    <motion.img
      className="h-56 w-56 rounded-full z-0 m-auto mt-8 object-cover md:absolute md:right-28 md:-bottom-8"
      src="/profile-2025-448.jpg"
      width={224}
      height={224}
      alt={`${publicProfile.firstName}'s profile`}
      decoding="async"
      fetchPriority="high"
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
  );
};

export default ProfileImage;
