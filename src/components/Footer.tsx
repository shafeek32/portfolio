import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t-2 border-[#404040] bg-[#C0C0C0] pb-16 pt-6 px-4 sm:px-8 font-mono text-xs text-black select-none shadow-[inset_0_2px_0px_#FFFFFF]">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Top: Identity + Links + Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[#808080]">
          <div>
            <span className="text-sm font-bold uppercase block text-black">
              SHAFEEK LATHEEF // PERSONAL WORKSTATION
            </span>
            <p className="text-xs text-gray-700 mt-0.5">
              Software Engineer • Full-Stack Developer • Kerala, India
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/shafeek32"
              target="_blank"
              rel="noreferrer"
              className="retro-btn px-2.5 py-1 text-xs font-bold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shafeek-latheef/"
              target="_blank"
              rel="noreferrer"
              className="retro-btn px-2.5 py-1 text-xs font-bold"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shafeekl2002@gmail.com"
              className="retro-btn px-2.5 py-1 text-xs font-bold"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="retro-btn px-2.5 py-1 text-xs font-bold flex items-center gap-1 bg-[#D4D0C8]"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3 text-[#000080]" />
            </button>
          </div>
        </div>

        {/* Bottom: Authentic Retro Badges (No fake visitor counters) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px]">
          {/* Status Tags */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 font-bold">
            <span className="px-2 py-0.5 bg-[#FFFFCC] border border-[#808080] text-black">
              ⚡ REACT 18 + TS
            </span>
            <span className="px-2 py-0.5 bg-[#E0E8FF] border border-[#808080] text-[#000080]">
              SYSTEM READY
            </span>
            <span className="px-2 py-0.5 bg-[#E8E8E8] border border-[#808080] text-black">
              HTML 5.0 W3C VALID
            </span>
          </div>

          {/* Copyright */}
          <div className="text-gray-700 font-bold">
            © 2026 Shafeek Latheef. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
