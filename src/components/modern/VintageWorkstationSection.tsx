import React from 'react';
import { Gamepad2, Briefcase, FileText, Clock, Sparkles, Power, Maximize2 } from 'lucide-react';
import { DesktopOS } from '../DesktopOS';

interface VintageWorkstationSectionProps {
  onLaunchOS: () => void;
}

export const VintageWorkstationSection: React.FC<VintageWorkstationSectionProps> = ({ onLaunchOS }) => {
  return (
    <section
      id="workstation"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#060913] via-[#0d0d14] to-[#070609] border-t border-slate-800/40"
    >
      {/* Warm Ambient Desk Lamp & Cozy Room Lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.14)_0%,rgba(217,119,6,0.04)_45%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Introduction & Features */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left z-20">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-teal-500/40 text-xs font-mono text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.18)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">&gt; INTERACTIVE EXPERIENCE</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans leading-[1.1]">
              Shafeek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 drop-shadow-[0_0_35px_rgba(96,165,250,0.35)]">OS</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed font-sans">
              Step into my digital world — a vintage computer with a fully playable operating system.
            </p>

            {/* Feature List matching reference image */}
            <ul className="mt-6 space-y-3 font-mono text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <Gamepad2 className="w-4 h-4" />
                </span>
                <span className="font-sans font-medium text-slate-200">Explore classic games</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <Briefcase className="w-4 h-4" />
                </span>
                <span className="font-sans font-medium text-slate-200">Discover my skills</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <FileText className="w-4 h-4" />
                </span>
                <span className="font-sans font-medium text-slate-200">Read my resume</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <Clock className="w-4 h-4" />
                </span>
                <span className="font-sans font-medium text-slate-200">Learn more about me</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="font-sans font-medium text-slate-200">And much more...</span>
              </li>
            </ul>

            {/* Prominent Action Button: POWER ON / ENTER OS */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onLaunchOS}
                className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] flex items-center gap-3 cursor-pointer hover:scale-105 active:scale-95 transition-all border border-white/20"
              >
                <Power className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
                <span>POWER ON / ENTER OS</span>
              </button>
            </div>

            {/* Handwritten Note with Curved Arrow pointing to the computer */}
            <div className="mt-6 flex items-center gap-2.5 text-slate-400 text-xs sm:text-sm italic font-serif select-none">
              <span className="text-slate-300">Just like a real computer from the 90s, but with a modern twist.</span>
              <span className="text-cyan-400 text-base font-bold font-mono">↗</span>
            </div>

            {/* Coffee Mug & Desk Accent */}
            <div className="mt-8 pt-4 border-t border-slate-800/40 w-full flex items-center gap-4">
              {/* Ceramic Mug Graphic */}
              <div className="px-3.5 py-2.5 rounded-lg bg-[#dedede] text-slate-900 border-2 border-[#b0b0b0] shadow-md font-mono text-[9px] font-extrabold leading-tight tracking-wider text-center flex flex-col items-center">
                <span className="text-slate-500">&lt;</span>
                <span>GOOD</span>
                <span>CODE</span>
                <span>BETTER</span>
                <span>TOMORROW</span>
                <span className="text-slate-500">&gt;</span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                <p className="text-white font-semibold">1990s Vintage Workstation</p>
                <p className="text-[11px] text-slate-400">CRT Monitor • Floppy Tower • Mechanical Keyboard</p>
              </div>
            </div>
          </div>

          {/* Right Column: The Vintage Computer Workstation */}
          <div className="w-full lg:w-7/12 flex flex-col items-center">
            {/* The Computer Workstation Unit Container */}
            <div className="relative w-full max-w-[660px] lg:max-w-[720px] aspect-[600/455] select-none group">
              
              {/* Warm Amber Lamp Glow cast on the desk & computer */}
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_85%_25%,rgba(245,158,11,0.24)_0%,rgba(217,119,6,0.06)_45%,transparent_75%)] pointer-events-none -z-10 rounded-2xl" />

              {/* 1. Live Operating System Screen (Behind the frame cutout) */}
              <div
                onClick={onLaunchOS}
                className="absolute overflow-hidden rounded-[14px] bg-[#0c1222] cursor-pointer group/screen transition-transform"
                style={{
                  left: '16.4%',
                  top: '11.8%',
                  width: '43.2%',
                  height: '38.1%',
                  zIndex: 10,
                }}
                title="Click anywhere to enter fullscreen Shafeek OS"
              >
                {/* Embedded DesktopOS running live */}
                <div className="w-full h-full relative">
                  <DesktopOS
                    isEmbedded={true}
                    onToggleFullscreen={onLaunchOS}
                    initialWindowsOpen={true}
                  />
                </div>

                {/* Hover Fullscreen Prompt Banner */}
                <div className="absolute inset-0 z-40 bg-black/45 opacity-0 group-hover/screen:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center backdrop-blur-[1px]">
                  <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-mono text-[10px] sm:text-xs font-bold shadow-2xl flex items-center gap-1.5 border border-white/50 animate-bounce">
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-200" />
                    <span>ENTER FULLSCREEN OS</span>
                  </div>
                  <p className="text-[9px] text-slate-200 font-mono mt-1 hidden sm:block">Click anywhere to play</p>
                </div>
              </div>

              {/* 2. Photorealistic 1990s Computer Frame Layer */}
              <img
                src="/assets/vintage-pc-frame@2x.png"
                alt="1990s Vintage Workstation Setup on Wooden Desk"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20 drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
              />

              {/* 3. Curved CRT Glass Effects: Vignette, Specular Glare & Scanlines */}
              <div
                className="absolute pointer-events-none z-30 rounded-[14px] overflow-hidden"
                style={{
                  left: '16.4%',
                  top: '11.8%',
                  width: '43.2%',
                  height: '38.1%',
                }}
              >
                {/* Diagonal Specular Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-transparent pointer-events-none" />
                {/* CRT Tube Vignette Inner Shadow */}
                <div className="absolute inset-0 shadow-[inset_0_0_18px_rgba(0,0,0,0.92)] pointer-events-none" />
                {/* Scanlines */}
                <div className="absolute inset-0 crt-scanlines opacity-25 pointer-events-none" />
              </div>

              {/* 4. Glowing Green Power LED on Monitor Bezel */}
              <div
                className="absolute z-30 w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e,0_0_16px_rgba(34,197,94,0.8)] animate-pulse pointer-events-none"
                style={{
                  left: '49.8%',
                  top: '52.7%',
                }}
                title="CRT Power: Online"
              />

              {/* 5. Clickable Physical Power Button on Monitor Bezel */}
              <button
                type="button"
                onClick={onLaunchOS}
                className="absolute z-30 w-6 h-6 rounded cursor-pointer opacity-0 hover:opacity-20 hover:bg-white active:scale-95"
                style={{
                  left: '52.2%',
                  top: '51.8%',
                }}
                title="Push Power Button / Launch Fullscreen OS"
              />
            </div>

            {/* Mobile Touch Quick Launch Button */}
            <div className="lg:hidden mt-6 w-full max-w-[420px]">
              <button
                type="button"
                onClick={onLaunchOS}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono text-xs font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <Maximize2 className="w-4 h-4 text-cyan-200" />
                <span>TAP TO LAUNCH FULLSCREEN OS</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
