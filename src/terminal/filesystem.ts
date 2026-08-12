import { VFSDirNode, VFSFileNode, VFSNode } from './types';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { experiences } from '../data/experience';
import { certifications } from '../data/certifications';

const createDefaultFileSystem = (): VFSDirNode => {
  const now = new Date();

  const makeFile = (name: string, content: string, perms = '-rw-r--r--'): VFSFileNode => ({
    type: 'file',
    name,
    content,
    size: content.length,
    updatedAt: now,
    permissions: perms
  });

  const makeDir = (name: string, children: Record<string, VFSNode> = {}, perms = 'drwxr-xr-x'): VFSDirNode => ({
    type: 'dir',
    name,
    children,
    updatedAt: now,
    permissions: perms
  });

  // Build projects directories from source data
  const projectChildren: Record<string, VFSNode> = {};

  projects.forEach((proj) => {
    // Convert project ID to folder name
    const folderSlug = proj.id
      .toLowerCase()
      .replace(/^proj-/, '')
      .replace(/[^a-z0-9-]/g, '-');

    const readmeContent = [
      `# ${proj.title}`,
      `Category: ${proj.category}`,
      proj.badge ? `Badge: ${proj.badge}` : '',
      proj.role ? `Role: ${proj.role}` : '',
      '',
      `## Overview`,
      proj.overview,
      '',
      `## Tech Stack`,
      proj.technologies.join(', '),
      '',
      `## Key Features`,
      ...proj.keyFeatures.map((f) => `* ${f}`),
      '',
      `## Links`,
      proj.liveUrl ? `Live Demo: ${proj.liveUrl}` : `Live Demo: Not currently available`,
      proj.githubUrl ? `GitHub: ${proj.githubUrl}` : ''
    ]
      .filter(Boolean)
      .join('\n');

    projectChildren[folderSlug] = makeDir(folderSlug, {
      'README.md': makeFile('README.md', readmeContent)
    });
  });

  // Build certifications files
  const certChildren: Record<string, VFSNode> = {};
  certifications.forEach((cert) => {
    const slug = cert.id.replace(/^cert-/, '').toLowerCase() + '.txt';
    const content = [
      `Certification: ${cert.title}`,
      `Issuer:        ${cert.issuer}`,
      `Issued:        ${cert.issueDate}`,
      `Skills:        ${cert.skills.join(', ')}`,
      '',
      cert.description
    ].join('\n');
    certChildren[slug] = makeFile(slug, content);
  });

  // Build skills text
  const skillsText = [
    '========================= TECHNICAL PROFICIENCIES =========================',
    ...skillCategories.map((cat) => {
      const items = cat.skills.map((s) => `  * ${s.name}${s.level ? ` (${s.level})` : ''}`).join('\n');
      return `\n[+] ${cat.name.toUpperCase()}:\n${items}`;
    })
  ].join('\n');

  // Build experience text
  const experienceText = [
    '========================== PROFESSIONAL TIMELINE ==========================',
    ...experiences.map((exp) => {
      return [
        `\n[${exp.period}] ${exp.role}`,
        `Company:  ${exp.company} (${exp.location})`,
        `Type:     ${exp.type}`,
        `Stack:    ${exp.technologies.join(', ')}`,
        `Details:  ${exp.description}`,
        'Highlights:',
        ...exp.achievements.map((a) => `  • ${a}`)
      ].join('\n');
    })
  ].join('\n');

  // Build root hierarchy: /home/shafeek/
  const shafeekHome: VFSDirNode = makeDir('shafeek', {
    'about.txt': makeFile(
      'about.txt',
      [
        'Shafeek Latheef — Software Engineer & Full-Stack Developer',
        '==========================================================',
        "I'm a Computer Science graduate from APJ Abdul Kalam Technological University",
        'with a passion for building full-stack web applications, intelligent AI workflows,',
        'and exploring foundational cybersecurity and Linux systems.',
        '',
        'Core strengths: React, TypeScript, Python, FastAPI, Node.js, PostgreSQL, MongoDB.',
        'Type "projects" to view my work or explore the ~/projects directory with cd/ls.'
      ].join('\n')
    ),
    'skills.txt': makeFile('skills.txt', skillsText),
    'experience.txt': makeFile('experience.txt', experienceText),
    'education.txt': makeFile(
      'education.txt',
      [
        'Degree:     B.Tech in Computer Science & Engineering',
        'University: APJ Abdul Kalam Technological University',
        'Period:     2020 - 2024',
        'Location:   Kerala, India',
        'Status:     Graduated'
      ].join('\n')
    ),
    'contact.txt': makeFile(
      'contact.txt',
      [
        'Contact Information',
        '===================',
        'Email:    shafeekl2002@gmail.com',
        'Phone:    +91 7593936350',
        'GitHub:   https://github.com/shafeek32',
        'LinkedIn: https://linkedin.com/in/shafeek-latheef',
        'Location: Kerala, India',
        '',
        'Feel free to use the contact form on this website or reach out directly.'
      ].join('\n')
    ),
    'resume.pdf': makeFile(
      'resume.pdf',
      [
        '=================== SHAFEEK LATHEEF - CURRICULUM VITAE ===================',
        'Software Engineer • Full-Stack Developer • AI & Security Enthusiast',
        'Type "resume" in the terminal to trigger the interactive resume view & download.'
      ].join('\n')
    ),
    '.bashrc': makeFile(
      '.bashrc',
      '# ~/.bashrc: executed by bash(1) for non-login shells.\nexport PS1="shafeek@portfolio:\\w\\$ "\nalias ll="ls -la"\nalias l="ls -CF"\n'
    ),
    '.profile': makeFile(
      '.profile',
      '# ~/.profile: executed by the command interpreter for login shells.\nexport PATH="$HOME/bin:$PATH"\n'
    ),
    projects: makeDir('projects', projectChildren),
    certifications: makeDir('certifications', certChildren)
  });

  const rootNode: VFSDirNode = makeDir('', {
    home: makeDir('home', {
      shafeek: shafeekHome
    })
  });

  return rootNode;
};

// Singleton VFS in memory
class VirtualFileSystem {
  private root: VFSDirNode;

  constructor() {
    this.root = createDefaultFileSystem();
  }

  public reset(): void {
    this.root = createDefaultFileSystem();
  }

  // Canonical path normalization: handles '~', '.', '..', multiple slashes
  public normalizePath(pathStr: string, currentPath: string): string {
    let raw = pathStr.trim();
    if (!raw) return currentPath;

    if (raw === '~' || raw.startsWith('~/')) {
      raw = '/home/shafeek' + raw.substring(1);
    } else if (!raw.startsWith('/')) {
      raw = `${currentPath === '/' ? '' : currentPath}/${raw}`;
    }

    const segments = raw.split('/').filter(Boolean);
    const resolved: string[] = [];

    for (const seg of segments) {
      if (seg === '.') continue;
      if (seg === '..') {
        if (resolved.length > 0) {
          resolved.pop();
        }
      } else {
        resolved.push(seg);
      }
    }

    return '/' + resolved.join('/');
  }

  // Convert absolute path into user-friendly tilde path: /home/shafeek/projects -> ~/projects
  public formatPromptPath(absPath: string): string {
    if (absPath === '/home/shafeek') return '~';
    if (absPath.startsWith('/home/shafeek/')) {
      return '~/' + absPath.substring('/home/shafeek/'.length);
    }
    return absPath;
  }

  // Resolve node by path
  public getNode(absPath: string): VFSNode | null {
    if (absPath === '/' || absPath === '') return this.root;

    const segments = absPath.split('/').filter(Boolean);
    let current: VFSNode = this.root;

    for (const seg of segments) {
      if (current.type !== 'dir') return null;
      if (!current.children[seg]) return null;
      current = current.children[seg];
    }

    return current;
  }

  // Get parent directory and base name
  private getParentAndName(absPath: string): { parent: VFSDirNode | null; name: string } {
    const segments = absPath.split('/').filter(Boolean);
    if (segments.length === 0) return { parent: null, name: '' };

    const name = segments[segments.length - 1];
    const parentPath = '/' + segments.slice(0, -1).join('/');
    const parentNode = this.getNode(parentPath);

    if (parentNode && parentNode.type === 'dir') {
      return { parent: parentNode, name };
    }

    return { parent: null, name };
  }

  // Make directory
  public mkdir(absPath: string): { success: boolean; error?: string } {
    const { parent, name } = this.getParentAndName(absPath);
    if (!parent) {
      return { success: false, error: 'cannot create directory: No such file or directory' };
    }
    if (parent.children[name]) {
      return { success: false, error: `cannot create directory '${name}': File exists` };
    }

    parent.children[name] = {
      type: 'dir',
      name,
      children: {},
      updatedAt: new Date(),
      permissions: 'drwxr-xr-x'
    };

    return { success: true };
  }

  // Touch file
  public touch(absPath: string): { success: boolean; error?: string } {
    const { parent, name } = this.getParentAndName(absPath);
    if (!parent) {
      return { success: false, error: 'cannot touch: No such file or directory' };
    }

    if (parent.children[name]) {
      // Update timestamp if exists
      parent.children[name].updatedAt = new Date();
      return { success: true };
    }

    parent.children[name] = {
      type: 'file',
      name,
      content: '',
      size: 0,
      updatedAt: new Date(),
      permissions: '-rw-r--r--'
    };

    return { success: true };
  }

  // Write or Append to file (for echo > and >>)
  public writeFile(absPath: string, content: string, append = false): { success: boolean; error?: string } {
    const { parent, name } = this.getParentAndName(absPath);
    if (!parent) {
      return { success: false, error: 'No such file or directory' };
    }

    const existing = parent.children[name];
    if (existing && existing.type === 'dir') {
      return { success: false, error: `${name}: Is a directory` };
    }

    const newContent = append && existing && existing.type === 'file'
      ? (existing.content ? `${existing.content}\n${content}` : content)
      : content;

    parent.children[name] = {
      type: 'file',
      name,
      content: newContent,
      size: newContent.length,
      updatedAt: new Date(),
      permissions: '-rw-r--r--'
    };

    return { success: true };
  }

  // Remove file or directory
  public rm(absPath: string, recursive = false): { success: boolean; error?: string } {
    if (absPath === '/' || absPath === '/home' || absPath === '/home/shafeek') {
      return { success: false, error: `cannot remove '${absPath}': Protected system directory` };
    }

    const { parent, name } = this.getParentAndName(absPath);
    if (!parent || !parent.children[name]) {
      return { success: false, error: `cannot remove '${name}': No such file or directory` };
    }

    const target = parent.children[name];
    if (target.type === 'dir' && !recursive) {
      return { success: false, error: `cannot remove '${name}': Is a directory (use -r to delete directories)` };
    }

    delete parent.children[name];
    return { success: true };
  }
}

export const vfs = new VirtualFileSystem();
