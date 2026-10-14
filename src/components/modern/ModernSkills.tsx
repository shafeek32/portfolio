import React from 'react';
import { Cpu, Code2, Server, Database, Sparkles, Wrench, Terminal } from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const ModernSkills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-[#00f0ff]" />;
      case 'backend':
        return <Server className="w-5 h-5 text-[#ff007f]" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'ai':
        return <Sparkles className="w-5 h-5 text-[#d946ef]" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-yellow-400" />;
      default:
        return <Cpu className="w-5 h-5 text-[#00f0ff]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-[#00f0ff]/40 text-xs text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          <Terminal className="w-3.5 h-3.5" />
          <span>// SYSTEM_CAPABILITIES & ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          Technical Stack & <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Core Architecture</span>
        </h2>
        <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
          High-performance distributed web systems, AI agent loops, and reactive frontend frameworks.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="cyber-card rounded-2xl p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-black border border-slate-800 group-hover:border-[#00f0ff]/40 transition-colors">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight font-sans">
                    {category.name}
                  </h3>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                    {category.skills.length} MODULES LOADED
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed font-sans">
                {category.description}
              </p>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      skill.featured
                        ? 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                        : 'bg-black/60 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {skill.name}
                    {skill.level && (
                      <span className="ml-1.5 text-[10px] text-slate-400 font-normal">
                        [{skill.level}]
                      </span>
                    )}
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
