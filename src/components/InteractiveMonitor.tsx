import React, { useState } from 'react';
import { Maximize2, Volume2, VolumeX, Laptop, MousePointerClick, Terminal } from 'lucide-react';
import { DesktopOS } from './DesktopOS';

interface InteractiveMonitorProps {
  onLaunchFullscreen: () => void;
}

export const InteractiveMonitor: React.FC<InteractiveMonitorProps> = ({ onLaunchFullscreen }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Outer Cyberdeck / Monitor Frame with Neon Accents */}
      <div className="w-full max-w-5xl bg-[#0a0d18] rounded-2xl p-2.5 sm:p-4 shadow-[0_0_50px_rgba(0,240,255,0.15),0_20px_50px_rgba(0,0,0,0.9)] border border-[#00f0ff]/30 relative group">
        
        {/* Cyber Top Bezel: Status, HUD & Controls */}
        <div className="flex items-center justify-between px-2 pb-2.5 text-xs text-slate-400 border-b border-[#00f0ff]/20 mb-2">
          {/* Left: Device status indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
            </span>
            <span className="font-mono text-[11px] text-[#00f0ff] font-bold tracking-wider hidden sm:inline">
              [ CYBERDECK_V3.0 // SHAFEEK_OS ]
            </span>
            <span className="font-mono text-[11px] text-[#00f0ff] font-bold tracking-wider sm:hidden">
              [ OS // V3.0 ]
            </span>
          </div>

          {/* Center: HUD Core Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff007f] shadow-[0_0_8px_#ff007f] animate-pulse"></div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest hidden md:inline">
              HOSTED_SIMULATION
            </span>
          </div>

          {/* Right: Quick Action Controls */}
          <div className="flex items-center gap-2 font-mono">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1 sm:px-2.5 sm:py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#00f0ff]/40 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-[11px]"
              title={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#00f0ff]" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
              <span className="hidden md:inline">{soundEnabled ? 'AUDIO: ON' : 'AUDIO: MUTED'}</span>
            </button>

            <button
              type="button"
              onClick={onLaunchFullscreen}
              className="px-3 py-1 rounded-lg bg-[#00f0ff] hover:bg-white active:bg-cyan-200 text-black font-extrabold text-[11px] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center gap-1.5 cursor-pointer hover:scale-105"
              title="Expand OS to Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>FULLSCREEN_OS</span>
            </button>
          </div>
        </div>

        {/* The Display Screen Container */}
        <div className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] lg:h-[600px] bg-black rounded-xl overflow-hidden border border-[#00f0ff]/20 shadow-inner">
          {/* Subtle Cyber Grid scanline glow */}
          <div className="absolute inset-0 pointer-events-none z-30 shadow-[inset_0_0_30px_rgba(0,0,0,0.95)]" />

          {/* Embedded Desktop OS */}
          <div className="w-full h-full relative">
            <DesktopOS
              isEmbedded={true}
              onToggleFullscreen={onLaunchFullscreen}
            />
          </div>

          {/* Mobile Overlay: Tap to Launch Fullscreen */}
          <div className="lg:hidden absolute bottom-3 right-3 left-3 z-40 bg-slate-950/95 backdrop-blur-md border border-[#00f0ff]/40 rounded-xl p-3 flex items-center justify-between shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[#00f0ff]/10 text-[#00f0ff] rounded-lg">
                <Laptop className="w-4 h-4" />
              </div>
              <div className="text-left font-mono">
                <p className="text-xs font-bold text-white">INTERACTIVE OS</p>
                <p className="text-[10px] text-slate-400">Launch fullscreen for touch controls</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onLaunchFullscreen}
              className="px-3.5 py-1.5 bg-[#00f0ff] text-black rounded-lg text-xs font-mono font-extrabold flex items-center gap-1.5 shrink-0 shadow-lg"
            >
              <MousePointerClick className="w-3.5 h-3.5" />
              <span>LAUNCH</span>
            </button>
          </div>
        </div>

        {/* Monitor Bottom Chin & Cyber Details */}
        <div className="mt-2.5 px-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="hidden sm:inline">Try launching <b className="text-white">Number Hunt</b>, <b className="text-white">Minesweeper</b>, or <b className="text-white">Terminal</b>!</span>
            <span className="sm:hidden text-white font-bold">Interactive Retro OS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-slate-500">Free Drag & Drop Windows</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_6px_#00f0ff]" />
          </div>
        </div>
      </div>

      {/* Monitor Stand Base */}
      <div className="hidden sm:flex flex-col items-center">
        <div className="w-24 h-4 bg-gradient-to-b from-slate-900 to-black border-x border-[#00f0ff]/20 shadow-inner" />
        <div className="w-48 h-3.5 bg-gradient-to-r from-black via-slate-900 to-black rounded-b-lg border-t border-[#00f0ff]/30 shadow-[0_10px_25px_rgba(0,0,0,0.8)]" />
      </div>
    </div>
  );
};
