import React, { useState, useEffect } from 'react';
import { PixelIcon, PixelIconName } from './PixelIcon';
import { playRetroSound } from '../utils/sound';

export interface WindowMeta {
  id: string;
  title: string;
  icon: PixelIconName;
  isOpen: boolean;
  isMinimized: boolean;
}

interface TaskbarProps {
  openWindows: WindowMeta[];
  activeWindowId: string | null;
  onWindowTabClick: (id: string) => void;
  onOpenWindow: (id: string) => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  openWindows,
  activeWindowId,
  onWindowTabClick,
  onOpenWindow,
}) => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setTimeStr(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartToggle = () => {
    playRetroSound('click');
    setIsStartOpen(!isStartOpen);
  };

  const handleAppLaunch = (id: string) => {
    playRetroSound('open');
    setIsStartOpen(false);
    onOpenWindow(id);
  };

  // Close start menu when clicking outside
  useEffect(() => {
    const closeStart = () => setIsStartOpen(false);
    if (isStartOpen) {
      window.addEventListener('click', closeStart);
      return () => window.removeEventListener('click', closeStart);
    }
  }, [isStartOpen]);

  return (
    <>
      {/* Retro Start Menu Popup */}
      {isStartOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed bottom-10 left-2 z-50 w-64 bg-[#C0C0C0] retro-window-frame p-1 shadow-2xl flex font-mono"
        >
          {/* Left Vertical OS Banner Strip */}
          <div className="w-7 bg-gradient-to-t from-[#000080] via-[#1084d0] to-[#000080] flex items-end justify-center pb-3 select-none shrink-0 overflow-hidden">
            <span
              className="text-white font-bold text-xs tracking-widest uppercase whitespace-nowrap font-display"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              SHAFEEK <span className="text-[#FFE27A]">OS</span>
            </span>
          </div>

          {/* Menu Items List */}
          <div className="flex-1 pl-1 space-y-0.5 text-xs text-black">
            <button
              onClick={() => handleAppLaunch('about')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="monitor" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">About Shafeek</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Bio & Introduction</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('projects')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="folder" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">Projects Explorer</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Work & Source Code</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('skills')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="gear" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">Skills Inventory</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Languages & Tech Stack</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('journey')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="clock" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">Developer Log</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Timeline & Posts</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('terminal')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="terminal" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">MS-DOS Terminal</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Interactive CLI Prompt</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('resume')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="pdf" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">Resume.pdf</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">ATS Printable Sheet</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('contact')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="mail" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">Contact.exe</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Send a Message</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('minesweeper')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="star" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">Minesweeper.exe</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Classic 90s Puzzle</span>
              </div>
            </button>

            <button
              onClick={() => handleAppLaunch('snake')}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="settings" size={16} />
              <div className="flex flex-col">
                <span className="font-bold">Snake_1997.exe</span>
                <span className="text-[10px] text-gray-600 group-hover:text-white/80">Retro Arcade Game</span>
              </div>
            </button>

            <div className="my-1 border-t border-[#808080] border-b border-white" />

            <button
              onClick={() => handleAppLaunch('settings')}
              className="w-full text-left px-2 py-1 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="settings" size={15} />
              <span>Control Panel</span>
            </button>

            <button
              onClick={() => {
                playRetroSound('blip');
                setIsStartOpen(false);
                alert("Shafeek OS 1.0\nBuilt with React, TypeScript & Tailwind CSS.\nAll systems nominal!");
              }}
              className="w-full text-left px-2 py-1 flex items-center gap-2.5 hover:bg-[#000080] hover:text-white"
            >
              <PixelIcon name="star" size={15} />
              <span>About Shafeek OS...</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Bottom Taskbar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#C0C0C0] border-t-2 border-white shadow-[0_-2px_0px_#808080] select-none font-mono">
        <div className="h-9 px-1.5 flex items-center justify-between gap-2">
          {/* Left: Start Button + Open Windows List */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-1 min-w-0">
            {/* Start Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStartToggle();
              }}
              className={`retro-btn px-2.5 py-1 text-xs font-bold flex items-center gap-1.5 shrink-0 ${
                isStartOpen ? 'retro-btn-pressed' : ''
              }`}
            >
              <PixelIcon name="monitor" size={16} />
              <span className="font-display tracking-wider">Start</span>
            </button>

            <div className="h-5 w-[1px] bg-[#808080] mx-0.5 shrink-0" />

            {/* Open Windows Tabs */}
            {openWindows.map((win) => {
              const isActive = activeWindowId === win.id && !win.isMinimized;

              return (
                <button
                  key={win.id}
                  onClick={() => {
                    playRetroSound('click');
                    onWindowTabClick(win.id);
                  }}
                  className={`retro-btn px-2 py-1 text-xs flex items-center gap-1.5 max-w-[170px] truncate shrink-0 ${
                    isActive ? 'retro-btn-pressed bg-[#b8b8b8]' : 'bg-[#C0C0C0]'
                  }`}
                  title={win.title}
                >
                  <PixelIcon name={win.icon} size={14} />
                  <span className="truncate font-bold">{win.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Settings shortcut + Live Clock */}
          <div className="flex items-center gap-1.5 shrink-0 pl-1">
            <button
              onClick={() => {
                playRetroSound('click');
                onOpenWindow('settings');
              }}
              className="retro-btn px-2 py-1 text-xs flex items-center gap-1"
              title="Open System Settings"
            >
              <PixelIcon name="settings" size={14} />
              <span className="hidden sm:inline text-[11px]">Settings</span>
            </button>

            {/* Inset Clock Display */}
            <div className="retro-inset px-2.5 py-1 text-[11px] font-bold text-black flex items-center gap-1 bg-[#E8E8E8] shadow-inner">
              <span className="text-[#000080]">●</span>
              <span>{timeStr || '10:42 PM'}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
