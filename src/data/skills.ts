import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Crafting responsive, high-performance, and accessible web user interfaces.',
    skills: [
      { name: 'React', level: 'Advanced', featured: true },
      { name: 'TypeScript', level: 'Proficient', featured: true },
      { name: 'JavaScript', level: 'Advanced', featured: true },
      { name: 'Tailwind CSS', level: 'Advanced', featured: true },
      { name: 'HTML & CSS', level: 'Advanced', featured: true },
      { name: 'Vite', level: 'Advanced', featured: true },
      { name: 'Framer Motion', level: 'Proficient', featured: false }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Developing high-throughput services, asynchronous APIs, and business logic.',
    skills: [
      { name: 'Python', level: 'Advanced', featured: true },
      { name: 'FastAPI', level: 'Proficient', featured: true },
      { name: 'Node.js', level: 'Advanced', featured: true },
      { name: 'Express.js', level: 'Advanced', featured: true },
      { name: 'Spring Boot', level: 'Foundational', featured: false },
      { name: 'REST APIs', level: 'Advanced', featured: true }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Designing normalized relational schemas and high-speed document stores.',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', featured: true },
      { name: 'MongoDB', level: 'Advanced', featured: true },
      { name: 'Supabase', level: 'Proficient', featured: true },
      { name: 'MySQL', level: 'Proficient', featured: true },
      { name: 'SQL', level: 'Proficient', featured: true }
    ]
  },
  {
    id: 'ai',
    name: 'AI / ML',
    description: 'Engineering stateful agentic workflows, LLM pipelines, and computer vision models.',
    skills: [
      { name: 'LangGraph', level: 'Proficient', featured: true },
      { name: 'LangChain', level: 'Proficient', featured: true },
      { name: 'LLMs', level: 'Advanced', featured: true },
      { name: 'OCR (Tesseract / Vision)', level: 'Proficient', featured: true },
      { name: 'AI integrations', level: 'Proficient', featured: true },
      { name: 'Computer Vision', level: 'Intermediate', featured: false }
    ]
  },
  {
    id: 'tools',
    name: 'Tools / DevOps',
    description: 'Modern development tools, version control systems, and deployment workflows.',
    skills: [
      { name: 'Git', level: 'Advanced', featured: true },
      { name: 'GitHub', level: 'Advanced', featured: true },
      { name: 'Docker', level: 'Intermediate', featured: true },
      { name: 'Vercel', level: 'Advanced', featured: true },
      { name: 'Linux CLI', level: 'Advanced', featured: true },
      { name: 'Postman', level: 'Advanced', featured: true },
      { name: 'AWS', level: 'Foundational', featured: false }
    ]
  }
];
