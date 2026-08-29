import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-fullstack-engineer',
    role: 'Full-Stack Software Engineer (Projects & Systems)',
    company: 'Independent Engineering & Open Source',
    location: 'Kerala, India',
    period: '2023 - Present',
    type: 'Development',
    description: 'Architecting end-to-end full-stack applications, intelligent AI pipelines, and responsive web platforms. Focused on frontend architectures with React/TypeScript and scalable asynchronous backend services with Python FastAPI and Node.js.',
    achievements: [
      'Built and deployed high-performance AI document extraction systems with LangGraph, Groq, and PostgreSQL.',
      'Authored modular AST-based code generation engines reducing full-stack scaffolding time.',
      'Designed responsive UI architectures with Tailwind CSS and Framer Motion achieving 98+ Lighthouse scores.'
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Git']
  },
  {
    id: 'exp-systems-foundations',
    role: 'Software Engineering & Systems Foundations',
    company: 'Open Source & Self-Directed Engineering',
    location: 'Kerala, India',
    period: '2024 - Present',
    type: 'Self-Learning',
    description: 'Deepening core software engineering competencies across backend architecture, API design patterns, database performance tuning, and Linux environment administration.',
    achievements: [
      'Engineered asynchronous RESTful APIs with FastAPI and Express featuring comprehensive input validation.',
      'Studied database optimization techniques including multi-column indexing and relational query design.',
      'Utilized Linux shell utilities and Docker containers for local microservice orchestration.'
    ],
    technologies: ['Linux', 'Bash', 'Docker', 'REST APIs', 'PostgreSQL', 'MongoDB', 'System Design']
  },
  {
    id: 'exp-academic-dev',
    role: 'B.Tech in Computer Science & Engineering',
    company: 'APJ Abdul Kalam Technological University (KTU)',
    location: 'Kerala, India',
    period: '2022 – 2026',
    type: 'Academic',
    description: 'Undergraduate student building strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, and Cryptography.',
    achievements: [
      'Built software engineering course projects covering data structures, relational databases, and web platforms.',
      'Active participant in student developer communities and technical workshops.',
      'Delivered practical full-stack and algorithmic problem-solving capstone implementations.'
    ],
    technologies: ['C/C++', 'Java', 'Python', 'DBMS', 'Computer Networks', 'Operating Systems', 'Software Engineering']
  },
  {
    id: 'exp-hackathons',
    role: 'Hackathons & Technical Innovation',
    company: 'Developer Hackathons & Competitions',
    location: 'India',
    period: '2022 – Present',
    type: 'Hackathon',
    description: 'Collaborated in fast-paced 24-to-48-hour hackathons to rapid-prototype AI and web applications addressing accessibility, education, and automated workflow challenges.',
    achievements: [
      'Engineered real-time assistive web prototypes under tight time constraints.',
      'Presented technical architectures and live product demos to industry evaluation panels.'
    ],
    technologies: ['React', 'FastAPI', 'TypeScript', 'REST APIs', 'Git']
  }
];
