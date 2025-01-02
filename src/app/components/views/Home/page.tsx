import Footer from "../../fragments/Footer/page";
import { InfiniteMovingCard } from "../../ui/InfiniteMovingCard/page";
import { TextGenerateEffect } from "../../ui/TextGeneratedEffects/page";
import {
  FaReact,
  FaNode,
  FaPython,
  FaJs,
  FaGithub,
  FaVuejs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiSqlite,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiTypeorm,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { FlipWords } from "../../ui/FlipWords/page";

const HomePage = () => {
  const words =
    "I am a Fullstack Developer with experience in developing applications from frontend to backend, ready to help bring your ideas to life.";
  const icons = [
    <FaReact size={50} color="#61DBFB" />,
    <FaNode size={50} color="#68A063" />,
    <FaJs size={50} color="#F0DB4F" />,
    <FaGithub size={50} color="#000000" />,
    <FaVuejs size={50} color="#41B883" />,
    <FaPhp size={50} color="#06B6D4" />,
    <SiExpress size={50} color="#000000" />,
    <SiMongodb size={50} color="#000000" />,
    <SiMysql size={50} color="#00000" />,
    <SiSqlite size={50} color="#000000" />,
    <SiNestjs size={50} color="#E0234E" />,
    <SiNextdotjs size={50} color="#000000" />,
    <FaLaravel size={50} color="#FF2D20" />,
    <SiTypescript size={50} color="#3178C6" />,
    <SiTailwindcss size={50} color="#06B6D4" />,
    <BiLogoPostgresql size={50} color="#000000" />,
  ];

  const roleWords = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];

  return (
    <div className="w-full h-full bg-slate-200 overflow-x-hidden">
      <div className="flex w-full h-screen justify-center items-center">
        <div className="w-full p-6 mobile:w-1/2">
          <h1 className="mobile:text-2xl text-2xl font-bold">
            Hello! I am a<FlipWords words={roleWords} />
          </h1>
          <TextGenerateEffect words={words} />
          <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 mt-6">
            Let's Get in Touch
          </button>
        </div>
      </div>
      <div className="w-full h-full mobile:flex justify-center  items-center p-6">
        <div className="w-full mb-6">
          <h1 className="text-3xl font-bold">Skils And Tools</h1>
          <p className="text-slate-600 text-2xl">
            For more details, please visit my GitHub profile.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-2">
            {icons.map((icon, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center bg-slate-300 p-3 rounded-s-lg hover:bg-slate-400 transition-all duration-300"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
