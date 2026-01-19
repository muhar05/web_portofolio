import Portfolio1 from "../../../public/img/port1.png";
import Portfolio2 from "../../../public/img/port2.png";
import Portfolio3 from "../../../public/img/port3.png";
import Portfolio4 from "../../../public/img/port4.png";
import Portfolio5 from "../../../public/img/port5.png";
import Portfolio6 from "../../../public/img/port6.png";

export const works = [
  {
    id: 1,
    slug: "teh-solo",
    title: "Teh Solo Management System",
    description:
      "A web application built as a solo fullstack project for a personal tea business. Features include income and expense tracking, sales management, and simple financial reporting.",
    role: "Fullstack Developer",
    impact: [
      "Helped track daily income and expenses more accurately",
      "Reduced manual bookkeeping process",
      "Improved business monitoring through simple dashboard",
    ],
    header: Portfolio1,
    icon: ["SiNextdotjs", "SiReact", "SiMongodb"],
    ongoing: false,
    source: "closed-source",
    domain: "https://tehsoloms.vercel.app",
  },
  {
    id: 2,
    slug: "pharmacy-management",
    title: "Pharmacy Management System",
    description:
      "A campus project to manage pharmacy data, including prescription drugs with detailed information, stock management, and transaction records.",
    role: "Fullstack Developer",
    impact: [
      "Centralized medicine data management",
      "Improved stock monitoring accuracy",
      "Simplified transaction recording process",
    ],
    header: Portfolio2,
    icon: ["SiLaravel", "DiMysql", "SiPhp"],
    ongoing: false,
    source: "open-source",
    github: "https://github.com/muhar05/pharmacy_management.git",
  },
  {
    id: 3,
    slug: "coffee-shop-management",
    title: "Coffee Shop Management App",
    description:
      "A management application similar to Teh Solo, focused on sales tracking, expense management, and daily transaction monitoring.",
    role: "Fullstack Developer",
    impact: [
      "Helped record daily sales digitally",
      "Improved transaction tracking efficiency",
      "Reduced manual reporting",
    ],
    header: Portfolio3,
    icon: ["SiFlutter", "SiDart", "SiSqlite"],
    ongoing: false,
    source: "closed-source",
  },
  {
    id: 4,
    slug: "ecarrgo-platform",
    title: "ecarrgo Web & Mobile Platform",
    description:
      "A logistics platform for web and mobile applications. My role focused on frontend development with real-time chat, live tracking, and real-time auction features.",
    role: "Frontend Developer",
    impact: [
      "Implemented real-time chat for faster communication",
      "Built live tracking interface for shipment monitoring",
      "Developed real-time auction UI experience",
    ],
    header: Portfolio4, // ganti nanti dengan asset yang sesuai
    icon: ["SiReact", "SiFlutter"],
    ongoing: false,
    source: "closed-source",
  },
  {
    id: 5,
    slug: "nsa-performance-revamp",
    title: "NSA Performance Website Revamp",
    description:
      "Revamped the UI of nsaperformance.id and developed a flash sales feature using Laravel Blade to improve user experience and promotional flow.",
    role: "Frontend Developer",
    impact: [
      "Redesigned UI for better navigation and visual clarity",
      "Built flash sales feature with countdown timer",
      "Improved responsive layout across devices",
    ],
    domain: "https://nsaperformance.id/",
    header: Portfolio5,
    icon: ["SiLaravel", "SiPhp", "SiBlade"], // Blade bisa kamu map manual
    ongoing: false,
    source: "closed-source",
  },
  {
    id: 6,
    slug: "ppdb-online-system",
    title: "PPDB Online School System",
    description:
      "Developed an online student admission system integrated with a WordPress landing page. The system allows online registration, data validation, and admin management dashboard.",
    role: "Fullstack Developer",
    impact: [
      "Built online registration form with validation",
      "Integrated Laravel backend with WordPress landing page",
      "Created admin dashboard to manage applicants",
    ],
    tech: ["Laravel", "PHP", "MySQL", "WordPress"],
    header: Portfolio6,
    ongoing: false,
    source: "closed-source",
  },
];
