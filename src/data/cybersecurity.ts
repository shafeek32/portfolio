export const terminalInitialLines = [
  'ShafeekOS Environment v3.0.0 (x86_64-pc-linux-gnu)',
  'Interactive Developer Shell — Session Active',
  'Type "help" or select a command below to explore system details.',
  '--------------------------------------------------------------------------------'
];

export const terminalPresetCommands: Record<string, string[]> = {
  help: [
    'Available system commands:',
    '  whoami          - Display engineer identity and core technical focus',
    '  skills          - List full-stack technologies and AI architecture tools',
    '  projects        - List featured engineering applications',
    '  architecture    - Output system stack architecture',
    '  cat resume      - Output career overview summary',
    '  contact         - Display communication endpoints & social profiles',
    '  clear           - Reset terminal window'
  ],
  whoami: [
    'User: shafeek@dev-node',
    'Name: Shafeek Latheef',
    'Role: Software Engineer & Full-Stack Developer',
    'Focus: Web Applications, AI Workflows, Scalable Backend Services',
    'Education: B.Tech Computer Science & Engineering (KTU)',
    'Status: [OPEN FOR SOFTWARE ENGINEERING OPPORTUNITIES]'
  ],
  skills: [
    '[+] Core Software Engineering Stack:',
    '  * Frontend: React, TypeScript, JavaScript, Tailwind CSS, Vite, Framer Motion',
    '  * Backend: Python, FastAPI, Node.js, Express.js, Spring Boot, REST APIs',
    '  * Databases: PostgreSQL, MongoDB, Supabase, MySQL',
    '  * AI & ML: LangGraph, LangChain, Groq LLM Inference, Multimodal OCR',
    '  * Infrastructure & Tools: Docker, Git, Linux CLI, Postman, Vercel'
  ],
  projects: [
    '[1] AI Customer Complaint Management System (FastAPI, LangGraph, Groq, OCR)',
    '[2] Decision Companion System (Weighted Sum Model, React, Node.js, Recharts)',
    '[3] WebGenie (AST-driven full-stack code generator)',
    '[4] CodeArena (Algorithmic problem practice sandbox & Monaco editor)',
    '[5] ArivNxt (Live Production Educational Platform, React, Vite)',
    '[6] Decentralized E-Voting System (Smart contract cryptographic voting prototype)'
  ],
  architecture: [
    'Runtime System Stack:',
    '  - Frontend: React 18 + TypeScript + Vite + Tailwind CSS',
    '  - Async Services: FastAPI / Node.js Express',
    '  - Relational & Document Stores: PostgreSQL / MongoDB',
    '  - Orchestration & AI: LangGraph / Groq LLM Tools',
    '  - Status: Systems Operating Nominal'
  ],
  'cat resume': [
    '================== SHAFEEK LATHEEF — RESUME OVERVIEW ==================',
    'Role: Software Engineer | Full-Stack Developer',
    'Degree: B.Tech Computer Science & Engineering (KTU)',
    'Location: Kerala, India',
    'GitHub: https://github.com/shafeek32',
    'Core Stack: React, TypeScript, Python, FastAPI, Node.js, PostgreSQL, MongoDB',
    'Click "RESUME" in top navigation to open printable PDF view.'
  ],
  contact: [
    'Email: shafeekl2002@gmail.com',
    'Phone: +91 7593936350',
    'GitHub: https://github.com/shafeek32',
    'LinkedIn: https://www.linkedin.com/in/shafeek-latheef/',
    'Location: Kerala, India'
  ]
};
