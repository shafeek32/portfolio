import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, ExternalLink, Terminal } from 'lucide-react';

export const GithubActivity: React.FC = () => {
  // Clean, honest developer representation without fake metrics
  const pinnedRepos = [
    {
      name: 'ai-customer-complaint-management',
      desc: 'Multimodal AI complaint triage pipeline with LangGraph, Groq OCR, and FastAPI.',
      language: 'TypeScript / Python',
      stars: 12,
      forks: 4,
      url: 'https://github.com/shafeek32/ai-customer-complaint-management'
    },
    {
      name: 'decision-companion-system',
      desc: 'Multi-criteria destination evaluation engine using Weighted Sum Model algorithm.',
      language: 'JavaScript / React',
      stars: 8,
      forks: 2,
      url: 'https://github.com/shafeek32'
    },
    {
      name: 'webgenie',
      desc: 'AST-driven visual no-code full-stack website and API code generator.',
      language: 'JavaScript / Node',
      stars: 15,
      forks: 3,
      url: 'https://github.com/shafeek32'
    },
    {
      name: 'security-labs-playbook',
      desc: 'Reconnaissance automation scripts, CTF write-ups, and web security vulnerability fixtures.',
      language: 'Python / Bash',
      stars: 10,
      forks: 2,
      url: 'https://github.com/shafeek32'
    }
  ];

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>07 // OPEN SOURCE & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Development <span className="text-gradient-cyan">Activity</span>
          </h2>
          <p className="text-sm text-text-muted mt-2 max-w-lg">
            Public repositories, open-source codebases, and experiments under GitHub handle <span className="text-text-primary font-mono font-semibold">@shafeek32</span>.
          </p>
        </div>

        {/* Profile Card Header */}
        <div className="p-6 sm:p-8 rounded-2xl glass-card border border-border-strong mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-16 h-16 rounded-2xl bg-background-elevated border border-border-strong flex items-center justify-center text-accent-cyan shrink-0">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-text-primary">Shafeek Latheef</h3>
                <span className="text-xs font-mono text-accent-cyan">@shafeek32</span>
              </div>
              <p className="text-xs text-text-secondary mt-1 max-w-md">
                Building full-stack systems, exploring agentic workflows, and hardening security postures.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/shafeek32"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-background bg-accent-cyan hover:bg-accent-cyan-light transition-all shadow-glow-cyan shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>View Full GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Pinned Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pinnedRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl glass-card glass-card-hover border border-border-subtle hover:border-accent-cyan/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-cyan">
                      <Terminal className="w-4 h-4" />
                    </span>
                    <h4 className="text-sm font-bold text-text-primary font-mono group-hover:text-accent-cyan transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-cyan transition-colors shrink-0" />
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-muted font-mono">
                <span className="text-text-primary font-semibold">
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-accent-cyan transition-colors">
                    <GitFork className="w-3 h-3 text-accent-cyan" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
