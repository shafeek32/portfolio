import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-complaint-management',
    title: 'AI Customer Complaint Management System',
    shortDescription: 'Enterprise-grade AI complaint management system that automates ticket triage, multi-modal document extraction, and resolution workflows using OCR and LLM agents.',
    highlight: 'Multimodal OCR & LangGraph Agent Workflows',
    category: 'AI & ML',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'LangGraph', 'LangChain', 'Groq', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shafeek32/ai-customer-complaint-management',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'A full-stack, enterprise AI complaint management platform designed to eliminate manual data entry in customer support channels. The system ingests multimodal inputs (scanned PDF invoices, receipts, handwritten notes, and text), extracts structured entities using OCR and LLMs, classifies urgency, and orchestrates stateful multi-agent workflows using LangGraph.',
    problem: 'Customer support teams spend considerable time manually reading unstructured document attachments, extracting customer IDs and invoice details, leading to slow ticket resolution times.',
    solution: 'Engineered an end-to-end intelligent pipeline integrating a Python FastAPI backend with LangGraph multi-agent workflows and sub-second Groq LLM inference, routing and persisting structured grievance records to PostgreSQL.',
    keyFeatures: [
      'Multimodal Document Ingestion: Automated OCR for receipts, PDF bills, and photo evidence.',
      'LangGraph Agent Workflow: Stateful orchestration for multi-step triage, entity validation, and duplicate detection.',
      'Structured JSON Extraction: Enforces strict Pydantic schemas using LLM tool calling.',
      'Real-time Complaint Tracking: Reactive UI with live progress indicators and interactive audit logs.',
      'Role-based Support Dashboard: Dedicated views for customer grievance filing and admin resolution operations.'
    ],
    architecture: 'React + TypeScript frontend communicating over REST API with a high-performance Python FastAPI service. LangChain & LangGraph execute agentic pipelines with Groq API for sub-second inference. Extracted metadata and full grievance records are persisted in PostgreSQL with indexed schema relations.',
    challenges: [
      'Handling low-resolution or noisy image scans while maintaining high OCR accuracy.',
      'Ensuring strict structured output schema conformance from LLM responses without parsing hallucinations.',
      'Maintaining deterministic state across multi-step LangGraph agent loops.'
    ],
    whatILearned: [
      'Advanced stateful agent design patterns using LangGraph and LangChain.',
      'FastAPI asynchronous concurrency patterns for document stream processing.',
      'Production prompt engineering and schema validation techniques with Pydantic and Groq.'
    ]
  },
  {
    id: 'decision-companion-system',
    title: 'Decision Companion System',
    shortDescription: 'Intelligent decision-support web application that evaluates and ranks complex travel destinations using a multi-attribute weighted scoring algorithm.',
    highlight: 'Weighted Sum Model (WSM) Analytics Engine',
    category: 'Full-Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts', 'REST APIs'],
    githubUrl: 'https://github.com/shafeek32/decision-companion-system',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'A decision analytics platform that helps users eliminate travel choice paralysis. Users define customized weighting criteria across budget limits, travel distance, safety metrics, historical weather patterns, and ratings to compute deterministic suitability scores.',
    problem: 'Travelers often face decision paralysis when comparing destinations with conflicting metrics such as cost, safety ratings, and seasonal climate.',
    solution: 'Developed a Decision Support System (DSS) using a Weighted Sum Model (WSM) that normalizes multi-dimensional data points and renders interactive comparative visualizations using Recharts.',
    keyFeatures: [
      'Weighted Scoring Engine: Real-time calculation of destination suitability ranks based on user preferences.',
      'Interactive Recharts Visualizations: Radar charts, multi-variable bar charts, and cost-vs-safety breakdown matrices.',
      'Multi-Destination Comparison Matrix: Side-by-side metric inspection with instant differential analysis.',
      'Custom Preference Profiles: Save, load, and share custom weighted criteria configurations.'
    ],
    architecture: 'React frontend leveraging Tailwind CSS and Recharts for dynamic visual representations. Node.js/Express backend powering RESTful calculation endpoints and MongoDB storing destination datasets, historical climate records, and user preferences.',
    challenges: [
      'Normalizing disparate metrics (e.g. monetary cost vs. safety index 1-100 vs. weather Celsius) into an unbiased normalized scale.',
      'Optimizing rendering performance during real-time weight adjustments on large comparative datasets.'
    ],
    whatILearned: [
      'Mathematical modeling in software engineering (Multi-Criteria Decision Making / MCDM).',
      'Complex state management and reactive chart updates in React.',
      'Database indexing strategies for rapid multi-attribute querying in MongoDB.'
    ]
  },
  {
    id: 'webgenie',
    title: 'WebGenie',
    shortDescription: 'Visual full-stack application generator that scaffolds frontend component structures, Express backend controllers, and database schemas with one click.',
    highlight: 'AST-Driven Full-Stack Code Generation',
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/shafeek32/Webgenie',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'An intuitive visual developer tool and application generator that streamlines project bootstrapping. Users visually configure page layouts, define data entities, establish relational schemas, and export clean, modular source code.',
    problem: 'Bootstrapping new full-stack projects involves tedious repetitive configuration across UI components, route handlers, database schemas, and input validators.',
    solution: 'Engineered an AST-driven code synthesis engine that transforms graphical component trees and schema definitions into production-ready React and Express codebases.',
    keyFeatures: [
      'Visual Schema Builder: Drag-and-drop model definition with type safety and validation rules.',
      'Instant REST API Scaffolding: Automatically generates CRUD endpoints, controllers, and input validators.',
      'Live Preview Engine: In-browser sandboxed rendering of the generated user interface.',
      'Exportable Codebase: One-click generation of fully modular Express + React source code.'
    ],
    architecture: 'Component-based canvas built with React, communicating with a Node.js AST generator service. Generates standardized React components and Express CRUD boilerplates based on JSON configuration trees.',
    challenges: [
      'Ensuring generated code adheres to clean architecture standards and passes linting checks.',
      'Implementing safe in-browser sandboxing for previewing generated UI components.'
    ],
    whatILearned: [
      'Metaprogramming and code synthesis principles.',
      'Design of flexible schema models in MongoDB.',
      'Building intuitive developer tools with exceptional UX.'
    ]
  },
  {
    id: 'codearena',
    title: 'CodeArena',
    shortDescription: 'Competitive programming and coding practice platform with an integrated Monaco code editor, multi-language support, and automated test evaluation.',
    highlight: 'In-Browser Sandbox & Evaluation Engine',
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shafeek32/Coding-Platform',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'A scalable coding platform developed to foster algorithmic problem solving and peer learning. Features an integrated in-browser code editor, automated test case evaluation, real-time leaderboards, and structured problem tracks.',
    problem: 'Learners need a distraction-free, responsive environment to practice data structures and algorithms with automated unit test feedback.',
    solution: 'Built a full-stack platform embedding Monaco Editor with syntax highlighting for Python, C++, Java, and JavaScript, paired with an Express API and MongoDB for test verification and user progress tracking.',
    keyFeatures: [
      'Monaco Code Editor: Autocompletion, themes, syntax highlighting, and keyboard shortcuts.',
      'Automated Test Runner: Executes candidate solutions against hidden and visible unit test cases.',
      'Dynamic Leaderboards: Tracks campus ranks, streak badges, and problem submission history.',
      'Topic-wise Learning Paths: Curated challenge tracks categorized by algorithmic complexity.'
    ],
    architecture: 'React frontend styled with Tailwind CSS and Monaco Editor. Node.js/Express API handling submissions, authentication, user statistics, and MongoDB storing problems, test fixtures, and submission histories.',
    challenges: [
      'Designing safe test case validation and managing asynchronous code execution timeouts.',
      'Maintaining responsive UI states during large code file inputs and real-time stdout streams.'
    ],
    whatILearned: [
      'Integrating deep developer tooling (Monaco Editor) into React apps.',
      'Designing relational schemas for tracking test cases, submissions, and leaderboard scores.',
      'REST API design for high-throughput submission polling.'
    ]
  },
  {
    id: 'arivnxt',
    title: 'ArivNxt',
    badge: 'Live Project',
    shortDescription: 'Modern educational web platform designed with responsive React component architecture, fast Vite bundling, and student-focused UI/UX.',
    highlight: 'Live Production Educational Platform',
    category: 'Full-Stack',
    role: 'Frontend Developer',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://arivnxt.in',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'ArivNxt is a modern educational platform focused on delivering a clean and engaging digital learning experience with intuitive navigation and ultra-fast page loads.',
    problem: 'Traditional learning portals often feature cluttered user interfaces and poor mobile responsiveness, leading to reduced student engagement.',
    solution: 'Engineered a responsive educational web application from the ground up using React, TypeScript, and Vite, with modular Tailwind CSS component architecture.',
    keyFeatures: [
      'Modern and responsive educational interface',
      'Clean navigation and user experience',
      'Mobile-friendly design',
      'Reusable React component architecture',
      'Fast Vite-powered frontend'
    ],
    architecture: 'Modular React and TypeScript frontend application built on Vite for rapid development and optimized bundle distribution, styled with Tailwind CSS.',
    challenges: [
      'Designing an accessible, student-centric UI layout that renders flawlessly across all viewports.',
      'Creating reusable, modular React components to support rapid feature scaling.'
    ],
    whatILearned: [
      'Advanced component composition patterns in React and TypeScript.',
      'Optimizing build performance and asset loading with Vite.',
      'Designing modern, accessible educational user interfaces.'
    ]
  },
  {
    id: 'decentralized-evoting',
    title: 'Decentralized E-Voting System',
    shortDescription: 'Blockchain-based electronic voting prototype utilizing smart contracts and public-key cryptography for transparent and tamper-resistant election audits.',
    highlight: 'Cryptographic Integrity & Public Verifiability',
    category: 'Systems & Security',
    technologies: ['Solidity', 'Web3.js', 'React', 'JavaScript', 'Cryptography'],
    githubUrl: 'https://github.com/shafeek32',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    overview: 'A decentralized application prototype exploring public-key cryptography and distributed ledgers to ensure election integrity, voter anonymity, and non-repudiation.',
    problem: 'Centralized electronic voting systems introduce single points of failure and lack public auditability, raising concerns of ballot tampering.',
    solution: 'Designed smart contracts implementing immutable ballot casting, double-vote prevention, cryptographic voter tokenization, and public tally verification.',
    keyFeatures: [
      'Immutable Ledger Records: Votes recorded permanently on smart contracts.',
      'Cryptographic Voter Verification: Ensures one-voter-one-vote rule using unique digital signatures.',
      'Zero Double-Casting: Enforces deterministic state checks before execution.',
      'Transparent Public Tally: Real-time, mathematically verifiable election tally audit.'
    ],
    architecture: 'Ethereum/EVM smart contracts paired with a React Web3 frontend interfacing via Web3.js.',
    challenges: [
      'Balancing voter anonymity with verifiable authentication.',
      'Optimizing gas consumption in contract loops during tally tabulation.'
    ],
    whatILearned: [
      'Smart contract development and security best practices.',
      'Applied public-key cryptography and digital signature verification.',
      'Decentralized systems architecture and consensus principles.'
    ]
  }
];
