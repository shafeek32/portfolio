import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Sparkles, Code2, Cpu, Server } from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-5 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Software Engineering Opportunities</span>
        </motion.div>

        {/* Developer Qualification Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-background-elevated/80 border border-border-strong text-text-secondary text-xs font-mono mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
          <span>Computer Science Graduate</span>
        </motion.div>

        {/* Prominent Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary">
            Shafeek Latheef
          </h1>
          <p className="text-base sm:text-xl font-mono text-accent-cyan mt-2 font-medium tracking-wide">
            Software Engineer · Full-Stack Developer
          </p>
        </motion.div>

        {/* Value Proposition Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-4xl leading-[1.15] mb-5"
        >
          Building software that <span className="text-gradient-cyan">solves real problems.</span>
        </motion.h2>

        {/* Focused Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-8"
        >
          Specializing in <span className="text-text-primary font-medium">full-stack development</span>, <span className="text-text-primary font-medium">AI-powered applications</span>, and <span className="text-text-primary font-medium">scalable backend architectures</span> with a strong foundation in problem solving and clean code.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-8"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-background bg-accent-cyan hover:bg-accent-cyan-light transition-all shadow-glow-cyan hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4" />
            <span>View Projects</span>
          </a>

          <a
            href="https://github.com/shafeek32"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-text-primary bg-background-elevated hover:bg-white/10 border border-border-strong hover:border-accent-cyan/40 transition-all hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4 text-text-primary" />
            <span>GitHub Profile</span>
          </a>

          <button
            onClick={onResumeClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-text-primary bg-background-elevated hover:bg-white/10 border border-border-strong hover:border-emerald-500/40 transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Resume</span>
          </button>
        </motion.div>

        {/* Technical Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left mt-2"
        >
          <div className="p-4 rounded-xl glass-card border border-border-subtle hover:border-accent-cyan/30 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">Full-Stack Development</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Responsive React/TypeScript frontends integrated with fast REST APIs and clean component architectures.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-border-subtle hover:border-emerald-500/30 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">AI-Powered Applications</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              LangGraph agent workflows, OCR document ingestion, structured LLM extraction, and computer vision.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-border-subtle hover:border-indigo-500/30 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">Backend & Systems</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Scalable services using Python FastAPI & Node.js, PostgreSQL/MongoDB schemas, and secure API design.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-10 p-2 rounded-full text-text-muted hover:text-accent-cyan hover:bg-white/5 transition-all animate-bounce"
          aria-label="Scroll down to About section"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.a>

      </div>
    </section>
  );
};
