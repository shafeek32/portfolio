import React, { useState, useRef, useEffect } from 'react';
import { RetroWindow } from './RetroWindow';
import { projects } from '../data/projects';
import { playRetroSound } from '../utils/sound';

interface TerminalWindowProps {
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
  onOpenWindow: (id: string) => void;
  style?: React.CSSProperties;
  className?: string;
  dragConstraintsRef?: React.RefObject<Element>;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  isOpen,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  onOpenWindow,
  style,
  className = '',
  dragConstraintsRef,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-[#a0d0ff] space-y-0.5">
          <div>SHAFEEK WORKSTATION OS [Version 3.0.1998]</div>
          <div>(C) 2026 Shafeek Latheef. All rights reserved.</div>
          <div className="text-white mt-1">Type <span className="text-[#00FF66] font-bold">help</span> for commands.</div>
        </div>
      ),
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized && isActive) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized, isActive]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen || isMinimized) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    playRetroSound('blip');
    setCmdHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-[#e0e0e0]">
            <div className="text-[#00FF66] font-bold">COMMANDS:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-[11px] pt-0.5">
              <div><span className="text-white font-bold">about</span> : Bio summary</div>
              <div><span className="text-white font-bold">projects</span> : List work</div>
              <div><span className="text-white font-bold">skills</span> : Tech stack</div>
              <div><span className="text-white font-bold">journey</span> : Dev logs</div>
              <div><span className="text-white font-bold">resume</span> : View resume</div>
              <div><span className="text-white font-bold">contact</span> : Reach out</div>
              <div><span className="text-white font-bold">date</span> : System time</div>
              <div><span className="text-white font-bold">whoami</span> : Current user</div>
              <div><span className="text-white font-bold">clear</span> : Clear screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-0.5 text-gray-200">
            <div className="text-[#00FF66] font-bold">SHAFEEK LATHEEF</div>
            <div>Role: Software Engineer & Full-Stack Developer</div>
            <div>Location: Kerala, India</div>
            <div>Focus: React, TypeScript, FastAPI, Node.js, LangGraph & AI Systems.</div>
          </div>
        );
        onOpenWindow('about');
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-gray-200">
            <div className="text-[#00FF66] font-bold">FEATURED PROJECTS:</div>
            {projects.map((p, idx) => (
              <div key={p.id} className="text-[10px]">
                <span className="text-yellow-400 font-bold">[{idx + 1}] {p.title}</span> — {p.category}
              </div>
            ))}
          </div>
        );
        onOpenWindow('projects');
        break;

      case 'skills':
        output = (
          <div className="space-y-0.5 text-gray-200 text-[10px]">
            <div><span className="text-[#00FF66] font-bold">Frontend:</span> React, TypeScript, Tailwind CSS, Vite</div>
            <div><span className="text-[#00FF66] font-bold">Backend:</span> Node.js, Express, FastAPI, Python, Spring Boot</div>
            <div><span className="text-[#00FF66] font-bold">Database:</span> PostgreSQL, MongoDB, Supabase, MySQL</div>
            <div><span className="text-[#00FF66] font-bold">AI:</span> LangGraph, LangChain, LLMs, OCR</div>
          </div>
        );
        onOpenWindow('skills');
        break;

      case 'journey':
        output = (
          <div className="space-y-0.5 text-gray-200 text-[10px]">
            <div>• 2022-2026: B.Tech Computer Science & Engineering</div>
            <div>• Built AI Customer Complaint System (LangGraph + FastAPI)</div>
            <div>• Developed WebGenie (AST Code Generation Platform)</div>
          </div>
        );
        onOpenWindow('journey');
        break;

      case 'resume':
        output = (
          <div className="text-gray-200 text-[10px]">
            Opening Resume window... <a href="/Shafeek_Latheef_Resume.pdf" target="_blank" className="text-[#00FF66] underline">Direct Link</a>
          </div>
        );
        onOpenWindow('resume');
        break;

      case 'contact':
        output = (
          <div className="space-y-0.5 text-gray-200 text-[10px]">
            <div><span className="text-[#00FF66]">Email:</span> shafeekl2002@gmail.com</div>
            <div><span className="text-[#00FF66]">LinkedIn:</span> linkedin.com/in/shafeek-latheef</div>
            <div><span className="text-[#00FF66]">GitHub:</span> github.com/shafeek32</div>
          </div>
        );
        onOpenWindow('contact');
        break;

      case 'date':
        output = <div className="text-gray-200">{new Date().toString()}</div>;
        break;

      case 'whoami':
        output = <div className="text-gray-200">guest@shafeek-workstation-os</div>;
        break;

      case 'cls':
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-red-400">
            '{cmdStr}' is not recognized. Type 'help' for command list.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <RetroWindow
      id="terminal"
      title="Terminal — C:\COMMAND.COM"
      icon="terminal"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Edit', 'Terminal', 'Help']}
      statusBarLeft="C:\SHAFEEK"
      statusBarRight={<span>Online</span>}
      style={style}
      className={`w-full max-w-xl shadow-2xl ${className}`}
      bodyClassName="p-0 bg-black"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div
        onClick={() => inputRef.current?.focus()}
        className="bg-black text-[#00FF66] p-3 font-mono text-xs h-60 sm:h-64 overflow-y-auto cursor-text select-text"
      >
        {history.map((item, idx) => (
          <div key={idx} className="mb-1.5 space-y-0.5">
            {item.command !== 'welcome' && (
              <div className="flex items-center gap-1.5 text-white text-[11px]">
                <span className="text-[#00FF66] font-bold">C:\SHAFEEK&gt;</span>
                <span>{item.command}</span>
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-1.5 text-white mt-1.5">
          <span className="text-[#00FF66] font-bold text-[11px]">C:\SHAFEEK&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-[#00FF66] font-mono outline-none border-none p-0 focus:ring-0 text-xs"
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </RetroWindow>
  );
};
