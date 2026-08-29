import React from 'react';
import { motion } from 'framer-motion';

interface RetroMarqueeProps {
  items?: string[];
  speed?: number;
  reverse?: boolean;
}

const defaultItems = [
  'SHAFEEK LATHEEF',
  'SOFTWARE ENGINEER',
  'FULL-STACK ARCHITECTURE',
  'REACT & TYPESCRIPT',
  'PYTHON FASTAPI & NODE.JS',
  'LANGGRAPH AI WORKFLOWS',
  'POSTGRESQL & SUPABASE',
  'OPEN FOR 2026 ROLES',
  'KERALA, INDIA'
];

export const RetroMarquee: React.FC<RetroMarqueeProps> = ({
  items = defaultItems,
  speed = 22,
  reverse = false
}) => {
  const marqueeContent = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#FFFFCC] border-y-2 border-[#404040] py-1.5 select-none flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
      <motion.div
        className="flex items-center gap-6 whitespace-nowrap font-mono text-[11px] font-bold text-black tracking-wider"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
      >
        {marqueeContent.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0">
            <span>{item}</span>
            <span className="text-red-600 font-bold text-xs">★</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
