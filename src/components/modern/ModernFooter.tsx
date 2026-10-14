import React from 'react';
import { Monitor, ArrowUp, Gamepad2, Terminal } from 'lucide-react';

interface ModernFooterProps {
  onLaunchOS: () => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ onLaunchOS }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#00f0ff]/20 bg-[#060814] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Cyberpunk Callout Banner */}
        <div className="bg-gradient-to-r from-[#00f0ff]/10 via-[#7928ca]/10 to-[#ff007f]/10 rounded-2xl p-6 sm:p-8 border border-[#00f0ff]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-black border border-[#00f0ff]/50 flex items-center justify-center text-[#00f0ff] shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight font-sans">
                Prefer the 90s Cyber Workstation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                Launch full-screen retro OS mode with window management, Minesweeper, Snake, Number Hunt, and Terminal.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onLaunchOS}
            className="px-5 py-2.5 rounded-xl bg-[#00f0ff] hover:bg-white text-black font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105"
          >
            <Monitor className="w-4 h-4 text-black" />
            <span>ENTER_RETRO_OS</span>
          </button>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-white font-extrabold text-base tracking-wider font-sans">
                Shafeek Latheef
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-0.5">
              Software Engineer // Autonomous AI & Cyber Systems
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
            <a href="#about" className="hover:text-[#00f0ff] transition-colors">// About</a>
            <a href="#projects" className="hover:text-[#00f0ff] transition-colors">// Projects</a>
            <a href="#experience" className="hover:text-[#00f0ff] transition-colors">// Timeline</a>
            <a href="#skills" className="hover:text-[#00f0ff] transition-colors">// Stack</a>
            <a href="#contact" className="hover:text-[#00f0ff] transition-colors">// Contact</a>
            <a
              href="https://numberhunt.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff007f] hover:text-[#ff3399] flex items-center gap-1 font-bold"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Number Hunt</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-black hover:bg-slate-900 text-[#00f0ff] border border-slate-800 hover:border-[#00f0ff]/50 transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span>TOP</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Shafeek Latheef. Powered by React, TypeScript, and Vite.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/shafeek32" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff]">
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/shafeek-latheef/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff]">
              LinkedIn
            </a>
            <span>•</span>
            <a href="mailto:shafeekl2002@gmail.com" className="hover:text-[#ff007f]">
              shafeekl2002@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
