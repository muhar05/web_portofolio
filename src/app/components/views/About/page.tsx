"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../../../../../public/img/profile_picture.jpg";

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const stats = [
    { label: "Experience", value: "1+ Year" },
    { label: "Focus", value: "Web & Mobile" },
    { label: "Status", value: "Available" },
    { label: "Location", value: "Remote" },
  ];

  const highlights = [
    "Mobile Development (Flutter)",
    "Fullstack Web (Next.js/Node)",
    "Clean and maintainable code",
    "Remote collaboration",
  ];

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 p-8 py-20 lg:py-32">
        {/* PROFILE IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* DECORATIVE BORDER */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 to-purple-500 rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20" />
            
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden glass border-2 border-white/10 shadow-2xl z-10">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 animate-pulse" />
              )}
              <Image
                src={ProfilePicture}
                alt="Muhar Ferdiansyah profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onLoadingComplete={() => setIsLoading(false)}
                priority
              />
            </div>
          </div>

          {/* FLOATING BADGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 -right-4 glass px-6 py-3 rounded-2xl z-20 shadow-xl border border-indigo-500/30"
          >
            <span className="text-sm font-bold text-gradient">Freelance Dev</span>
          </motion.div>
        </motion.div>

        {/* CONTENT SECTION */}
        <div className="flex-1 space-y-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About <span className="text-gradient">Me</span>
            </motion.h1>
            <div className="h-1 w-20 bg-indigo-500 rounded-full" />
          </div>

          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              I&apos;m Muhar Ferdiansyah, a remote fullstack developer with 1+ year
              experience working on real projects. I build web applications from
              frontend to backend with a focus on clean code and maintainable
              systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My main stack includes JavaScript, TypeScript, React, Next.js,
              Node.js, Laravel, and SQL databases. I also specialize in 
              **Mobile Development using Flutter** to build cross-platform applications 
              with high performance and beautiful UI.
            </motion.p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 rounded-2xl glass border border-white/5 text-center"
              >
                <div className="text-lg font-bold text-indigo-500 dark:text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* HIGHLIGHTS */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Core Focus</h3>
            <div className="flex flex-wrap gap-3">
              {highlights.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-sm text-slate-600 dark:text-slate-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};


export default AboutPage;
