import { motion } from "motion/react";
import { useState } from "react";

interface ShootingStarProps {
  onComplete: () => void;
}

export default function ShootingStar({ onComplete }: ShootingStarProps) {
  // Random position at the top of the screen
  const [startX] = useState(Math.random() * 60);
  const [startY] = useState(Math.random() * 30);
  // Diagonal movement: move right and down
  const [distance] = useState(100 + Math.random() * 100);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        transform: "rotate(45deg)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Trail effect */}
      <motion.div
        className="absolute h-[3px] w-32 bg-gradient-to-l from-transparent via-black to-transparent dark:via-white shadow-[0_0_10px_#fff,0_0_20px_#fff] dark:shadow-[0_0_10px_#fff,0_0_20px_#fff]"
        style={{
          filter: "blur(0.5px)",
          right: 0,
          top: "50%",
          transformOrigin: "right center",
          transform: "translateY(-50%)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.8, 0.8, 0],
          x: [0, distance * 20],
          y: [0, distance * 3],
          scale: [0.3, .5, .5, 0.3],
        }}
        transition={{
          duration: 3,
          ease: ["easeOut", "linear", "linear", "easeIn"],
          times: [0, 0.06, 0.94, 1], // Quick fade in, 3 seconds visible, quick fade out
        }}
      />
      {/* Star shape */}
      <motion.div
        className="absolute w-4 h-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, .6, .6, 0],
          x: [0, distance * 20],
          y: [0, distance * 3],
          scale: [0.3, 1, 1, 0.3],
        }}
        transition={{
          duration: 3,
          ease: ["easeOut", "linear", "linear", "easeIn"],
          times: [0, 0.06, 0.94, 1], // Quick fade in, 3 seconds visible, quick fade out
        }}
        onAnimationComplete={onComplete}
      >
        <div
          className="absolute w-full h-full bg-black dark:bg-white"
          style={{
            clipPath:
              "polygon(50% 100%, 61% 65%, 98% 65%, 68% 43%, 79% 9%, 50% 30%, 21% 9%, 32% 43%, 2% 65%, 39% 65%)",
            filter: "blur(0.5px)",
            boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
