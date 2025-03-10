import Image from "next/image";
import Portfolio1 from "../../../../public/img/port1.png";
import Portfolio2 from "../../../../public/img/port2.png";
import Portfolio3 from "../../../../public/img/port3.png";

export const works = [
  {
    id: 1,
    slug: "teh-solo",
    title: "Web App Teh Solo Management System",
    description:
      "Teh Solo adalah aplikasi web bagi bisnis teh untuk mengelola penjualan, pengeluaran, dan inventaris dengan mudah dengan pelacakan stok otomatis dan waktu nyata.",
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
    description: "Web App Pharmacy Management System",
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
    description: "Application Management Coffee Shop",
    header: Portfolio3,
    icon: ["SiFlutter", "SiDart", "SiSqlite"],
    ongoing: true,
    source: "closed-source",
  },
];
