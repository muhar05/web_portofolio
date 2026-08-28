"use client";

import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { techIcons as techIconMap } from "@/app/lib/techIcons";
import { fadeUp, staggerContainer } from "@/app/lib/animations";
import type { Work } from "@/types/works";
import Image from "next/image";

interface Props {
  work: Work;
}

export default function WorkDetailClient({ work }: Props) {
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
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl lowercase">
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

          {/* Info grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-[var(--border-subtle)] py-8"
          >
            <InfoItem label="role" value={work.role} />
            <InfoItem label="status" value={work.status || work.sector} />
            <InfoItem label="source" value={work.source} />
          </motion.div>

          {/* Impact */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-lg font-medium text-[var(--text-primary)] lowercase">key contributions</h2>
            <ul className="space-y-3">
              {work.impact.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[var(--text-muted)] leading-relaxed lowercase"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
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
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)] mb-1">{label}</p>
      <p className="font-mono text-xs text-[var(--text-primary)] lowercase">{value}</p>
    </div>
  );
}