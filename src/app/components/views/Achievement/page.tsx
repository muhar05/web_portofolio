"use client";

import Image from "next/image";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { motion } from "framer-motion";

const AchievementPage = () => {
  const achievements = [
    {
      title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
      description:
        "Pemula yang ingin memulai kariernya di bidang Flutter Development dengan mengacu pada standar industri. Di akhir kelas, siswa dapat membuat aplikasi Flutter dengan memanfaatkan widget untuk menyusun layout-nya.",
      image: "/img/certif/flutter.pdf",
    },
    {
      title: "Memulai Pemrograman dengan Dart",
      description:
        "Kelas ditujukan bagi pemula yang ingin belajar dasar bahasa pemrograman Dart dengan mengacu pada standar industri. Di akhir kelas, siswa dapat membuat program Dart dengan menggunakan IDE IntelliJ IDEA atau IDE Online seperti DartPad.",
      image: "/img/certif/dart.pdf",
    },
    {
      title: "Kelas Belajar Menguasai Nest.js",
      description:
        "Yang telah menyelesaikan kelas Belajar Menguasai Nest.js dalam program Kelas Online CODEPOLITAN.",
      image: "/img/certif/nestjs.pdf",
    },
    {
      title: "Kelas Belajar Menguasai Vue.js",
      description:
        "Yang telah menyelesaikan kelas Belajar Cepat Vue.js dalam program Kelas Online CODEPOLITAN.",
      image: "/img/certif/vuejs.pdf",
    },
    {
      title: "Mastering Full Stack Development : From Frontend to Backend",
      image: "/img/certif/udemy.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6 dark:bg-black">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white"
        >
          Achievements
        </motion.h1>
        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 shadow-2xl rounded-lg p-6 text-center hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">
                {achievement.image.endsWith(".pdf") ? (
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FaFilePdf size={60} className="text-red-500 mb-2" />
                    </motion.div>
                    <a
                      href={achievement.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center gap-2 hover:from-blue-600 hover:to-purple-600 transition"
                    >
                      <FaExternalLinkAlt />
                      Lihat Sertifikat
                    </a>
                  </div>
                ) : achievement.image ? (
                  <Image
                    width={200}
                    height={150}
                    src={achievement.image}
                    alt={achievement.title}
                    className="mx-auto rounded-lg shadow"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <MdEmojiEvents
                        size={60}
                        className="text-yellow-500 mb-2"
                      />
                    </motion.div>
                    <p className="text-gray-500">No Image Available</p>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">
                {achievement.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementPage;
