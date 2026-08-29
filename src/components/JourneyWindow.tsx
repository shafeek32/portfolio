import React from 'react';
import { RetroWindow } from './RetroWindow';
import { PixelIcon } from './PixelIcon';

interface JourneyWindowProps {
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

interface PostLog {
  id: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
}

const POSTS: PostLog[] = [
  {
    id: 'post-1',
    date: 'April 17, 2026',
    title: 'Building Stateful Agent Workflows with LangGraph and FastAPI',
    summary: 'Architecting deterministic multi-agent state machines, OCR schema parsing, and asynchronous document triage pipelines.',
    tag: 'AI & Architecture',
  },
  {
    id: 'post-2',
    date: 'March 6, 2026',
    title: 'Engineering WebGenie: AST-Driven Code Generation in React',
    summary: 'How converting graphical tree schemas into modular Express controllers and React UI components slashed boilerplate overhead.',
    tag: 'Systems',
  },
  {
    id: 'post-3',
    date: 'January 21, 2026',
    title: 'Multi-Attribute Decision Support with Weighted Sum Models',
    summary: 'Normalizing disparate metrics (cost vs safety vs weather) into responsive radar and matrix visualizations with Recharts.',
    tag: 'Algorithms',
  },
  {
    id: 'post-4',
    date: 'August 14, 2025',
    title: 'Journey Log: From Computer Science Foundations to Full-Stack Shipments',
    summary: 'Mastering data structures, database normalization, asynchronous Node.js microservices, and Linux systems.',
    tag: 'Journey',
  },
];

export const JourneyWindow: React.FC<JourneyWindowProps> = ({
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
      id="journey"
      title="Featured_Posts.log"
      icon="document"
      isActive={isActive}
      isMinimized={isMinimized}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
      menuItems={['File', 'Edit', 'Format', 'View', 'Help']}
      statusBarLeft={`${POSTS.length} posts`}
      statusBarRight={<span>Updated</span>}
      style={style}
      className={`w-full max-w-md shadow-2xl ${className}`}
      bodyClassName="p-3 sm:p-4 bg-[#C0C0C0]"
      dragConstraintsRef={dragConstraintsRef}
    >
      <div className="retro-inset-cream p-2.5 font-mono text-xs text-black space-y-2 max-h-[260px] overflow-y-auto">
        {POSTS.map((post) => (
          <div
            key={post.id}
            className="p-2 bg-white border border-[#B8B8B8] hover:border-[#000080] transition-colors"
          >
            <div className="flex items-start gap-2">
              <div className="shrink-0 mt-0.5">
                <PixelIcon name="document" size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[9px] text-gray-500 mb-0.5">
                  <span className="font-bold text-[#1560bd]">{post.date}</span>
                  <span className="px-1 py-0.2 bg-gray-100 border border-gray-300 font-bold">
                    {post.tag}
                  </span>
                </div>
                <div className="font-bold text-[11px] text-black leading-snug">
                  {post.title}
                </div>
                <p className="text-[10px] text-[#444444] mt-0.5 leading-normal">
                  {post.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
};
