import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Sparkles, Code2, Shield, Cpu } from 'lucide-react';

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
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Software Engineering Opportunities</span>
        </motion.div>

        {/* Small Qualification Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-elevated/80 border border-border-strong text-text-secondary text-xs font-mono mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
          <span>Computer Science Graduate • Software Engineer</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary max-w-4xl leading-[1.1] mb-6"
        >
          Building software that{' '}
          <span className="text-gradient-cyan">solves real problems.</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
        >
          I'm <span className="text-text-primary font-semibold">Shafeek Latheef</span>, a Computer Science graduate passionate about building full-stack applications, AI-powered systems, and exploring cybersecurity.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-background bg-accent-cyan hover:bg-accent-cyan-light transition-all shadow-glow-cyan hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4" />
            <span>View My Work</span>
          </a>

          <button
            onClick={onResumeClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-text-primary bg-background-elevated/80 hover:bg-white/10 border border-border-strong hover:border-accent-cyan/40 transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4 text-accent-cyan" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Secondary Links (Socials & Quick Metrics) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center gap-6 text-sm text-text-muted mb-16"
        >
          <a
            href="https://github.com/shafeek32"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent-cyan transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/shafeek32</span>
          </a>
          <span className="text-border-strong">•</span>
          <a
            href="https://linkedin.com/in/shafeek-latheef"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent-cyan transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>
        </motion.div>

        {/* Mini Technical Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
        >
          <div className="p-4 rounded-xl glass-card border border-border-subtle hover:border-accent-cyan/30 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">Full-Stack Architecture</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Engineered with React, TypeScript, FastAPI, Node.js, and robust relational & document databases.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-border-subtle hover:border-accent-cyan/30 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">AI & Agentic Pipelines</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              LangGraph workflows, OCR document ingestion, structured LLM extraction, and computer vision models.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-card border border-border-subtle hover:border-accent-cyan/30 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">Cybersecurity Focus</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Linux hardening, OWASP Top 10 mitigation, network packet analysis, and secure coding practices.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 p-2 rounded-full text-text-muted hover:text-accent-cyan hover:bg-white/5 transition-all animate-bounce"
          aria-label="Scroll down to About section"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.a>

      </div>
    </section>
  );
};
