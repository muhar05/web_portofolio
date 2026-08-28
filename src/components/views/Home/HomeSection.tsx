"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { staggerContainer as containerVariants, fadeUp as itemVariants } from "@/app/lib/animations";
import worksData from "@/app/data/works.json";
import { Work } from "@/types/works";
import WorkCard from "@/components/ui/WorkCard";

const HomePage = () => {
  const works = worksData as Work[];
  const productionWorks = works
    .filter((w) => w.sector === "production")
    .slice(0, 3);

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
              currently building: teh solo bookkeeping v1.4
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-light tracking-tight text-[var(--text-primary)] mb-6 lowercase leading-tight"
          >
            i&rsquo;m muhar. <br />
            <span className="font-semibold text-white">
              creating systems
            </span>{" "}
            and{" "}
            <span className="italic text-[var(--text-muted)]">
              random chaos
            </span>
            .
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl lowercase mb-10"
          >
            building practical things on the internet and quiet interfaces for
            real workflows. currently building internal enterprise systems and
            side experiments in banten, indonesia.
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
            <Link
              href="/link"
              className="inline-flex items-center gap-2 border border-[var(--border-medium)] text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:border-[var(--text-primary)] transition-colors"
            >
              connect
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            01 / core conviction
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
            02 / stack design
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
        <div className="p-6 bg-[var(--bg-muted)] border border-[var(--border-light)] rounded flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-4">
              system environment
            </div>
            <ul className="space-y-2 font-mono text-[11px] text-[var(--text-secondary)]">
              <li className="flex justify-between border-b border-[var(--border-light)] pb-1">
                <span className="text-[var(--text-muted)]">OS</span>
                <span>macOS / Linux</span>
              </li>
              <li className="flex justify-between border-b border-[var(--border-light)] pb-1">
                <span className="text-[var(--text-muted)]">Editor</span>
                <span>VSCode / Vim</span>
              </li>
              <li className="flex justify-between border-b border-[var(--border-light)] pb-1">
                <span className="text-[var(--text-muted)]">Database</span>
                <span>SQLite, Mysql, Mongo</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--text-muted)]">
                  Mobile Framework
                </span>
                <span>Flutter (Dart)</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-4 border-t border-[var(--border-light)] font-mono text-[10px] text-[var(--text-muted)]">
            last push: {new Date().toISOString().split("T")[0]}
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[var(--border-subtle)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              03 / production code
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productionWorks.slice(0, 2).map((work) => (
            <WorkCard key={work.id} work={work} priority />
          ))}
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
              items: ["PostgreSQL", "SQLite", "MySQL", "MongoDB"],
            },
            {
              title: "tactile & build",
              items: [
                "Flutter",
                "Git / GitHub",
                "Neovim setup",
                "ERP UX design",
              ],
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

      {/* PLAYGROUND */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[var(--border-subtle)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              05 / visual playground
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--text-primary)] mt-2">
              playground & sketches
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
            imperfect logs
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Sketch 01 / System Design",
              title: "ERP Architecture Draft",
              desc: "drafting accounting flows that balance raw materials vs itemized sales records in a highly concurrent database.",
              meta: "SQLite schema flow",
              date: "2026-05-20",
            },
            {
              label: "Sketch 02 / Creative Code",
              title: "Asymmetric CSS Blueprint",
              desc: "experimenting with raw non-traditional layouts without frameworks to maximize visual weight and readability.",
              meta: "CSS layout grid",
              date: "2026-05-15",
            },
            {
              label: "Sketch 03 / Human Detail",
              title: "tactile keyboard sound design",
              desc: "recording customized keystroke audio models to enrich user feedback loops inside silent data inputs.",
              meta: "Audio experiments",
              date: "2026-05-02",
            },
          ].map((sketch) => (
            <div
              key={sketch.title}
              className="border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 rounded flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  {sketch.label}
                </span>
                <h4 className="text-base text-[var(--text-primary)] font-medium mt-3 mb-2">
                  {sketch.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {sketch.desc}
                </p>
              </div>
              <div className="mt-6 border-t border-[var(--border-light)] pt-4 flex justify-between items-center text-[var(--text-muted)] text-[10px] font-mono">
                <span>{sketch.meta}</span>
                <span>{sketch.date}</span>
              </div>
            </div>
          ))}
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
            system database architecture, or mechanical keyboards? drop me a
            line. i generally reply within a day.
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