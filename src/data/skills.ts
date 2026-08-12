import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    description: 'Core programming and scripting languages for building scalable systems.',
    skills: [
      { name: 'Python', level: 'Advanced', featured: true },
      { name: 'TypeScript', level: 'Proficient', featured: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced', featured: true },
      { name: 'Java', level: 'Intermediate', featured: false },
      { name: 'C', level: 'Intermediate', featured: false },
      { name: 'C++', level: 'Intermediate', featured: false },
      { name: 'SQL', level: 'Proficient', featured: true }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Crafting responsive, high-performance, and accessible web user interfaces.',
    skills: [
      { name: 'React', level: 'Advanced', featured: true },
      { name: 'TypeScript', level: 'Proficient', featured: true },
      { name: 'Tailwind CSS', level: 'Advanced', featured: true },
      { name: 'Vite', level: 'Advanced', featured: true },
      { name: 'HTML5 & CSS3', level: 'Advanced', featured: false },
      { name: 'Framer Motion', level: 'Proficient', featured: false },
      { name: 'Responsive UI / UX', level: 'Advanced', featured: false }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Developing high-throughput microservices, REST APIs, and asynchronous engines.',
    skills: [
      { name: 'FastAPI', level: 'Proficient', featured: true },
      { name: 'Node.js', level: 'Advanced', featured: true },
      { name: 'Express.js', level: 'Advanced', featured: true },
      { name: 'Spring Boot', level: 'Foundational', featured: false },
      { name: 'RESTful API Design', level: 'Advanced', featured: true },
      { name: 'Authentication & JWT', level: 'Proficient', featured: false },
      { name: 'Microservices', level: 'Intermediate', featured: false }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Designing normalized relational schemas and document stores.',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', featured: true },
      { name: 'MongoDB', level: 'Advanced', featured: true },
      { name: 'Supabase', level: 'Proficient', featured: true },
      { name: 'MySQL', level: 'Proficient', featured: false },
      { name: 'Prisma / Mongoose ORM', level: 'Proficient', featured: false },
      { name: 'Query Optimization', level: 'Intermediate', featured: false }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Intelligent Systems',
    description: 'Engineering agentic workflows, LLM tool pipelines, and computer vision models.',
    skills: [
      { name: 'LangGraph', level: 'Proficient', featured: true },
      { name: 'LangChain', level: 'Proficient', featured: true },
      { name: 'LLM Integration & Prompting', level: 'Advanced', featured: true },
      { name: 'OCR (Tesseract / Vision APIs)', level: 'Proficient', featured: true },
      { name: 'AI Agents & Tool Calling', level: 'Proficient', featured: true },
      { name: 'Computer Vision / MediaPipe', level: 'Intermediate', featured: false },
      { name: 'Groq / OpenAI APIs', level: 'Proficient', featured: false }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity (Beginner Focus)',
    description: 'Building foundational knowledge in Linux administration, networking fundamentals, and web security concepts.',
    skills: [
      { name: 'Linux CLI & System Basics', level: 'Foundational', featured: true },
      { name: 'Networking & TCP/IP Basics', level: 'Foundational', featured: true },
      { name: 'Bash Scripting Basics', level: 'Beginner', featured: true },
      { name: 'OWASP Top 10 Concepts', level: 'Learning', featured: true },
      { name: 'Ethical Hacking Fundamentals', level: 'Exploring', featured: true },
      { name: 'TryHackMe & Beginner Labs', level: 'Practicing', featured: false },
      { name: 'Basic Web Security & Headers', level: 'Learning', featured: false }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    description: 'Modern development environment, version control, and containerization tooling.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', featured: true },
      { name: 'Docker', level: 'Intermediate', featured: true },
      { name: 'VS Code & JetBrains IDEs', level: 'Advanced', featured: false },
      { name: 'Postman & Insomnia', level: 'Advanced', featured: false },
      { name: 'Linux / Unix CLI', level: 'Advanced', featured: true },
      { name: 'CI/CD Basics', level: 'Intermediate', featured: false }
    ]
  }
];
