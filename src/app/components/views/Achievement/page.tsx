"use client";

import achievements from "@/app/data/achievements.json";
import { FaFilePdf, FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const AchievementPage = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden py-20 lg:py-32">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Achievements</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
          >
            A recognition of my continuous learning journey and professional development in various technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-500 flex flex-col justify-between"
            >
              {/* DECORATIVE ICON BACKGROUND */}
              <div className="absolute top-4 right-4 opacity-[0.03] dark:opacity-[0.07] group-hover:opacity-10 transition-opacity">
                <FaAward size={120} />
              </div>

              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                    <FaFilePdf size={28} className="text-red-500" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-slate-500">
                    {achievement.issuer}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {achievement.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {achievement.description}
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href={achievement.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 transition-all group/btn"
                >
                  <FaExternalLinkAlt className="text-xs transition-transform group-hover/btn:scale-110" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};


export default AchievementPage;
