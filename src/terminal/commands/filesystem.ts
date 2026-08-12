import { vfs } from '../filesystem';
import { CommandOutput, ExecutionContext, ParsedCommand } from '../types';

export const handlePwd = (ctx: ExecutionContext): CommandOutput => {
  return { lines: [ctx.currentPath] };
};

export const handleLs = (parsed: ParsedCommand, ctx: ExecutionContext): CommandOutput => {
  const flags = new Set<string>();
  const paths: string[] = [];

  for (const arg of parsed.args) {
    if (arg.startsWith('-')) {
      for (const ch of arg.slice(1)) {
        flags.add(ch);
      }
    } else {
      paths.push(arg);
    }
  }

  const showAll = flags.has('a');
  const showLong = flags.has('l');

  const targetPath = paths[0] ? vfs.normalizePath(paths[0], ctx.currentPath) : ctx.currentPath;
  const node = vfs.getNode(targetPath);

  if (!node) {
    return { lines: [`ls: cannot access '${paths[0]}': No such file or directory`] };
  }

  if (node.type === 'file') {
    if (showLong) {
      const dateStr = node.updatedAt.toLocaleDateString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
      return { lines: [`${node.permissions} 1 shafeek shafeek ${node.size.toString().padStart(6)} ${dateStr} ${node.name}`] };
    }
    return { lines: [node.name] };
  }

  // Directory listing
  const childNames = Object.keys(node.children);
  const entries: string[] = [];

  if (showAll) {
    entries.push('.');
    entries.push('..');
  }

  for (const name of childNames) {
    if (!showAll && name.startsWith('.')) continue;
    entries.push(name);
  }

  if (showLong) {
    const lines: string[] = [`total ${entries.length}`];
    for (const name of entries) {
      if (name === '.') {
        lines.push(`drwxr-xr-x 4 shafeek shafeek   4096 Aug 11 12:00 .`);
        continue;
      }
      if (name === '..') {
        lines.push(`drwxr-xr-x 5 shafeek shafeek   4096 Aug 11 12:00 ..`);
        continue;
      }
      const child = node.children[name];
      if (child) {
        const dateStr = child.updatedAt.toLocaleDateString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
        const nameDisplay = child.type === 'dir' ? `\x1b[34m${child.name}/\x1b[0m` : child.name;
        lines.push(`${child.permissions} 1 shafeek shafeek ${(child.type === 'file' ? child.size : 4096).toString().padStart(6)} ${dateStr} ${nameDisplay}`);
      }
    }
    return { lines };
  }

  // Standard multi-column/spaced format
  const formatted = entries.map((name) => {
    if (name === '.' || name === '..') return name;
    const child = node.children[name];
    return child && child.type === 'dir' ? `${name}/` : name;
  });

  return { lines: [formatted.join('    ')] };
};

export const handleCd = (parsed: ParsedCommand, ctx: ExecutionContext): CommandOutput => {
  const target = parsed.args[0] || '~';

  const normalized = vfs.normalizePath(target, ctx.currentPath);
  const node = vfs.getNode(normalized);

  if (!node) {
    return { lines: [`bash: cd: ${target}: No such file or directory`] };
  }

  if (node.type !== 'dir') {
    return { lines: [`bash: cd: ${target}: Not a directory`] };
  }

  return { lines: [], newPath: normalized };
};

export const handleCat = (parsed: ParsedCommand, ctx: ExecutionContext): CommandOutput => {
  if (parsed.args.length === 0) {
    return { lines: ['cat: missing file operand'] };
  }

  const lines: string[] = [];

  for (const filePath of parsed.args) {
    const normalized = vfs.normalizePath(filePath, ctx.currentPath);
    const node = vfs.getNode(normalized);

    if (!node) {
      lines.push(`cat: ${filePath}: No such file or directory`);
      continue;
    }

    if (node.type === 'dir') {
      lines.push(`cat: ${filePath}: Is a directory`);
      continue;
    }

    lines.push(...node.content.split('\n'));
  }

  return { lines };
};

export const handleMkdir = (parsed: ParsedCommand, ctx: ExecutionContext): CommandOutput => {
  if (parsed.args.length === 0) {
    return { lines: ['mkdir: missing operand'] };
  }

  const lines: string[] = [];
  for (const dirName of parsed.args) {
    const normalized = vfs.normalizePath(dirName, ctx.currentPath);
    const res = vfs.mkdir(normalized);
    if (!res.success) {
      lines.push(`mkdir: ${res.error}`);
    }
  }

  return { lines };
};

export const handleTouch = (parsed: ParsedCommand, ctx: ExecutionContext): CommandOutput => {
  if (parsed.args.length === 0) {
    return { lines: ['touch: missing file operand'] };
  }

  const lines: string[] = [];
  for (const fileName of parsed.args) {
    const normalized = vfs.normalizePath(fileName, ctx.currentPath);
    const res = vfs.touch(normalized);
    if (!res.success) {
      lines.push(`touch: ${res.error}`);
    }
  }

  return { lines };
};

export const handleEcho = (parsed: ParsedCommand, ctx: ExecutionContext): CommandOutput => {
  const text = parsed.args.join(' ');

  if (parsed.redirection) {
    const targetPath = vfs.normalizePath(parsed.redirection.targetFile, ctx.currentPath);
    const isAppend = parsed.redirection.type === '>>';
    const res = vfs.writeFile(targetPath, text, isAppend);

    if (!res.success) {
      return { lines: [`bash: ${parsed.redirection.targetFile}: ${res.error}`] };
    }
    return { lines: [] };
  }

  return { lines: [text] };
};

export const handleRm = (parsed: ParsedCommand, ctx: ExecutionContext): CommandOutput => {
  let recursive = false;
  const targets: string[] = [];

  for (const arg of parsed.args) {
    if (arg === '-r' || arg === '-rf' || arg === '-R') {
      recursive = true;
    } else if (!arg.startsWith('-')) {
      targets.push(arg);
    }
  }

  if (targets.length === 0) {
    return { lines: ['rm: missing operand'] };
  }

  const lines: string[] = [];
  for (const target of targets) {
    const normalized = vfs.normalizePath(target, ctx.currentPath);
    const res = vfs.rm(normalized, recursive);
    if (!res.success) {
      lines.push(`rm: ${res.error}`);
    }
  }

  return { lines };
};

export const handleResetFs = (): CommandOutput => {
  vfs.reset();
  return {
    lines: [
      '[✓] Virtual filesystem restored to pristine default state.',
      'All original portfolio files and project directories have been reset.'
    ],
    newPath: '/home/shafeek'
  };
};
