import React from 'react';
import { ArrowDown, Monitor, Gamepad2, Github, Linkedin } from 'lucide-react';

interface ModernHeroProps {
  onLaunchOS: () => void;
  onResumeClick: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onLaunchOS, onResumeClick }) => {
  return (
    <section id="about" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid">
      {/* Cyberpunk Background Ambient Neon Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-[#00f0ff]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-1/4 w-[500px] h-[350px] bg-[#ff007f]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Cyberpunk Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/90 border border-[#00f0ff]/40 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
          </span>
          <span className="text-[#00f0ff] font-bold tracking-wider">[ // SYS: ONLINE ]</span>
          <span className="text-slate-400">CLEARANCE: FULL-STACK & AI SYSTEMS</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl font-sans">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#818cf8] drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">Full-Stack Applications</span> & AI-Powered Systems
        </h1>

        {/* Bio / Introduction */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          Hi, I'm <b className="text-white font-bold tracking-wide">Shafeek Latheef</b>. I'm a software engineer focused on building full-stack web applications, AI-powered workflows, and practical tools that solve real-world problems. I work with technologies like React, FastAPI, Node.js, and LangGraph, and I enjoy turning ideas into working products — from AI-driven systems to interactive projects like{' '}
          <a
            href="https://numberhunt.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00f0ff] underline underline-offset-4 hover:text-[#ff007f] font-bold transition-colors"
          >
            Number Hunt
          </a>.
        </p>

        {/* Cyberpunk Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#00f0ff] hover:bg-white active:bg-cyan-200 text-black font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 text-black" />
          </a>

          <button
            type="button"
            onClick={onLaunchOS}
            className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white border border-[#ff007f]/50 hover:border-[#ff007f] font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer hover:scale-105 shadow-[0_0_20px_rgba(255,0,127,0.25)]"
          >
            <Monitor className="w-4 h-4 text-[#ff007f]" />
            <span>Launch Fullscreen OS</span>
          </button>

          <a
            href="https://numberhunt.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/50 font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <Gamepad2 className="w-4 h-4 text-emerald-400" />
            <span>Play Number Hunt (Live)</span>
          </a>
        </div>

        {/* Social Quick Links */}
        <div className="mt-6 flex items-center gap-4 text-slate-400 text-sm">
          <a
            href="https://github.com/shafeek32"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/shafeek-latheef/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <button
            type="button"
            onClick={onResumeClick}
            className="hover:text-emerald-400 transition-colors"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};
