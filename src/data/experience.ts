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
    id: 'exp-cyber-internship',
    role: 'Cybersecurity Self-Learner (Foundations & Labs)',
    company: 'TryHackMe & Virtual Security Labs',
    location: 'Kerala, India',
    period: '2024 - Present',
    type: 'Self-Learning',
    description: 'Active beginner learner building foundational knowledge in web security concepts, Linux command line essentials, networking fundamentals, and secure coding practices.',
    achievements: [
      'Completed beginner rooms on TryHackMe covering Linux fundamentals, basic networking, and web security overviews.',
      'Studied foundational concepts of OWASP Top 10 vulnerabilities including SQL Injection and Cross-Site Scripting (XSS).',
      'Practiced basic Linux shell navigation, file permissions, and essential network troubleshooting tools.'
    ],
    technologies: ['Linux', 'Bash', 'Networking Basics', 'Wireshark', 'Nmap Basics', 'OWASP Top 10', 'TryHackMe']
  },
  {
    id: 'exp-academic-dev',
    role: 'B.Tech in Computer Science & Engineering',
    company: 'APJ Abdul Kalam Technological University',
    location: 'Kerala, India',
    period: '2020 - 2024',
    type: 'Academic',
    description: 'Graduated with strong foundations in Data Structures & Algorithms, Object-Oriented Design, Operating Systems, Computer Networks, Database Management Systems, and Cryptography.',
    achievements: [
      'Led academic project teams in developing educational platforms and decentralized verification prototypes.',
      'Organized technical workshops and competitive coding challenges for student developer communities.',
      'Consistently delivered production-grade software engineering coursework and capstone projects.'
    ],
    technologies: ['C/C++', 'Java', 'Python', 'DBMS', 'Computer Networks', 'Operating Systems', 'Software Engineering']
  },
  {
    id: 'exp-hackathons',
    role: 'Hackathons & Technical Innovation',
    company: 'Developer Hackathons & Competitions',
    location: 'India',
    period: '2022 - 2024',
    type: 'Hackathon',
    description: 'Collaborated in fast-paced 24-to-48-hour hackathons to rapid-prototype AI and web applications addressing accessibility, education, and automated workflow challenges.',
    achievements: [
      'Engineered real-time assistive web prototypes under tight time constraints.',
      'Presented technical architectures and live product demos to industry evaluation panels.'
    ],
    technologies: ['React', 'FastAPI', 'TypeScript', 'REST APIs', 'Git']
  }
];
