import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, Terminal as TerminalIcon } from 'lucide-react';
import { executeCommand, getAutocompleteSuggestions } from '../terminal/parser';
import { ExecutionContext } from '../terminal/types';

interface LiveTerminalProps {
  onResumeClick?: () => void;
}

export const LiveTerminal: React.FC<LiveTerminalProps> = ({ onResumeClick }) => {
  const [currentPath, setCurrentPath] = useState('/home/shafeek');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'ShafeekOS Developer Terminal Shell v3.0 [Environment: Linux/POSIX]',
    'Interactive command-line interface for portfolio exploration.',
    'Type "help" to list available commands (about, projects, skills, journey, resume, contact).',
    '================================================================================'
  ]);
  const [inputCommand, setInputCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const promptPrefix = `shafeek@workstation:~$`;

  const handleCommandExecution = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) {
      setTerminalHistory((prev) => [...prev, `${promptPrefix} `]);
      setInputCommand('');
      return;
    }

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const promptLine = `${promptPrefix} ${trimmed}`;
    const ctx: ExecutionContext = {
      currentPath,
      history: [...commandHistory, trimmed],
      onResumeClick
    };

    // Handle section navigation directly for instant developer utility
    const lower = trimmed.toLowerCase();
    if (lower === 'about' || lower === 'cat about' || lower === 'about_me') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === 'projects' || lower === 'ls projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === 'skills' || lower === 'system') {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === 'journey' || lower === 'experience' || lower === 'log') {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === 'contact' || lower === 'mail') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === 'resume' || lower === 'cat resume') {
      onResumeClick?.();
    }

    const res = executeCommand(trimmed, ctx);

    if (res.clear) {
      setTerminalHistory([
        'ShafeekOS Developer Terminal Shell',
        'Type "help" for available commands.'
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
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputCommand(commandHistory[nextIndex]);
      return;
    }

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

    if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      setTerminalHistory([
        'ShafeekOS Developer Terminal Shell',
        'Type "help" for available commands.'
      ]);
      setInputCommand('');
      return;
    }
  };

  return (
    <section id="terminal" className="py-8 px-3 sm:px-6 lg:px-12 relative z-10 font-mono">
      <div className="max-w-4xl mx-auto">
        <div
          onClick={() => inputRef.current?.focus()}
          className="retro-window-frame overflow-hidden cursor-text shadow-2xl"
        >
          {/* Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2 truncate">
              <TerminalIcon className="w-4 h-4 text-white inline shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                Terminal — [Developer Command Prompt 80x25]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Quick Suggestions Toolbar */}
          <div className="px-3 py-1.5 bg-[#C0C0C0] border-b border-[#808080] flex flex-wrap items-center gap-1.5 text-xs select-none border-t border-white">
            <span className="text-black text-[11px] font-bold mr-1">Quick:</span>
            {['help', 'about', 'projects', 'skills', 'journey', 'cat resume', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickSuggestion(cmd);
                }}
                className="retro-btn px-2 py-0.5 text-[11px] font-bold bg-[#EAEAEA] hover:bg-white text-black"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Black CRT Screen Output */}
          <div
            ref={outputContainerRef}
            className="p-4 sm:p-6 h-72 overflow-y-auto text-xs bg-black text-[#00FF00] space-y-1 selection:bg-white selection:text-black font-mono border-t-2 border-b-2 border-[#404040]"
            style={{ textShadow: '0 0 2px rgba(0,255,0,0.4)' }}
          >
            {terminalHistory.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.startsWith('shafeek@')
                    ? 'text-[#FFFFFF] font-bold'
                    : line.startsWith('[+]') || line.startsWith('[✓]') || line.startsWith('Available') || line.startsWith('===')
                    ? 'text-[#FFFF00] font-bold'
                    : line.startsWith('bash:') || line.startsWith('cat:') || line.startsWith('cd:') || line.startsWith('Bad')
                    ? 'text-[#FF5555] font-bold'
                    : 'text-[#00FF00] whitespace-pre-wrap font-mono'
                }
              >
                {line}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="px-4 py-2 bg-black border-t border-[#404040] flex items-center gap-2"
          >
            <span className="text-[#FFFF00] font-bold text-xs shrink-0 select-none">
              {promptPrefix}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Type command (e.g. projects, skills, help)...'
              className="w-full bg-transparent text-[#00FF00] text-xs font-mono focus:outline-none caret-[#00FF00]"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <button type="submit" className="text-gray-400 hover:text-white">
              <CornerDownLeft className="w-3.5 h-3.5 text-[#00FF00]" />
            </button>
          </form>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Terminal: Online</span>
            <span>Shell: bash / x86_64</span>
            <span>Status: Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
