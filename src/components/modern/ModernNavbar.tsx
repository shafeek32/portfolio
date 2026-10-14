import React, { useState, useEffect } from 'react';
import { Monitor, FileText, Menu, X, Gamepad2, ArrowUpRight, Terminal } from 'lucide-react';

interface ModernNavbarProps {
  onLaunchOS: () => void;
  onResumeClick: () => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({ onLaunchOS, onResumeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// About', href: '#about' },
    { name: '// Projects', href: '#projects' },
    { name: '// Timeline', href: '#experience' },
    { name: '// Stack', href: '#skills' },
    { name: '// Contact', href: '#contact' },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono ${
        isScrolled
          ? 'bg-[#060814]/90 backdrop-blur-md border-b border-[#00f0ff]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Cyberpunk Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight group"
        >
          <div className="w-8 h-8 rounded-lg bg-black border border-[#00f0ff]/60 flex items-center justify-center text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.4)] group-hover:border-[#ff007f] group-hover:text-[#ff007f] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight text-white group-hover:text-[#00f0ff] transition-colors text-sm font-extrabold tracking-wider">
              SHAFEEK.DEV
            </span>
            <span className="text-[10px] text-slate-400 font-normal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping"></span>
              SYS // FULL-STACK & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/80 px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleScrollTo(link.href)}
              className="px-3.5 py-1 text-xs font-semibold text-slate-300 hover:text-[#00f0ff] hover:bg-slate-900 rounded-full transition-all cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Direct link to Number Hunt */}
          <a
            href="https://numberhunt.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-all hover:scale-105 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
            title="Play Number Hunt Game Live"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Number Hunt</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          {/* Launch Fullscreen OS Mode */}
          <button
            type="button"
            onClick={onLaunchOS}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#00f0ff] bg-black/60 hover:bg-[#00f0ff]/10 border border-[#00f0ff]/50 transition-all hover:scale-105 shadow-[0_0_12px_rgba(0,240,255,0.25)] cursor-pointer"
            title="Switch to Retro Desktop OS Mode"
          >
            <Monitor className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>OS_MODE</span>
          </button>

          {/* Resume Modal Button */}
          <button
            type="button"
            onClick={onResumeClick}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-extrabold text-white bg-[#ff007f] hover:bg-[#ff1a8c] active:bg-[#e60073] transition-all shadow-[0_0_15px_rgba(255,0,127,0.4)] cursor-pointer hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onLaunchOS}
            className="p-2 rounded-lg bg-black border border-[#00f0ff]/40 text-[#00f0ff]"
            title="Launch Computer Mode"
          >
            <Monitor className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff007f]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060814]/98 border-b border-[#00f0ff]/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleScrollTo(link.href)}
                className="text-left px-3 py-2 text-sm font-semibold text-slate-300 hover:text-[#00f0ff] hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="https://numberhunt.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>PLAY NUMBER HUNT (LIVE)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onLaunchOS();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold text-[#00f0ff] bg-black border border-[#00f0ff]/50"
            >
              <Monitor className="w-4 h-4" />
              <span>LAUNCH FULLSCREEN OS</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-extrabold text-white bg-[#ff007f]"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
