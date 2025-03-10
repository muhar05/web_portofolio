import {
  SiDart,
  SiFlutter,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSqlite,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { cn } from "@/app/lib/utils";
import { StaticImageData } from "next/image";
import Image from "next/image";

const iconMap: Record<string, JSX.Element> = {
  SiNextdotjs: <SiNextdotjs className="h-6 w-6 text-neutral-500" />,
  SiReact: <SiReact className="h-6 w-6 text-neutral-500" />,
  SiMongodb: <SiMongodb className="h-6 w-6 text-neutral-500" />,
  SiDart: <SiDart className="h-6 w-6 text-neutral-500" />,
  SiFlutter: <SiFlutter className="h-6 w-6 text-neutral-500" />,
  SiLaravel: <SiLaravel className="h-6 w-6 text-neutral-500" />,
  SiPhp: <SiPhp className="h-6 w-6 text-neutral-500" />,
  DiMysql: <DiMysql className="h-6 w-6 text-neutral-500" />,
  SiSqlite: <SiSqlite className="h-6 w-6 text-neutral-500" />,
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icons,
  link,
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: StaticImageData;
  icons?: React.ReactNode | React.ReactNode[];
  link?: string;
  colSpan?: string;
  rowSpan?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-between space-y-4",
        colSpan,
        rowSpan,
        className
      )}
    >
      {header && (
        <Image
          src={header}
          alt="Header image"
          className="rounded-lg"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex flex-row space-x-2">
          {Array.isArray(icons)
            ? icons.map((icon, index) =>
                typeof icon === "string" ? (
                  <span key={index}>{iconMap[icon] ?? null}</span>
                ) : null
              )
            : typeof icons === "string"
            ? iconMap[icons] ?? null
            : null}
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg md:text-xl">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm md:text-base dark:text-neutral-300 truncate">
          {description}
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group-hover/bento:translate-x-2 transition duration-200 font-sans font-bold text-sm md:text-base dark:text-neutral-200 bg-slate-800 w-fit p-2 rounded-md text-white hover:bg-slate-700"
        >
          See Live/Documentation
        </a>
      )}
    </div>
  );
};
