import { CommandOutput, ExecutionContext, ParsedCommand } from '../types';
import { projects } from '../../data/projects';
import { skillCategories } from '../../data/skills';
import { experiences } from '../../data/experience';
import { certifications } from '../../data/certifications';

export const handleAbout = (): CommandOutput => {
  return {
    lines: [
      "I'm Shafeek Latheef, a Computer Science graduate",
      'and software engineer interested in full-stack',
      'development, AI-powered applications and cybersecurity.',
      '',
      'Type "projects" to explore my work, or navigate to ~/projects in this shell.'
    ]
  };
};

export const handleSkills = (): CommandOutput => {
  const lines: string[] = [];
  skillCategories.forEach((cat) => {
    lines.push(cat.name.toUpperCase());
    cat.skills.forEach((s) => {
      lines.push(s.name);
    });
    lines.push('');
  });
  return { lines };
};

export const handleProjects = (): CommandOutput => {
  const lines: string[] = [
    'Available Projects:',
    ''
  ];

  projects.forEach((p, idx) => {
    lines.push(`  ${(idx + 1).toString().padStart(2, '0')}  ${p.title}${p.badge ? ` [${p.badge}]` : ''}`);
  });

  lines.push('');
  lines.push('Type:');
  lines.push('');
  lines.push('  project 1');
  lines.push('  project 2');
  lines.push('  project 3');
  lines.push('');
  lines.push('to view details, or use "cd projects" to explore project README files.');

  return { lines };
};

export const handleProjectDetails = (parsed: ParsedCommand): CommandOutput => {
  if (parsed.args.length === 0) {
    return { lines: ['Usage: project <number> (e.g. project 1, project 2, ... project 6)'] };
  }

  const num = parseInt(parsed.args[0], 10);
  if (isNaN(num) || num < 1 || num > projects.length) {
    return { lines: [`project: invalid project number "${parsed.args[0]}". Must be between 1 and ${projects.length}.`] };
  }

  const p = projects[num - 1];
  return {
    lines: [
      `================== [${num.toString().padStart(2, '0')}] ${p.title.toUpperCase()} ==================`,
      `Highlight:    ${p.highlight}`,
      `Category:     ${p.category}`,
      p.role ? `Role:         ${p.role}` : '',
      `Technologies: ${p.technologies.join(', ')}`,
      '',
      'Overview:',
      p.overview,
      '',
      'Key Features:',
      ...p.keyFeatures.map((f) => `  • ${f}`),
      '',
      `GitHub:       ${p.githubUrl || 'Not available'}`,
      `Live Demo:    ${p.liveUrl || 'Live Demo: Not currently available'}`
    ].filter(Boolean)
  };
};

export const handleArivNxt = (): CommandOutput => {
  window.open('https://arivnxt.in', '_blank', 'noopener,noreferrer');
  return {
    lines: [
      'ArivNxt',
      '',
      'Modern educational platform.',
      '',
      'Tech:',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      '',
      'Live:',
      'https://arivnxt.in',
      '',
      '[✓] Opened https://arivnxt.in in a new tab.'
    ]
  };
};

export const handleExperience = (): CommandOutput => {
  const lines: string[] = [
    '========================== WORK & EXPERIENCE =========================='
  ];

  experiences.forEach((exp) => {
    lines.push(`\n[${exp.period}] ${exp.role}`);
    lines.push(`Company: ${exp.company} (${exp.location})`);
    lines.push(`Type:    ${exp.type}`);
    lines.push(`Stack:   ${exp.technologies.join(', ')}`);
    lines.push(`Details: ${exp.description}`);
    lines.push('Key Highlights:');
    exp.achievements.forEach((ach) => lines.push(`  • ${ach}`));
  });

  return { lines };
};

export const handleEducation = (): CommandOutput => {
  return {
    lines: [
      'Education:',
      '',
      'Degree:     B.Tech in Computer Science & Engineering',
      'University: APJ Abdul Kalam Technological University',
      'Period:     2020 - 2024',
      'Location:   Kerala, India',
      'Status:     Graduated'
    ]
  };
};

export const handleCertifications = (): CommandOutput => {
  const lines: string[] = [
    '========================= CERTIFICATIONS ========================='
  ];

  certifications.forEach((c) => {
    lines.push(`\n• ${c.title} — ${c.issuer}`);
    lines.push(`  Issued: ${c.issueDate}`);
    lines.push(`  Skills: ${c.skills.join(', ')}`);
    lines.push(`  ${c.description}`);
  });

  return { lines };
};

export const handleContact = (): CommandOutput => {
  return {
    lines: [
      'Contact',
      '',
      'Email:    shafeekl2002@gmail.com',
      'Phone:    +91 7593936350',
      'GitHub:   github.com/shafeek32',
      'LinkedIn: linkedin.com/in/shafeek-latheef',
      '',
      'You can also use the contact form on this website.'
    ]
  };
};

export const handleGithub = (): CommandOutput => {
  window.open('https://github.com/shafeek32', '_blank', 'noopener,noreferrer');
  return {
    lines: [
      'Opening GitHub profile...',
      'https://github.com/shafeek32'
    ]
  };
};

export const handleLinkedin = (): CommandOutput => {
  window.open('https://linkedin.com/in/shafeek-latheef', '_blank', 'noopener,noreferrer');
  return {
    lines: [
      'Opening LinkedIn profile...',
      'https://linkedin.com/in/shafeek-latheef'
    ]
  };
};

export const handleResume = (ctx: ExecutionContext): CommandOutput => {
  if (ctx.onResumeClick) {
    ctx.onResumeClick();
    return {
      lines: ['[✓] Opening Shafeek Latheef interactive resume preview...']
    };
  }
  return {
    lines: ['Resume is currently unavailable.']
  };
};

export const handleRoadmap = (): CommandOutput => {
  return {
    lines: [
      '[✓] 01 - Linux Command Line & System Basics (Foundations)',
      '[✓] 02 - Networking Fundamentals & TCP/IP Concepts (Foundations)',
      '[>] 03 - Bash & Scripting Basics (Exploring)',
      '[>] 04 - Web Security & OWASP Concepts (Learning)',
      '[>] 05 - Ethical Hacking Fundamentals (Exploring)',
      '[>] 06 - Beginner Labs & Practice (TryHackMe / Bandit)'
    ]
  };
};

export const handleNmap = (): CommandOutput => {
  return {
    lines: [
      'Starting Nmap 7.94 ( https://nmap.org )',
      'Nmap scan report for localhost (127.0.0.1)',
      'Host is up (0.00012s latency).',
      'Not shown: 996 closed ports',
      'PORT     STATE SERVICE     VERSION',
      '80/tcp   open  http        Vite / React Portfolio Runtime',
      '443/tcp  open  ssl/https   TLSv1.3 Encrypted Gateway',
      '3000/tcp open  ppp         Full-Stack REST Microservice',
      '8000/tcp open  fastapi     FastAPI LangGraph Agent Inference Engine',
      '5432/tcp open  postgresql  PostgreSQL 16 Relational Engine',
      '',
      'Service detection performed. 0 security vulnerabilities detected.'
    ]
  };
};

export const handleHelp = (): CommandOutput => {
  return {
    lines: [
      'Available commands:',
      '',
      'File System:',
      '  pwd             Show current directory path',
      '  ls [-l, -a]     List files and directories',
      '  cd <dir>        Change working directory',
      '  cat <file>      Display contents of a file',
      '  mkdir <dir>     Create a virtual directory',
      '  touch <file>    Create a virtual file',
      '  rm [-r] <path>  Remove a virtual file or directory',
      '  echo <text>     Print text or redirect (> / >>) to file',
      '  resetfs         Reset virtual filesystem to default',
      '',
      'System:',
      '  whoami          Display current username',
      '  hostname        Show hostname',
      '  uname [-a]      Display system information',
      '  date            Display current date and time',
      '  neofetch        Display system and portfolio information',
      '',
      'Portfolio:',
      '  about           About me',
      '  skills          Technical skills overview',
      '  projects        List featured engineering projects',
      '  project <num>   View specific project details',
      '  arivnxt         Open ArivNxt live platform',
      '  experience      Work timeline and achievements',
      '  education       Academic background',
      '  certifications  Professional certifications',
      '  contact         Contact endpoints',
      '  github          Open GitHub in new tab',
      '  linkedin        Open LinkedIn in new tab',
      '  resume          Open resume preview',
      '  roadmap         View cybersecurity learning progression',
      '',
      'Terminal:',
      '  clear           Clear terminal window',
      '  history         Show executed command history',
      '  help            Show this help manual',
      ''
    ]
  };
};
