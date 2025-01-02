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
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 md:px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icons,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icons?: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-between space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex flex-row space-x-2">
          {Array.isArray(icons)
            ? icons.map((icon, index) => <span key={index}>{icon}</span>)
            : icons}
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg md:text-xl">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm md:text-base dark:text-neutral-300 truncate">
          {description}
        </div>
      </div>
      <a
        href="#"
        className="group-hover/bento:translate-x-2 transition duration-200 font-sans font-bold text-sm md:text-base dark:text-neutral-200 bg-slate-800 w-fit p-2 rounded-md text-white hover:bg-slate-700"
      >
        See Live/Documentation
      </a>
    </div>
  );
};
