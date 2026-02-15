export type Service = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  packages: { name: string; price: number; timeline: string; premium?: boolean }[];
};
