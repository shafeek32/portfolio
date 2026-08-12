import React from 'react';
import { motion } from 'framer-motion';
import { cybersecurityRoadmap } from '../data/cybersecurity';
import { LiveTerminal } from './LiveTerminal';
import { 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

interface CybersecurityProps {
  onResumeClick?: () => void;
}

export const Cybersecurity: React.FC<CybersecurityProps> = ({ onResumeClick }) => {
  return (
    <section id="cybersecurity" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-background/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>06 // SYSTEMS & SECURITY PRACTICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Currently Exploring <span className="text-gradient-emerald">Cybersecurity</span>
          </h2>
          <p className="text-sm text-text-muted mt-3 max-w-2xl leading-relaxed">
            I'm expanding my software engineering background into cybersecurity, focusing on understanding how systems, networks, and web applications can be secured and defended against vulnerabilities.
          </p>
        </div>

        {/* 6-Step Visual Roadmap */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-border-subtle">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SECURITY ENGINEERING ROADMAP</span>
            </div>
            <span className="text-xs text-text-muted font-mono">6 CORE DOMAINS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cybersecurityRoadmap.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 rounded-2xl glass-card border border-border-subtle hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border-subtle mb-3">
                    <span className="text-lg font-mono font-bold text-emerald-400">
                      {item.step}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        item.status === 'Foundations'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : item.status === 'Learning'
                          ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                          : item.status === 'Practicing'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-text-primary group-hover:text-emerald-400 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-background-elevated border border-border-subtle text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="pt-3 border-t border-border-subtle flex items-center gap-1.5 text-[11px] text-text-muted">
                  <span className="font-mono text-emerald-400">Tools:</span>
                  <span className="truncate">{item.tools.join(', ')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Live Shell Emulator */}
        <LiveTerminal onResumeClick={onResumeClick} />
      </div>
    </section>
  );
};
