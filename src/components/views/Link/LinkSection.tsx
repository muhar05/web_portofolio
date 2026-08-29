"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFileDownload, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp, fadeInLeft } from "@/app/lib/animations";
import links from "@/app/data/links.json";

const iconMap: Record<string, React.ReactNode> = {
  FaEnvelope: <FaEnvelope />,
  FaLinkedin: <FaLinkedin />,
  FaGithub: <FaGithub />,
  FaInstagram: <FaInstagram />,
  FaFileDownload: <FaFileDownload />,
};

const LinkPage = () => {
  return (
    <main className="w-full bg-[var(--bg-primary)] min-h-screen flex items-center justify-center py-16 px-6 text-[var(--text-secondary)]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-sm border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 rounded"
      >
        <div className="flex flex-col items-center mb-8 border-b border-[var(--border-light)] pb-6">
          <h1 className="text-xl font-medium text-[var(--text-primary)] mb-1 lowercase">muhar ferdiansyah</h1>
          <p className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">fullstack developer</p>
        </div>

        <div className="space-y-3">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 3 }}
              className="flex items-center justify-between p-3.5 rounded border border-[var(--border-light)] bg-[var(--bg-muted)] hover:border-[var(--border-medium)] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  {iconMap[link.icon]}
                </div>
                <span className="font-mono text-xs text-[var(--text-primary)] lowercase">{link.title}</span>
              </div>
              <FaChevronRight size={10} className="text-[var(--text-muted)] group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-light)] text-center">
          <p className="text-[10px] font-mono text-[var(--text-muted)] lowercase">let's build something stable.</p>
        </div>
      </motion.div>
    </main>
  );
};

export default LinkPage;