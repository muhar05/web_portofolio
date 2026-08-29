"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaLock, FaFlask, FaTerminal } from "react-icons/fa";
import { techIcons } from "@/app/lib/techIcons";
import { Work } from "@/types/works";

type WorkCardProps = {
  work: Work;
  priority?: boolean;
  variant?: "production" | "private" | "experiment";
};

const SectorBadge = ({ sector }: { sector: Work["sector"] }) => {
  if (sector === "production")
    return (
      <span className="px-2 py-0.5 font-mono text-[9px] bg-white/5 border border-white/10 text-[#8e9196] rounded uppercase">
        production environment
      </span>
    );
  if (sector === "private")
    return (
      <span className="font-mono text-[9px] uppercase tracking-wider text-[#8e9196] flex items-center gap-1.5">
        <FaLock size={8} /> private infrastructure
      </span>
    );
  return (
    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8e9196] flex items-center gap-1.5">
      <FaFlask size={8} /> lab module
    </span>
  );
};

const SectorHeader = ({ sector }: { sector: Work["sector"] }) => {
  if (sector === "production")
    return (
      <div className="flex items-center gap-3 mb-8 border-b border-[rgba(255,255,255,0.04)] pb-4">
        <span className="font-mono text-xs text-[#fafafa] font-medium lowercase">production sector</span>
        <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">deployed & released</span>
      </div>
    );
  if (sector === "private")
    return (
      <div className="flex items-center gap-3 mb-8 border-b border-[rgba(255,255,255,0.04)] pb-4">
        <span className="font-mono text-xs text-[#fafafa] font-medium lowercase">private sector</span>
        <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">internal engines</span>
      </div>
    );
  return (
    <div className="flex items-center gap-3 mb-8 border-b border-[rgba(255,255,255,0.04)] pb-4">
      <span className="font-mono text-xs text-[#fafafa] font-medium lowercase">explore & experiments</span>
      <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8e9196]">technical studies</span>
    </div>
  );
};

const SectorHeaderDesc = ({ sector }: { sector: Work["sector"] }) => {
  if (sector === "production")
    return (
      <p className="text-xs text-[#8e9196] lowercase mb-8 max-w-xl -mt-4">
        real-world projects that are deployed, launched, or used in actual workflows.
      </p>
    );
  if (sector === "private")
    return (
      <p className="text-xs text-[#8e9196] lowercase mb-8 max-w-xl -mt-4">
        internal systems, operational tools, and role-based platforms built for real workflows.
      </p>
    );
  return (
    <p className="text-xs text-[#8e9196] lowercase mb-8 max-w-xl -mt-4">
      learning-driven builds, campus projects, and small systems made to explore ideas.
    </p>
  );
};

/** Renders the impact list for a work card. */
const ImpactList = ({ work }: { work: Work }) => {
  if (!work.impact?.length) return null;
  return (
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
  );
};

/** Renders the tags section. */
const TagsRow = ({ tags }: { tags?: string[] }) => {
  if (!tags?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mb-6">
      {tags.map((tag) => (
        <span key={tag} className="font-mono text-[9px] text-[#8e9196] border border-[rgba(255,255,255,0.04)] px-2 py-0.5 rounded lowercase">
          #{tag}
        </span>
      ))}
    </div>
  );
};

/** Renders the private-sector operational panel. */
const PrivatePanel = ({ work }: { work: Work }) => (
  <div className="bg-[#070809] border border-[rgba(255,255,255,0.04)] p-4 rounded mb-6 font-mono text-[11px] text-[#8e9196] space-y-2 lowercase">
    <div className="flex items-center gap-1 text-[#fafafa] mb-1">
      <FaTerminal size={8} /> <span>workflow parameters</span>
    </div>
    <div>
      <span className="text-[#fafafa]">{'>'} role assigned:</span> {work.role}
    </div>
    <div>
      <span className="text-[#fafafa]">{'>'} repository class:</span> {work.source}
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
);

/** Renders the experiment-sector metrics block. */
const ExperimentMetrics = ({ work }: { work: Work }) => {
  if (!work.impact?.length) return null;
  return (
    <div className="space-y-2 pt-4 border-t border-[rgba(255,255,255,0.04)] mb-6 font-mono text-[10px] text-[#8e9196] lowercase">
      <div className="text-[#fafafa]">{'>'} implementation metrics:</div>
      {work.impact.map((imp, i) => (
        <div key={i} className="pl-3 relative">
          <span className="absolute left-0 top-0">-</span>
          {imp}
        </div>
      ))}
    </div>
  );
};

const WorkLinks = ({ work }: { work: Work }) => (
  <div className="flex gap-3">
    {work.github && (
      <a href={work.github} target="_blank" rel="noopener noreferrer"
        className="font-mono text-[11px] text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1">
        codebase <FaGithub size={10} />
      </a>
    )}
    {work.domain && (
      <a href={work.domain} target="_blank" rel="noopener noreferrer"
        className="font-mono text-[11px] text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1">
        live link <FaGlobe size={10} />
      </a>
    )}
  </div>
);

const WorkCard = ({ work, priority = false }: WorkCardProps) => {
  const sector = work.sector;

  return (
    <div className="group border border-[rgba(255,255,255,0.06)] bg-[#101112] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 rounded overflow-hidden flex flex-col justify-between p-6">
      <div>
        {/* HEADER IMAGE */}
        {work.header && (
          <Link href={`/works/${work.slug}`}>
            <div className="relative w-full h-48 md:h-64 overflow-hidden rounded mb-6 border border-[rgba(255,255,255,0.06)] cursor-pointer">
              <Image
                src={work.header}
                alt={work.title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                width={800}
                height={500}
                priority={priority}
              />
            </div>
          </Link>
        )}

        {/* SECTOR-SPECIFIC TOP BAR */}
        {sector === "production" && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-[10px] text-[#8e9196]">{work.role}</span>
            {work.status && (
              <span className="px-2 py-0.5 font-mono text-[9px] bg-[#1a2e1a] border border-[#2d5a2d] text-[#8ce08c] rounded uppercase">
                {work.status}
              </span>
            )}
            <SectorBadge sector="production" />
          </div>
        )}

        {sector === "private" && (
          <div className="flex items-center justify-between mb-4 border-b border-[rgba(255,255,255,0.03)] pb-3">
            <SectorBadge sector="private" />
            {work.status && (
              <span className="px-2 py-0.5 font-mono text-[8px] bg-indigo-500/10 border border-indigo-500/20 text-[#8e9196] rounded uppercase">
                {work.status}
              </span>
            )}
          </div>
        )}

        {sector === "experiment" && (
          <div className="flex items-center justify-between mb-4 border-b border-[rgba(255,255,255,0.03)] pb-3">
            <SectorBadge sector="experiment" />
            {work.status && (
              <span className="font-mono text-[9px] text-[#8e9196] lowercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                {work.status}
              </span>
            )}
          </div>
        )}

        <Link href={`/works/${work.slug}`}>
          <h3 className="text-xl font-medium text-[#fafafa] lowercase mb-2 group-hover:text-white transition-colors cursor-pointer">
            {work.title}
          </h3>
        </Link>
        <p className="text-xs text-[#8e9196] leading-relaxed mb-6 lowercase">{work.description}</p>

        {work.qualifier && (
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#8e9196] mb-6">
            {work.qualifier}
          </p>
        )}

        {/* SECTOR-SPECIFIC BODY */}
        {sector === "production" && (
          <>
            <TagsRow tags={work.tags} />
            <ImpactList work={work} />
          </>
        )}

        {sector === "private" && <PrivatePanel work={work} />}

        {sector === "experiment" && (
          <>
            <TagsRow tags={work.tags} />
            <ExperimentMetrics work={work} />
          </>
        )}
      </div>

      {/* BOTTOM BAR – shared across sectors */}
      <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.04)]">
        <div className="flex gap-2 text-[#8e9196]">
          {work.icon.map((iconName) => (
            <span key={iconName} title={iconName}>
              {techIcons[iconName] ?? null}
            </span>
          ))}
        </div>

        {sector === "production" && <WorkLinks work={work} />}
        {sector === "private" && (
          <span className="font-mono text-[9px] uppercase text-[#8e9196]">operational tool</span>
        )}
        {sector === "experiment" && work.github && (
          <a href={work.github} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1">
            lab code <FaGithub size={10} />
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
export { SectorHeader, SectorHeaderDesc, SectorBadge, WorkLinks };