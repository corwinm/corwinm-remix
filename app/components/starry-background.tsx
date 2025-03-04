import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ShootingStar from "./shooting-star";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  speed: number;
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<number | undefined>();

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 100;

      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2 + 1;
        // Larger stars move slower, creating a parallax effect
        const speed = 1 - (size - 1) / 2;

        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          opacity: Math.random() * 0.5 + 0.3,
          delay: Math.random() * 5,
          speed,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    // Function to add a new shooting star
    const addShootingStar = () => {
      const id = Date.now();
      setShootingStars(id);
      return id;
    };

    // Randomly add shooting stars
    const interval = setInterval(() => {
      if (Math.random() < 0.4) {
        // 40% chance every 3 seconds
        addShootingStar();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 dark:from-stone-950 dark:to-stone-900">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-red-400 dark:bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: "0 0 2px rgba(220, 38, 38, 0.3)",
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              x: [0, 50 * star.speed, 0],
              y: [0, 30 * star.speed, 0],
            }}
            transition={{
              opacity: {
                duration: 3,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              },
              x: {
                duration: 20,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              },
              y: {
                duration: 15,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              },
            }}
          />
        ))}
        {shootingStars && (
          <ShootingStar
            key={shootingStars}
            onComplete={() => setShootingStars(undefined)}
          />
        )}
      </div>
    </div>
  );
}
