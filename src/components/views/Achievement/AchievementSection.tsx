"use client";

import achievements from "@/app/data/achievements.json";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer as containerVariants, fadeUp as itemVariants } from "@/app/lib/animations";

const AchievementPage = () => {
  return (
    <main className="w-full bg-[var(--bg-primary)] min-h-screen py-16 md:py-24 text-[var(--text-secondary)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="border-b border-[var(--border-subtle)] pb-10 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">03 / continuous integration</span>
          <h1 className="text-3xl md:text-5xl font-light text-[var(--text-primary)] tracking-tight mt-2 lowercase">
            technical <span className="font-semibold text-white">achievements</span>
          </h1>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl lowercase mt-4">
            recognized continuous learning, standard-aligned course completions, and certifications across flutter development, systems engineering, and database logic.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-medium)] transition-all duration-300 rounded p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[var(--text-muted)]">
                    <FaFilePdf size={20} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
                    {achievement.issuer}
                  </span>
                </div>

                <h2 className="text-lg font-medium text-[var(--text-primary)] mb-2 group-hover:text-white transition-colors lowercase">
                  {achievement.title}
                </h2>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6 lowercase">
                  {achievement.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-light)]">
                <a
                  href={achievement.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[var(--text-primary)] hover:text-[var(--text-muted)] transition-colors inline-flex items-center gap-1.5"
                >
                  view certificate <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default AchievementPage;