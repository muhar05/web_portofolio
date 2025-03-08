"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.02, // Durasi untuk setiap karakter
}: {
  words: string;
  className?: string;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const charactersArray = words.split(""); // Membagi string menjadi karakter per karakter

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, y: 0 },
      { duration: 0.5, delay: stagger(duration) }
    );
  }, [scope, animate, duration]);

  const renderCharacters = () => {
    return (
      <motion.div ref={scope} className="inline-block">
        {charactersArray.map((char, idx) => (
          <motion.span
            key={idx}
            className={cn(
              "inline-block opacity-0 translate-y-10", // Default state (hidden)
              char === " " ? "inline-block w-2" : "", // Tambahkan spasi jika karakter adalah spasi
              "dark:text-white text-slate-600 font-medium" // Text styling
            )}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black mobile:text-xl text-lg leading-snug tracking-wide">
          {renderCharacters()}
        </div>
      </div>
    </div>
  );
};
