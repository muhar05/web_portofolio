import { Metadata } from "next";
import { notFound } from "next/navigation";
import works from "@/app/data/works.json";
import type { Work } from "@/types/works";
import WorkDetailClient from "./WorkDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = works.find((w) => w.slug === params.slug);
  if (!work) return {};
  return {
    title: `${work.title} — muhar ferdiansyah`,
    description: work.description,
  };
}

export default function WorkDetailPage({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug);
  if (!work) return notFound();
  return <WorkDetailClient work={work as Work} />;
}