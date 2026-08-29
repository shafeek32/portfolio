import React from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';
import { resumeData } from '../data/resume';
import { playRetroSound } from '../utils/sound';

interface ResumeWindowProps {
  isOpen: boolean;
  isActive: boolean;
  isMinimized: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
  style?: React.CSSProperties;
  className?: string;
  dragConstraintsRef?: React.RefObject<Element>;
}

export const ResumeWindow: React.FC<ResumeWindowProps> = ({
  isOpen,
  isActive,
  isMinimized,
  onFocus,
  onMinimize,
  onClose,
  style,
  className = '',
  dragConstraintsRef,
}) => {
  if (!isOpen || isMinimized) return null;

  const handlePrint = () => {
    playRetroSound('open');
    window.print();
  };

  return (
    <RetroWindow
      id="resume"
      title="Resume.pdf — Acrobat Document Reader"
      icon="pdf"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Edit', 'View', 'Tools', 'Help']}
      statusBarLeft="Page 1 of 1"
      statusBarRight={<span>100% Zoom</span>}
      style={style}
      className={`w-full max-w-2xl shadow-2xl ${className}`}
      bodyClassName="p-2.5 sm:p-4 bg-[#808080]"
      dragConstraintsRef={dragConstraintsRef}
    >
      {/* Document Action Ribbon */}
      <div className="bg-[#C0C0C0] p-1.5 border border-white border-b-[#404040] mb-2 flex flex-wrap items-center justify-between gap-1.5 font-mono text-xs">
        <div className="flex items-center gap-1.5">
          <a
            href="/Shafeek_Latheef_Resume.pdf"
            download="Shafeek_Latheef_Resume.pdf"
            onClick={() => playRetroSound('click')}
            className="retro-btn px-2.5 py-0.5 text-xs font-bold flex items-center gap-1 bg-[#FFFFE0] hover:bg-white text-black"
          >
            <PixelIcon name="download" size={13} />
            <span>Download PDF</span>
          </a>

          <button
            type="button"
            onClick={handlePrint}
            className="retro-btn px-2.5 py-0.5 text-xs font-bold flex items-center gap-1 bg-[#D4D0C8] hover:bg-white text-black"
          >
            <PixelIcon name="document" size={13} />
            <span>Print ATS</span>
          </button>
        </div>

        <span className="text-[10px] text-gray-700">
          Updated: 2026
        </span>
      </div>

      {/* Sheet Simulation */}
      <div className="bg-white text-black p-4 font-sans shadow-lg max-h-[300px] overflow-y-auto border border-[#333333] select-text text-xs">
        {/* Header */}
        <div className="border-b-2 border-black pb-2 mb-3">
          <h1 className="text-lg font-bold tracking-tight text-black">
            {resumeData.personalInfo.name}
          </h1>
          <div className="text-xs font-semibold text-gray-800">
            {resumeData.personalInfo.title}
          </div>
          <div className="text-[11px] text-gray-600 mt-0.5 flex flex-wrap gap-x-2">
            <span>{resumeData.personalInfo.location}</span>
            <span>•</span>
            <span>{resumeData.personalInfo.email}</span>
            <span>•</span>
            <span>{resumeData.personalInfo.phone}</span>
          </div>
        </div>

        {/* Education */}
        <div className="mb-3">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-gray-300 pb-0.5 mb-1">
            Education
          </h2>
          {resumeData.educations.map((edu, idx) => (
            <div key={idx} className="text-[11px] mb-1.5">
              <div className="flex justify-between font-bold text-gray-900">
                <span>{edu.degree}</span>
                <span className="text-gray-600">{edu.period}</span>
              </div>
              <div className="text-gray-700">{edu.institution} — {edu.location} ({edu.grade})</div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-3">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-gray-300 pb-0.5 mb-1">
            Featured Projects
          </h2>
          {resumeData.projects.map((proj, idx) => (
            <div key={idx} className="text-[11px] mb-2">
              <div className="flex justify-between font-bold text-gray-900">
                <span>{proj.title}</span>
                <span className="text-gray-600">{proj.period}</span>
              </div>
              <div className="text-[10px] text-gray-600 font-mono">Tech: {proj.technologies}</div>
              <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-gray-800 text-[10px]">
                {proj.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
};
