import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Layers
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Layout className="w-4 h-4" />,
  backend: <Server className="w-4 h-4" />,
  databases: <Database className="w-4 h-4" />,
  ai: <Cpu className="w-4 h-4" />,
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
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Core technologies and tools organized by domain. Practical, production-tested competencies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-accent-cyan text-background font-semibold shadow-glow-cyan'
                : 'bg-background-secondary border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-white/5'
            }`}
          >
            All Categories
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
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-border-subtle flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border-subtle mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 group-hover:scale-110 transition-transform">
                      {categoryIcons[category.id] || <Layers className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary text-sm sm:text-base group-hover:text-accent-cyan transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-[10px] text-text-muted font-mono">{category.skills.length} competencies</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        skill.featured
                          ? 'bg-background-elevated border border-accent-cyan/30 text-text-primary shadow-sm hover:border-accent-cyan'
                          : 'bg-background-elevated/70 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          skill.level === 'Advanced'
                            ? 'bg-emerald-400'
                            : skill.level === 'Proficient'
                            ? 'bg-accent-cyan'
                            : 'bg-indigo-400'
                        }`}
                      />
                      <span>{skill.name}</span>
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
