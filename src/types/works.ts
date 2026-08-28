export interface Work {
  id: number;
  slug: string;
  title: string;
  description: string;
  role: string;
  impact: string[];
  header: string;
  icon: string[];
  ongoing: boolean;
  source: string;
  sector: "production" | "private" | "experiment";
  status?: string;
  tags?: string[];
  domain?: string;
  github?: string;
}