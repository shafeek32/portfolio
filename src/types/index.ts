export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  highlight: string;
  badge?: string;
  role?: string;
  category: 'AI & ML' | 'Full-Stack' | 'Systems & Security' | 'All';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  challenges: string[];
  whatILearned: string[];
  highlights?: string[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  level?: string;
  icon?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Internship' | 'Apprenticeship' | 'Hackathon' | 'Development' | 'Academic' | 'Self-Learning';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
}

export interface CybersecurityTopic {
  step: string;
  title: string;
  description: string;
  skills: string[];
  status: 'Foundations' | 'Learning' | 'Exploring' | 'Practicing';
  tools: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface TerminalCommand {
  command: string;
  output: string | string[];
}
