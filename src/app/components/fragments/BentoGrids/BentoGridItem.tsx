"use client";

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
  SiNextdotjs: <SiNextdotjs className="h-4 w-4" />,
  SiReact: <SiReact className="h-4 w-4" />,
  SiMongodb: <SiMongodb className="h-4 w-4" />,
  SiDart: <SiDart className="h-4 w-4" />,
  SiFlutter: <SiFlutter className="h-4 w-4" />,
  SiLaravel: <SiLaravel className="h-4 w-4" />,
  SiPhp: <SiPhp className="h-4 w-4" />,
  DiMysql: <DiMysql className="h-4 w-4" />,
  SiSqlite: <SiSqlite className="h-4 w-4" />,
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
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group/bento relative overflow-hidden rounded bg-[#101112] border border-[rgba(255,255,255,0.06)] flex flex-col justify-between transition-all duration-300",
        colSpan,
        rowSpan,
        className
      )}
    >
      {/* HEADER IMAGE */}
      {header && (
        <div className="relative w-full h-44 overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
          <Image
            src={header}
            alt="Header image"
            className="w-full h-full object-cover grayscale opacity-60 group-hover/bento:grayscale-0 group-hover/bento:opacity-90 transition-all duration-500"
            width={500}
            height={500}
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* ICONS */}
        <div className="flex flex-row items-center gap-2 mb-4">
          {Array.isArray(icons)
            ? icons.map((icon, index) =>
                typeof icon === "string" ? (
                  <div key={index} className="text-[#8e9196] group-hover/bento:text-[#fafafa] transition-colors">
                    {iconMap[icon] ?? null}
                  </div>
                ) : null
              )
            : typeof icons === "string"
            ? (
              <div className="text-[#8e9196] group-hover/bento:text-[#fafafa] transition-colors">
                {iconMap[icons] ?? null}
              </div>
            )
            : null}
        </div>

        {/* TITLE & DESCRIPTION */}
        <div className="flex-1">
          <h3 className="text-lg font-medium text-[#fafafa] mb-2 group-hover/bento:text-white transition-colors lowercase">
            {title}
          </h3>
          <div className="text-xs text-[#8e9196] leading-relaxed mb-4 lowercase">
            {description}
          </div>
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between">
          <Link
            href={link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1.5"
          >
            see project
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
