import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Folder, User, Terminal, Mail, Clock, ChevronRight, Settings, RotateCcw, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [startOpen, setStartOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#top-system-menu')) {
        setStartOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About_Me.txt', target: 'about', icon: <User className="w-3.5 h-3.5" /> },
    { name: 'Projects_Explorer.exe', target: 'projects', icon: <Folder className="w-3.5 h-3.5" /> },
    { name: 'System_Properties.sys', target: 'skills', icon: <Settings className="w-3.5 h-3.5" /> },
    { name: 'Journey_Event_Log.log', target: 'experience', icon: <Clock className="w-3.5 h-3.5" /> },
    { name: 'Command_Prompt.com', target: 'terminal', icon: <Terminal className="w-3.5 h-3.5" /> },
    { name: 'Contact_Dialog.exe', target: 'contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  const handleNavClick = (targetId: string) => {
    setStartOpen(false);
    setActiveMenu(null);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="top-system-menu"
      className="fixed top-0 left-0 right-0 z-50 bg-[#C0C0C0] border-b-2 border-[#404040] shadow-[0_2px_0px_#000000] select-none font-mono text-xs"
    >
      <div className="max-w-7xl mx-auto px-2 py-1 flex items-center justify-between gap-2">
        {/* Left: Start Button & Top Menus */}
        <div className="flex items-center gap-2">
          {/* Start Button */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setStartOpen(!startOpen);
                setActiveMenu(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1 font-bold text-xs font-mono uppercase transition-all ${
                startOpen
                  ? 'bg-[#A0A0A0] border-t-2 border-l-2 border-[#404040] border-b-2 border-r-2 border-white shadow-none'
                  : 'retro-btn'
              }`}
            >
              <span className="text-base leading-none">💾</span>
              <span className="tracking-wider">Start</span>
            </button>

            {/* Start Menu Dropdown */}
            <AnimatePresence>
              {startOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-64 retro-window-frame z-50 overflow-hidden shadow-2xl"
                >
                  <div className="flex">
                    {/* Windows 95 style side strip */}
                    <div className="w-7 bg-gradient-to-t from-[#000080] to-[#1084D0] flex items-end justify-center py-4 text-white font-bold text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 select-none">
                      SHAFEEK OS '26
                    </div>

                    <div className="flex-1 p-1 bg-[#C0C0C0] space-y-0.5">
                      {navLinks.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item.target)}
                          className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-[#000080] hover:text-white transition-colors group cursor-pointer text-left text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#000080] group-hover:text-white">{item.icon}</span>
                            <span className="font-bold">{item.name}</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white" />
                        </button>
                      ))}

                      <div className="h-px bg-[#808080] my-1 border-b border-white" />

                      <button
                        onClick={() => {
                          setStartOpen(false);
                          onResumeClick();
                        }}
                        className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-[#000080] hover:text-white transition-colors group text-left text-xs font-bold"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-[#000080] group-hover:text-white" />
                          <span>Shafeek_Resume.pdf</span>
                        </div>
                        <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white" />
                      </button>

                      <div className="h-px bg-[#808080] my-1 border-b border-white" />

                      <button
                        onClick={() => {
                          setStartOpen(false);
                          window.location.reload();
                        }}
                        className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-[#000080] hover:text-white transition-colors group text-left text-xs text-gray-700 hover:text-white"
                      >
                        <div className="flex items-center gap-2">
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Restart Workstation</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Top Menu Bar Items: File, Projects, Terminal, Help */}
          <div className="hidden sm:flex items-center gap-1 text-black font-mono">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenu(activeMenu === 'file' ? null : 'file');
                  setStartOpen(false);
                }}
                className={`px-2 py-0.5 hover:bg-[#000080] hover:text-white cursor-pointer ${
                  activeMenu === 'file' ? 'bg-[#000080] text-white' : ''
                }`}
              >
                <u>F</u>ile
              </button>
              {activeMenu === 'file' && (
                <div className="absolute top-full left-0 mt-1 w-48 retro-window-frame p-1 bg-[#C0C0C0] z-50 shadow-lg space-y-0.5">
                  <button
                    onClick={() => handleNavClick('home')}
                    className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white block"
                  >
                    Desktop Home
                  </button>
                  <button
                    onClick={() => {
                      setActiveMenu(null);
                      onResumeClick();
                    }}
                    className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white block"
                  >
                    View Official Resume
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white block"
                  >
                    Transmit Message
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenu(activeMenu === 'projects' ? null : 'projects');
                  setStartOpen(false);
                }}
                className={`px-2 py-0.5 hover:bg-[#000080] hover:text-white cursor-pointer ${
                  activeMenu === 'projects' ? 'bg-[#000080] text-white' : ''
                }`}
              >
                <u>P</u>rojects
              </button>
              {activeMenu === 'projects' && (
                <div className="absolute top-full left-0 mt-1 w-52 retro-window-frame p-1 bg-[#C0C0C0] z-50 shadow-lg space-y-0.5">
                  <button
                    onClick={() => handleNavClick('projects')}
                    className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white block font-bold"
                  >
                    Open Project Explorer
                  </button>
                  <a
                    href="https://github.com/shafeek32"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white block"
                  >
                    GitHub Repositories →
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleNavClick('terminal')}
                className="px-2 py-0.5 hover:bg-[#000080] hover:text-white cursor-pointer"
              >
                <u>T</u>erminal
              </button>
            </div>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenu(activeMenu === 'help' ? null : 'help');
                  setStartOpen(false);
                }}
                className={`px-2 py-0.5 hover:bg-[#000080] hover:text-white cursor-pointer ${
                  activeMenu === 'help' ? 'bg-[#000080] text-white' : ''
                }`}
              >
                <u>H</u>elp
              </button>
              {activeMenu === 'help' && (
                <div className="absolute top-full left-0 mt-1 w-64 retro-window-frame p-3 bg-[#FFFFFA] z-50 shadow-lg text-xs space-y-2 text-black">
                  <div className="font-bold text-[#000080] flex items-center gap-1.5 pb-1 border-b border-gray-300">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>ShafeekOS Workstation v3.0</span>
                  </div>
                  <p className="text-[11px] text-gray-700 leading-relaxed font-sans">
                    Retro Personal Workstation built with React 18, TypeScript & Vite.
                  </p>
                  <div className="text-[10px] text-gray-500 font-mono pt-1 border-t border-gray-200">
                    STATUS: ALL SYSTEMS OPERATIONAL
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Live Local System Time */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="retro-inset px-2.5 py-0.5 flex items-center gap-1.5 font-mono text-[11px] bg-[#C0C0C0] text-black">
            <Clock className="w-3 h-3 text-[#000080]" />
            <span className="font-bold tracking-tight">{currentTime || '12:00:00 AM'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

