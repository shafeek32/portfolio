import React from 'react';
import { PixelIcon, PixelIconName } from './PixelIcon';
import { playRetroSound } from '../utils/sound';

export interface DesktopShortcut {
  id: string;
  label: string;
  icon: PixelIconName;
}

interface DesktopIconsProps {
  onOpenWindow: (id: string) => void;
  activeWindowId?: string | null;
}

export const DESKTOP_SHORTCUTS: DesktopShortcut[] = [
  { id: 'about', label: 'Home', icon: 'monitor' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'experience', label: 'About.txt', icon: 'document' },
  { id: 'skills', label: 'Skills.sys', icon: 'gear' },
  { id: 'terminal', label: 'Terminal', icon: 'terminal' },
  { id: 'minesweeper', label: 'Minesweeper', icon: 'star' },
  { id: 'resume', label: 'Resume.pdf', icon: 'pdf' },
  { id: 'contact', label: 'Contact.exe', icon: 'mail' },
  { id: 'recycle', label: 'Recycle Bin', icon: 'trash' },
];

export const DesktopIcons: React.FC<DesktopIconsProps> = ({ onOpenWindow, activeWindowId }) => {
  const handleIconClick = (id: string) => {
    playRetroSound('click');
    onOpenWindow(id);
  };

  return (
    <nav
      aria-label="Desktop shortcuts"
      className="flex flex-col items-center gap-1.5 p-1 select-none z-20 overflow-hidden"
    >
      {DESKTOP_SHORTCUTS.map((shortcut) => {
        const isSelected = activeWindowId === shortcut.id;

        return (
          <button
            key={shortcut.id}
            type="button"
            onClick={() => handleIconClick(shortcut.id)}
            className={`group flex flex-col items-center justify-center p-1 rounded-none transition-all w-16 sm:w-[72px] text-center cursor-pointer focus:outline-none ${
              isSelected
                ? 'bg-[#000080]/70 ring-1 ring-[#FFFFFA]'
                : 'hover:bg-white/10 active:bg-[#000080]/50'
            }`}
          >
            {/* 16/32-bit Pixel Art Icon Container */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform">
              <PixelIcon name={shortcut.icon} size={28} />
            </div>

            {/* Pixel Label */}
            <span className="mt-0.5 font-mono text-[9px] sm:text-[10px] font-bold text-white tracking-tight leading-tight px-1 py-0.2 rounded-none drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] bg-black/40 group-hover:bg-[#000080] group-hover:text-white transition-colors truncate max-w-full">
              {shortcut.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
