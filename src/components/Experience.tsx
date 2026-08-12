import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Code2, ShieldCheck, Trophy } from 'lucide-react';

const typeIcons: Record<string, React.ReactNode> = {
  Academic: <GraduationCap className="w-3.5 h-3.5" />,
  Development: <Code2 className="w-3.5 h-3.5" />,
  'Self-Learning': <ShieldCheck className="w-3.5 h-3.5" />,
  Hackathon: <Trophy className="w-3.5 h-3.5" />
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-background/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Background & <span className="text-gradient-cyan">Milestones</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Academic degree, full-stack software projects, foundational security labs, and technical hackathons.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-border-strong ml-4 sm:ml-8 space-y-10">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent-cyan flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              </div>

              {/* Timeline Item Card */}
              <div className="p-6 rounded-2xl glass-card border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300 shadow-md group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3.5 border-b border-border-subtle mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                        {typeIcons[item.type] || <Briefcase className="w-3 h-3" />}
                        <span>{item.type === 'Academic' ? 'Degree & Education' : item.type}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                      {item.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary mt-1.5">
                      <span className="font-semibold text-text-primary">
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-text-muted">
                        <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted bg-background-secondary/90 px-3 py-1.5 rounded-lg border border-border-subtle shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-normal">{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-background-elevated border border-border-subtle text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
