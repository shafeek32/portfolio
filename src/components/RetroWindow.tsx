import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import { PixelIcon, PixelIconName } from './PixelIcon';
import { playRetroSound } from '../utils/sound';

export interface RetroWindowProps {
  id: string;
  title: string;
  icon?: PixelIconName;
  isActive?: boolean;
  isMinimized?: boolean;
  isMaximized?: boolean;
  onFocus?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  menuItems?: string[];
  statusBarLeft?: React.ReactNode;
  statusBarRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  style?: React.CSSProperties;
  showControls?: boolean;
  dragConstraintsRef?: React.RefObject<Element>;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  title,
  icon = 'document',
  isActive = true,
  isMinimized = false,
  isMaximized = false,
  onFocus,
  onMinimize,
  onMaximize,
  onClose,
  menuItems = ['File', 'Edit', 'View', 'Help'],
  statusBarLeft = 'Ready',
  statusBarRight,
  children,
  className = '',
  bodyClassName = 'p-3 sm:p-4 bg-[#C0C0C0]',
  style,
  showControls = true,
  dragConstraintsRef,
}) => {
  const dragControls = useDragControls();

  if (isMinimized) return null;

  const handlePointerDown = (e: React.PointerEvent) => {
    onFocus?.();
    if (!isMaximized) {
      dragControls.start(e);
    }
  };

  return (
    <motion.div
      drag={!isMaximized}
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      dragConstraints={dragConstraintsRef}
      onClick={onFocus}
      style={style}
      className={`retro-window-frame ${
        isActive ? 'retro-window-frame-active ring-1 ring-black/40' : 'opacity-95'
      } flex flex-col overflow-hidden select-none ${
        isMaximized
          ? '!fixed inset-x-2 top-9 bottom-10 z-40 !w-auto !max-w-none !h-auto'
          : className
      }`}
    >
      {/* Retro Titlebar (Draggable Area) */}
      <div
        onPointerDown={handlePointerDown}
        className={`px-2 py-1 flex items-center justify-between select-none cursor-grab active:cursor-grabbing ${
          isActive
            ? 'bg-gradient-to-r from-[#000080] via-[#1084d0] to-[#000080] text-white'
            : 'bg-gradient-to-r from-[#7a8288] to-[#929a9e] text-[#dcdcdc]'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0 pr-2 pointer-events-none">
          <PixelIcon name={icon} size={15} />
          <span className="font-mono text-xs sm:text-[12px] font-bold tracking-wide truncate">
            {title}
          </span>
        </div>

        {showControls && (
          <div
            className="flex items-center gap-1 shrink-0 cursor-default"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {onMinimize && (
              <button
                type="button"
                onClick={() => {
                  playRetroSound('click');
                  onMinimize();
                }}
                className="retro-titlebar-btn"
                title="Minimize"
                aria-label="Minimize Window"
              >
                _
              </button>
            )}
            {onMaximize && (
              <button
                type="button"
                onClick={() => {
                  playRetroSound('click');
                  onMaximize();
                }}
                className="retro-titlebar-btn"
                title={isMaximized ? 'Restore' : 'Maximize'}
                aria-label="Maximize Window"
              >
                □
              </button>
            )}
            {onClose && (
              <button
                type="button"
                onClick={() => {
                  playRetroSound('close');
                  onClose();
                }}
                className="retro-titlebar-btn font-bold text-red-900 hover:bg-red-200"
                title="Close"
                aria-label="Close Window"
              >
                ✕
              </button>
            )}
          </div>
        )}
      </div>

      {/* Sub Menu Bar (File, Edit, View, Help) */}
      {menuItems && menuItems.length > 0 && (
        <div className="px-3 py-0.5 bg-[#C0C0C0] border-b border-[#808080] border-t border-white flex items-center gap-4 text-[11px] text-black select-none font-mono">
          {menuItems.map((item) => (
            <span
              key={item}
              onClick={() => playRetroSound('blip')}
              className="cursor-pointer px-1 hover:bg-[#000080] hover:text-white transition-colors"
            >
              <u>{item[0]}</u>
              {item.slice(1)}
            </span>
          ))}
        </div>
      )}

      {/* Window Body (Internal Scroll Container only) */}
      <div className={`flex-1 overflow-y-auto ${bodyClassName}`}>
        {children}
      </div>

      {/* Status Bar */}
      {(statusBarLeft || statusBarRight) && (
        <div className="retro-statusbar bg-[#C0C0C0] border-t border-[#808080] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono flex items-center justify-between text-[#333333] shrink-0">
          <div className="flex items-center gap-2 truncate">
            {typeof statusBarLeft === 'string' ? <span>{statusBarLeft}</span> : statusBarLeft}
          </div>
          <div className="flex items-center gap-3 shrink-0 text-gray-700">
            {statusBarRight}
          </div>
        </div>
      )}
    </motion.div>
  );
};
