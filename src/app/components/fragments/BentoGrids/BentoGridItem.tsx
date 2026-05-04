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
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap: Record<string, JSX.Element> = {
  SiNextdotjs: <SiNextdotjs className="h-5 w-5" />,
  SiReact: <SiReact className="h-5 w-5 text-blue-400" />,
  SiMongodb: <SiMongodb className="h-5 w-5 text-green-500" />,
  SiDart: <SiDart className="h-5 w-5 text-blue-500" />,
  SiFlutter: <SiFlutter className="h-5 w-5 text-cyan-400" />,
  SiLaravel: <SiLaravel className="h-5 w-5 text-red-500" />,
  SiPhp: <SiPhp className="h-5 w-5 text-indigo-400" />,
  DiMysql: <DiMysql className="h-5 w-5 text-blue-600" />,
  SiSqlite: <SiSqlite className="h-5 w-5 text-blue-400" />,
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
  header?: string | StaticImageData;
  icons?: React.ReactNode | React.ReactNode[];
  link?: string;
  colSpan?: string;
  rowSpan?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group/bento relative overflow-hidden rounded-3xl glass border border-white/10 flex flex-col justify-between transition-all duration-300",
        colSpan,
        rowSpan,
        className
      )}
    >
      {/* HEADER IMAGE */}
      {header && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={header}
            alt="Header image"
            className="w-full h-full object-cover transition-transform duration-500 group-hover/bento:scale-110"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* ICONS */}
        <div className="flex flex-row items-center gap-3 mb-4">
          {Array.isArray(icons)
            ? icons.map((icon, index) =>
                typeof icon === "string" ? (
                  <div key={index} className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/bento:border-indigo-500/30 transition-colors">
                    {iconMap[icon] ?? null}
                  </div>
                ) : null
              )
            : typeof icons === "string"
            ? (
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                {iconMap[icons] ?? null}
              </div>
            )
            : null}
        </div>

        {/* TITLE & DESCRIPTION */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover/bento:text-indigo-400 transition-colors">
            {title}
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {description}
          </div>
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <Link
            href={link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-500 hover:text-indigo-400 transition-colors group/link"
          >
            See Project
            <svg 
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="ArrowRight" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

