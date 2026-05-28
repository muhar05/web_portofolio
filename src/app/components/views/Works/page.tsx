"use client";

import works from "@/app/data/works.json";
import { BentoGrid } from "@/app/components/fragments/BentoGrids/BentoGrid";
import { BentoGridItem } from "@/app/components/fragments/BentoGrids/BentoGridItem";
const WorksPage = () => {
  return (
    <main className="w-full bg-[#0c0d0e] min-h-screen py-16 md:py-24 text-[#e4e4e7]">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="border-b border-[rgba(255,255,255,0.06)] pb-10 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">02 / production log</span>
          <h1 className="text-3xl md:text-5xl font-light text-[#fafafa] tracking-tight mt-2 lowercase">
            selected <span className="font-semibold text-white">works</span>
          </h1>
          <p className="text-sm text-[#8e9196] leading-relaxed max-w-2xl lowercase mt-4">
            a structured inventory of web management portals, accounting engines, and cross-platform mobile products built for production environments.
          </p>
        </div>

        <BentoGrid>
          {works.map((work, i) => (
            <BentoGridItem
              key={work.id}
              title={work.title}
              description={
                <div className="space-y-4 font-mono text-[11px] text-[#8e9196] lowercase">
                  <p className="leading-relaxed">
                    {work.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(255,255,255,0.04)]">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-[#fafafa]">
                      {work.role}
                    </span>
                    {work.ongoing && (
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] uppercase tracking-wider text-blue-400">
                        ongoing
                      </span>
                    )}
                    {work.source === "open-source" && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] uppercase tracking-wider text-emerald-400">
                        open source
                      </span>
                    )}
                  </div>

                  <ul className="space-y-1.5 pt-2">
                    {work.impact?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-[10px] text-[#8e9196] lowercase">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#8e9196] shrink-0" />
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
