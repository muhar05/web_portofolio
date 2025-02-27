import { Work } from "@/app/types/page";
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
import Portfolio1 from "../../../../public/img/port1.png";
import Portfolio2 from "../../../../public/img/port2.png";
import Image, { StaticImageData } from "next/image";

interface PortfolioImageProps {
  src: StaticImageData;
  alt: string;
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ src, alt }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image
      src={src}
      className="rounded-xl object-cover w-full h-full"
      alt={alt}
      layout="intrinsic"
      width={500}
      height={500}
    />
  </div>
);

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-300"></div>
);

export const works: Work[] = [
  {
    slug: "teh-solo",
    title: "Web App Teh Solo Management System",
    description:
      "Teh Solo adalah aplikasi web bagi bisnis teh untuk mengelola penjualan, pengeluaran, dan inventaris dengan mudah dengan pelacakan stok otomatis dan waktu nyata.",
    header: <PortfolioImage src={Portfolio1} alt="Portfolio 1" />,
    icon: [
      <SiNextdotjs className="h-6 w-6 text-neutral-500" />,
      <SiReact className="h-6 w-6 text-neutral-500" />,
      <SiMongodb className="h-6 w-6 text-neutral-500" />,
    ],
    ongoing: true,
    source: "closed-source",
  },
  {
    slug: "pharmacy-management",
    title: "Web App Pharmacy Management System",
    description: "Web App Pharmacy Management System",
    header: <PortfolioImage src={Portfolio2} alt="Portfolio 2" />,
    icon: [
      <SiLaravel className="h-6 w-6 text-neutral-500" />,
      <DiMysql className="h-6 w-6 text-neutral-500" />,
      <SiPhp className="h-6 w-6 text-neutral-500" />,
    ],
    ongoing: false,
    source: "open-source",
    documentation: [
      {
        title: "Pendahuluan",
        content: [
          {
            type: "text",
            text: "Dokumentasi ini mencakup daftar endpoint yang digunakan dalam aplikasi farmasi berbasis Laravel. Setiap endpoint memiliki hak akses yang ditentukan oleh middleware dan role pengguna.",
          },
        ],
      },
      {
        title: "Daftar Endpoint",
        content: [
          {
            type: "endpoint",
            endpoint: {
              method: "GET",
              path: "/",
              description: "Menampilkan halaman utama.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "GET",
              path: "/dashboard",
              middleware:
                "auth, verified, role:admin|pharmacist|cashier|inventory_manager",
              description: "Menampilkan dashboard utama.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "GET",
              path: "/cashier",
              middleware:
                "auth, verified, role:admin|pharmacist|cashier|inventory_manager",
              description:
                "Menampilkan halaman kasir dengan daftar obat terbaru.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "GET",
              path: "/medicines",
              middleware:
                "auth, verified, role:admin|pharmacist|inventory_manager",
              description:
                "Menampilkan daftar obat dengan kategori dan supplier.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "POST",
              path: "/medicines",
              middleware:
                "auth, verified, role:admin|pharmacist|inventory_manager",
              description: "Menambahkan obat baru ke database.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "PUT",
              path: "/medicines/{id}",
              middleware:
                "auth, verified, role:admin|pharmacist|inventory_manager",
              description: "Memperbarui data obat berdasarkan ID.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "DELETE",
              path: "/medicines/{id}",
              middleware:
                "auth, verified, role:admin|pharmacist|inventory_manager",
              description: "Menghapus obat dari database.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "POST",
              path: "/checkout",
              middleware: "auth, verified, role:admin|pharmacist|cashier",
              description: "Menambahkan transaksi penjualan baru.",
            },
          },
          {
            type: "endpoint",
            endpoint: {
              method: "DELETE",
              path: "/users/{id}",
              middleware: "auth, verified, role:admin",
              description: "Menghapus pengguna dari database.",
            },
          },
        ],
      },
      {
        title: "Kesimpulan",
        content: [
          {
            type: "text",
            text: "Dokumentasi ini mencakup semua endpoint terkait pengelolaan farmasi, termasuk pengelolaan obat, penjualan, pelanggan, supplier, dan pengguna. Harap pastikan untuk mengikuti hak akses yang telah ditentukan dalam setiap endpoint.",
          },
        ],
      },
    ],
  },
  {
    slug: "coffee-shop-management",
    title: "Application Management Coffee Shop",
    description: "Application Management Coffee Shop",
    header: <Skeleton />,
    icon: [
      <SiFlutter className="h-6 w-6 text-neutral-500" />,
      <SiDart className="h-6 w-6 text-neutral-500" />,
      <SiSqlite className="h-6 w-6 text-neutral-500" />,
    ],
    ongoing: true,
    source: "closed-source",
  },
];
