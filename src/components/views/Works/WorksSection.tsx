"use client";

import worksData from "@/app/data/works.json";
import { Work } from "@/types/works";
import WorkCard, { SectorHeader, SectorHeaderDesc } from "@/components/ui/WorkCard";

const WorksPage = () => {
  const works = worksData as Work[];

  const productionSectors = works.filter((w) => w.sector === "production");
  const privateSectors = works.filter((w) => w.sector === "private");
  const experimentSectors = works.filter((w) => w.sector === "experiment");

  return (
    <main className="w-full bg-[#0c0d0e] min-h-screen py-16 md:py-24 text-[#e4e4e7] overflow-hidden">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="border-b border-[rgba(255,255,255,0.06)] pb-10 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">curated systems archive</span>
          <h1 className="text-3xl md:text-5xl font-light text-[#fafafa] tracking-tight mt-2 lowercase">
            engineering <span className="font-semibold text-white">archive</span>
          </h1>
          <p className="text-sm text-[#8e9196] leading-relaxed max-w-2xl lowercase mt-4">
            a dynamic ledger of custom bookkeeping engines, logistical platforms, role-based workflows, and database studies.
          </p>
        </div>

        {/* PRODUCTION */}
        {productionSectors.length > 0 && (
          <div className="mb-24">
            <SectorHeader sector="production" />
            <SectorHeaderDesc sector="production" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {productionSectors.map((work, idx) => (
                <div key={work.id} className={idx === 0 || idx === 3 ? "md:col-span-2" : "col-span-1"}>
                  <WorkCard work={work} priority={idx === 0} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRIVATE */}
        {privateSectors.length > 0 && (
          <div className="mb-24">
            <SectorHeader sector="private" />
            <SectorHeaderDesc sector="private" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {privateSectors.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        )}

        {/* EXPERIMENT */}
        {experimentSectors.length > 0 && (
          <div>
            <SectorHeader sector="experiment" />
            <SectorHeaderDesc sector="experiment" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experimentSectors.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default WorksPage;