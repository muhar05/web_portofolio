"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFileDownload, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
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
    <main className="w-full bg-[#0c0d0e] min-h-screen flex items-center justify-center py-16 px-6 text-[#e4e4e7]">
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm border border-[rgba(255,255,255,0.06)] bg-[#101112] p-8 rounded"
      >
        <div className="flex flex-col items-center mb-8 border-b border-[rgba(255,255,255,0.04)] pb-6">
          <h1 className="text-xl font-medium text-[#fafafa] mb-1 lowercase">muhar ferdiansyah</h1>
          <p className="font-mono text-[10px] text-[#8e9196] uppercase tracking-wider">systems & ui developer</p>
        </div>

        <div className="space-y-3">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 3 }}
              className="flex items-center justify-between p-3.5 rounded border border-[rgba(255,255,255,0.04)] bg-[#0c0d0e] hover:border-[rgba(255,255,255,0.15)] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="text-[#8e9196] group-hover:text-[#fafafa] transition-colors">
                  {iconMap[link.icon]}
                </div>
                <span className="font-mono text-xs text-[#fafafa] lowercase">{link.title}</span>
              </div>
              <FaChevronRight size={10} className="text-[#8e9196] group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.04)] text-center">
          <p className="text-[10px] font-mono text-[#8e9196] lowercase">let&apos;s build something stable.</p>
        </div>
      </motion.div>
    </main>
  );
};

export default LinkPage;
