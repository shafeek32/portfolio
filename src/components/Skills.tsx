import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Layers
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-4 h-4" />,
  frontend: <Layout className="w-4 h-4" />,
  backend: <Server className="w-4 h-4" />,
  databases: <Database className="w-4 h-4" />,
  ai: <Cpu className="w-4 h-4" />,
  cybersecurity: <ShieldCheck className="w-4 h-4" />,
  tools: <Wrench className="w-4 h-4" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Skills & <span className="text-gradient-cyan">Proficiencies</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Structured competencies across modern engineering layers. No arbitrary percentages—just practical, battle-tested tools.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-accent-cyan text-background font-semibold shadow-glow-cyan'
                : 'bg-background-secondary border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-white/5'
            }`}
          >
            All Disciplines
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-accent-cyan text-background font-semibold shadow-glow-cyan'
                  : 'bg-background-secondary border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-border-subtle flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 group-hover:scale-110 transition-transform">
                      {categoryIcons[category.id] || <Code2 className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary text-sm group-hover:text-accent-cyan transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-[10px] text-text-muted font-mono">{category.skills.length} skills</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-text-muted mb-4 leading-relaxed line-clamp-2">
                  {category.description}
                </p>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-all ${
                        skill.featured
                          ? 'bg-background-elevated border border-accent-cyan/30 text-text-primary font-medium hover:border-accent-cyan shadow-sm'
                          : 'bg-background-secondary/80 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong'
                      }`}
                    >
                      {skill.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-dim">
                <span className="font-mono">STATUS: VERIFIED</span>
                <span className="text-accent-cyan font-mono group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ready //
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
