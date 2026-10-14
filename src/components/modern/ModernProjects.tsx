import React, { useState } from 'react';
import { ExternalLink, Github, Gamepad2, Eye, Terminal } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project } from '../../types';

interface ModernProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const ModernProjects: React.FC<ModernProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Featured' | 'Live' | 'AI & ML' | 'Full-Stack'>('All');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    if (filter === 'Live') return Boolean(project.liveUrl);
    if (filter === 'AI & ML') return project.category === 'AI & ML';
    if (filter === 'Full-Stack') return project.category === 'Full-Stack';
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Cyber Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-[#00f0ff]/40 text-xs text-[#00f0ff] mb-3 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
            <Terminal className="w-3.5 h-3.5" />
            <span>// DEPLOYED_SYSTEMS & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Featured Projects & <span className="text-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Live Applications</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl font-mono">
            Autonomous agent architectures, multimodal document processing, and real-time browser game engines.
          </p>
        </div>

        {/* Cyberpunk Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-black/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
          {(['All', 'Featured', 'Live', 'AI & ML', 'Full-Stack'] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filter === category
                  ? 'bg-[#00f0ff] text-black shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {category === 'Live' ? '🟢 LIVE PRODUCTION' : category.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Cyberpunk Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => {
          const isNumberHunt = project.id === 'number-hunt';

          return (
            <div
              key={project.id}
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group ${
                isNumberHunt
                  ? 'cyber-card-pink'
                  : 'cyber-card'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-black/80 backdrop-blur-md text-[#00f0ff] border border-[#00f0ff]/40">
                    {project.category}
                  </span>

                  {project.liveUrl && (
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md ${
                      isNumberHunt
                        ? 'bg-[#ff007f]/20 text-[#ff007f] border border-[#ff007f]/50 shadow-[0_0_10px_rgba(255,0,127,0.3)]'
                        : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.badge || 'LIVE'}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2 font-sans">
                    {project.title}
                    {isNumberHunt && <Gamepad2 className="w-4 h-4 text-[#ff007f]" />}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#00f0ff]/90 line-clamp-1">
                    {project.highlight}
                  </p>

                  <p className="mt-3 text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[10px] text-slate-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-bold text-slate-300 hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>INSPECT</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
                          isNumberHunt
                            ? 'bg-[#ff007f] hover:bg-[#ff1a8c] text-white shadow-[0_0_15px_rgba(255,0,127,0.5)] hover:scale-105'
                            : 'bg-[#00f0ff] hover:bg-white text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        }`}
                        title="Open Live Application"
                      >
                        {isNumberHunt ? <Gamepad2 className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                        <span>{isNumberHunt ? 'PLAY LIVE' : 'LIVE DEMO'}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
