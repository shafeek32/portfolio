import React, { useState } from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';
import { projects } from '../data/projects';
import { Project } from '../types';
import { playRetroSound } from '../utils/sound';

interface ProjectsWindowProps {
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
  onSelectProjectDetails: (project: Project) => void;
  style?: React.CSSProperties;
  className?: string;
  dragConstraintsRef?: React.RefObject<Element>;
}

export const ProjectsWindow: React.FC<ProjectsWindowProps> = ({
  isOpen,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  onSelectProjectDetails,
  style,
  className = '',
  dragConstraintsRef,
}) => {
  const [selectedId, setSelectedId] = useState<string>(projects[0]?.id || '');
  const selectedProject = projects.find((p) => p.id === selectedId) || projects[0];

  if (!isOpen || isMinimized) return null;

  return (
    <RetroWindow
      id="projects"
      title="Projects_Explorer.exe"
      icon="folder"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Edit', 'View', 'Tools', 'Help']}
      statusBarLeft={`Total Projects: ${projects.length}`}
      statusBarRight={<span>{selectedProject?.category || 'Ready'}</span>}
      style={style}
      className={`w-full max-w-3xl shadow-2xl ${className}`}
      bodyClassName="p-2 sm:p-3 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="flex flex-col sm:flex-row gap-2.5">
        {/* Left Side: Directory Explorer / Project List */}
        <div className="w-full sm:w-56 retro-inset p-1.5 bg-[#FFFFFA] font-mono text-xs shrink-0 max-h-[300px] overflow-y-auto">
          <div className="px-2 py-0.5 bg-[#000080] text-white font-bold mb-1.5 flex items-center gap-1.5 text-[11px]">
            <PixelIcon name="folder" size={13} />
            <span>C:\PROJECTS</span>
          </div>

          <div className="space-y-0.5">
            {projects.map((proj) => {
              const isCurr = proj.id === selectedId;

              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => {
                    playRetroSound('blip');
                    setSelectedId(proj.id);
                  }}
                  className={`w-full text-left px-1.5 py-1 flex items-center gap-1.5 transition-colors cursor-pointer text-[11px] ${
                    isCurr
                      ? 'bg-[#000080] text-white font-bold'
                      : 'hover:bg-[#E8E8E8] text-black'
                  }`}
                >
                  <PixelIcon name="folder" size={13} />
                  <span className="truncate">{proj.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Selected Project Inspection Panel */}
        {selectedProject && (
          <div className="flex-1 retro-inset-cream p-3 font-mono text-xs space-y-2.5 flex flex-col justify-between max-h-[320px] overflow-y-auto">
            <div>
              {/* Project Title & Category Header */}
              <div className="flex flex-wrap items-start justify-between gap-1.5 border-b border-[#C0C0C0] pb-1.5">
                <div>
                  <h2 className="text-sm font-bold text-black uppercase font-display">
                    {selectedProject.title}
                  </h2>
                  <div className="text-[10px] font-bold text-[#000080] mt-0.5">
                    ★ {selectedProject.highlight}
                  </div>
                </div>
                <span className="px-1.5 py-0.2 bg-[#D4D0C8] border border-[#808080] text-[9px] font-bold text-gray-800">
                  {selectedProject.category}
                </span>
              </div>

              {/* Project Screenshot & Preview Container */}
              <div className="mt-2 bg-[#111111] border-2 border-t-[#404040] border-l-[#404040] border-r-white border-b-white p-0.5">
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1 bg-black/80 text-white font-mono text-[9px] px-1.5 py-0.2 border border-white/40">
                    PREVIEW // {selectedProject.id}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-2 text-[#222222] text-[11px] leading-relaxed line-clamp-3">
                {selectedProject.overview || selectedProject.shortDescription}
              </p>

              {/* Technology Badges */}
              <div className="mt-2 flex flex-wrap gap-1">
                {selectedProject.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.2 bg-white border border-[#A0A0A0] text-[9px] font-bold text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-[#C0C0C0]">
              <button
                type="button"
                onClick={() => {
                  playRetroSound('open');
                  onSelectProjectDetails(selectedProject);
                }}
                className="retro-btn px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 bg-[#D4D0C8] hover:bg-[#E8E8E8]"
              >
                <PixelIcon name="document" size={13} />
                <span>View Full Specs</span>
              </button>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playRetroSound('click')}
                  className="retro-btn px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 bg-[#D4D0C8] hover:bg-[#E8E8E8]"
                >
                  <PixelIcon name="github" size={13} />
                  <span>GitHub</span>
                </a>
              )}

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playRetroSound('click')}
                  className="retro-btn px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 bg-[#D4D0C8] hover:bg-[#E8E8E8]"
                >
                  <PixelIcon name="external" size={13} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </RetroWindow>
  );
};
