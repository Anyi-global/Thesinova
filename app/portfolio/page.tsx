import { Card } from '@/components/ui/card';

const projects = [
  { title: 'Thesis Workflow Design', summary: 'End-to-end planning and literature mapping for a public health thesis.' },
  { title: 'ATS Resume Refresh', summary: 'Optimized resume and CV strategy for transition into analytics roles.' },
  { title: 'LinkedIn Positioning Upgrade', summary: 'Profile rewrite focused on recruiter discoverability and expertise clarity.' }
];

export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-2 text-slate-300">Selected engagements and outcomes.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-slate-300">{project.summary}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
