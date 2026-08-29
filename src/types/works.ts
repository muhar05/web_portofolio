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

  // Optional fields for engineering-signal detail (all optional for backward compatibility)
  context?: string;
  problem?: string;
  workflow?: string;
  engineeringHighlights?: { title: string; description: string }[];
  edgeCases?: { title: string; status: string; description: string }[];
  technicalDecisions?: { decision: string; reason: string }[];
  outcome?: string;
  limitations?: string;
  ownership?: string;
  projectType?: string;
  qualifier?: string;
}