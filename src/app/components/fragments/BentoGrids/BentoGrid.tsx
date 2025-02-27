import { cn } from "@/app/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(150px,auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 max-w-7xl mx-auto px-4 md:px-6 grid-auto-flow-dense",
        className
      )}
    >
      {children}
    </div>
  );
};
