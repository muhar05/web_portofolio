"use client";

import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { techIcons as techIconMap } from "@/app/lib/techIcons";
import { fadeUp, staggerContainer } from "@/app/lib/animations";
import type { Work } from "@/types/works";
import Image from "next/image";
import { Fragment, type ReactNode } from "react";

interface Props {
  work: Work;
}

const techLabels: Record<string, string> = {
  SiReact: "React",
  SiFlutter: "Flutter",
  SiLaravel: "Laravel",
  SiPhp: "PHP",
  DiMysql: "MySQL",
  SiNextdotjs: "Next.js",
  SiTypescript: "TypeScript",
  SiTailwindcss: "Tailwind CSS",
  DiPostgresql: "PostgreSQL",
  SiDart: "Dart",
  SiSqlite: "SQLite",
};

function splitWorkflow(wf: string) {
  const flows = wf
    .split(/Serta:/i)
    .map((f) => f.trim())
    .filter(Boolean);

  return (
    <div className="space-y-3" aria-label={wf}>
      {flows.map((flow, fi) => {
        const stages = flow
          .split("→")
          .map((s) => s.trim().replace(/\.$/, ""))
          .filter(Boolean);
        return (
          <Fragment key={fi}>
            {fi > 0 && (
              <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
                serta:
              </p>
            )}
            <div className="flex flex-wrap items-center gap-2">
              {stages.map((stage, si) => (
                <Fragment key={si}>
                  <span className="font-mono text-xs px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] rounded">
                    {stage}
                  </span>
                  {si < stages.length - 1 && (
                    <span className="text-[var(--text-muted)] text-sm leading-none">→</span>
                  )}
                </Fragment>
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default function WorkDetailClient({ work }: Props) {
  const hasLinks = Boolean(work.github || work.domain);
  const isPrivate =
    work.source?.includes("private") || work.sector === "private";

  return (
    <main className="w-full bg-[var(--bg-primary)] min-h-screen py-16 md:py-24 text-[var(--text-secondary)]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-12"
        >
          <FaArrowLeft size={10} /> back to works
        </Link>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header section */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              {work.icon.map((icon) => (
                <span key={icon} className="text-2xl text-[var(--text-muted)]">
                  {techIconMap[icon] || icon}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-light text-[var(--text-primary)] tracking-tight lowercase">
              {work.title}
            </h1>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {work.tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-muted)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeUp}>
            <div className="relative w-full aspect-video border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded overflow-hidden">
              <Image
                src={work.header}
                alt={work.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Info grid + links */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-[var(--border-subtle)] py-8">
              <InfoItem label="role" value={work.role} />
              <InfoItem label="status" value={work.status || work.sector} />
              <InfoItem label="source" value={work.source} />
              {work.ownership && <InfoItem label="ownership" value={work.ownership} />}
              {work.projectType && <InfoItem label="project type" value={work.projectType} />}
            </div>

            <div className="flex flex-wrap gap-4">
              {work.domain && (
                <a
                  href={work.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:bg-[var(--text-muted)] transition-colors"
                >
                  visit live site <FaExternalLinkAlt size={10} />
                </a>
              )}
              {work.github && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--border-medium)] text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:bg-[var(--bg-card)] transition-colors"
                >
                  view source <FaGithub size={14} />
                </a>
              )}
              {!hasLinks && isPrivate && (
                <span className="inline-flex items-center font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-muted)] rounded">
                  Private project · code available on request
                </span>
              )}
            </div>
          </motion.div>

          {/* Overview */}
          {work.context && (
            <Section title="overview">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {work.context}
              </p>
            </Section>
          )}

          {/* Problem / Context */}
          {work.problem && (
            <Section title="problem / context">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {work.problem}
              </p>
            </Section>
          )}

          {/* Workflow */}
          {work.workflow && (
            <Section title="workflow">
              {splitWorkflow(work.workflow)}
            </Section>
          )}

          {/* Engineering Highlights */}
          {work.engineeringHighlights && work.engineeringHighlights.length > 0 && (
            <Section title="engineering highlights">
              <ul className="space-y-3">
                {work.engineeringHighlights.map((h, i) => (
                  <li key={i} className="space-y-1">
                    <p className="text-sm text-[var(--text-primary)] font-medium">{h.title}</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {h.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Edge Cases */}
          {work.edgeCases && work.edgeCases.length > 0 && (
            <Section title="edge cases">
              <ul className="space-y-3">
                {work.edgeCases.map((e, i) => (
                  <li
                    key={i}
                    className="border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded p-4 space-y-1"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm text-[var(--text-primary)] font-medium">{e.title}</p>
                      {e.status && e.status !== "handled" && (
                        <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-muted)] rounded">
                          {e.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {e.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Technical Decisions */}
          {work.technicalDecisions && work.technicalDecisions.length > 0 && (
            <Section title="technical decisions">
              <ul className="space-y-3">
                {work.technicalDecisions.map((d, i) => (
                  <li key={i} className="space-y-1">
                    <p className="text-sm text-[var(--text-primary)] font-medium">{d.decision}</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {d.reason}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Impact (existing: key contributions) */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-lg font-medium text-[var(--text-primary)] lowercase">key contributions</h2>
            <ul className="space-y-3">
              {work.impact.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[var(--text-muted)] leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Outcome / Scope */}
          {work.outcome && (
            <Section title="outcome / scope">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {work.outcome}
              </p>
            </Section>
          )}

          {/* Limitations */}
          {work.limitations && (
            <Section title="limitations">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {work.limitations}
              </p>
            </Section>
          )}

          {/* Tech Stack */}
          {work.icon && work.icon.length > 0 && (
            <Section title="tech stack">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {work.icon.map((ic) => (
                  <li
                    key={ic}
                    className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    {techLabels[ic] || ic}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </motion.div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="space-y-4">
      <h2 className="text-lg font-medium text-[var(--text-primary)] lowercase">{title}</h2>
      {children}
    </motion.div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)] mb-1">{label}</p>
      <p className="font-mono text-xs text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
