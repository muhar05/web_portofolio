import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "grid auto-rows-[minmax(150px,auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-5xl mx-auto px-4 md:px-6 grid-auto-flow-dense",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
