import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, ExternalLink, GitBranch } from 'lucide-react';

export const GithubActivity: React.FC = () => {
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
      url: 'https://github.com/shafeek32/decision-companion-system'
    },
    {
      name: 'Webgenie',
      desc: 'AST-driven visual no-code full-stack website and API code generator.',
      language: 'JavaScript / Node',
      stars: 15,
      forks: 3,
      url: 'https://github.com/shafeek32/Webgenie'
    },
    {
      name: 'Coding-Platform',
      desc: 'Competitive programming platform with integrated Monaco editor, test case runner, and leaderboards.',
      language: 'TypeScript / Node',
      stars: 14,
      forks: 3,
      url: 'https://github.com/shafeek32/Coding-Platform'
    }
  ];

  return (
    <section id="github" className="py-12 px-3 sm:px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="retro-window-frame overflow-hidden font-mono"
        >
          {/* Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-white inline" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                07_Open_Source_Hub.exe — [GitHub Repository Sync Tool]
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Menu */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
            <div className="flex items-center gap-3">
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>R</u>epositories</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>S</u>ync</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>H</u>elp</span>
            </div>
            <div className="text-[11px] text-gray-700">
              REMOTE: github.com/shafeek32
            </div>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-8 bg-[#C0C0C0] space-y-4">
            {/* Profile Bar Inset */}
            <div className="retro-inset p-4 bg-[#FFFFFA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-black font-mono">Shafeek Latheef</span>
                  <span className="text-xs font-bold text-[#000080]">@shafeek32</span>
                </div>
                <p className="text-xs text-[#333333] font-sans">
                  Engineering full-stack products, backend services, and AI applications.
                </p>
              </div>

              <a
                href="https://github.com/shafeek32"
                target="_blank"
                rel="noreferrer"
                className="retro-btn px-4 py-2 text-xs font-bold uppercase flex items-center gap-2 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black shrink-0"
              >
                <Github className="w-4 h-4 text-[#000080]" />
                <span>Open GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Repos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="retro-inset p-4 bg-[#FFFFFA] flex flex-col justify-between space-y-3 hover:border-[#000080] transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-gray-200 mb-2">
                      <h3 className="text-xs font-bold text-black group-hover:text-[#000080] transition-colors font-mono truncate">
                        {repo.name}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#000080] shrink-0" />
                    </div>

                    <p className="text-xs text-[#333333] font-sans leading-relaxed">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 text-xs">
                    <span className="text-black font-bold text-[10px] bg-[#EAEAEA] px-1.5 py-0.5 border border-[#B0B0B0]">
                      {repo.language}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] font-bold">
                      <span className="flex items-center gap-1 text-amber-700">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#000080]">
                        <GitFork className="w-3 h-3" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Repositories: 4 Pinned</span>
            <span>Remote: Connected</span>
            <span>Protocol: HTTPS/SSH</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
