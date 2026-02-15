import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'academic',
    slug: 'academic-research-support',
    title: 'Academic Research Support',
    summary: 'Structured guidance across research design, writing, data workflows and software implementation.',
    description:
      'For students, researchers, and professionals who need high-integrity support for proposals, thesis work, analysis, machine learning pipelines, and technical mentorship.',
    features: [
      'Proposal and thesis writing support',
      'Literature synthesis and references',
      'Data analysis and visualization',
      'Machine learning development and deployment',
      'Custom software development',
      'Mentorship sessions'
    ],
    packages: [
      { name: 'Foundation', price: 120, timeline: '3-5 business days' },
      { name: 'Advanced', price: 260, timeline: '5-7 business days', premium: true },
      { name: 'Full Project', price: 650, timeline: '2-4 weeks' }
    ]
  },
  {
    id: 'resume',
    slug: 'ats-resume-cv-creation',
    title: 'ATS-friendly Resume/CV Creation',
    summary: 'Role-aligned resumes designed for applicant tracking systems and human reviewers.',
    description:
      'We craft concise, evidence-driven resumes and CVs tailored to your target roles with measurable outcomes and keyword alignment.',
    features: ['ATS optimization', 'Role-specific keyword strategy', 'Achievement-focused writing', '1 revision cycle'],
    packages: [
      { name: 'Essential', price: 60, timeline: '2-3 business days' },
      { name: 'Professional', price: 95, timeline: '2-4 business days', premium: true },
      { name: 'Executive', price: 140, timeline: '3-5 business days' }
    ]
  },
  {
    id: 'linkedin',
    slug: 'linkedin-profile-optimization',
    title: 'LinkedIn Profile Optimization',
    summary: 'Profile architecture and messaging for discoverability and professional trust.',
    description:
      'Build a profile that aligns with your career positioning, highlights outcomes, and improves recruiter engagement.',
    features: ['Headline and About rewrite', 'Experience refinement', 'Keyword optimization', 'Content prompts for activity'],
    packages: [
      { name: 'Starter', price: 45, timeline: '2 business days' },
      { name: 'Growth', price: 80, timeline: '2-3 business days', premium: true },
      { name: 'Complete', price: 125, timeline: '3-4 business days' }
    ]
  }
];

export const testimonials = [
  {
    name: 'T. Mensah',
    role: 'MSc Candidate',
    quote: 'Thesinova helped me structure my thesis workflow and improved my confidence during defense preparation.'
  },
  {
    name: 'A. Yusuf',
    role: 'Data Analyst',
    quote: 'My updated CV and LinkedIn profile started generating interview calls within weeks.'
  }
];

export const faqs = [
  {
    q: 'Do you provide done-for-you academic writing?',
    a: 'Thesinova provides ethical guidance, editing, structure support, analysis assistance, and mentorship. Final ownership remains with the client.'
  },
  {
    q: 'Can I book without paying immediately?',
    a: 'Yes. You can choose the invoice option and receive payment instructions by email.'
  }
];
