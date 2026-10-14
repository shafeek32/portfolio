import React, { useState, useRef, useEffect } from 'react';
import { TopMenuBar } from './TopMenuBar';
import { DesktopIcons } from './DesktopIcons';
import { Taskbar, WindowMeta } from './Taskbar';
import { AboutShafeekWindow } from './AboutShafeekWindow';
import { SkillsWindow } from './SkillsWindow';
import { ProjectsWindow } from './ProjectsWindow';
import { ExperienceWindow } from './ExperienceWindow';
import { JourneyWindow } from './JourneyWindow';
import { TerminalWindow } from './TerminalWindow';
import { ContactWindow } from './ContactWindow';
import { ResumeWindow } from './ResumeWindow';
import { SettingsWindow } from './SettingsWindow';
import { RecycleBinWindow } from './RecycleBinWindow';
import { MinesweeperWindow } from './MinesweeperWindow';
import { SnakeWindow } from './SnakeWindow';
import { NumberHuntWindow } from './NumberHuntWindow';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { playRetroSound } from '../utils/sound';

interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  defaultPosition: { x: number; y: number };
}

export interface DesktopOSProps {
  isEmbedded?: boolean;
  onToggleFullscreen?: () => void;
  onExitFullscreen?: () => void;
  initialWindowsOpen?: boolean;
}

export const DesktopOS: React.FC<DesktopOSProps> = ({
  isEmbedded = false,
  onToggleFullscreen,
  onExitFullscreen,
  initialWindowsOpen,
}) => {
  const desktopCanvasRef = useRef<HTMLDivElement>(null);

  // Global window states with authentic desktop OS coordinates
  const [windows, setWindows] = useState<Record<string, WindowState>>(() => {
    const isClean = isEmbedded || initialWindowsOpen === false;
    return {
      about: { isOpen: true, isMinimized: false, isMaximized: false, zIndex: 12, defaultPosition: { x: isEmbedded ? 40 : 80, y: isEmbedded ? 8 : 8 } },
      skills: { isOpen: !isClean, isMinimized: false, isMaximized: false, zIndex: 11, defaultPosition: { x: 90, y: 310 } },
      experience: { isOpen: !isClean, isMinimized: false, isMaximized: false, zIndex: 10, defaultPosition: { x: 670, y: 8 } },
      journey: { isOpen: !isClean, isMinimized: false, isMaximized: false, zIndex: 9, defaultPosition: { x: 650, y: 280 } },
      projects: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 8, defaultPosition: { x: 120, y: 20 } },
      terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 7, defaultPosition: { x: 160, y: 60 } },
      numberhunt: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 13, defaultPosition: { x: isEmbedded ? 30 : 140, y: isEmbedded ? 20 : 30 } },
      resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 6, defaultPosition: { x: 140, y: 15 } },
      contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 5, defaultPosition: { x: 200, y: 40 } },
      settings: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 4, defaultPosition: { x: 240, y: 70 } },
      recycle: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 3, defaultPosition: { x: 260, y: 90 } },
      minesweeper: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 2, defaultPosition: { x: 280, y: 35 } },
      snake: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, defaultPosition: { x: 300, y: 45 } },
    };
  });

  const [activeWindowId, setActiveWindowId] = useState<string | null>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Settings state
  const [scanlines, setScanlines] = useState<boolean>(false);
  const [bgMode, setBgMode] = useState<'image' | 'solid'>('image');

  const bringToFront = (id: string) => {
    setWindows((curr) => {
      const highestZ = Math.max(...Object.values(curr).map((w) => w.zIndex), 10);
      return {
        ...curr,
        [id]: {
          ...curr[id],
          isOpen: true,
          isMinimized: false,
          zIndex: highestZ + 1,
        },
      };
    });
    setActiveWindowId(id);
  };

  const handleOpenWindow = (id: string) => {
    playRetroSound('open');
    bringToFront(id);
  };

  const handleMinimizeWindow = (id: string) => {
    setWindows((curr) => ({
      ...curr,
      [id]: {
        ...curr[id],
        isMinimized: true,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const handleCloseWindow = (id: string) => {
    setWindows((curr) => ({
      ...curr,
      [id]: {
        ...curr[id],
        isOpen: false,
        isMinimized: false,
      },
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const handleTaskbarTabClick = (id: string) => {
    const win = windows[id];
    if (!win) return;

    if (win.isMinimized) {
      bringToFront(id);
    } else if (activeWindowId === id) {
      handleMinimizeWindow(id);
    } else {
      bringToFront(id);
    }
  };

  useEffect(() => {
    if (!onExitFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onExitFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onExitFullscreen]);

  // Build open windows list for Taskbar
  const openWindowsMeta: WindowMeta[] = [
    { id: 'about', title: 'About_Shafeek.exe', icon: 'monitor' as const, isOpen: windows.about.isOpen, isMinimized: windows.about.isMinimized },
    { id: 'skills', title: 'Skills_Inventory.sys', icon: 'gear' as const, isOpen: windows.skills.isOpen, isMinimized: windows.skills.isMinimized },
    { id: 'projects', title: 'Projects_Explorer', icon: 'folder' as const, isOpen: windows.projects.isOpen, isMinimized: windows.projects.isMinimized },
    { id: 'experience', title: 'Clients_Trusted.txt', icon: 'document' as const, isOpen: windows.experience.isOpen, isMinimized: windows.experience.isMinimized },
    { id: 'journey', title: 'Featured_Posts.log', icon: 'document' as const, isOpen: windows.journey.isOpen, isMinimized: windows.journey.isMinimized },
    { id: 'terminal', title: 'Terminal', icon: 'terminal' as const, isOpen: windows.terminal.isOpen, isMinimized: windows.terminal.isMinimized },
    { id: 'numberhunt', title: 'Number_Hunt.exe', icon: 'star' as const, isOpen: windows.numberhunt?.isOpen, isMinimized: windows.numberhunt?.isMinimized },
    { id: 'resume', title: 'Resume.pdf', icon: 'pdf' as const, isOpen: windows.resume.isOpen, isMinimized: windows.resume.isMinimized },
    { id: 'contact', title: 'Contact_Me.exe', icon: 'mail' as const, isOpen: windows.contact.isOpen, isMinimized: windows.contact.isMinimized },
    { id: 'settings', title: 'Control_Panel', icon: 'settings' as const, isOpen: windows.settings.isOpen, isMinimized: windows.settings.isMinimized },
    { id: 'recycle', title: 'Recycle_Bin', icon: 'trash' as const, isOpen: windows.recycle.isOpen, isMinimized: windows.recycle.isMinimized },
    { id: 'minesweeper', title: 'Minesweeper', icon: 'star' as const, isOpen: windows.minesweeper.isOpen, isMinimized: windows.minesweeper.isMinimized },
    { id: 'snake', title: 'Snake_1997', icon: 'settings' as const, isOpen: windows.snake.isOpen, isMinimized: windows.snake.isMinimized },
  ].filter((w) => w.isOpen);

  return (
    <div
      className={`${
        isEmbedded
          ? 'relative w-full h-full'
          : 'fixed inset-0 h-screen w-screen max-h-screen z-50'
      } overflow-hidden flex flex-col select-none ${scanlines ? 'crt-scanlines' : ''}`}
    >
      {onExitFullscreen && (
        <button
          onClick={onExitFullscreen}
          className="fixed top-2 right-2 z-[9999] bg-[#ff2a5f] hover:bg-[#ff4f7e] text-white font-mono text-xs px-3 py-1.5 shadow-lg border border-white/40 flex items-center gap-1.5 active:scale-95 transition-all"
        >
          <span>✕</span>
          <span className="font-bold">EXIT_FULLSCREEN (ESC)</span>
        </button>
      )}

      {/* Pixel Art Desktop Wallpaper Background */}
      <div className={`${isEmbedded ? 'absolute' : 'fixed'} inset-0 z-0 overflow-hidden pointer-events-none`}>
        {bgMode === 'image' ? (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat pixel-art-rendering"
            style={{
              backgroundImage: `url('/assets/pixel-bg.jpg')`,
              backgroundColor: '#120e2e',
            }}
          />
        ) : (
          <div className="w-full h-full retro-desktop-pattern" />
        )}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Top System Menu Bar */}
      <div className="shrink-0 z-50 relative flex items-center justify-between bg-[#C0C0C0]">
        <div className="flex-1 min-w-0">
          <TopMenuBar onOpenWindow={handleOpenWindow} activeWindowId={activeWindowId} />
        </div>
        {isEmbedded && onToggleFullscreen && (
          <button
            type="button"
            onClick={onToggleFullscreen}
            className="hidden sm:flex items-center gap-1 mr-1.5 px-2 py-0.5 bg-[#000080] text-white text-[10px] font-mono font-bold hover:bg-[#1084D0] border border-white cursor-pointer"
            title="Expand Fullscreen OS"
          >
            <span>⛶</span>
            <span>Maximize</span>
          </button>
        )}
      </div>

      {/* Main OS Desktop Canvas (100% Fixed Non-Scrolling Workspace) */}
      <div
        ref={desktopCanvasRef}
        className="flex-1 relative z-10 w-full h-full overflow-hidden flex flex-row"
      >
        {/* Left Vertical Desktop Shortcuts Column (Compact & No Scroll) */}
        <div className="shrink-0 z-20 h-full flex items-start pt-2 pl-2 overflow-hidden pointer-events-auto">
          <DesktopIcons onOpenWindow={handleOpenWindow} activeWindowId={activeWindowId} />
        </div>

        {/* Floating Multi-Window Desktop Workspace (Free Draggable & Overlapping Windows) */}
        <div className="flex-1 h-full w-full relative overflow-hidden">
          {/* 1. About_Shafeek.exe */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.about.defaultPosition.x}px`,
              top: `${windows.about.defaultPosition.y}px`,
              zIndex: windows.about.zIndex,
            }}
          >
            <AboutShafeekWindow
              isOpen={windows.about.isOpen}
              isActive={activeWindowId === 'about'}
              isMinimized={windows.about.isMinimized}
              onFocus={() => bringToFront('about')}
              onMinimize={() => handleMinimizeWindow('about')}
              onClose={() => handleCloseWindow('about')}
              onOpenProjects={() => handleOpenWindow('projects')}
              onOpenResume={() => handleOpenWindow('resume')}
              onOpenContact={() => handleOpenWindow('contact')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[560px] max-w-[88vw]"
            />
          </div>

          {/* 2. Skills_Inventory.sys */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.skills.defaultPosition.x}px`,
              top: `${windows.skills.defaultPosition.y}px`,
              zIndex: windows.skills.zIndex,
            }}
          >
            <SkillsWindow
              isOpen={windows.skills.isOpen}
              isActive={activeWindowId === 'skills'}
              isMinimized={windows.skills.isMinimized}
              onFocus={() => bringToFront('skills')}
              onMinimize={() => handleMinimizeWindow('skills')}
              onClose={() => handleCloseWindow('skills')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[520px] max-w-[88vw]"
            />
          </div>

          {/* 3. Clients_Trusted.txt */}
          <div
            className="absolute transition-none hidden md:block"
            style={{
              left: `${windows.experience.defaultPosition.x}px`,
              top: `${windows.experience.defaultPosition.y}px`,
              zIndex: windows.experience.zIndex,
            }}
          >
            <ExperienceWindow
              isOpen={windows.experience.isOpen}
              isActive={activeWindowId === 'experience'}
              isMinimized={windows.experience.isMinimized}
              onFocus={() => bringToFront('experience')}
              onMinimize={() => handleMinimizeWindow('experience')}
              onClose={() => handleCloseWindow('experience')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[420px] max-w-[88vw]"
            />
          </div>

          {/* 4. Featured_Posts.log */}
          <div
            className="absolute transition-none hidden md:block"
            style={{
              left: `${windows.journey.defaultPosition.x}px`,
              top: `${windows.journey.defaultPosition.y}px`,
              zIndex: windows.journey.zIndex,
            }}
          >
            <JourneyWindow
              isOpen={windows.journey.isOpen}
              isActive={activeWindowId === 'journey'}
              isMinimized={windows.journey.isMinimized}
              onFocus={() => bringToFront('journey')}
              onMinimize={() => handleMinimizeWindow('journey')}
              onClose={() => handleCloseWindow('journey')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[420px] max-w-[88vw]"
            />
          </div>

          {/* 5. Projects_Explorer.exe */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.projects.defaultPosition.x}px`,
              top: `${windows.projects.defaultPosition.y}px`,
              zIndex: windows.projects.zIndex,
            }}
          >
            <ProjectsWindow
              isOpen={windows.projects.isOpen}
              isActive={activeWindowId === 'projects'}
              isMinimized={windows.projects.isMinimized}
              onFocus={() => bringToFront('projects')}
              onMinimize={() => handleMinimizeWindow('projects')}
              onClose={() => handleCloseWindow('projects')}
              onSelectProjectDetails={(proj) => setSelectedProject(proj)}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[740px] max-w-[90vw]"
            />
          </div>

          {/* 6. Terminal Window */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.terminal.defaultPosition.x}px`,
              top: `${windows.terminal.defaultPosition.y}px`,
              zIndex: windows.terminal.zIndex,
            }}
          >
            <TerminalWindow
              isOpen={windows.terminal.isOpen}
              isActive={activeWindowId === 'terminal'}
              isMinimized={windows.terminal.isMinimized}
              onFocus={() => bringToFront('terminal')}
              onMinimize={() => handleMinimizeWindow('terminal')}
              onClose={() => handleCloseWindow('terminal')}
              onOpenWindow={handleOpenWindow}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[580px] max-w-[88vw]"
            />
          </div>

          {/* 7. Contact_Me.exe */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.contact.defaultPosition.x}px`,
              top: `${windows.contact.defaultPosition.y}px`,
              zIndex: windows.contact.zIndex,
            }}
          >
            <ContactWindow
              isOpen={windows.contact.isOpen}
              isActive={activeWindowId === 'contact'}
              isMinimized={windows.contact.isMinimized}
              onFocus={() => bringToFront('contact')}
              onMinimize={() => handleMinimizeWindow('contact')}
              onClose={() => handleCloseWindow('contact')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[480px] max-w-[88vw]"
            />
          </div>

          {/* 8. Resume.pdf */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.resume.defaultPosition.x}px`,
              top: `${windows.resume.defaultPosition.y}px`,
              zIndex: windows.resume.zIndex,
            }}
          >
            <ResumeWindow
              isOpen={windows.resume.isOpen}
              isActive={activeWindowId === 'resume'}
              isMinimized={windows.resume.isMinimized}
              onFocus={() => bringToFront('resume')}
              onMinimize={() => handleMinimizeWindow('resume')}
              onClose={() => handleCloseWindow('resume')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[660px] max-w-[90vw]"
            />
          </div>

          {/* 9. Control_Panel (Settings) */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.settings.defaultPosition.x}px`,
              top: `${windows.settings.defaultPosition.y}px`,
              zIndex: windows.settings.zIndex,
            }}
          >
            <SettingsWindow
              isOpen={windows.settings.isOpen}
              isActive={activeWindowId === 'settings'}
              isMinimized={windows.settings.isMinimized}
              onFocus={() => bringToFront('settings')}
              onMinimize={() => handleMinimizeWindow('settings')}
              onClose={() => handleCloseWindow('settings')}
              scanlines={scanlines}
              setScanlines={setScanlines}
              bgMode={bgMode}
              setBgMode={setBgMode}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[420px] max-w-[88vw]"
            />
          </div>

          {/* 10. Recycle Bin */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.recycle.defaultPosition.x}px`,
              top: `${windows.recycle.defaultPosition.y}px`,
              zIndex: windows.recycle.zIndex,
            }}
          >
            <RecycleBinWindow
              isOpen={windows.recycle.isOpen}
              isActive={activeWindowId === 'recycle'}
              isMinimized={windows.recycle.isMinimized}
              onFocus={() => bringToFront('recycle')}
              onMinimize={() => handleMinimizeWindow('recycle')}
              onClose={() => handleCloseWindow('recycle')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[440px] max-w-[88vw]"
            />
          </div>

          {/* 11. Minesweeper.exe */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.minesweeper.defaultPosition.x}px`,
              top: `${windows.minesweeper.defaultPosition.y}px`,
              zIndex: windows.minesweeper.zIndex,
            }}
          >
            <MinesweeperWindow
              isOpen={windows.minesweeper.isOpen}
              isActive={activeWindowId === 'minesweeper'}
              isMinimized={windows.minesweeper.isMinimized}
              onFocus={() => bringToFront('minesweeper')}
              onMinimize={() => handleMinimizeWindow('minesweeper')}
              onClose={() => handleCloseWindow('minesweeper')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[340px] max-w-[88vw]"
            />
          </div>

          {/* 12. Snake_1997.exe */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.snake.defaultPosition.x}px`,
              top: `${windows.snake.defaultPosition.y}px`,
              zIndex: windows.snake.zIndex,
            }}
          >
            <SnakeWindow
              isOpen={windows.snake.isOpen}
              isActive={activeWindowId === 'snake'}
              isMinimized={windows.snake.isMinimized}
              onFocus={() => bringToFront('snake')}
              onMinimize={() => handleMinimizeWindow('snake')}
              onClose={() => handleCloseWindow('snake')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[340px] max-w-[88vw]"
            />
          </div>

          {/* 13. Number_Hunt.exe */}
          <div
            className="absolute transition-none"
            style={{
              left: `${windows.numberhunt.defaultPosition.x}px`,
              top: `${windows.numberhunt.defaultPosition.y}px`,
              zIndex: windows.numberhunt.zIndex,
            }}
          >
            <NumberHuntWindow
              isOpen={windows.numberhunt.isOpen}
              isActive={activeWindowId === 'numberhunt'}
              isMinimized={windows.numberhunt.isMinimized}
              onFocus={() => bringToFront('numberhunt')}
              onMinimize={() => handleMinimizeWindow('numberhunt')}
              onClose={() => handleCloseWindow('numberhunt')}
              dragConstraintsRef={desktopCanvasRef}
              className="w-[620px] max-w-[92vw]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Retro Taskbar */}
      <div className="shrink-0 z-50">
        <Taskbar
          openWindows={openWindowsMeta}
          activeWindowId={activeWindowId}
          onWindowTabClick={handleTaskbarTabClick}
          onOpenWindow={handleOpenWindow}
        />
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
