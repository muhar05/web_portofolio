export interface Work {
  id: number;
  slug: string;
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode[];
  ongoing: boolean;
  source: "open-source" | "closed-source";
  documentation?: DocumentationSection[]; // Dokumentasi opsional
  github?: string;
  domain?: string;
}

export interface DocumentationSection {
  title: string;
  content: DocumentationContent[];
}

export interface DocumentationContent {
  type: "text" | "endpoint";
  text?: string; // Hanya ada jika type === "text"
  endpoint?: Endpoint; // Hanya ada jika type === "endpoint"
}

export interface Endpoint {
  method: string;
  path: string;
  middleware?: string;
  description: string;
}