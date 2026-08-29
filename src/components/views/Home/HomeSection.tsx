"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  staggerContainer as containerVariants,
  fadeUp as itemVariants,
} from "@/app/lib/animations";
import worksData from "@/app/data/works.json";
import { Work } from "@/types/works";
import WorkCard from "@/components/ui/WorkCard";
import type { GitHubStats } from "@/lib/github";

const HomePage = ({ githubStats }: { githubStats?: GitHubStats | null }) => {
  const works = worksData as Work[];
  const flagshipSlugs = [
    "internal-erp-system",
    "ecobank026",
    "ecarrgo-platform",
  ];
  const selectedWorks = works.filter((w) => flagshipSlugs.includes(w.slug));

  return (
    <main className="w-full bg-[var(--bg-primary)] min-h-screen text-[var(--text-secondary)] overflow-hidden">
      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-16 md:pt-32 md:pb-24 border-b border-[var(--border-subtle)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded bg-[var(--bg-muted)] border border-[var(--border-subtle)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4d7c0f] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65a30d]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              currently available for work inquiries. let&rsquo;s build
              something together.
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-light tracking-tight text-[var(--text-primary)] mb-6 lowercase leading-tight"
          >
            i&rsquo;m muhar. <br />
            <span className="font-semibold text-white">
              fullstack developer
            </span>{" "}
            building internal systems and business applications.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl lowercase mb-10"
          >
            i build business applications and internal systems around real
            operational workflows — relational, data-driven tools that replace
            manual processes. based in banten, indonesia.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/works"
              className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:bg-[var(--text-muted)] transition-colors"
            >
              selected works <FaArrowRight size={10} />
            </Link>
            <a
              href="https://github.com/muhar05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--border-medium)] text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:border-[var(--text-primary)] transition-colors"
            >
              github <FaGithub size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhar-ferdiansyah-b44161291/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--border-medium)] text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:border-[var(--text-primary)] transition-colors"
            >
              linkedin <FaLinkedin size={12} />
            </a>
            <Link
              href="/link"
              className="inline-flex items-center gap-2 border border-[var(--border-medium)] text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:border-[var(--text-primary)] transition-colors"
            >
              connect
            </Link>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]"
          >
            business workflows · rbac · data consistency · relational systems
          </motion.p>
        </motion.div>
      </section>

      {/* SELECTED SYSTEMS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[var(--border-subtle)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              01 / selected systems
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--text-primary)] mt-2">
              selected systems
            </h2>
          </div>
          <Link
            href="/works"
            className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
          >
            view all works <FaArrowRight size={10} />
          </Link>
        </div>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl mb-12">
          Business systems built around workflows, data consistency, and
          role-based access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedWorks.map((work) => (
            <WorkCard key={work.id} work={work} priority />
          ))}
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            02 / core conviction
          </span>
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            systems that run quietly.
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            i believe software should work silently without needing constant
            firefighting. i specialize in turning messy manual spreadsheets into
            clean, structured relational databases.
          </p>
        </div>
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            03 / stack design
          </span>
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            pragmatic engineering.
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            i choose technologies based on the problem, not the hype. Next.js,
            Laravel, Node.js, and SQLite / PostgreSQL. if it is robust and fast
            to load, it stays.
          </p>
        </div>
      </section>

      {/* STACK */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[var(--border-subtle)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            04 / desk setup
          </span>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--text-primary)] mt-2 mb-12">
            technology stack
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          {[
            {
              title: "frontend",
              items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
            {
              title: "backend",
              items: ["Laravel", "PHP", "Node.js", "RESTful APIs"],
            },
            {
              title: "database",
              items: ["PostgreSQL", "MySQL", "SQLite"],
            },
            {
              title: "tools",
              items: ["Flutter", "Git / GitHub"],
            },
          ].map((group) => (
            <div
              key={group.title}
              className="border border-[var(--border-light)] bg-[var(--bg-card)] p-6 rounded"
            >
              <div className="text-[var(--text-primary)] mb-4 uppercase tracking-wider">
                {group.title}
              </div>
              <ul className="space-y-2 text-[var(--text-muted)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* GITHUB */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[var(--border-subtle)]">
        <div className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            05 / github
          </span>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--text-primary)] mt-2">
            github
          </h2>
        </div>

        {githubStats ? (
          <div className="space-y-8">
            <div>
              <div className="text-3xl font-light text-[var(--text-primary)]">
                {githubStats.publicRepos.toLocaleString()}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mt-1">
                public repositories
              </div>
            </div>
            {githubStats.topLanguages.length > 0 && (
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  languages I use
                </div>
                <ul className="space-y-3">
                  {githubStats.topLanguages.map((lang) => {
                    const pct = Math.max(
                      8,
                      Math.round(
                        (lang.count / githubStats.topLanguages[0].count) * 100,
                      ),
                    );
                    return (
                      <li key={lang.name} className="flex items-center gap-3">
                        <span className="w-28 shrink-0 text-sm text-[var(--text-secondary)]">
                          {lang.name}
                        </span>
                        <span
                          className="relative h-1.5 flex-1 rounded-full bg-[var(--border-light)]"
                          aria-hidden="true"
                        >
                          <span
                            className="absolute inset-y-0 left-0 rounded-full bg-[var(--border-medium)]"
                            style={{ width: `${pct}%` }}
                          />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-[var(--text-muted)]">
            github data temporarily unavailable.
          </p>
        )}

        <div className="mt-8">
          <a
            href="https://github.com/muhar05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border-medium)] text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:border-[var(--text-primary)] transition-colors"
          >
            view github <FaArrowRight size={10} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-xl">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            06 / contact
          </span>
          <h2 className="text-3xl font-light text-[var(--text-primary)] mt-2 mb-6">
            let&rsquo;s build something.
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed lowercase mb-8">
            need an internal tool built? want to discuss clean user flows,
            system database architecture? drop me a line. i generally reply
            within a day.
          </p>
          <a
            href="mailto:ferdiansyahmuh5@gmail.com"
            className="inline-flex items-center gap-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs uppercase tracking-wider px-6 py-4 rounded hover:bg-[var(--text-muted)] transition-colors"
          >
            <FaEnvelope size={12} /> ferdiansyahmuh5@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
