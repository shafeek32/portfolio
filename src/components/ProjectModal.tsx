import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { 
  X, 
  Github, 
  Layers, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  ArrowUpRight,
  UserCheck,
  Radio,
  Star
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-background-secondary border border-border-strong rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header Image / Banner */}
          <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-background-elevated">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-40 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background-secondary/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/70 backdrop-blur-md border border-border-subtle text-text-muted hover:text-text-primary hover:bg-background transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Content */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 text-accent-cyan-light text-xs font-mono">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.category}</span>
                  </span>

                  {project.badge && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold">
                      <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                      <span>{project.badge}</span>
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-xl">
                  {project.highlight}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-background-elevated hover:bg-white/10 text-text-primary border border-border-strong transition-all hover:border-accent-cyan/50"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent-cyan hover:bg-accent-cyan-light text-background transition-all shadow-glow-cyan"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Scrollable Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-sm text-text-secondary">
            
            {/* Meta Row: Role, Tech & Live URL */}
            {project.role && (
              <div className="p-4 rounded-xl bg-background-tertiary border border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted flex items-center gap-1.5 mb-1">
                    <UserCheck className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Role</span>
                  </span>
                  <span className="font-semibold text-text-primary text-sm">{project.role}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                    Core Technologies
                  </span>
                  <span className="font-medium text-text-secondary">{project.technologies.join(', ')}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                    Deployment
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent-cyan hover:underline font-mono inline-flex items-center gap-1 font-semibold"
                    >
                      <span>{project.liveUrl.replace('https://', '')}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-text-muted font-mono">Internal Sandbox</span>
                  )}
                </div>
              </div>
            )}

            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Overview</span>
              </h3>
              <p className="text-text-primary leading-relaxed text-sm sm:text-base">
                {project.overview}
              </p>
            </div>

            {/* Highlights List if present */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-3 flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  <span>Highlights</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-background-tertiary/60 border border-border-subtle flex items-start gap-2.5 text-xs text-text-secondary"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="font-medium text-text-primary">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-background-tertiary/70 border border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background-tertiary/70 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Key Features & Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-background-tertiary/50 border border-border-subtle flex items-start gap-2.5 text-xs text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Tech Stack */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-2 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>Architecture & Tech Stack</span>
              </h3>
              <div className="p-4 rounded-xl bg-background-elevated/80 border border-border-strong text-xs leading-relaxed text-text-secondary mb-3">
                {project.architecture}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs bg-background-tertiary border border-border-subtle text-text-primary font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                  Technical Challenges Overcome
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                      <span className="text-accent-cyan font-mono">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                  Key Learnings & Impact
                </h3>
                <ul className="space-y-2">
                  {project.whatILearned.map((l, i) => (
                    <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">✓</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-border-subtle bg-background-tertiary/60 flex items-center justify-between">
            <span className="text-xs font-mono text-text-muted">
              PROJECT ID // {project.id}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
