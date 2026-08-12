import { CommandOutput, ExecutionContext, ParsedCommand } from './types';
import { vfs } from './filesystem';
import {
  handlePwd,
  handleLs,
  handleCd,
  handleCat,
  handleMkdir,
  handleTouch,
  handleEcho,
  handleRm,
  handleResetFs
} from './commands/filesystem';
import {
  handleWhoami,
  handleHostname,
  handleUname,
  handleDate,
  handleNeofetch,
  handleHistory
} from './commands/system';
import {
  handleAbout,
  handleSkills,
  handleProjects,
  handleProjectDetails,
  handleArivNxt,
  handleExperience,
  handleEducation,
  handleCertifications,
  handleContact,
  handleGithub,
  handleLinkedin,
  handleResume,
  handleRoadmap,
  handleNmap,
  handleHelp
} from './commands/portfolio';

// List of all recognized command verbs
export const allCommands: string[] = [
  'pwd',
  'ls',
  'cd',
  'cat',
  'mkdir',
  'touch',
  'rm',
  'echo',
  'resetfs',
  'whoami',
  'hostname',
  'uname',
  'date',
  'neofetch',
  'history',
  'about',
  'skills',
  'projects',
  'project',
  'arivnxt',
  'experience',
  'education',
  'certs',
  'certifications',
  'contact',
  'github',
  'linkedin',
  'resume',
  'roadmap',
  'nmap',
  'help',
  'clear'
];

/**
 * Tokenize input string supporting double/single quotes and redirection operators (> and >>)
 */
export const tokenizeInput = (raw: string): ParsedCommand => {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { raw, command: '', args: [] };
  }

  // Check for redirection: > or >>
  let mainPart = trimmed;
  let redirection: ParsedCommand['redirection'] | undefined;

  const appendIndex = trimmed.indexOf('>>');
  const overwriteIndex = trimmed.indexOf('>');

  if (appendIndex !== -1) {
    mainPart = trimmed.substring(0, appendIndex).trim();
    const targetFile = trimmed.substring(appendIndex + 2).trim().replace(/^['"]|['"]$/g, '');
    if (targetFile) {
      redirection = { type: '>>', targetFile };
    }
  } else if (overwriteIndex !== -1) {
    mainPart = trimmed.substring(0, overwriteIndex).trim();
    const targetFile = trimmed.substring(overwriteIndex + 1).trim().replace(/^['"]|['"]$/g, '');
    if (targetFile) {
      redirection = { type: '>', targetFile };
    }
  }

  // Tokenize arguments handling quotes
  const tokens: string[] = [];
  let currentToken = '';
  let insideQuote: null | '"' | "'" = null;

  for (let i = 0; i < mainPart.length; i++) {
    const ch = mainPart[i];

    if (insideQuote) {
      if (ch === insideQuote) {
        insideQuote = null;
      } else {
        currentToken += ch;
      }
    } else if (ch === '"' || ch === "'") {
      insideQuote = ch;
    } else if (/\s/.test(ch)) {
      if (currentToken) {
        tokens.push(currentToken);
        currentToken = '';
      }
    } else {
      currentToken += ch;
    }
  }

  if (currentToken) {
    tokens.push(currentToken);
  }

  const command = tokens[0] ? tokens[0].toLowerCase() : '';
  const args = tokens.slice(1);

  return {
    raw,
    command,
    args,
    redirection
  };
};

/**
 * Parse and execute the command through modular handlers
 */
export const executeCommand = (
  rawInput: string,
  ctx: ExecutionContext
): CommandOutput => {
  const parsed = tokenizeInput(rawInput);

  if (!parsed.command) {
    return { lines: [] };
  }

  switch (parsed.command) {
    case 'clear':
      return { lines: [], clear: true };

    case 'pwd':
      return handlePwd(ctx);

    case 'ls':
      return handleLs(parsed, ctx);

    case 'cd':
      return handleCd(parsed, ctx);

    case 'cat':
      return handleCat(parsed, ctx);

    case 'mkdir':
      return handleMkdir(parsed, ctx);

    case 'touch':
      return handleTouch(parsed, ctx);

    case 'echo':
      return handleEcho(parsed, ctx);

    case 'rm':
      return handleRm(parsed, ctx);

    case 'resetfs':
      return handleResetFs();

    case 'whoami':
      return handleWhoami();

    case 'hostname':
      return handleHostname();

    case 'uname':
      return handleUname(parsed);

    case 'date':
      return handleDate();

    case 'neofetch':
      return handleNeofetch();

    case 'history':
      return handleHistory(ctx);

    case 'about':
      return handleAbout();

    case 'skills':
      return handleSkills();

    case 'projects':
      return handleProjects();

    case 'project':
      return handleProjectDetails(parsed);

    case 'arivnxt':
      return handleArivNxt();

    case 'experience':
      return handleExperience();

    case 'education':
      return handleEducation();

    case 'certs':
    case 'certifications':
      return handleCertifications();

    case 'contact':
      return handleContact();

    case 'github':
      return handleGithub();

    case 'linkedin':
      return handleLinkedin();

    case 'resume':
      return handleResume(ctx);

    case 'roadmap':
      return handleRoadmap();

    case 'nmap':
      return handleNmap();

    case 'help':
      return handleHelp();

    default:
      return {
        lines: [
          `bash: ${parsed.command}: command not found`,
          'Type "help" to see available commands.'
        ]
      };
  }
};

/**
 * Autocomplete suggestions for commands and virtual filesystem paths
 */
export const getAutocompleteSuggestions = (
  input: string,
  currentPath: string
): { completed: string; matches: string[] } => {
  const trimmed = input.trimStart();
  const parts = trimmed.split(/\s+/);

  // Autocomplete command verb
  if (parts.length <= 1) {
    const prefix = (parts[0] || '').toLowerCase();
    const matches = allCommands.filter((cmd) => cmd.startsWith(prefix));

    if (matches.length === 1) {
      return { completed: matches[0], matches };
    }
    return { completed: input, matches };
  }

  // Autocomplete file/dir argument
  const cmd = parts[0].toLowerCase();
  const arg = parts[parts.length - 1] || '';

  // Commands that take file/directory operands
  if (['cd', 'ls', 'cat', 'rm', 'touch', 'mkdir'].includes(cmd)) {
    let searchDir = currentPath;
    let filePrefix = arg;

    if (arg.includes('/')) {
      const lastSlash = arg.lastIndexOf('/');
      const dirPart = arg.substring(0, lastSlash) || '/';
      filePrefix = arg.substring(lastSlash + 1);
      searchDir = vfs.normalizePath(dirPart, currentPath);
    }

    const node = vfs.getNode(searchDir);
    if (node && node.type === 'dir') {
      const children = Object.keys(node.children);
      const matches = children.filter((name) => name.startsWith(filePrefix));

      if (matches.length === 1) {
        const match = matches[0];
        const isDir = node.children[match]?.type === 'dir';
        const prefixBeforeMatch = arg.includes('/') ? arg.substring(0, arg.lastIndexOf('/') + 1) : '';
        const completedArg = `${prefixBeforeMatch}${match}${isDir ? '/' : ''}`;

        const completedParts = [...parts.slice(0, -1), completedArg];
        return { completed: completedParts.join(' '), matches };
      }

      return { completed: input, matches };
    }
  }

  if (cmd === 'project') {
    const valid = ['1', '2', '3', '4', '5', '6'];
    const matches = valid.filter((v) => v.startsWith(arg));
    if (matches.length === 1) {
      return { completed: `project ${matches[0]}`, matches };
    }
    return { completed: input, matches };
  }

  return { completed: input, matches: [] };
};
