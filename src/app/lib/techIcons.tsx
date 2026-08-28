import {
  SiNextdotjs, SiReact, SiMongodb, SiLaravel, SiPhp, SiFlutter,
  SiTypescript, SiTailwindcss, SiPostgresql, SiSqlite, SiDart, SiMysql,
} from "react-icons/si";
import { DiMysql, DiJava, DiPython } from "react-icons/di";
import { FaGithub, FaGlobe, FaLock, FaFlask, FaTerminal, FaEnvelope, FaLinkedin, FaInstagram, FaFileDownload, FaExternalLinkAlt, FaArrowRight, FaChevronRight, FaFilePdf } from "react-icons/fa";
import { ReactNode } from "react";

export const techIcons: Record<string, ReactNode> = {
  SiNextdotjs: <SiNextdotjs className="h-4 w-4" />,
  SiReact: <SiReact className="h-4 w-4" />,
  SiMongodb: <SiMongodb className="h-4 w-4" />,
  SiLaravel: <SiLaravel className="h-4 w-4" />,
  SiPhp: <SiPhp className="h-4 w-4" />,
  DiMysql: <DiMysql className="h-4 w-4" />,
  SiMysql: <SiMysql className="h-4 w-4" />,
  SiFlutter: <SiFlutter className="h-4 w-4" />,
  SiTypescript: <SiTypescript className="h-4 w-4" />,
  SiTailwindcss: <SiTailwindcss className="h-4 w-4" />,
  SiPostgresql: <SiPostgresql className="h-4 w-4" />,
  DiPostgresql: <SiPostgresql className="h-4 w-4" />,
  SiSqlite: <SiSqlite className="h-4 w-4" />,
  SiDart: <SiDart className="h-4 w-4" />,
  DiJava: <DiJava className="h-4 w-4" />,
  DiPython: <DiPython className="h-4 w-4" />,
  SiBlade: <SiLaravel className="h-4 w-4" />,
  // Generic string fallback
  SiGithub: <FaGithub className="h-4 w-4" />,
  FaEnvelope: <FaEnvelope size={16} />,
  FaLinkedin: <FaLinkedin size={16} />,
  FaGithub: <FaGithub size={16} />,
  FaInstagram: <FaInstagram size={16} />,
  FaFileDownload: <FaFileDownload size={16} />,
};

export const iconComponents = {
  FaGithub, FaGlobe, FaLock, FaFlask, FaTerminal, FaEnvelope,
  FaLinkedin, FaInstagram, FaFileDownload, FaExternalLinkAlt,
  FaArrowRight, FaChevronRight, FaFilePdf,
};