import { CommandOutput, ExecutionContext, ParsedCommand } from '../types';

export const handleWhoami = (): CommandOutput => {
  return { lines: ['shafeek'] };
};

export const handleHostname = (): CommandOutput => {
  return { lines: ['portfolio'] };
};

export const handleUname = (parsed: ParsedCommand): CommandOutput => {
  if (parsed.args.includes('-a')) {
    return {
      lines: ['PortfolioLinux portfolio 6.0.0-react-wasm x86_64 GNU/Linux']
    };
  }
  return { lines: ['PortfolioLinux'] };
};

export const handleDate = (): CommandOutput => {
  return { lines: [new Date().toString()] };
};

export const handleHistory = (ctx: ExecutionContext): CommandOutput => {
  if (ctx.history.length === 0) {
    return { lines: ['  1  history'] };
  }

  const lines = ctx.history.map((cmd, idx) => `  ${(idx + 1).toString().padStart(3, ' ')}  ${cmd}`);
  return { lines };
};

export const handleNeofetch = (): CommandOutput => {
  return {
    lines: [
      '       ███████╗',
      '       ██╔════╝',
      '       ███████╗       shafeek@portfolio',
      '       ╚════██║       ------------------',
      '       ███████║       OS: PortfolioLinux (Web Shell)',
      '       ╚══════╝       Host: portfolio-v2.4',
      '                      Role: Software Engineer & Full-Stack Developer',
      '                      Shell: portfolio-bash',
      '                      Stack: React 18 / TypeScript / Vite',
      '                      Backend: Python / FastAPI / Node.js / Express',
      '                      Database: PostgreSQL / MongoDB / Supabase',
      '                      Focus: Full-Stack • AI Agents • Cybersecurity',
      '                      Status: Open to opportunities',
      '                      Contact: shafeekl2002@gmail.com | +91 7593936350',
      ''
    ]
  };
};
