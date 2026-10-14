import React, { useState } from 'react';
import { RetroWindow } from './RetroWindow';
import { ExternalLink, RotateCcw, Sparkles } from 'lucide-react';
import { playRetroSound } from '../utils/sound';

interface NumberHuntWindowProps {
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
  style?: React.CSSProperties;
  className?: string;
  dragConstraintsRef?: React.RefObject<Element>;
}

export const NumberHuntWindow: React.FC<NumberHuntWindowProps> = ({
  isOpen,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  style,
  className = '',
  dragConstraintsRef,
}) => {
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleReload = () => {
    playRetroSound('click');
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleOpenExternal = () => {
    playRetroSound('click');
    window.open('https://numberhunt.online/', '_blank', 'noopener,noreferrer');
  };

  return (
    <RetroWindow
      id="numberhunt"
      title="Number_Hunt.exe — [Live Web Game]"
      icon="star"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['Game', 'Difficulty', 'Highscores', 'Help']}
      statusBarLeft={
        <span className="flex items-center gap-1.5 text-[11px] text-[#006600] font-bold">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00aa00] animate-pulse" />
          Connected: https://numberhunt.online
        </span>
      }
      statusBarRight={
        <span className="text-[11px] text-gray-700 font-mono">
          Engine: React 60fps
        </span>
      }
      style={style}
      className={`w-[680px] max-w-[94vw] ${className}`}
      bodyClassName="p-2 bg-[#C0C0C0] flex flex-col"
      dragConstraintsRef={dragConstraintsRef}
    >
      {/* Top Controls Toolbar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#808080] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#000080] text-white font-bold text-[10px] tracking-wider uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            Original Game
          </span>
          <span className="text-[11px] text-black font-semibold hidden sm:inline">
            By Shafeek Latheef
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReload}
            className="retro-button px-2 py-0.5 text-[11px] flex items-center gap-1 hover:bg-[#DFDFDF] active:translate-y-px"
            title="Reload Game"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Restart</span>
          </button>

          <button
            type="button"
            onClick={handleOpenExternal}
            className="retro-button px-2.5 py-0.5 text-[11px] font-bold bg-[#000080] text-white flex items-center gap-1 hover:bg-[#1084D0] active:translate-y-px"
            title="Open in full browser window"
          >
            <span>Play in New Tab</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Embedded Live Game Container */}
      <div className="relative w-full h-[440px] sm:h-[480px] bg-black retro-inset overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#120e2e] text-white font-mono gap-2">
            <div className="w-6 h-6 border-2 border-[#1084D0] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs tracking-wider text-yellow-300">
              CONNECTING TO NUMBERHUNT.ONLINE...
            </span>
          </div>
        )}

        <iframe
          key={iframeKey}
          src="https://numberhunt.online/"
          title="Number Hunt Game"
          className="w-full h-full border-0"
          allow="autoplay; fullscreen; clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </RetroWindow>
  );
};
