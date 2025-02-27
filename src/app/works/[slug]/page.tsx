"use client";

import { useParams } from "next/navigation";
import { works } from "@/app/data/works/page";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SiDart,
  SiFlutter,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSqlite,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";
import { useMemo } from "react";

const iconMap: Record<string, JSX.Element> = {
  SiNextdotjs: (
    <SiNextdotjs className="h-6 w-6 text-neutral-500 dark:text-gray-200" />
  ),
  SiReact: <SiReact className="h-6 w-6 text-neutral-500 dark:text-gray-200" />,
  SiMongodb: (
    <SiMongodb className="h-6 w-6 text-neutral-500 dark:text-gray-200" />
  ),
  SiDart: <SiDart className="h-6 w-6 text-neutral-500 dark:text-gray-200" />,
  SiFlutter: (
    <SiFlutter className="h-6 w-6 text-neutral-500 dark:text-gray-200" />
  ),
  SiLaravel: (
    <SiLaravel className="h-6 w-6 text-neutral-500 dark:text-gray-200" />
  ),
  SiPhp: <SiPhp className="h-6 w-6 text-neutral-500 dark:text-gray-200" />,
  DiMysql: <DiMysql className="h-6 w-6 text-neutral-500 dark:text-gray-200" />,
  SiSqlite: (
    <SiSqlite className="h-6 w-6 text-neutral-500 dark:text-gray-200" />
  ),
};

export default function WorkDetail() {
  const params = useParams(); // Ambil params dari Next.js
  const slug = params?.slug as string; // Pastikan slug bertipe string

  const work = useMemo(() => works.find((w) => w.slug === slug), [slug]);

  if (!work) {
    return notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-200 dark:bg-black transition-all"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white"
        >
          {work.title}
        </motion.h1>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white shadow-2xl rounded-lg p-6 dark:bg-gray-900"
        >
          <div className="mb-4">{work.header}</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-sky-50">
            Deskripsi Proyek
          </h2>
          <p className="text-gray-600 mb-4 dark:text-gray-100">
            {work.description}
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-sky-50">
            Teknologi yang Digunakan
          </h2>
          <div className="flex gap-2">
            {work.icon.map((iconKey, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {iconMap[iconKey as keyof typeof iconMap] ?? (
                  <span>Icon Not Found</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tampilkan dokumentasi jika ada */}
          {work.documentation && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-sky-50">
                Dokumentasi
              </h2>
              {work.documentation.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                    {section.title}
                  </h3>
                  {section.content.map((content, idx) => (
                    <div key={idx} className="mb-4">
                      {content.type === "text" ? (
                        <p className="text-gray-600 dark:text-gray-300">{content.text}</p>
                      ) : (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-mono text-sm text-gray-800">
                            <span className="font-bold">
                              {content.endpoint?.method}
                            </span>{" "}
                            {content.endpoint?.path}
                          </p>
                          {content.endpoint?.middleware && (
                            <p className="text-sm text-gray-600 mt-1">
                              <span className="font-semibold">Middleware:</span>{" "}
                              {content.endpoint.middleware}
                            </p>
                          )}
                          <p className="text-sm text-gray-600 mt-1">
                            {content.endpoint?.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 mt-8 justify-center"
        >
          {work.domain && (
            <Link
              href={work.domain}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
            >
              Go to Domain
            </Link>
          )}
          {work.github && (
            <Link
              href={work.github}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300 mb-4"
            >
              Go to Github
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
