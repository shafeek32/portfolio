import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 // CREDENTIALS & SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Verified <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Structured continuing education and intensive technical bootcamps.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-border-subtle flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-accent-cyan block font-semibold">
                        {cert.issuer}
                      </span>
                      <h3 className="font-bold text-text-primary text-base group-hover:text-accent-cyan transition-colors line-clamp-1">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    {cert.issueDate}
                  </span>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills verified */}
                <div className="flex flex-wrap gap-1.5 pt-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-background-elevated border border-border-subtle text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Curriculum Completed</span>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-text-muted hover:text-accent-cyan transition-colors"
                  >
                    <span>View Platform</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
