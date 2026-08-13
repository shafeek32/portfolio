export interface ResumeEducationItem {
  institution: string;
  location: string;
  degree: string;
  university?: string;
  period: string;
  grade: string;
}

export interface ResumeProjectItem {
  title: string;
  role: string;
  period: string;
  githubUrl?: string;
  bullets: string[];
  technologies: string;
}

export interface ResumeSkills {
  databases: string[];
  frameworks: string[];
  languages: string[];
  programmingLanguages: string[];
  softSkills: string[];
  toolsPlatforms: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    githubUrl: string;
    githubLabel: string;
    linkedinUrl: string;
    linkedinLabel: string;
    whatsappUrl: string;
    whatsappLabel: string;
    location: string;
  };
  educations: ResumeEducationItem[];
  projects: ResumeProjectItem[];
  skills: ResumeSkills;
  certifications: string[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Shafeek Latheef',
    title: 'Software Engineer',
    phone: '+917593936350',
    email: 'shafeekl2002@gmail.com',
    githubUrl: 'https://github.com/shafeek32',
    githubLabel: 'GitHub',
    linkedinUrl: 'https://www.linkedin.com/in/shafeek-latheef/',
    linkedinLabel: 'LinkedIn',
    whatsappUrl: 'https://wa.me/qr/Z73NBLC5WL7FO1',
    whatsappLabel: 'Whatsapp',
    location: 'Alappuzha, India',
  },
  educations: [
    {
      institution: 'College of Engineering Cherthala',
      location: 'Alappuzha',
      degree: 'B.Tech in Computer Science',
      university: 'APJ Abdul Kalam Technological University',
      period: '2022 - 2026',
      grade: 'CGPA : 7.35 / 10',
    },
    {
      institution: 'ABVHSS Muhamma',
      location: 'Alappuzha',
      degree: 'Higher Secondary',
      period: '2019 - 2021',
      grade: 'Percentage : 94%',
    },
    {
      institution: 'ABVHSS Muhamma',
      location: 'Alappuzha',
      degree: 'Secondary',
      period: '2018 - 2019',
      grade: 'Percentage : 99%',
    },
  ],
  projects: [
    {
      title: 'Decision Companion System',
      role: 'Developer',
      period: 'Feb 2026 - May 2026',
      githubUrl: 'https://github.com/shafeek32/decision-companion-system',
      bullets: [
        'Developed a MERN-stack decision support system utilizing a 6-criteria Weighted Sum Model (WSM) to recommend optimal travel destinations based on user preferences.',
        'Created interactive analytics dashboards using React and Recharts; developed RESTful APIs with Node.js and Express.js; and managed application data in MongoDB.',
      ],
      technologies: 'Python, React, Node.js, Express.js, MongoDB',
    },
    {
      title: 'No-Code Full Stack Website Generator',
      role: 'Developer',
      period: 'Jul 2025 - Jan 2026',
      githubUrl: 'https://github.com/shafeek32/Webgenie',
      bullets: [
        'Developed a drag-and-drop no-code platform that generates four application layers: frontend, backend, database schema, and REST APIs.',
        'Engineered reusable templates and one-click project generation, reducing project setup time from hours to minutes and eliminating repetitive boilerplate code.',
      ],
      technologies: 'React.js, MongoDB, Express, Tailwind CSS',
    },
    {
      title: 'Decentralized E-Voting System',
      role: 'Developer',
      period: 'Jan 2025 - Apr 2025',
      bullets: [
        'Developed a blockchain-inspired voting system using cryptographic hashing and block validation techniques to ensure vote integrity.',
        'Implemented secure voter authentication and password-based vote re-verification mechanisms for independent vote validation.',
      ],
      technologies: 'Blockchain, Express, MongoDB, React',
    },
    {
      title: 'AI Customer Complaint Management System',
      role: 'Developer',
      period: 'Jul 2026',
      githubUrl: 'https://github.com/shafeek32/ai-customer-complaint-management',
      bullets: [
        'Developed an AI-powered complaint management platform using React, FastAPI, PostgreSQL, LangGraph, and LLMs to automate complaint registration.',
        'Integrated OCR and LLM-based extraction for three document formats (PDF, images, and emails), automatically populating complaint forms and reducing manual data entry.',
      ],
      technologies: 'React, FastAPI, PostgreSQL',
    },
  ],
  skills: {
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    frameworks: ['React', 'Express.js', 'Django', 'FastAPI', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    languages: ['English', 'Hindi'],
    programmingLanguages: ['C', 'C++', 'Python', 'Java', 'PHP', 'JavaScript'],
    softSkills: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Time Management',
      'Adaptability',
      'Leadership',
      'Teamwork',
    ],
    toolsPlatforms: ['REST APIs', 'Git', 'GitHub'],
  },
  certifications: [
    'Completed a Full-Stack Web Development Bootcamp at Udemy',
    'Achieved certification in Python Pro Bootcamp at Udemy',
  ],
};
