"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";
import { FaArrowRight, FaEnvelope, FaGithub, FaGlobe } from "react-icons/fa";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <main className="w-full bg-[#0c0d0e] min-h-screen text-[#e4e4e7] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-16 md:pt-32 md:pb-24 border-b border-[rgba(255,255,255,0.06)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Creative Detail 1: Live Status Ticker */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded bg-[#161819] border border-[rgba(255,255,255,0.06)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4d7c0f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65a30d]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">
              currently building: teh solo bookkeeping v1.4
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-light tracking-tight text-[#fafafa] mb-6 lowercase leading-tight"
          >
            i build reliable <span className="font-semibold text-white">web systems</span> & <span className="italic text-[#8e9196]">tactile interfaces</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#8e9196] leading-relaxed max-w-2xl lowercase mb-10"
          >
            i&apos;m muhar, a software engineer based in solo, indonesia. i write clean code for internal erp tools, accounting platforms, and high-performance mobile apps. quiet systems, robust databases, and zero buzzwords.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 bg-[#fafafa] text-[#0c0d0e] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:bg-[#8e9196] transition-colors"
            >
              selected works <FaArrowRight size={10} />
            </Link>
            <Link
              href="/link"
              className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.15)] text-[#fafafa] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded hover:border-[#fafafa] transition-colors"
            >
              connect
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CURRENT FOCUS / SYSTEM SPECS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">01 / core conviction</span>
          <h2 className="text-xl font-semibold text-[#fafafa]">systems that run quietly.</h2>
          <p className="text-sm text-[#8e9196] leading-relaxed">
            i believe software should work silently without needing constant firefighting. i specialize in turning messy manual spreadsheets into clean, structured relational databases.
          </p>
        </div>

        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">02 / stack design</span>
          <h2 className="text-xl font-semibold text-[#fafafa]">pragmatic engineering.</h2>
          <p className="text-sm text-[#8e9196] leading-relaxed">
            i choose technologies based on the problem, not the hype. Next.js, Laravel, Node.js, and SQLite / PostgreSQL. if it is robust and fast to load, it stays.
          </p>
        </div>

        {/* Creative Detail 2: Monospace Spec Block */}
        <div className="p-6 bg-[#161819] border border-[rgba(255,255,255,0.05)] rounded flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196] mb-4">system environment</div>
            <ul className="space-y-2 font-mono text-[11px] text-[#e4e4e7]">
              <li className="flex justify-between border-b border-[rgba(255,255,255,0.03)] pb-1">
                <span className="text-[#8e9196]">OS</span>
                <span>macOS / Linux</span>
              </li>
              <li className="flex justify-between border-b border-[rgba(255,255,255,0.03)] pb-1">
                <span className="text-[#8e9196]">Editor</span>
                <span>VSCode / Vim</span>
              </li>
              <li className="flex justify-between border-b border-[rgba(255,255,255,0.03)] pb-1">
                <span className="text-[#8e9196]">Database</span>
                <span>SQLite, Mysql, Mongo</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#8e9196]">Mobile Framework</span>
                <span>Flutter (Dart)</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.03)] font-mono text-[10px] text-[#8e9196]">
            last push: {new Date().toISOString().split("T")[0]}
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">03 / production code</span>
            <h2 className="text-2xl md:text-3xl font-light text-[#fafafa] mt-2">selected systems</h2>
          </div>
          <Link href="/works" className="font-mono text-xs uppercase tracking-wider text-[#8e9196] hover:text-[#fafafa] transition-colors flex items-center gap-1.5">
            view all works <FaArrowRight size={10} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: Teh Solo */}
          <div className="group border border-[rgba(255,255,255,0.06)] bg-[#101112] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 rounded overflow-hidden flex flex-col justify-between p-6">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-[#8e9196]">Teh Solo Management System</span>
                <span className="px-2 py-0.5 font-mono text-[9px] bg-white/5 border border-white/10 rounded uppercase text-[#fafafa]">
                  ERP & Sales
                </span>
              </div>
              <h3 className="text-lg font-medium text-[#fafafa] mb-2 group-hover:text-white transition-colors">
                accounting & cash flow engine for a local tea company.
              </h3>
              <p className="text-xs text-[#8e9196] leading-relaxed mb-6">
                completely centralized paper-based bookkeeping into a reliable Next.js system. handles daily cash sheets, itemized raw material overheads, and monthly profit margins.
              </p>

              {/* Creative Detail 1: Live Interactive Schema / Ledger Visual */}
              <div className="font-mono text-[10px] bg-[#0c0d0e] border border-[rgba(255,255,255,0.04)] p-4 rounded text-[#8e9196] mb-6">
                <div className="text-[#fafafa] mb-1.5 flex justify-between">
                  <span>db_ledger_audit.sql</span>
                  <span className="text-[#65a30d]">success</span>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-1.5 space-y-1">
                  <div>SELECT date, sum(amount) FROM cash_inflows GROUP BY date;</div>
                  <div className="text-white/30">&gt; 12,450 rows processed successfully</div>
                  <div className="text-white/30">&gt; 100% bookkeeping audit match</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[rgba(255,255,255,0.04)]">
              <div className="flex items-center gap-3 text-[#8e9196]">
                <SiNextdotjs size={14} />
                <SiReact size={14} />
                <SiMongodb size={14} />
              </div>
              <a
                href="https://tehsoloms.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1.5"
              >
                live system <FaGlobe size={10} />
              </a>
            </div>
          </div>

          {/* Project 2: Pharmacy Management */}
          <div className="group border border-[rgba(255,255,255,0.06)] bg-[#101112] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 rounded overflow-hidden flex flex-col justify-between p-6">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[10px] text-[#8e9196]">Pharmacy Management System</span>
                <span className="px-2 py-0.5 font-mono text-[9px] bg-white/5 border border-white/10 rounded uppercase text-[#fafafa]">
                  Database
                </span>
              </div>
              <h3 className="text-lg font-medium text-[#fafafa] mb-2 group-hover:text-white transition-colors">
                stock auditing & prescription fulfillment manager.
              </h3>
              <p className="text-xs text-[#8e9196] leading-relaxed mb-6">
                campus database system focused on indexing medical formulas, prescription stocks, and transaction flows. optimized queries to prevent overlapping sales during low stock triggers.
              </p>

              {/* Creative Detail 2: Schema Blueprint Block */}
              <div className="font-mono text-[10px] bg-[#0c0d0e] border border-[rgba(255,255,255,0.04)] p-4 rounded text-[#8e9196] mb-6">
                <div className="text-[#fafafa] mb-1.5">schema_relations.dbml</div>
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-1.5 space-y-1">
                  <div>Table medicine &#123; id primary, formula text, stock int &#125;</div>
                  <div>Table sales &#123; id primary, medicine_id ref, quantity int &#125;</div>
                  <div className="text-[#6366f1] font-semibold">&gt; constraint: stock &gt;= quantity</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[rgba(255,255,255,0.04)]">
              <div className="flex items-center gap-3 text-[#8e9196]">
                <SiLaravel size={14} />
                <SiPhp size={14} />
                <SiMysql size={14} />
              </div>
              <a
                href="https://github.com/muhar05/pharmacy_management.git"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1.5"
              >
                codebase <FaGithub size={10} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TECH DRAWER / STACK INVENTORY */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[rgba(255,255,255,0.06)]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">04 / desk setup</span>
          <h2 className="text-2xl md:text-3xl font-light text-[#fafafa] mt-2 mb-12">technology stack</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div className="border border-[rgba(255,255,255,0.04)] bg-[#101112] p-6 rounded">
            <div className="text-[#fafafa] mb-4 uppercase tracking-wider">frontend</div>
            <ul className="space-y-2 text-[#8e9196]">
              <li className="flex items-center gap-2"><SiReact /> React</li>
              <li className="flex items-center gap-2"><SiNextdotjs /> Next.js</li>
              <li className="flex items-center gap-2"><SiTypescript /> TypeScript</li>
              <li className="flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</li>
            </ul>
          </div>

          <div className="border border-[rgba(255,255,255,0.04)] bg-[#101112] p-6 rounded">
            <div className="text-[#fafafa] mb-4 uppercase tracking-wider">backend</div>
            <ul className="space-y-2 text-[#8e9196]">
              <li className="flex items-center gap-2"><SiLaravel /> Laravel</li>
              <li className="flex items-center gap-2"><SiPhp /> PHP</li>
              <li className="flex items-center gap-2">Node.js</li>
              <li className="flex items-center gap-2">RESTful APIs</li>
            </ul>
          </div>

          <div className="border border-[rgba(255,255,255,0.04)] bg-[#101112] p-6 rounded">
            <div className="text-[#fafafa] mb-4 uppercase tracking-wider">database</div>
            <ul className="space-y-2 text-[#8e9196]">
              <li className="flex items-center gap-2"><SiPostgresql /> PostgreSQL</li>
              <li className="flex items-center gap-2"><SiSqlite /> SQLite</li>
              <li className="flex items-center gap-2"><SiMysql /> MySQL</li>
              <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
            </ul>
          </div>

          <div className="border border-[rgba(255,255,255,0.04)] bg-[#101112] p-6 rounded">
            <div className="text-[#fafafa] mb-4 uppercase tracking-wider">tactile & build</div>
            <ul className="space-y-2 text-[#8e9196]">
              <li className="flex items-center gap-2"><SiFlutter /> Flutter</li>
              <li className="flex items-center gap-2">Git / GitHub</li>
              <li className="flex items-center gap-2">Neovim setup</li>
              <li className="flex items-center gap-2">ERP UX design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIMENTS / DIGITAL DRAFTS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">05 / visual playground</span>
            <h2 className="text-2xl md:text-3xl font-light text-[#fafafa] mt-2">playground & sketches</h2>
          </div>
          <span className="font-mono text-[10px] text-[#8e9196] uppercase tracking-widest">imperfect logs</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[rgba(255,255,255,0.06)] bg-[#101112] p-6 rounded flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#8e9196]">Sketch 01 / System Design</span>
              <h4 className="text-base text-[#fafafa] font-medium mt-3 mb-2">ERP Architecture Draft</h4>
              <p className="text-xs text-[#8e9196] leading-relaxed">
                drafting accounting flows that balance raw materials vs itemized sales records in a highly concurrent database.
              </p>
            </div>
            <div className="mt-6 border-t border-[rgba(255,255,255,0.04)] pt-4 flex justify-between items-center text-[#8e9196] text-[10px] font-mono">
              <span>SQLite schema flow</span>
              <span>2026-05-20</span>
            </div>
          </div>

          <div className="border border-[rgba(255,255,255,0.06)] bg-[#101112] p-6 rounded flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#8e9196]">Sketch 02 / Creative Code</span>
              <h4 className="text-base text-[#fafafa] font-medium mt-3 mb-2">Asymmetric CSS Blueprint</h4>
              <p className="text-xs text-[#8e9196] leading-relaxed">
                experimenting with raw non-traditional layouts without frameworks to maximize visual weight and readability.
              </p>
            </div>
            <div className="mt-6 border-t border-[rgba(255,255,255,0.04)] pt-4 flex justify-between items-center text-[#8e9196] text-[10px] font-mono">
              <span>CSS layout grid</span>
              <span>2026-05-15</span>
            </div>
          </div>

          <div className="border border-[rgba(255,255,255,0.06)] bg-[#101112] p-6 rounded flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#8e9196]">Sketch 03 / Human Detail</span>
              <h4 className="text-base text-[#fafafa] font-medium mt-3 mb-2">tactile keyboard sound design</h4>
              <p className="text-xs text-[#8e9196] leading-relaxed">
                recording customized keystroke audio models to enrich user feedback loops inside silent data inputs.
              </p>
            </div>
            <div className="mt-6 border-t border-[rgba(255,255,255,0.04)] pt-4 flex justify-between items-center text-[#8e9196] text-[10px] font-mono">
              <span>Audio experiments</span>
              <span>2026-05-02</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CONNECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-xl">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">06 / contact</span>
          <h2 className="text-3xl font-light text-[#fafafa] mt-2 mb-6">let&apos;s build something.</h2>
          <p className="text-sm text-[#8e9196] leading-relaxed lowercase mb-8">
            need an internal tool built? want to discuss clean user flows, system database architecture, or mechanical keyboards? drop me a line. i generally reply within a day.
          </p>

          <a
            href="mailto:ferdiansyahmuh5@gmail.com"
            className="inline-flex items-center gap-3 bg-[#fafafa] text-[#0c0d0e] font-mono text-xs uppercase tracking-wider px-6 py-4 rounded hover:bg-[#8e9196] transition-colors"
          >
            <FaEnvelope size={12} /> ferdiansyahmuh5@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
