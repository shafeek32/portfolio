import React, { useState, useEffect } from 'react';
import { PixelIcon } from './PixelIcon';
import { playRetroSound, setSoundEnabled } from '../utils/sound';

interface TopMenuBarProps {
  onOpenWindow: (id: string) => void;
  activeWindowId?: string | null;
}

export const TopMenuBar: React.FC<TopMenuBarProps> = ({ onOpenWindow }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playRetroSound('blip');
  };

  const handleMenuClick = (menu: string) => {
    playRetroSound('click');
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleMenuItemSelect = (action: () => void) => {
    playRetroSound('open');
    setActiveMenu(null);
    action();
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenu(null);
    if (activeMenu) {
      window.addEventListener('click', handleClickOutside);
      return () => window.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  return (
    <header className="sticky top-0 z-50 bg-[#C0C0C0] border-b-2 border-[#404040] shadow-sm select-none font-mono text-xs text-black">
      <div className="flex items-center justify-between px-2 sm:px-4 py-1">
        {/* Left Side: OS Brand + Menus */}
        <div className="flex items-center gap-1 sm:gap-2 relative">
          {/* OS Brand Button */}
          <button
            onClick={() => onOpenWindow('about')}
            className="flex items-center gap-1.5 px-2 py-0.5 font-bold hover:bg-[#000080] hover:text-white rounded-none cursor-pointer tracking-wider font-display"
          >
            <PixelIcon name="monitor" size={16} />
            <span className="hidden xs:inline sm:inline text-xs">SHAFEEK OS</span>
          </button>

          <span className="text-gray-400 font-normal">|</span>

          {/* Menu: File */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => handleMenuClick('file')}
              className={`px-2 py-0.5 cursor-pointer hover:bg-[#000080] hover:text-white ${
                activeMenu === 'file' ? 'bg-[#000080] text-white' : ''
              }`}
            >
              <u>F</u>ile
            </button>
            {activeMenu === 'file' && (
              <div className="absolute left-0 top-full mt-1 w-44 bg-[#C0C0C0] retro-window-frame p-1 shadow-2xl z-50">
                <button
                  onClick={() => handleMenuItemSelect(() => onOpenWindow('about'))}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="document" size={14} />
                  <span>About Shafeek</span>
                </button>
                <button
                  onClick={() => handleMenuItemSelect(() => onOpenWindow('resume'))}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="pdf" size={14} />
                  <span>View Resume</span>
                </button>
                <div className="my-1 border-t border-[#808080]" />
                <button
                  onClick={() => handleMenuItemSelect(() => onOpenWindow('contact'))}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="mail" size={14} />
                  <span>Contact Me</span>
                </button>
              </div>
            )}
          </div>

          {/* Menu: View */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => handleMenuClick('view')}
              className={`px-2 py-0.5 cursor-pointer hover:bg-[#000080] hover:text-white ${
                activeMenu === 'view' ? 'bg-[#000080] text-white' : ''
              }`}
            >
              <u>V</u>iew
            </button>
            {activeMenu === 'view' && (
              <div className="absolute left-0 top-full mt-1 w-44 bg-[#C0C0C0] retro-window-frame p-1 shadow-2xl z-50">
                <button
                  onClick={() => handleMenuItemSelect(() => onOpenWindow('skills'))}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="gear" size={14} />
                  <span>Skills Inventory</span>
                </button>
                <button
                  onClick={() => handleMenuItemSelect(() => onOpenWindow('journey'))}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="clock" size={14} />
                  <span>Developer Log</span>
                </button>
                <button
                  onClick={() => handleMenuItemSelect(() => onOpenWindow('experience'))}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="star" size={14} />
                  <span>Experience & Trust</span>
                </button>
              </div>
            )}
          </div>

          {/* Menu: Projects */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => handleMenuClick('projects')}
              className={`px-2 py-0.5 cursor-pointer hover:bg-[#000080] hover:text-white ${
                activeMenu === 'projects' ? 'bg-[#000080] text-white' : ''
              }`}
            >
              <u>P</u>rojects
            </button>
            {activeMenu === 'projects' && (
              <div className="absolute left-0 top-full mt-1 w-52 bg-[#C0C0C0] retro-window-frame p-1 shadow-2xl z-50">
                <button
                  onClick={() => handleMenuItemSelect(() => onOpenWindow('projects'))}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="folder" size={14} />
                  <span>Open Work Explorer</span>
                </button>
                <div className="my-1 border-t border-[#808080]" />
                <a
                  href="https://github.com/shafeek32"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveMenu(null)}
                  className="w-full text-left px-2 py-1 flex items-center gap-2 hover:bg-[#000080] hover:text-white"
                >
                  <PixelIcon name="github" size={14} />
                  <span>GitHub Profile ↗</span>
                </a>
              </div>
            )}
          </div>

          {/* Menu: Terminal */}
          <button
            onClick={() => onOpenWindow('terminal')}
            className="px-2 py-0.5 cursor-pointer hover:bg-[#000080] hover:text-white hidden xs:inline"
          >
            <u>T</u>erminal
          </button>

          {/* Menu: Settings */}
          <button
            onClick={() => onOpenWindow('settings')}
            className="px-2 py-0.5 cursor-pointer hover:bg-[#000080] hover:text-white hidden sm:inline"
          >
            <u>S</u>ettings
          </button>
        </div>

        {/* Right Side: Audio toggle + Clock */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleSound}
            className="p-1 hover:bg-[#b0b0b0] active:bg-[#909090] cursor-pointer"
            title={soundOn ? 'Sound FX On (Click to Mute)' : 'Sound FX Muted (Click to Unmute)'}
            aria-label="Toggle Sound"
          >
            <PixelIcon name={soundOn ? 'speaker' : 'speaker-mute'} size={15} />
          </button>

          <div className="px-2 py-0.5 bg-[#E8E8E8] border border-[#808080] font-bold text-[11px] sm:text-xs text-black min-w-[72px] text-center shadow-inner">
            {currentTime || '10:42 PM'}
          </div>
        </div>
      </div>
    </header>
  );
};
