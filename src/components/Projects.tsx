import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';
import { Code2 } from 'lucide-react';

interface ProjectsProps {
  onViewProjectDetails: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onViewProjectDetails }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI & ML' | 'Full-Stack' | 'Systems & Security'>('All');

  const filterOptions: ('All' | 'AI & ML' | 'Full-Stack' | 'Systems & Security')[] = [
    'All',
    'AI & ML',
    'Full-Stack',
    'Systems & Security'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Engineering <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-xl">
            Selected applications spanning multimodal AI pipelines, distributed decision engines, AST code synthesis, and security architectures.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-accent-cyan text-background font-semibold shadow-glow-cyan'
                  : 'bg-background-secondary border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {filter === 'All' ? 'All Projects' : filter}
            </button>
          ))}
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={onViewProjectDetails}
            />
          ))}
        </div>

        {/* GitHub Repository Callout */}
        <div className="mt-16 p-6 rounded-2xl glass-card border border-border-subtle text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-text-primary">Looking for additional repositories & experiments?</h4>
            <p className="text-xs text-text-secondary mt-0.5">Explore open-source contributions, scripts, and utility repositories on GitHub.</p>
          </div>
          <a
            href="https://github.com/shafeek32"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-semibold text-text-primary bg-background-elevated hover:bg-white/10 border border-border-strong hover:border-accent-cyan/40 transition-all"
          >
            Visit GitHub @shafeek32 →
          </a>
        </div>
      </div>
    </section>
  );
};
