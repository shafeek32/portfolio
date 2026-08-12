import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Target, Flame, Sparkles, CheckCircle2, Terminal, Code, Cpu, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Engineering robust systems with curiosity, precision, and modern engineering standards.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border border-border-subtle shadow-lg space-y-6"
          >
            <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                I'm a <span className="text-text-primary font-semibold">Computer Science graduate</span> from <span className="text-accent-cyan font-medium">APJ Abdul Kalam Technological University</span> with hands-on experience building full-stack applications and AI-powered systems.
              </p>

              <p>
                I enjoy turning ideas into practical software—from web applications and intelligent automation systems to experimenting with AI agents, document pipelines, and cybersecurity protocols.
              </p>

              <p>
                Currently, I'm strengthening my foundations in <span className="text-text-primary font-medium">cybersecurity, networking, Linux, ethical hacking, and secure application development</span> while continuing to improve my core software engineering and system architecture skills.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-accent-cyan/10 text-accent-cyan mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">Problem-Driven Engineering</h4>
                  <p className="text-[11px] text-text-muted">Focusing on high-impact, real-world utility.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">Security-First Mindset</h4>
                  <p className="text-[11px] text-text-muted">Writing resilient code resistant to OWASP flaws.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">AI & Automation</h4>
                  <p className="text-[11px] text-text-muted">Integrating modern LLMs and agentic graphs.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 mt-0.5">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">Clean Architecture</h4>
                  <p className="text-[11px] text-text-muted">Maintainable, typed, modular codebases.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-background-tertiary to-background-secondary border border-border-strong shadow-xl relative overflow-hidden group"
          >
            {/* Top decorative gradient glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-accent-cyan/15 rounded-full blur-2xl group-hover:bg-accent-cyan/25 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-background-elevated border border-border-strong flex items-center justify-center text-accent-cyan font-bold text-lg font-mono">
                      SL
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-base">Shafeek Latheef</h3>
                    <p className="text-xs text-accent-cyan font-mono">@shafeek32</p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                  Active
                </div>
              </div>

              {/* Profile Details List */}
              <div className="space-y-3.5 text-xs">
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
                  <span className="font-semibold text-text-primary">Full-Stack Development</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-background-elevated/60 border border-border-subtle">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Flame className="w-3.5 h-3.5 text-rose-400" />
                    <span>Interests</span>
                  </div>
                  <span className="font-semibold text-text-primary text-right">AI • Cyber • Backend</span>
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
                Primary Core Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'FastAPI', 'Python', 'Node.js', 'PostgreSQL', 'LangGraph', 'Linux'].map((tech) => (
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
