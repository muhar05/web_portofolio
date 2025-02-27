"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.02, // Sesuaikan durasi untuk setiap karakter
}: {
  words: string;
  className?: string;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const charactersArray = words.split(""); // Membagi string menjadi karakter per karakter

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration, delay: stagger(duration) });
  }, [scope.current, animate, duration]);

  const renderCharacters = () => {
    return (
      <motion.div ref={scope}>
        {charactersArray.map((char, idx) => (
          <motion.span
            key={idx}
            className="dark:text-white font-medium text-slate-600 opacity-0"
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
