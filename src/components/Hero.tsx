import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowDown, Folder, Terminal, Compass, Layers, Server, Cpu, Database, Sparkles, Monitor } from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const architectureNodes = [
    { label: '01. Frontend UI', sub: 'React / TypeScript', icon: <Layers className="w-4 h-4 text-[#000080]" /> },
    { label: '02. API Gateway', sub: 'REST / FastAPI', icon: <Server className="w-4 h-4 text-[#000080]" /> },
    { label: '03. Backend Logic', sub: 'Node.js / Python', icon: <Cpu className="w-4 h-4 text-[#000080]" /> },
    { label: '04. Relational DB', sub: 'PostgreSQL / Supabase', icon: <Database className="w-4 h-4 text-[#000080]" /> },
    { label: '05. AI Agent Core', sub: 'LangGraph Workflows', icon: <Sparkles className="w-4 h-4 text-[#000080]" /> },
  ];

  return (
    <section id="home" className="pt-4 pb-8 px-3 sm:px-6 lg:px-12 relative z-10 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Main Workstation Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="retro-window-frame overflow-hidden shadow-2xl"
        >
          {/* Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2 truncate">
              <Monitor className="w-4 h-4 text-white inline shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                💻 Shafeek_OS.exe — [Personal Workstation System]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="retro-titlebar-btn" title="Minimize">_</button>
              <button className="retro-titlebar-btn" title="Maximize">□</button>
              <button className="retro-titlebar-btn bg-[#C0C0C0] text-red-700 font-bold" title="Close">✕</button>
            </div>
          </div>

          {/* Window Menu Bar */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center gap-4 text-xs text-black select-none border-t border-white">
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ile</span>
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>dit</span>
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>V</u>iew</span>
            <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>H</u>elp</span>
          </div>

          {/* Window Body Container */}
          <div className="p-4 sm:p-7 bg-[#C0C0C0] space-y-5">
            {/* Top Row: Hero Introduction + System Information Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Left Main Hero Inset Box */}
              <div className="lg:col-span-8 retro-inset p-5 sm:p-7 flex flex-col justify-between space-y-5 bg-[#FFFFFA]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-[#000080] text-white text-[11px] font-bold uppercase tracking-wider">
                      ★ STATUS: AVAILABLE FOR 2026 ROLES
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-black leading-tight mb-2">
                    SHAFEEK LATHEEF
                  </h1>

                  <div className="text-sm sm:text-base font-bold text-[#000080] uppercase tracking-wide mb-3">
                    SOFTWARE ENGINEER • FULL-STACK DEVELOPER
                  </div>

                  <p className="text-xs sm:text-sm text-[#222222] font-mono leading-relaxed max-w-2xl">
                    I design and engineer reliable full-stack applications, intelligent AI agent pipelines, and robust backend systems. Welcome to my personal software engineering workstation.
                  </p>
                </div>

                {/* 3D Bevel Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#projects"
                    className="retro-btn px-4 py-2.5 text-xs font-bold uppercase flex items-center gap-2 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black shadow-sm"
                  >
                    <Folder className="w-3.5 h-3.5 text-[#000080]" />
                    <span>View Projects (4)</span>
                    <ArrowDown className="w-3 h-3" />
                  </a>

                  <button
                    onClick={onResumeClick}
                    className="retro-btn px-4 py-2.5 text-xs font-bold uppercase flex items-center gap-2 bg-[#FFFFE0] hover:bg-white text-black shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#000080]" />
                    <span>Resume.pdf</span>
                  </button>

                  <a
                    href="#contact"
                    className="retro-btn px-4 py-2.5 text-xs font-bold uppercase flex items-center gap-2 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black shadow-sm"
                  >
                    <Terminal className="w-3.5 h-3.5 text-[#000080]" />
                    <span>Contact Dialog</span>
                  </a>
                </div>
              </div>

              {/* Right Side: System Information Panel */}
              <div className="lg:col-span-4 retro-inset p-5 flex flex-col justify-between space-y-4 bg-[#F5F5F0]">
                <div className="pb-2 border-b-2 border-[#C0C0C0] flex items-center justify-between font-bold text-xs text-black">
                  <div className="flex items-center gap-1.5 text-[#000080]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>SYSTEM INFORMATION</span>
                  </div>
                  <span className="text-[10px] text-gray-500">SYS_V3.0</span>
                </div>

                <div className="space-y-2.5 text-xs leading-relaxed">
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-gray-600 font-bold">DEVELOPER:</span>
                    <span className="text-black font-bold">Shafeek Latheef</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-gray-600 font-bold">ROLE:</span>
                    <span className="text-black font-bold">Software Engineer</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-gray-600 font-bold">FOCUS:</span>
                    <span className="text-black font-bold">Full-Stack & AI Systems</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-gray-600 font-bold">STACK:</span>
                    <span className="text-[#000080] font-bold">React • Node • FastAPI</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-gray-600 font-bold">LOCATION:</span>
                    <span className="text-black font-bold flex items-center gap-1">
                      <Compass className="w-3 h-3 text-[#000080]" />
                      Kerala, India
                    </span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-gray-600 font-bold">STATUS:</span>
                    <span className="text-emerald-700 font-bold">● ONLINE / READY</span>
                  </div>
                </div>

                <div className="p-2 bg-[#E0E0E0] border border-[#808080] text-center text-[10px] text-[#404040] font-bold uppercase tracking-wider">
                  DESIGN ⚙ ENGINEER ⚙ DEPLOY
                </div>
              </div>
            </div>

            {/* Architecture Pipeline Inset Box */}
            <div className="retro-inset p-4 bg-[#FFFFFA]">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#C0C0C0] text-xs font-bold text-black">
                <span className="text-[#000080] uppercase tracking-wider flex items-center gap-1.5">
                  <span>⚙</span> SYSTEM ARCHITECTURE PIPELINE
                </span>
                <span className="text-[10px] text-gray-500 hidden sm:inline">END-TO-END FLOW</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {architectureNodes.map((node, idx) => (
                  <div
                    key={node.label}
                    className="p-3 bg-[#F0F0F0] border-t border-l border-white border-b-2 border-r-2 border-[#808080] shadow-sm flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      {node.icon}
                      <span className="text-[10px] font-bold text-[#808080]">0{idx + 1}</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black">{node.label}</div>
                      <div className="text-[11px] text-gray-600 font-sans mt-0.5">{node.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Window Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Ready</span>
            <span>100%</span>
            <span>UTF-8</span>
            <span>Memory: 64MB OK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
