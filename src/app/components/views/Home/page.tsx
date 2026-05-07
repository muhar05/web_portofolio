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
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
  FaFileDownload,
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
      { icon: FaReact, name: "React", color: "text-blue-400" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-black dark:text-white" },
      { icon: FaVuejs, name: "Vue", color: "text-green-500" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
      { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    ],
    backend: [
      { icon: FaNode, name: "Node.js", color: "text-green-600" },
      { icon: SiExpress, name: "Express", color: "text-gray-400" },
      { icon: FaLaravel, name: "Laravel", color: "text-red-500" },
      { icon: SiNestjs, name: "NestJS", color: "text-red-600" },
      { icon: FaPhp, name: "PHP", color: "text-indigo-400" },
      { icon: DiJava, name: "Java", color: "text-red-400" },
      { icon: SiCsharp, name: "C#", color: "text-purple-500" },
      { icon: DiPython, name: "Python", color: "text-yellow-500" },
    ],
    database: [
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
      { icon: SiSqlite, name: "SQLite", color: "text-blue-400" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-500" },
    ],
    tools: [
      { icon: FaGithub, name: "GitHub", color: "text-gray-200" },
      { icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative w-full overflow-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium"
          >
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            I&apos;m <span className="text-gradient">Muhar Ferdiansyah</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6"
          >
            Fullstack & Mobile Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10"
          >
            Crafting high-performance **Web & Mobile** applications with clean architecture. 
            Specializing in React, Next.js, and **Flutter** to build seamless digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/works">
              <button className="group relative px-8 py-4 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 transition-all duration-300">
                Explore Projects
                <span className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/link">
              <button className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-800 dark:text-white font-semibold glass glass-hover">
                Contact Me
              </button>
            </Link>

            <a 
              href="img/cv_muhar.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              <FaFileDownload />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* MOUSE SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-700 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 rounded-full bg-slate-400 dark:bg-slate-700"
            />
          </div>
        </motion.div>
      </section>

      {/* QUICK STATS SECTION */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Experience", value: "1+ Year" },
              { label: "Projects Done", value: "10+" },
              { label: "Success Rate", value: "100%" },
              { label: "Availability", value: "Remote" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl glass border border-white/5 text-center"
              >
                <div className="text-3xl font-extrabold text-indigo-500 mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO (SERVICES) SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What <span className="text-gradient">I Do</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              I combine technical expertise with creative problem-solving to deliver exceptional digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaGlobe, 
                title: "Web Development", 
                desc: "Building scalable, high-performance web applications using modern frameworks like Next.js and Laravel." 
              },
              { 
                icon: FaMobileAlt, 
                title: "Mobile Development", 
                desc: "Creating beautiful, cross-platform mobile experiences with Flutter for both iOS and Android." 
              },
              { 
                icon: FaDatabase, 
                title: "Backend Solutions", 
                desc: "Designing robust API architectures and managing complex databases for secure data handling." 
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] glass border border-white/5 hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Tech Stack</h2>
              <p className="text-slate-500 dark:text-slate-400">The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent hidden md:block mx-8" />
          </div>

          <div className="space-y-16">
            {Object.entries(skills).map(([group, items], groupIdx) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 }}
              >
                <h3 className="text-xl font-semibold capitalize mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-xs">0{groupIdx + 1}</span>
                  {group}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {items.map(({ icon: Icon, name, color }) => (
                    <motion.div
                      key={name}
                      whileHover={{ y: -5 }}
                      className="group p-6 rounded-2xl glass glass-hover flex flex-col items-center gap-4 text-center"
                    >
                      <div className={`text-4xl transition-transform duration-300 group-hover:scale-110 ${color}`}>
                        <Icon />
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};


export default HomePage;
