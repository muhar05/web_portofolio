"use client";
import { motion } from "framer-motion";

type MovingCardProps = {
  icons: React.ReactNode[]; // Array ikon/gambar SVG
  speed?: number; // Kecepatan gerakan (default: 30)
  direction?: "left" | "right"; // Arah gerakan
  className?: string; // Untuk tambahan kelas Tailwind
};

export const InfiniteMovingCard = ({
  icons,
  speed = 30,
  direction = "left",
  className = "",
}: MovingCardProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-4"
        initial={{ x: direction === "left" ? "100%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {icons.map((icon, idx) => (
          <div key={idx} className="flex-shrink-0 w-20 h-20">
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
