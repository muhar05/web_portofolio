"use client";

import { works } from "@/app/data/works";
import { BentoGrid } from "@/app/components/fragments/BentoGrids/BentoGrid";
import { BentoGridItem } from "@/app/components/fragments/BentoGrids/BentoGridItem";
import { motion } from "framer-motion";

const WorksPage = () => {
  return (
    <main className="w-full min-h-screen bg-slate-200 dark:bg-black transition-all py-10">
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">
          Featured Projects
        </h1>
        <BentoGrid>
          {works.map((work, idx) => (
            <BentoGridItem
              key={work.id}
              title={work.title}
              description={
                <div>
                  <div className="mb-2">{work.description}</div>
                  <div className="mb-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold">{work.role}</span>
                    {work.ongoing && (
                      <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">
                        Ongoing
                      </span>
                    )}
                    {work.source === "open-source" && (
                      <span className="ml-2 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">
                        Open Source
                      </span>
                    )}
                  </div>
                  <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {work.impact?.map((item: string, i: number) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              }
              header={work.header}
              icons={work.icon}
              link={work.domain || work.github || "#"}
            />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
};

export default WorksPage;
