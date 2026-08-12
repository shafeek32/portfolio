export type VFSNodeType = 'file' | 'dir';

export interface VFSFileNode {
  type: 'file';
  name: string;
  content: string;
  size: number;
  updatedAt: Date;
  permissions: string;
}

export interface VFSDirNode {
  type: 'dir';
  name: string;
  children: Record<string, VFSNode>;
  updatedAt: Date;
  permissions: string;
}

export type VFSNode = VFSFileNode | VFSDirNode;

export interface ExecutionContext {
  currentPath: string; // e.g. "/home/shafeek" or "/home/shafeek/projects/arivnxt"
  history: string[];
  onResumeClick?: () => void;
}

export interface CommandOutput {
  lines: string[];
  newPath?: string;
  clear?: boolean;
  action?: 'open_url' | 'open_resume';
  url?: string;
}

export interface ParsedCommand {
  raw: string;
  command: string;
  args: string[];
  redirection?: {
    type: '>' | '>>';
    targetFile: string;
  };
}
