import React from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';
import { playRetroSound } from '../utils/sound';

interface AboutShafeekWindowProps {
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
  onOpenProjects: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  style?: React.CSSProperties;
  className?: string;
  dragConstraintsRef?: React.RefObject<Element>;
}

export const AboutShafeekWindow: React.FC<AboutShafeekWindowProps> = ({
  isOpen,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  onOpenProjects,
  onOpenResume,
  onOpenContact,
  style,
  className = '',
  dragConstraintsRef,
}) => {
  if (!isOpen || isMinimized) return null;

  return (
    <RetroWindow
      id="about"
      title="About_Shafeek.exe"
      icon="monitor"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Edit', 'View', 'Help']}
      statusBarLeft="Ready"
      statusBarRight={<span>100%</span>}
      style={style}
      className={`w-full max-w-2xl shadow-2xl ${className}`}
      bodyClassName="p-3 sm:p-5 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      {/* Cream Inset Body Panel */}
      <div className="retro-inset-cream p-4 sm:p-6 text-black font-mono">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-5">
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 space-y-3 sm:space-y-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black font-display uppercase leading-tight">
                SHAFEEK LATHEEF
              </h1>
              <div className="text-xs sm:text-sm font-bold text-[#1560bd] uppercase tracking-wide mt-1 font-mono">
                SOFTWARE ENGINEER & FULL-STACK DEVELOPER
              </div>
            </div>

            {/* Sparkle & Bio */}
            <div className="space-y-2 text-xs sm:text-[13px] leading-relaxed text-[#222222]">
              <div className="flex items-start gap-2">
                <span className="text-[#d89e00] text-sm shrink-0 leading-none">✦</span>
                <p>
                  I build fast, accessible and user-friendly web applications with modern technologies. I love turning ideas into real products.
                </p>
              </div>
              <p className="text-gray-700 pl-4 text-[12px]">
                Specializing in React, TypeScript, Python FastAPI, Node.js, and autonomous AI agent workflows.
              </p>
            </div>

            {/* Retro 3D Action Buttons matching Reference */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  playRetroSound('open');
                  onOpenProjects();
                }}
                className="retro-btn px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E8E8E8]"
              >
                <PixelIcon name="folder" size={15} />
                <span>View Projects</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playRetroSound('open');
                  onOpenResume();
                }}
                className="retro-btn px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E8E8E8]"
              >
                <PixelIcon name="pdf" size={15} />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playRetroSound('open');
                  onOpenContact();
                }}
                className="retro-btn px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E8E8E8]"
              >
                <PixelIcon name="mail" size={15} />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Handcrafted Pixel Art Avatar */}
          <div className="shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] p-1.5 shadow-md">
              <div className="w-full h-full border border-[#808080] overflow-hidden relative bg-[#120e2e]">
                <img
                  src="/assets/shafeek-avatar.jpg"
                  alt="Shafeek Latheef Pixel Portrait"
                  className="w-full h-full object-cover pixel-art-rendering hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RetroWindow>
  );
};
