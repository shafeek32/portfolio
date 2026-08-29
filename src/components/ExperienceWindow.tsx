import React from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';
import { experiences } from '../data/experience';
import { certifications } from '../data/certifications';

interface ExperienceWindowProps {
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

export const ExperienceWindow: React.FC<ExperienceWindowProps> = ({
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

  return (
    <RetroWindow
      id="experience"
      title="Clients_Trusted.txt"
      icon="document"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Edit', 'View', 'Help']}
      statusBarLeft="8 items"
      statusBarRight={<span>Trusted</span>}
      style={style}
      className={`w-full max-w-md shadow-2xl ${className}`}
      bodyClassName="p-3 sm:p-4 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="retro-inset-cream p-3 sm:p-4 font-mono text-xs text-black space-y-3 max-h-[260px] overflow-y-auto">
        <div>
          <p className="text-[#333333] leading-relaxed mb-2.5">
            Proud to engineer dependable full-stack systems across academia, open source, and hackathons:
          </p>

          <div className="grid grid-cols-2 gap-1.5 mb-2.5">
            <div className="p-1.5 bg-white border border-[#A0A0A0] text-center font-bold text-[#000080] text-[11px]">
              KTU CS & Engg
            </div>
            <div className="p-1.5 bg-white border border-[#A0A0A0] text-center font-bold text-gray-800 text-[11px]">
              LangGraph Systems
            </div>
            <div className="p-1.5 bg-white border border-[#A0A0A0] text-center font-bold text-emerald-800 text-[11px]">
              Open Source
            </div>
            <div className="p-1.5 bg-white border border-[#A0A0A0] text-center font-bold text-purple-900 text-[11px]">
              Hackathons (India)
            </div>
          </div>
        </div>

        <div className="border-t border-[#B0B0B0] pt-2">
          <div className="font-bold text-[#000080] mb-1.5 flex items-center gap-1.5 text-[11px]">
            <PixelIcon name="star" size={13} />
            <span>ENGINEERING MILESTONES</span>
          </div>

          <div className="space-y-2">
            {experiences.map((exp) => (
              <div key={exp.id} className="p-2 bg-white/70 border border-[#D0D0D0]">
                <div className="flex items-center justify-between font-bold text-black text-[11px]">
                  <span>{exp.role}</span>
                  <span className="text-[10px] text-gray-500">{exp.period}</span>
                </div>
                <div className="text-[10px] text-[#000080] mt-0.5">{exp.company}</div>
                <p className="text-[10px] text-gray-700 mt-1 leading-normal">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {certifications && certifications.length > 0 && (
          <div className="border-t border-[#B0B0B0] pt-2">
            <div className="font-bold text-[#000080] mb-1.5 flex items-center gap-1.5 text-[11px]">
              <PixelIcon name="lock" size={13} />
              <span>CERTIFICATIONS</span>
            </div>
            <div className="space-y-1">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-center justify-between text-[10px] bg-white p-1 border border-gray-300">
                  <span className="font-bold text-black">{c.title}</span>
                  <span className="text-gray-500">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </RetroWindow>
  );
};
