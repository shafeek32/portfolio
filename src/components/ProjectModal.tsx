import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { PixelIcon } from './PixelIcon';
import { playRetroSound } from '../utils/sound';

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto font-mono">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playRetroSound('close');
            onClose();
          }}
          className="fixed inset-0 bg-black/50 cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col retro-window-frame overflow-hidden z-10 my-auto shadow-2xl"
        >
          {/* Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2 truncate">
              <PixelIcon name="folder" size={15} />
              <span className="text-xs sm:text-[13px] font-bold tracking-wide truncate">
                Case_Study_{project.id.toUpperCase()}.exe — [{project.title}]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => {
                  playRetroSound('close');
                  onClose();
                }}
                className="retro-titlebar-btn font-bold text-red-900 hover:bg-red-200"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Window Menu */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
            <div className="flex items-center gap-3">
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ile</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>xecute</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>H</u>elp</span>
            </div>
            <div className="text-[11px] text-gray-700">
              CATEGORY: {project.category}
            </div>
          </div>

          {/* Modal Body Container */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 bg-[#C0C0C0] space-y-4">
            {/* Header image & metadata */}
            <div className="retro-inset-cream p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5 aspect-[16/10] overflow-hidden bg-black border-2 border-t-[#404040] border-l-[#404040] border-r-white border-b-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-7 space-y-3">
                  <div className="text-base sm:text-xl font-bold text-black font-display uppercase">
                    {project.title}
                  </div>
                  <p className="text-xs text-[#333333] font-mono leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playRetroSound('click')}
                        className="retro-btn px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-white text-black"
                      >
                        <PixelIcon name="github" size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playRetroSound('click')}
                        className="retro-btn px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 bg-[#FFFFE0] hover:bg-white text-[#000080]"
                      >
                        <PixelIcon name="external" size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="retro-inset p-3 bg-[#FFF5F5]">
                <div className="text-xs font-bold text-red-800 pb-1 border-b border-red-200 mb-2">
                  [PROBLEM DEFINITION]
                </div>
                <p className="text-xs text-[#333333] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="retro-inset p-3 bg-[#F5FFF5]">
                <div className="text-xs font-bold text-emerald-800 pb-1 border-b border-emerald-200 mb-2">
                  [ENGINEERING SOLUTION]
                </div>
                <p className="text-xs text-[#333333] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="retro-inset p-3 bg-[#FFFFFA]">
              <div className="text-xs font-bold text-[#000080] pb-1 border-b border-gray-200 mb-2">
                [SYSTEM CAPABILITIES & IMPLEMENTATION]
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-[#F0F0F0] border border-[#C0C0C0] text-xs text-black flex items-start gap-2"
                  >
                    <span className="text-[#000080] font-bold">►</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Tech */}
            <div className="retro-inset p-3 bg-[#FFFFFA]">
              <div className="text-xs font-bold text-[#000080] pb-1 border-b border-gray-200 mb-2">
                [ARCHITECTURE SPECIFICATION]
              </div>
              <p className="text-xs text-[#333333] leading-relaxed mb-3">
                {project.architecture}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-bold bg-[#E0E8FF] border border-[#80A0FF] text-[#000080]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-4 py-2 flex items-center justify-between">
            <span className="text-xs text-gray-700">STATUS: READY</span>
            <button
              onClick={() => {
                playRetroSound('close');
                onClose();
              }}
              className="retro-btn px-4 py-1 text-xs font-bold"
            >
              Close Window [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
