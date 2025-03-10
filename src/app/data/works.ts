import Portfolio1 from "../../../public/img/port1.png";
import Portfolio2 from "../../../public/img/port2.png";
import Portfolio3 from "../../../public/img/port3.png";

export const works = [
  {
    id: 1,
    slug: "teh-solo",
    title: "Web App Teh Solo Management System",
    description:
      "Teh Solo is a web application for tea businesses to easily manage sales, expenses and inventory with automatic and real-time stock tracking.",
    header: Portfolio1, // Tetap menggunakan StaticImageData
    icon: ["SiNextdotjs", "SiReact", "SiMongodb"],
    ongoing: true,
    source: "closed-source",
    domain: "https://tehsoloms.vercel.app",
  },
  {
    id: 2,
    slug: "pharmacy-management",
    title: "Web App Pharmacy Management System",
    description:
      "Web App Pharmacy Management System is a web-based application to manage pharmacy operations digitally. Its main features include drug management, prescription-based sales, stock monitoring with notifications, transaction tracking, and customer and supplier data management, so that pharmacy operations are more efficient and organized.",
    header: Portfolio2,
    icon: ["SiLaravel", "DiMysql", "SiPhp"],
    ongoing: false,
    source: "open-source",
    github: "https://github.com/muhar05/pharmacy_management.git",
  },
  {
    id: 3,
    slug: "coffee-shop-management",
    title: "Application Management Coffee Shop",
    description:
      "Application Management Coffee Shop is a mobile-based application to manage cafe operations digitally. Its main features include menu management, sales, tracking",
    header: Portfolio3,
    icon: ["SiFlutter", "SiDart", "SiSqlite"],
    ongoing: true,
    source: "closed-source",
  },
];
