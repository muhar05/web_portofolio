"use client";

import achievements from "@/app/data/achievements.json";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const AchievementPage = () => {
  return (
    <main className="w-full bg-[#0c0d0e] min-h-screen py-16 md:py-24 text-[#e4e4e7]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="border-b border-[rgba(255,255,255,0.06)] pb-10 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">03 / continuous integration</span>
          <h1 className="text-3xl md:text-5xl font-light text-[#fafafa] tracking-tight mt-2 lowercase">
            technical <span className="font-semibold text-white">achievements</span>
          </h1>
          <p className="text-sm text-[#8e9196] leading-relaxed max-w-2xl lowercase mt-4">
            recognized continuous learning, standard-aligned course completions, and certifications across flutter development, systems engineering, and database logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group border border-[rgba(255,255,255,0.06)] bg-[#101112] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 rounded p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#8e9196]">
                    <FaFilePdf size={20} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8e9196]">
                    {achievement.issuer}
                  </span>
                </div>

                <h2 className="text-lg font-medium text-[#fafafa] mb-2 group-hover:text-white transition-colors lowercase">
                  {achievement.title}
                </h2>
                
                <p className="text-xs text-[#8e9196] leading-relaxed mb-6 lowercase">
                  {achievement.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.04)]">
                <a
                  href={achievement.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#fafafa] hover:text-[#8e9196] transition-colors inline-flex items-center gap-1.5"
                >
                  view certificate <FaExternalLinkAlt size={10} />
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
