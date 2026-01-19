"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../../../../../public/img/profile_picture.jpg";

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-slate-200 dark:bg-black transition-all">
      <section className="max-w-5xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12 p-8">
        {/* PROFILE IMAGE */}
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border border-slate-400 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700 animate-pulse" />
            )}

            <Image
              src={ProfilePicture}
              alt="Muhar Ferdiansyah profile"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              onLoadingComplete={() => setIsLoading(false)}
              priority
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold dark:text-white"
          >
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300"
          >
            I’m Muhar Ferdiansyah, a remote fullstack developer with 1+ year
            experience working on real projects. I build web applications from
            frontend to backend with a focus on clean code and maintainable
            systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300"
          >
            My main stack includes JavaScript, TypeScript, React, Next.js,
            Node.js, Laravel, and SQL databases. I enjoy learning from real
            project challenges and continuously improving my development
            process.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300"
          >
            I’m comfortable working remotely, collaborating with teams, managing
            tasks, and delivering features on time. Currently open for freelance
            or full time opportunities.
          </motion.p>

          {/* QUICK HIGHLIGHTS */}
          <ul className="mt-6 space-y-2 text-slate-700 dark:text-slate-300">
            <li>• 1+ year freelance experience</li>
            <li>• Web app development focus</li>
            <li>• Clean and maintainable code</li>
            <li>• Remote collaboration</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
