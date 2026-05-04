"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFileDownload, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../../../public/img/profile_picture.jpg";
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
    <main className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20 px-6">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500/30 mb-4 shadow-xl">
            <Image 
              src={ProfilePicture} 
              alt="Profile" 
              className="w-full h-full object-cover" 
              width={100} 
              height={100} 
            />
          </div>
          <h1 className="text-2xl font-bold text-gradient mb-1">Muhar Ferdiansyah</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Fullstack & Mobile Developer</p>
        </div>

        <div className="space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${link.color} shadow-lg`}>
                  {iconMap[link.icon]}
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{link.title}</span>
              </div>
              <FaChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Let&apos;s build something amazing together.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/muhar05" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/muhar-ferdiansyah-b44161291" className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            <a href="https://instagram.com/zx.harr" className="text-slate-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default LinkPage;

