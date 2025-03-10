import { works } from "@/app/data/works/page";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
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

interface Props {
  params: {
    slug: string;
  };
}

const iconMap: Record<string, JSX.Element> = {
  SiNextdotjs: <SiNextdotjs className="h-6 w-6 text-gray-500" />,
  SiReact: <SiReact className="h-6 w-6 text-gray-500" />,
  SiMongodb: <SiMongodb className="h-6 w-6 text-gray-500" />,
  SiDart: <SiDart className="h-6 w-6 text-gray-500" />,
  SiFlutter: <SiFlutter className="h-6 w-6 text-gray-500" />,
  SiLaravel: <SiLaravel className="h-6 w-6 text-gray-500" />,
  SiPhp: <SiPhp className="h-6 w-6 text-gray-500" />,
  DiMysql: <DiMysql className="h-6 w-6 text-gray-500" />,
  SiSqlite: <SiSqlite className="h-6 w-6 text-gray-500" />,
};

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug.toString(),
  }));
}

export default function WorkDetail({ params }: Props) {
  const work = works.find((work) => work.slug === params.slug);

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
          {/* Tampilkan gambar di sini */}
          <div className="mb-4 flex justify-center">
            <Image
              src={work.header}
              alt={work.title}
              width={500}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>

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
                {iconMap[iconKey] ?? (
                  <span className="text-red-500">Icon Not Found</span>
                )}
              </motion.div>
            ))}
          </div>
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
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Domain
            </Link>
          )}
          {work.github && (
            <Link
              href={work.github}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Go to Github
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
