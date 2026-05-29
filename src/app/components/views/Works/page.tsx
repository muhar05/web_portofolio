"use client";

import Image from "next/image";
import worksData from "@/app/data/works.json";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPhp,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSqlite,
  SiDart,
  SiMysql,
} from "react-icons/si";
import { DiMysql, DiJava, DiPython } from "react-icons/di";
import { FaGithub, FaGlobe, FaLock, FaFlask, FaTerminal } from "react-icons/fa";

interface Work {
  id: number;
  slug: string;
  title: string;
  description: string;
  role: string;
  impact: string[];
  header: string;
  icon: string[];
  ongoing: boolean;
  source: string;
  sector: "production" | "private" | "experiment";
  status?: string;
  tags?: string[];
  domain?: string;
  github?: string;
}

const techIcons: Record<string, JSX.Element> = {
  SiNextdotjs: <SiNextdotjs className="h-4 w-4" />,
  SiReact: <SiReact className="h-4 w-4" />,
  SiMongodb: <SiMongodb className="h-4 w-4" />,
  SiLaravel: <SiLaravel className="h-4 w-4" />,
  SiPhp: <SiPhp className="h-4 w-4" />,
  DiMysql: <DiMysql className="h-4 w-4" />,
  SiMysql: <SiMysql className="h-4 w-4" />,
  SiFlutter: <SiFlutter className="h-4 w-4" />,
  SiTypescript: <SiTypescript className="h-4 w-4" />,
  SiTailwindcss: <SiTailwindcss className="h-4 w-4" />,
  DiPostgresql: <SiPostgresql className="h-4 w-4" />,
  SiPostgresql: <SiPostgresql className="h-4 w-4" />,
  SiSqlite: <SiSqlite className="h-4 w-4" />,
  SiDart: <SiDart className="h-4 w-4" />,
  DiJava: <DiJava className="h-4 w-4" />,
  DiPython: <DiPython className="h-4 w-4" />,
};

const WorksPage = () => {
  const works = worksData as Work[];

  // Group by sector
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

        {/* 1. PRODUCTION SECTOR */}
        {productionSectors.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-b border-[rgba(255,255,255,0.04)] pb-4">
              <span className="font-mono text-xs text-[#fafafa] font-medium lowercase">production sector</span>
              <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">deployed & released</span>
            </div>
            
            <p className="text-xs text-[#8e9196] lowercase mb-8 max-w-xl -mt-4">
              real-world projects that are deployed, launched, or used in actual workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {productionSectors.map((work, idx) => {
                const isLarge = idx === 0 || idx === 3;
                return (
                  <div 
                    key={work.id}
                    className={`group border border-[rgba(255,255,255,0.06)] bg-[#101112] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 rounded overflow-hidden flex flex-col justify-between p-6 ${
                      isLarge ? "md:col-span-2" : "col-span-1"
                    }`}
                  >
                    <div>
                      {/* HEADER IMAGE */}
                      {work.header && (
                        <div className="relative w-full h-48 md:h-64 overflow-hidden rounded mb-6 border border-[rgba(255,255,255,0.06)]">
                          <Image
                            src={work.header}
                            alt={work.title}
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                            width={800}
                            height={500}
                            priority={idx === 0}
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="font-mono text-[10px] text-[#8e9196]">{work.role}</span>
                        {work.status && (
                          <span className="px-2 py-0.5 font-mono text-[9px] bg-[#1a2e1a] border border-[#2d5a2d] text-[#8ce08c] rounded uppercase">
                            {work.status}
                          </span>
                        )}
                        <span className="px-2 py-0.5 font-mono text-[9px] bg-white/5 border border-white/10 text-[#8e9196] rounded uppercase">
                          production environment
                        </span>
                      </div>

                      <h3 className="text-xl font-medium text-[#fafafa] lowercase mb-2 group-hover:text-white transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-xs text-[#8e9196] leading-relaxed mb-6 lowercase">{work.description}</p>

                      {/* TAGS */}
                      {work.tags && work.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {work.tags.map((tag) => (
                            <span key={tag} className="font-mono text-[9px] text-[#8e9196] border border-[rgba(255,255,255,0.04)] px-2 py-0.5 rounded lowercase">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* IMPACT POINTS */}
                      {work.impact && work.impact.length > 0 && (
                        <div className="space-y-2 pt-4 border-t border-[rgba(255,255,255,0.04)] mb-6">
                          <span className="font-mono text-[9px] text-[#fafafa] uppercase tracking-wider block">impact & metrics</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {work.impact.map((imp, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#8e9196] lowercase">
                                <span className="mt-2 w-1 h-1 rounded-full bg-[#8e9196] shrink-0" />
                                <span>{imp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.04)]">
                      <div className="flex gap-2 text-[#8e9196]">
                        {work.icon.map((iconName) => (
                          <span key={iconName} title={iconName}>
                            {techIcons[iconName] ?? null}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {work.github && (
                          <a 
                            href={work.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1"
                          >
                            codebase <FaGithub size={10} />
                          </a>
                        )}
                        {work.domain && (
                          <a 
                            href={work.domain}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1"
                          >
                            live link <FaGlobe size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. PRIVATE SECTOR */}
        {privateSectors.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-b border-[rgba(255,255,255,0.04)] pb-4">
              <span className="font-mono text-xs text-[#fafafa] font-medium lowercase">private sector</span>
              <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">internal engines</span>
            </div>
            
            <p className="text-xs text-[#8e9196] lowercase mb-8 max-w-xl -mt-4">
              internal systems, operational tools, and role-based platforms built for real workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {privateSectors.map((work) => (
                <div 
                  key={work.id}
                  className="group border border-[rgba(255,255,255,0.06)] bg-[#0e0f10] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 rounded p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-[rgba(255,255,255,0.03)] pb-3">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#8e9196] flex items-center gap-1.5">
                        <FaLock size={8} className="text-[#8e9196]" /> private infrastructure
                      </span>
                      {work.status && (
                        <span className="px-2 py-0.5 font-mono text-[8px] bg-indigo-500/10 border border-indigo-500/20 text-[#8e9196] rounded uppercase">
                          {work.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-medium text-[#fafafa] lowercase mb-2">{work.title}</h3>
                    <p className="text-xs text-[#8e9196] leading-relaxed mb-6 lowercase">{work.description}</p>

                    {/* METADATA OPERATIONAL PANEL */}
                    <div className="bg-[#070809] border border-[rgba(255,255,255,0.04)] p-4 rounded mb-6 font-mono text-[11px] text-[#8e9196] space-y-2 lowercase">
                      <div className="flex items-center gap-1 text-[#fafafa] mb-1">
                        <FaTerminal size={8} /> <span>workflow parameters</span>
                      </div>
                      <div>
                        <span className="text-[#fafafa]">&gt; role assigned:</span> {work.role}
                      </div>
                      <div>
                        <span className="text-[#fafafa]">&gt; repository class:</span> {work.source}
                      </div>
                      {work.tags && work.tags.length > 0 && (
                        <div className="border-t border-[rgba(255,255,255,0.04)] pt-2 mt-2 flex flex-wrap gap-1">
                          {work.tags.map((tag) => (
                            <span key={tag} className="text-[9px] text-[#8e9196] bg-white/5 px-1.5 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* IMPACT */}
                    {work.impact && work.impact.length > 0 && (
                      <div className="space-y-1.5 mb-6">
                        {work.impact.map((imp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#8e9196] lowercase">
                            <span className="mt-2 w-1.5 h-px bg-[#8e9196] shrink-0" />
                            <span>{imp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.04)]">
                    <div className="flex gap-2 text-[#8e9196]">
                      {work.icon.map((iconName) => (
                        <span key={iconName} title={iconName}>
                          {techIcons[iconName] ?? null}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-[9px] uppercase text-[#8e9196]">operational tool</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. EXPLORE & EXPERIMENTS */}
        {experimentSectors.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-[rgba(255,255,255,0.04)] pb-4">
              <span className="font-mono text-xs text-[#fafafa] font-medium lowercase">explore & experiments</span>
              <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">technical studies</span>
            </div>
            
            <p className="text-xs text-[#8e9196] lowercase mb-8 max-w-xl -mt-4">
              learning-driven builds, campus projects, and small systems made to explore ideas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experimentSectors.map((work) => (
                <div 
                  key={work.id}
                  className="group border border-[rgba(255,255,255,0.06)] bg-[#101112] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 rounded p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-[rgba(255,255,255,0.03)] pb-3">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#8e9196] flex items-center gap-1.5">
                        <FaFlask size={8} /> lab module
                      </span>
                      {work.status && (
                        <span className="font-mono text-[9px] text-[#8e9196] lowercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                          {work.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-medium text-[#fafafa] lowercase mb-2 group-hover:text-white transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs text-[#8e9196] leading-relaxed mb-6 lowercase">{work.description}</p>

                    {/* LAB LOG */}
                    {work.tags && work.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-6">
                        {work.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[9px] text-[#8e9196] bg-[#0c0d0e] border border-[rgba(255,255,255,0.04)] px-2 py-0.5 rounded lowercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* IMPACT AS RESEARCH FINDINGS */}
                    {work.impact && work.impact.length > 0 && (
                      <div className="space-y-2 pt-4 border-t border-[rgba(255,255,255,0.04)] mb-6 font-mono text-[10px] text-[#8e9196] lowercase">
                        <div className="text-[#fafafa]">&gt; implementation metrics:</div>
                        {work.impact.map((imp, i) => (
                          <div key={i} className="pl-3 relative">
                            <span className="absolute left-0 top-0">-</span>
                            {imp}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.04)]">
                    <div className="flex gap-2 text-[#8e9196]">
                      {work.icon.map((iconName) => (
                        <span key={iconName} title={iconName}>
                          {techIcons[iconName] ?? null}
                        </span>
                      ))}
                    </div>

                    {work.github && (
                      <a 
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1"
                      >
                        lab code <FaGithub size={10} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>
    </main>
  );
};

export default WorksPage;
