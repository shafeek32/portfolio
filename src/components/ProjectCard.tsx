import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Github, ExternalLink, Eye, Radio } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative flex flex-col justify-between rounded-2xl glass-card border border-border-subtle hover:border-accent-cyan/40 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan"
    >
      {/* Project Thumbnail Image */}
      <div className="relative h-44 w-full overflow-hidden bg-background-elevated">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-75 group-hover:opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-black/30" />

        {/* Category & Status Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-background/90 backdrop-blur-md border border-border-subtle text-accent-cyan">
            {project.category}
          </span>

          {project.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <Radio className="w-2.5 h-2.5" />
              <span>{project.badge}</span>
            </span>
          )}
        </div>

        {/* Highlight Pill */}
        {project.highlight && (
          <div className="absolute bottom-2.5 left-3 right-3">
            <span className="inline-block w-full truncate px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-background-secondary/95 backdrop-blur-md border border-accent-cyan/30 text-accent-cyan-light shadow-sm">
              ✨ {project.highlight}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors leading-snug">
              {project.title}
            </h3>
            {project.role && (
              <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 rounded bg-background-elevated border border-border-subtle shrink-0">
                {project.role}
              </span>
            )}
          </div>

          <p className="text-xs text-text-secondary line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-background-elevated/80 border border-border-subtle text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-background-elevated/40 text-text-muted">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="pt-3.5 border-t border-border-subtle flex items-center justify-between gap-2">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-text-primary bg-background-elevated hover:bg-accent-cyan/15 hover:text-accent-cyan-light border border-border-strong hover:border-accent-cyan/40 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="p-2 rounded-xl text-text-secondary hover:text-text-primary bg-background-elevated hover:bg-white/10 border border-border-subtle hover:border-border-strong transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-background bg-accent-cyan hover:bg-accent-cyan-light transition-all shadow-glow-cyan"
              title="Live Demo"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
