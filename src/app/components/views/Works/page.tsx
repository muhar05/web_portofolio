"use client";

import works from "@/app/data/works.json";
import { BentoGrid } from "@/app/components/fragments/BentoGrids/BentoGrid";
import { BentoGridItem } from "@/app/components/fragments/BentoGrids/BentoGridItem";
import { motion } from "framer-motion";

const WorksPage = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden py-20 lg:py-32">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
          >
            A collection of web and mobile applications I&apos;ve built, 
            ranging from enterprise solutions to experimental side projects.
          </motion.p>
        </div>

        <BentoGrid>
          {works.map((work, i) => (
            <BentoGridItem
              key={work.id}
              title={work.title}
              description={
                <div className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-400">
                    {work.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] uppercase tracking-wider font-bold text-indigo-400">
                      {work.role}
                    </span>
                    {work.ongoing && (
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-wider font-bold text-blue-400">
                        Ongoing
                      </span>
                    )}
                    {work.source === "open-source" && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                        Open Source
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {work.impact?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              }
              header={work.header}
              icons={work.icon}
              link={work.domain || work.github || "#"}
              className={i === 0 || i === 3 ? "lg:col-span-2" : "col-span-1"}
            />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
};


export default WorksPage;
