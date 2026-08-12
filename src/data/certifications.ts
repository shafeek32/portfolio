import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'cert-python-bootcamp',
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    issuer: 'Udemy',
    issueDate: 'Verified Credential',
    credentialUrl: 'https://www.udemy.com',
    skills: ['Python', 'Object-Oriented Programming', 'Web Scraping', 'Automation', 'FastAPI & Flask', 'Data Analysis', 'GUI Development'],
    description: 'Comprehensive 100-day rigorous mastery covering advanced Python, algorithmic problem solving, automated bots, web development, data science, and API engineering.'
  },
  {
    id: 'cert-full-stack',
    title: 'The Complete Full Stack Web Development Bootcamp',
    issuer: 'Udemy',
    issueDate: 'Verified Credential',
    credentialUrl: 'https://www.udemy.com',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'Authentication', 'Deployment'],
    description: 'In-depth full-stack engineering curriculum mastering modern frontend design patterns, backend microservice architecture, database schema modeling, and production cloud deployments.'
  }
];
