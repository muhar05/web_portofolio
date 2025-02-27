// app/works/page.tsx
import { works } from "@/app/data/works/page";
import Link from "next/link";
import { BentoGrid } from "../../fragments/BentoGrids/BentoGrid";
import { BentoGridItem } from "../../fragments/BentoGrids/BentoGridItem";

const WorksPage = () => {
  return (
    <div className="w-full h-full bg-slate-200 dark:bg-black p-4 md:p-6 lg:p-8">
      <BentoGrid className="grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-2">
        {works.map((item, i) => (
          <Link key={i} href={`/works/${item.slug}`} passHref>
            <BentoGridItem
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
              colSpan={i === 3 || i === 6 ? "col-span-2" : "col-span-1"}
              rowSpan="row-span-1"
            />
          </Link>
        ))}
      </BentoGrid>
    </div>
  );
};

export default WorksPage;
