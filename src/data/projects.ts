import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-complaint-management',
    title: 'AI Customer Complaint Management System',
    shortDescription: 'An AI-powered complaint management platform utilizing intelligent document processing, OCR, LLMs, and structured extraction for automated triage and resolution workflows.',
    highlight: 'AI-powered complaint extraction and document ingestion',
    category: 'AI & ML',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'LangGraph', 'LangChain', 'Groq', 'Tesseract OCR', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shafeek32/ai-customer-complaint-management',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'A full-stack, enterprise-grade AI complaint management system designed to eliminate manual data entry in customer support channels. The platform ingests multimodal inputs (receipts, scanned PDF invoices, handwritten grievance letters, audio notes, and freeform text), extracts structured entities using OCR and LLMs, classifies urgency, and orchestrates stateful multi-agent workflows using LangGraph.',
    problem: 'Traditional customer support systems suffer from slow response times and high error rates due to manual ticket triage and unstructured document inputs. Support agents spend over 40% of their time reading attachments, extracting customer IDs, invoice numbers, and dispute categories.',
    solution: 'Built an end-to-end intelligent pipeline integrating FastAPI backend services with LangGraph agent workflows. High-speed OCR extracts text from user-uploaded documents, and Groq-accelerated LLMs perform structured JSON extraction with schema validation. The ticket is automatically routed, prioritized, and contextualized for rapid resolution.',
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
    shortDescription: 'An intelligent decision-support platform that empowers users to evaluate, score, and rank travel destinations through a multi-attribute weighted scoring algorithm.',
    highlight: 'Weighted Sum Model for intelligent decision support',
    category: 'Full-Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts', 'REST APIs'],
    githubUrl: 'https://github.com/shafeek32',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'A robust decision analytics web application that takes the guesswork out of complex travel planning. Users define customized weighting criteria across budget limits, travel distance, safety metrics, historical weather patterns, and verified traveler ratings to compute deterministic suitability scores.',
    problem: 'Travelers often get overwhelmed by conflicting review sites and unstructured travel options, leading to decision paralysis and suboptimal itinerary choices.',
    solution: 'Developed a comprehensive Decision Support System (DSS) utilizing a Weighted Sum Model (WSM). The platform normalizes multi-dimensional data points across diverse travel parameters, applies user-customized priority weights, and renders interactive comparative visualizations.',
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
    shortDescription: 'A no-code full-stack website and application generator designed to instantly scaffold frontend structures, backend microservices, database schemas, and REST APIs.',
    highlight: 'No-code full-stack application generation',
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Code Generator'],
    githubUrl: 'https://github.com/shafeek32',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'An intuitive visual developer tool and application generator that streamlines project bootstrapping. Non-technical users and developers can visually design page layouts, define data entities, establish relational schemas, and export clean, production-ready codebases.',
    problem: 'Setting up new full-stack applications requires repetitive boilerplate setup across frontend component scaffolding, Express route handlers, Mongoose schemas, and validation middlewares.',
    solution: 'Engineered an AST-driven code generation engine capable of transforming graphical UI trees and entity models into structured, linted JavaScript/TypeScript codebases with downloadable ZIP packages.',
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
    id: 'arivnxt',
    title: 'ArivNxt',
    badge: 'Live Project',
    shortDescription: 'ArivNxt is a modern educational platform designed to provide students and learners with an engaging, accessible, and user-friendly digital learning experience.',
    highlight: 'Live Project • Modern Educational Platform',
    category: 'Full-Stack',
    role: 'Frontend Developer',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://arivnxt.in',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    overview: 'ArivNxt is a modern educational platform focused on delivering a clean and engaging digital learning experience. Designed to empower students and learners with intuitive course navigation, modern interfaces, and ultra-fast page loads.',
    problem: 'Traditional learning portals often feature cluttered user interfaces, slow load times, and poor mobile responsiveness, leading to reduced student engagement and cognitive overload.',
    solution: 'Engineered a modern, responsive educational web application from the ground up using React, TypeScript, and Vite. Designed a modular, reusable component architecture with Tailwind CSS, ensuring smooth navigation and student-focused UI/UX.',
    keyFeatures: [
      'Modern and responsive educational interface',
      'Clean navigation and user experience',
      'Mobile-friendly design',
      'Reusable React component architecture',
      'Fast Vite-powered frontend',
      'Structured and scalable frontend',
      'Student-focused UI/UX'
    ],
    highlights: [
      'Responsive frontend',
      'Component-based architecture',
      'Modern UI/UX',
      'Performance-focused Vite setup',
      'Scalable frontend structure'
    ],
    architecture: 'Modular React and TypeScript frontend application built on Vite for rapid development and optimized bundle distribution. Styled with Tailwind CSS utility classes and clean design tokens for complete cross-device responsiveness.',
    challenges: [
      'Designing an accessible, student-centric UI layout that renders flawlessly across all mobile and desktop screen viewports.',
      'Creating reusable, modular React components to support rapid iteration and feature scaling.'
    ],
    whatILearned: [
      'Advanced component composition patterns in React and TypeScript.',
      'Optimizing build performance and asset loading with Vite.',
      'Designing modern, accessible educational user interfaces.'
    ]
  },
  {
    id: 'codearena',
    title: 'CodeArena',
    shortDescription: 'A full-stack competitive programming and college coding platform designed for students to practice programming, solve coding challenges and improve their problem-solving skills.',
    highlight: 'Interactive coding sandbox & evaluation engine',
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Monaco Editor'],
    githubUrl: 'https://github.com/shafeek32',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    overview: 'A scalable coding platform developed to foster algorithmic mastery and peer learning in academic environments. Features an integrated in-browser code editor, automated test case evaluation, real-time leaderboard rankings, and structured problem categories (Arrays, Graphs, DP, Trees).',
    problem: 'Students often lack focused, distraction-free platforms tailored to their college curriculum to practice data structures and algorithms with automated grading and friendly campus competitions.',
    solution: 'Built a full-stack platform incorporating Monaco Editor (the engine powering VS Code), syntax highlighting for multiple languages (Python, Java, C++, JS), automated test case verification, and real-time user performance metrics.',
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
    id: 'decentralized-evoting',
    title: 'Decentralized E-Voting System',
    shortDescription: 'A blockchain-based electronic voting system prototype designed to demonstrate transparent and tamper-resistant voting workflows using cryptographic consensus.',
    highlight: 'Tamper-proof cryptographic audit trail',
    category: 'Systems & Security',
    technologies: ['Blockchain', 'Solidity', 'Web3.js', 'React', 'JavaScript', 'Cryptography', 'MetaMask'],
    githubUrl: 'https://github.com/shafeek32',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    overview: 'A decentralized application (dApp) prototype created to explore the application of distributed ledger technology and public-key cryptography in ensuring election integrity, voter anonymity, and non-repudiation.',
    problem: 'Centralized electronic voting systems present single points of failure and lack public verifiability, raising concerns of ballot tampering, database manipulation, and election fraud.',
    solution: 'Designed smart contracts implementing immutable ballot casting, double-vote prevention, cryptographic voter tokenization, and public tally verification on a decentralized ledger.',
    keyFeatures: [
      'Immutable Ledger Records: Votes are permanently etched into smart contracts without central authority override.',
      'Cryptographic Voter Verification: Ensures one-voter-one-vote rule using unique cryptographic signatures.',
      'Zero Double-Casting: Enforces deterministic state checks before gas execution.',
      'Transparent Public Tally: Real-time, mathematically verifiable election tally audit.'
    ],
    architecture: 'Ethereum/EVM smart contracts handling the ballot lifecycle, paired with a React Web3 frontend interfacing through ethers.js / Web3.js with MetaMask provider integration.',
    challenges: [
      'Balancing voter anonymity with verifiable authentication without exposing ballot choices.',
      'Optimizing gas consumption in contract loops during tally tabulation.'
    ],
    whatILearned: [
      'Smart contract development and security best practices (reentrancy, gas limits).',
      'Applied public-key cryptography and digital signature verification.',
      'Decentralized systems architecture and consensus principles.'
    ]
  }
];
