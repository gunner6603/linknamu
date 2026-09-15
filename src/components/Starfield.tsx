"use client";

import { useEffect, useState } from "react";

type Star = {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
};

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 40 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 1.6 + 1,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 3 + 3}s`,
      }))
    );
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden dark:block"
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
