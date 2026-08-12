import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Target, Sparkles, User, Code, Cpu, Server, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Engineering with <span className="text-gradient-cyan">Purpose</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Building reliable, accessible software with attention to performance and clean architecture.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Concise Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border border-border-subtle shadow-lg space-y-6"
          >
            <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                I am a <span className="text-text-primary font-semibold">Computer Science graduate</span> from <span className="text-accent-cyan font-medium">APJ Abdul Kalam Technological University</span> with a strong passion for building software that solves practical problems.
              </p>

              <p>
                My focus centers on <span className="text-text-primary font-medium">full-stack web applications</span>, <span className="text-text-primary font-medium">AI-powered systems</span>, and <span className="text-text-primary font-medium">scalable backend architectures</span>. I enjoy transforming complex requirements into responsive, maintainable products.
              </p>

              <p>
                Whether designing stateful AI agent workflows, optimizing REST APIs, or writing clean React components, I value readable code, robust database modeling, and intuitive user experiences.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="pt-5 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-accent-cyan/10 text-accent-cyan mt-0.5">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">Full-Stack Web Apps</h4>
                  <p className="text-[11px] text-text-muted">React, TypeScript, Tailwind, Node.js & FastAPI.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">AI & Agentic Systems</h4>
                  <p className="text-[11px] text-text-muted">LangGraph, LLMs, OCR & computer vision.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Server className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">Scalable Backends</h4>
                  <p className="text-[11px] text-text-muted">Fast REST APIs, PostgreSQL & MongoDB.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-rose-500/10 text-rose-400 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">Security & Linux Basics</h4>
                  <p className="text-[11px] text-text-muted">Secure coding & OWASP vulnerability awareness.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Developer Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-background-tertiary to-background-secondary border border-border-strong shadow-xl relative overflow-hidden group"
          >
            {/* Top decorative gradient glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-accent-cyan/15 rounded-full blur-2xl group-hover:bg-accent-cyan/25 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-background-elevated border border-border-strong flex items-center justify-center text-accent-cyan font-bold text-base font-mono">
                      SL
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-base">Shafeek Latheef</h3>
                    <p className="text-xs text-accent-cyan font-mono">@shafeek32</p>
                  </div>
                </div>

                <div className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                  Active
                </div>
              </div>

              {/* Profile Details List */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-background-elevated/60 border border-border-subtle">
                  <div className="flex items-center gap-2 text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Location</span>
                  </div>
                  <span className="font-semibold text-text-primary">Kerala, India</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-background-elevated/60 border border-border-subtle">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Role</span>
                  </div>
                  <span className="font-semibold text-text-primary">Software Engineer</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-background-elevated/60 border border-border-subtle">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Target className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Focus</span>
                  </div>
                  <span className="font-semibold text-text-primary">Full-Stack & AI Systems</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-medium">Status</span>
                  </div>
                  <span className="font-semibold text-emerald-400">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Quick Tech Snapshot Tags */}
            <div className="mt-6 pt-4 border-t border-border-subtle">
              <span className="text-[11px] font-mono text-text-muted block mb-2 uppercase tracking-wider">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'FastAPI', 'Python', 'Node.js', 'PostgreSQL', 'LangGraph', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] bg-background-elevated border border-border-subtle text-text-secondary font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
