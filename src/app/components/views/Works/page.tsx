import { FaClipboardCheck } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "../../fragments/BentoGrids/page";
import Footer from "../../fragments/Footer/page";
import Portfolio1 from "../../../../../public/img/port1.png";
import Image from "next/image";
import {
  SiDart,
  SiFlutter,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiQlik,
  SiReact,
  SiSqlite,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const WorksPage = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-300"></div>
  );

  const Portfolio_1 = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
      <Image
        src={Portfolio1}
        className="rounded-xl object-cover"
        alt="Portfolio 1"
        layout="responsive"
        width={500}
        height={500}
      />
    </div>
  );

  const items = [
    {
      title: "Web App Teh Solo Management System",
      description:
        "Teh Solo adalah aplikasi web bagi bisnis teh untuk mengelola penjualan, pengeluaran, dan inventaris dengan mudah dengan pelacakan stok otomatis dan waktu nyata.",
      header: <Portfolio_1 />,
      icon: [
        <SiNextdotjs className="h-6 w-6 text-neutral-500" />,
        <SiReact className="h-6 w-6 text-neutral-500" />,
        <SiMongodb className="h-6 w-6 text-neutral-500" />,
      ],
      ongoing: true,
      source: "closed-source", // Add source flag
    },
    {
      title: "Web App Pharmacy Management System",
      description: "Web App Pharmacy Management System",
      header: <Skeleton />,
      icon: [
        <SiLaravel className="h-6 w-6 text-neutral-500" />,
        <DiMysql className="h-6 w-6 text-neutral-500" />,
        <SiPhp className="h-6 w-6 text-neutral-500" />,
      ],
      ongoing: false,
      source: "open-source", // Add source flag
    },
    {
      title: "Application Management Coffee Shop",
      description: "Application Management Coffee Shop",
      header: <Skeleton />,
      icon: [
        <SiFlutter className="h-6 w-6 text-neutral-500" />,
        <SiDart className="h-6 w-6 text-neutral-500" />,
        <SiSqlite className="h-6 w-6 text-neutral-500" />,
      ],
      ongoing: true,
      source: "closed-source", // Add source flag
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-slate-200 p-4 md:p-6 lg:p-8">
        {/* Adjusting grid responsiveness */}
        <BentoGrid className="grid-cols-1 mobile:grid-cols-2">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={
                <>
                  {item.title}
                  {item.ongoing && (
                    <span className="ml-2 text-xs text-yellow-500 font-semibold bg-yellow-100 rounded-full px-2 py-1">
                      Ongoing
                    </span>
                  )}
                  {item.source === "open-source" && (
                    <span className="ml-2 text-xs text-green-500 font-semibold bg-green-100 rounded-full px-2 py-1">
                      Open Source
                    </span>
                  )}
                  {item.source === "closed-source" && (
                    <span className="ml-2 text-xs text-red-500 font-semibold bg-red-100 rounded-full px-2 py-1">
                      Closed Source
                    </span>
                  )}
                </>
              }
              description={item.description}
              header={item.header}
              icons={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
};

export default WorksPage;
