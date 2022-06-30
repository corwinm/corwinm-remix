import { motion } from "framer-motion";
import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <motion.img
      className="h-56 w-56 rounded-full z-0 m-auto mt-8 md:absolute md:right-28 md:-bottom-8"
      src="/profile-guest.jpg"
      alt="Corwin's profile"
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
  );
};

export default ProfileImage;
