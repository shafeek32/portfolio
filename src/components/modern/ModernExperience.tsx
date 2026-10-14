import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles, Terminal } from 'lucide-react';
import { experiences } from '../../data/experience';

export const ModernExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-mono">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-[#00f0ff]/40 text-xs text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          <Terminal className="w-3.5 h-3.5" />
          <span>// CHRONOLOGICAL_LOGS & MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          Experience & <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Engineering Journey</span>
        </h2>
        <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
          Production systems engineering, AI research, and academic computer science foundations.
        </p>
      </div>

      {/* Cyber Timeline List */}
      <div className="relative border-l border-[#00f0ff]/30 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-black border-2 border-[#00f0ff] flex items-center justify-center text-[#00f0ff] group-hover:scale-110 group-hover:bg-[#00f0ff] group-hover:text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              {exp.type === 'Development' ? (
                <Briefcase className="w-3.5 h-3.5" />
              ) : exp.type === 'Academic' ? (
                <Award className="w-3.5 h-3.5" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
            </div>

            {/* Content Card */}
            <div className="cyber-card rounded-2xl p-6 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 uppercase">
                  {exp.type}
                </span>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#ff007f]" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00f0ff]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {exp.role}
              </h3>
              <p className="text-xs font-bold text-[#00f0ff] mt-0.5">
                {exp.company}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="mt-4 space-y-2">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] bg-black/60 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
