import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Clock, Activity } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-8 px-3 sm:px-6 lg:px-12 relative z-10 font-mono">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="retro-window-frame overflow-hidden shadow-2xl"
        >
          {/* Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2 truncate">
              <Clock className="w-4 h-4 text-white inline shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                Journey_Event_Log.log — [System History & Chronological Milestones]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Event Log Menu & Filter Bar */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
            <div className="flex items-center gap-3">
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>L</u>og</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>V</u>iew</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ilter</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>xport</span>
            </div>
            <div className="text-[11px] text-gray-700 hidden sm:block">
              Event Log: System_Timeline_2022_2026.evtx
            </div>
          </div>

          {/* Body: Chronological Event Log Entries */}
          <div className="p-4 sm:p-7 bg-[#C0C0C0] space-y-4">
            <div className="space-y-3 sm:space-y-4">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="retro-inset p-4 sm:p-5 bg-[#FFFFFA] space-y-3 hover:border-[#000080] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-gray-200 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#000080] text-white text-[10px]">
                        EVENT_0{index + 1}
                      </span>
                      <span className="text-black font-bold text-sm flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#000080]" />
                        {item.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-xs">
                      <span className="font-bold text-black">@{item.company}</span>
                      <span className="text-[#000080] font-bold bg-[#E0E8FF] px-2 py-0.5 border border-[#80A0FF]">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#222222] font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-1 text-xs text-[#222222] font-sans pt-1">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#000080] font-mono font-bold">►</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#EAEAEA] border border-[#B0B0B0] text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Log Entries: {experiences.length} Recorded</span>
            <span>Integrity: Clean (0 Errors)</span>
            <span>Status: Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
