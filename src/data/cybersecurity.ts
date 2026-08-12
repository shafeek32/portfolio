import { CybersecurityTopic } from '../types';

export const cybersecurityRoadmap: CybersecurityTopic[] = [
  {
    step: '01',
    title: 'Linux & Command Line Basics',
    description: 'Learning Linux filesystem hierarchy, file permissions, basic process management, user administration, and essential terminal utilities.',
    skills: ['Linux File Structure', 'File Permissions & chmod/chown', 'Basic Process Commands', 'SSH Connection Basics', 'Package Managers (apt)'],
    status: 'Foundations',
    tools: ['Ubuntu', 'Kali Linux Basics', 'Bash CLI', 'nano / vim']
  },
  {
    step: '02',
    title: 'Networking Fundamentals',
    description: 'Studying the fundamentals of how data travels across networks, including TCP/IP, OSI model, IP addressing, DNS resolution, and ports.',
    skills: ['TCP/IP & OSI 7-Layer Models', 'IPv4 & Subnetting Concepts', 'DNS, DHCP, HTTP/HTTPS', 'Port Numbers & Protocols', 'Basic Ping & Traceroute'],
    status: 'Foundations',
    tools: ['Wireshark (Basics)', 'Nmap (Basic Scanning)', 'Netcat Basics', 'Ping / Traceroute']
  },
  {
    step: '03',
    title: 'Bash & Scripting Basics',
    description: 'Writing simple shell scripts to automate basic system tasks, filter log files, and understand command chaining with pipes.',
    skills: ['Basic Shell Script Syntax', 'Pipes & Redirection', 'Grep & Text Filtering', 'Basic Loops & Variables', 'Simple Automation'],
    status: 'Exploring',
    tools: ['Bash', 'Grep', 'Basic RegEx', 'Cron basics']
  },
  {
    step: '04',
    title: 'Web Security & OWASP Concepts',
    description: 'Exploring common web application vulnerabilities as a beginner, studying OWASP Top 10 concepts and how secure coding prevents them.',
    skills: ['SQL Injection (SQLi) Concepts', 'Cross-Site Scripting (XSS) Basics', 'Input Sanitization', 'Authentication Fundamentals', 'HTTPS & Cookies'],
    status: 'Learning',
    tools: ['Burp Suite (Community)', 'Browser DevTools', 'Postman', 'OWASP Top 10 Guides']
  },
  {
    step: '05',
    title: 'Ethical Hacking Fundamentals',
    description: 'Understanding the ethical hacking methodology, passive reconnaissance principles, and introductory security concepts.',
    skills: ['Security Terminology & Ethics', 'Basic Network Scanning', 'Information Gathering', 'Vulnerability Concepts', 'Responsible Disclosure'],
    status: 'Exploring',
    tools: ['Nmap', 'Whois', 'Gobuster Basics', 'Security Whitepapers']
  },
  {
    step: '06',
    title: 'Beginner Labs & Practice',
    description: 'Applying beginner security concepts through structured hands-on rooms and gamified capture-the-flag (CTF) platforms.',
    skills: ['TryHackMe Beginner Rooms', 'OverTheWire Bandit (Linux)', 'PortSwigger Academy (Basics)', 'Understanding Vulnerability Fixes'],
    status: 'Practicing',
    tools: ['TryHackMe', 'OverTheWire', 'PortSwigger Web Security Academy']
  }
];

export const terminalInitialLines = [
  'ShafeekOS v2.4.0 (x86_64-pc-linux-gnu)',
  'Session started: ' + new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  'Type "help" or click suggestions below to explore available commands.',
  '--------------------------------------------------------------------------------'
];

export const terminalPresetCommands: Record<string, string[]> = {
  help: [
    'Available system commands:',
    '  whoami          - Display developer identity and beginner security focus',
    '  skills          - List full-stack skills and foundational security learning',
    '  roadmap         - View current cybersecurity beginner learning progression',
    '  projects        - List top featured engineering projects',
    '  nmap localhost  - Scan portfolio runtime services and open security ports',
    '  cat resume      - Output career overview summary',
    '  contact         - Display communication endpoints & social profiles',
    '  clear           - Reset terminal window'
  ],
  whoami: [
    'User: shafeek@security-node',
    'Name: Shafeek Latheef',
    'Role: Software Engineer & Full-Stack Developer',
    'Security Level: Beginner / Active Self-Learner',
    'Current Focus: Linux Basics, Network Fundamentals, Web Security (OWASP)',
    'Education: B.Tech Computer Science (APJ Abdul Kalam Tech University)',
    'Status: [OPEN FOR SOFTWARE ENGINEERING OPPORTUNITIES]'
  ],
  skills: [
    '[+] Full-Stack Software Engineering (Core Strengths):',
    '  * React, TypeScript, Python, FastAPI, Node.js, Express, PostgreSQL, MongoDB',
    '  * LangGraph, LangChain, Document OCR, RESTful APIs, Tailwind CSS',
    '[+] Cybersecurity (Beginner / Foundational Learning):',
    '  * Linux System & CLI Basics (Ubuntu, navigation, file permissions)',
    '  * Networking Fundamentals (TCP/IP model, DNS, basic packet analysis)',
    '  * Basic Bash & Python Automation Scripting',
    '  * Web Security Fundamentals (OWASP Top 10 concepts, input validation)',
    '  * Hands-on Beginner Labs: TryHackMe, OverTheWire Bandit'
  ],
  roadmap: [
    '[✓] 01 - Linux Command Line & System Basics (Foundational Practice)',
    '[✓] 02 - Networking Fundamentals & TCP/IP Concepts (Core Concepts)',
    '[>] 03 - Basic Bash Automation & Shell Tools (Exploring)',
    '[>] 04 - Web Application Security & OWASP Top 10 (Beginner Study)',
    '[>] 05 - Ethical Hacking Methodologies & Concepts (Introductory)',
    '[>] 06 - TryHackMe & Beginner Hands-on Labs (Active Practice)'
  ],
  projects: [
    '[1] AI Customer Complaint Management System (FastAPI, LangGraph, Groq, OCR)',
    '[2] Decision Companion System (Weighted Sum Model, React, Node.js, Recharts)',
    '[3] WebGenie (No-code full-stack application generator)',
    '[4] ArivNxt (Live Project - Modern Educational Platform, React, Vite)',
    '[5] CodeArena (College coding & algorithmic sandbox)',
    '[6] Decentralized E-Voting System (Cryptographic blockchain voting prototype)'
  ],
  'nmap localhost': [
    'Starting Nmap 7.94 ( https://nmap.org )',
    'Nmap scan report for localhost (127.0.0.1)',
    'Host is up (0.00012s latency).',
    'Not shown: 996 closed ports',
    'PORT     STATE SERVICE     VERSION',
    '80/tcp   open  http        Vite/React Development Server (Shafeek Portfolio)',
    '443/tcp  open  ssl/https   TLSv1.3 Encrypted Gateway',
    '3000/tcp open  ppp         Full-Stack REST Microservice',
    '8000/tcp open  fastapi     FastAPI LangGraph Agent Inference Engine',
    '5432/tcp open  postgresql  PostgreSQL 16 Relational Engine',
    '',
    'Service detection performed. 0 security vulnerabilities detected.'
  ],
  'cat resume': [
    '================== SHAFEEK LATHEEF - RESUME OVERVIEW ==================',
    'Role: Software Engineer | Full-Stack Developer & Cybersecurity Enthusiast',
    'Degree: B.Tech Computer Science & Engineering',
    'Location: Kerala, India',
    'GitHub: https://github.com/shafeek32',
    'Core Stack: React, TypeScript, Python, FastAPI, Node.js, PostgreSQL, MongoDB',
    'Cybersecurity: Active beginner learning Linux, Networking & Web Security',
    'Click "Download Resume" in the hero navigation for the complete PDF copy.'
  ],
  contact: [
    'Email: shafeekl2002@gmail.com (or via contact form below)',
    'Phone: +91 7593936350',
    'GitHub: https://github.com/shafeek32',
    'LinkedIn: https://linkedin.com/in/shafeek-latheef',
    'Location: Kerala, India'
  ]
};
