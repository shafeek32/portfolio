import React from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon, PixelIconName } from './PixelIcon';

interface SkillsWindowProps {
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

interface SkillGroup {
  id: string;
  name: string;
  icon: PixelIconName;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: 'code',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++', 'SQL'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'monitor',
    skills: ['React', 'Tailwind CSS', 'Vite', 'HTML', 'CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Spring Boot', 'REST APIs'],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'database',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'MySQL'],
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: 'wrench',
    skills: ['Git', 'Docker', 'Linux CLI', 'VS Code', 'Postman'],
  },
  {
    id: 'other',
    name: 'AI & Cloud',
    icon: 'star',
    skills: ['LangGraph', 'LangChain', 'LLMs', 'OCR Vision', 'Vercel'],
  },
];

export const SkillsWindow: React.FC<SkillsWindowProps> = ({
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
      id="skills"
      title="Skills_Inventory.sys"
      icon="gear"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'View', 'Help']}
      statusBarLeft="6 categories"
      statusBarRight={<span>Loaded</span>}
      style={style}
      className={`w-full max-w-xl shadow-2xl ${className}`}
      bodyClassName="p-3 sm:p-4 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      {/* Cream Inset Container */}
      <div className="retro-inset-cream p-3 sm:p-4 font-mono">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="flex items-start gap-2 p-1.5 bg-white/70 border border-[#D0D0D0] hover:bg-white transition-colors"
            >
              <div className="shrink-0 mt-0.5">
                <PixelIcon name={group.icon} size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#000080] uppercase tracking-wide">
                  {group.name}
                </div>
                <div className="text-[11px] text-[#333333] leading-tight mt-0.5">
                  {group.skills.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
};
