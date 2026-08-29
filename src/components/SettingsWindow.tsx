import React from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';
import { playRetroSound, isSoundEnabled, setSoundEnabled } from '../utils/sound';

interface SettingsWindowProps {
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
  scanlines: boolean;
  setScanlines: (val: boolean) => void;
  bgMode: 'image' | 'solid';
  setBgMode: (val: 'image' | 'solid') => void;
  style?: React.CSSProperties;
  className?: string;
  dragConstraintsRef?: React.RefObject<Element>;
}

export const SettingsWindow: React.FC<SettingsWindowProps> = ({
  isOpen,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  scanlines,
  setScanlines,
  bgMode,
  setBgMode,
  style,
  className = '',
  dragConstraintsRef,
}) => {
  if (!isOpen || isMinimized) return null;

  const soundOn = isSoundEnabled();

  const handleSoundToggle = (val: boolean) => {
    setSoundEnabled(val);
    if (val) playRetroSound('blip');
  };

  return (
    <RetroWindow
      id="settings"
      title="Control_Panel.cpl — System Settings"
      icon="settings"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Options', 'Help']}
      statusBarLeft="Properties"
      statusBarRight={<span>Config OK</span>}
      style={style}
      className={`w-full max-w-md shadow-2xl ${className}`}
      bodyClassName="p-3 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="retro-inset p-3 font-mono text-xs text-black space-y-3 bg-[#FFFFFA]">
        <div className="font-bold text-xs text-[#000080] border-b border-[#B0B0B0] pb-1.5 flex items-center gap-1.5">
          <PixelIcon name="settings" size={14} />
          <span>DISPLAY & SOUND CONFIGURATION</span>
        </div>

        {/* Display Toggles */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={scanlines}
              onChange={(e) => {
                playRetroSound('click');
                setScanlines(e.target.checked);
              }}
              className="w-3.5 h-3.5 text-[#000080] border-[#808080] rounded-none focus:ring-0"
            />
            <span className="font-bold text-[11px]">CRT Monitor Scanlines Effect</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={soundOn}
              onChange={(e) => handleSoundToggle(e.target.checked)}
              className="w-3.5 h-3.5 text-[#000080] border-[#808080] rounded-none focus:ring-0"
            />
            <span className="font-bold text-[11px]">Retro Audio Synthesizer (Clicks & Chimes)</span>
          </label>
        </div>

        {/* Wallpaper Picker */}
        <div className="border-t border-[#D0D0D0] pt-2 space-y-1.5">
          <div className="font-bold text-gray-800 text-[11px]">Desktop Wallpaper Mode:</div>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => {
                playRetroSound('click');
                setBgMode('image');
              }}
              className={`p-1.5 border text-[11px] font-bold ${
                bgMode === 'image'
                  ? 'bg-[#000080] text-white border-black'
                  : 'bg-white text-black border-gray-400 hover:bg-gray-100'
              }`}
            >
              ★ Twilight Pixel Art
            </button>

            <button
              type="button"
              onClick={() => {
                playRetroSound('click');
                setBgMode('solid');
              }}
              className={`p-1.5 border text-[11px] font-bold ${
                bgMode === 'solid'
                  ? 'bg-[#000080] text-white border-black'
                  : 'bg-white text-black border-gray-400 hover:bg-gray-100'
              }`}
            >
              Classic Teal Solid
            </button>
          </div>
        </div>

        {/* System Specs */}
        <div className="border-t border-[#D0D0D0] pt-2 text-[10px] text-gray-600 space-y-0.5">
          <div><span className="font-bold text-black">OS:</span> Shafeek OS v3.0</div>
          <div><span className="font-bold text-black">Stack:</span> React 18 + TypeScript + Vite</div>
        </div>
      </div>
    </RetroWindow>
  );
};
