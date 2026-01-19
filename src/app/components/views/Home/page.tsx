"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNode,
  FaJs,
  FaGithub,
  FaVuejs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiPostgresql,
  SiCsharp,
} from "react-icons/si";
import { DiJava, DiPython } from "react-icons/di";

const HomePage = () => {
  const skills = {
    frontend: [
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: FaVuejs, name: "Vue" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: FaJs, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
    backend: [
      { icon: FaNode, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: FaLaravel, name: "Laravel" },
      { icon: SiNestjs, name: "NestJS" },
      { icon: FaPhp, name: "PHP" },
      { icon: DiJava, name: "Java" },
      { icon: SiCsharp, name: "C#" },
      { icon: DiPython, name: "Python" },
    ],
    database: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiSqlite, name: "SQLite" },
      { icon: SiPostgresql, name: "PostgreSQL" },
    ],
    tools: [
      { icon: FaGithub, name: "GitHub" },
      { icon: SiFlutter, name: "Flutter" },
    ],
  };

  return (
    <main className="w-full bg-slate-200 dark:bg-black transition-all">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl">
          <motion.h1
            className="text-3xl md:text-4xl font-bold dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Muhar Ferdiansyah
          </motion.h1>

          <motion.p
            className="mt-2 text-xl text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Remote Fullstack Developer
          </motion.p>

          <motion.p
            className="mt-4 text-base text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I build web applications from frontend to backend. 1+ year
            experience as a freelance developer. Focused on clean and
            maintainable code.
          </motion.p>

          {/* MINI SUMMARY */}
          <ul className="mt-6 space-y-2 text-slate-600 dark:text-slate-400">
            {[
              "Remote freelance experience",
              "Web application focus",
              "Clean and scalable code",
            ].map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                • {text}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link href="/works">
              <button className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium">
                View Projects
              </button>
            </Link>

            <Link href="/link">
              <button className="px-6 py-3 rounded-full border border-black dark:border-white dark:text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold dark:text-white mb-6">
          Skills & Tools
        </h2>

        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="mb-8">
            <h3 className="capitalize font-semibold mb-4 dark:text-white">
              {group}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {items.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-300 dark:bg-gray-700 hover:bg-slate-400 dark:hover:bg-slate-800 transition"
                >
                  <Icon className="text-3xl text-current" />
                  <span className="text-sm dark:text-white">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
