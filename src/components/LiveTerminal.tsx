import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft } from 'lucide-react';
import { vfs } from '../terminal/filesystem';
import { executeCommand, getAutocompleteSuggestions } from '../terminal/parser';
import { ExecutionContext } from '../terminal/types';

interface LiveTerminalProps {
  onResumeClick?: () => void;
}

export const LiveTerminal: React.FC<LiveTerminalProps> = ({ onResumeClick }) => {
  const [currentPath, setCurrentPath] = useState('/home/shafeek');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'PortfolioLinux [Version 1.0]',
    '',
    "Welcome to Shafeek's interactive terminal.",
    '',
    'Type "help" to see available commands.',
    '--------------------------------------------------------------------------------'
  ]);
  const [inputCommand, setInputCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom whenever history updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const promptPrefix = `shafeek@portfolio:${vfs.formatPromptPath(currentPath)}$`;

  const handleCommandExecution = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) {
      setTerminalHistory((prev) => [...prev, `${promptPrefix} `]);
      setInputCommand('');
      return;
    }

    // Save to command history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const promptLine = `${promptPrefix} ${trimmed}`;
    const ctx: ExecutionContext = {
      currentPath,
      history: [...commandHistory, trimmed],
      onResumeClick
    };

    const res = executeCommand(trimmed, ctx);

    if (res.clear) {
      setTerminalHistory([
        'PortfolioLinux [Version 1.0]',
        'Terminal cleared. Type "help" for available commands.'
      ]);
    } else {
      setTerminalHistory((prev) => [...prev, promptLine, ...res.lines]);
    }

    if (res.newPath !== undefined) {
      setCurrentPath(res.newPath);
    }

    setInputCommand('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommandExecution(inputCommand);
  };

  const handleQuickSuggestion = (cmd: string) => {
    handleCommandExecution(cmd);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow Up: Previous command
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputCommand(commandHistory[nextIndex]);
      return;
    }

    // Arrow Down: Next command
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputCommand('');
      } else {
        setHistoryIndex(nextIndex);
        setInputCommand(commandHistory[nextIndex]);
      }
      return;
    }

    // Tab: Autocompletion
    if (e.key === 'Tab') {
      e.preventDefault();
      const { completed, matches } = getAutocompleteSuggestions(inputCommand, currentPath);

      if (matches.length > 1) {
        setTerminalHistory((prev) => [
          ...prev,
          `${promptPrefix} ${inputCommand}`,
          matches.join('    ')
        ]);
      } else if (completed !== inputCommand) {
        setInputCommand(completed);
      }
      return;
    }

    // Ctrl + L: Clear terminal
    if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      setTerminalHistory([
        'PortfolioLinux [Version 1.0]',
        'Terminal cleared. Type "help" for available commands.'
      ]);
      setInputCommand('');
      return;
    }

    // Ctrl + C: Cancel input
    if (e.ctrlKey && e.key.toLowerCase() === 'c') {
      e.preventDefault();
      setTerminalHistory((prev) => [...prev, `${promptPrefix} ${inputCommand}^C`]);
      setInputCommand('');
      setHistoryIndex(-1);
      return;
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="rounded-2xl border border-border-strong bg-[#0b101b] shadow-2xl overflow-hidden cursor-text transition-all"
    >
      {/* Terminal Window Header */}
      <div className="px-4 py-3 bg-[#111827] border-b border-border-subtle flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-xs font-mono text-text-muted ml-2">
            shafeek@portfolio: {vfs.formatPromptPath(currentPath)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>LINUX TERMINAL SIMULATOR</span>
        </div>
      </div>

      {/* Quick Command Suggestion Buttons */}
      <div className="px-4 py-2 bg-background-tertiary/40 border-b border-border-subtle flex flex-wrap items-center gap-1.5 text-xs select-none">
        <span className="text-text-muted font-mono text-[11px] mr-1">Suggestions:</span>
        {[
          'help',
          'ls',
          'cat about.txt',
          'cd projects',
          'skills',
          'neofetch',
          'whoami',
          'contact',
          'history',
          'clear'
        ].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleQuickSuggestion(cmd);
            }}
            className="px-2.5 py-1 rounded bg-background-elevated hover:bg-emerald-500/20 hover:text-emerald-300 text-text-secondary border border-border-subtle font-mono text-[11px] transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-6 h-72 sm:h-80 overflow-y-auto font-mono text-xs text-text-secondary space-y-1.5 selection:bg-emerald-500/30 selection:text-emerald-200">
        {terminalHistory.map((line, idx) => (
          <div
            key={idx}
            className={
              line.startsWith('shafeek@portfolio')
                ? 'text-emerald-400 font-semibold'
                : line.startsWith('[+]') || line.startsWith('[✓]') || line.startsWith('Starting Nmap') || line.startsWith('Available Projects') || line.startsWith('===') || line.startsWith('LANGUAGES') || line.startsWith('FRONTEND') || line.startsWith('BACKEND') || line.startsWith('DATABASE') || line.startsWith('AI') || line.startsWith('CYBERSECURITY') || line.startsWith('TOOLS')
                ? 'text-accent-cyan-light font-semibold'
                : line.startsWith('bash:') || line.startsWith('cat:') || line.startsWith('cd:') || line.startsWith('rm:') || line.startsWith('mkdir:') || line.startsWith('touch:')
                ? 'text-rose-400'
                : 'text-slate-300 whitespace-pre-wrap'
            }
          >
            {line}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Interactive Input Form */}
      <form
        onSubmit={handleFormSubmit}
        className="p-3 sm:px-4 bg-[#111827] border-t border-border-subtle flex items-center gap-2"
      >
        <span className="text-emerald-400 font-mono font-bold text-xs shrink-0 select-none">
          {promptPrefix}
        </span>
        <div className="relative flex-1 flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type command (e.g. "ls", "cd projects", "cat about.txt", "neofetch", "help")...'
            className="w-full bg-transparent text-text-primary text-xs font-mono placeholder:text-text-dim focus:outline-none caret-emerald-400"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
        <button
          type="submit"
          className="p-1.5 text-text-muted hover:text-emerald-400 transition-colors shrink-0"
          title="Run Command (Enter)"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
