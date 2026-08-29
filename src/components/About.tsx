import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Code2, Sparkles, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-8 px-3 sm:px-6 lg:px-12 relative z-10 font-mono">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="retro-window-frame overflow-hidden shadow-2xl"
        >
          {/* Notepad Titlebar */}
          <div className="retro-titlebar">
            <div className="flex items-center gap-2 truncate">
              <FileText className="w-4 h-4 text-white inline shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                About_Shafeek.txt — Notepad [WordWrap: ON]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Notepad Menu Bar */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
            <div className="flex items-center gap-3">
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ile</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>dit</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">F<u>o</u>rmat</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>V</u>iew</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>H</u>elp</span>
            </div>
            <div className="text-[11px] text-gray-700 hidden sm:block">
              Encoding: UTF-8 • Lines: 42
            </div>
          </div>

          {/* Notepad Body Canvas */}
          <div className="p-4 sm:p-7 bg-[#C0C0C0] space-y-4">
            {/* White Document Paper Inset */}
            <div className="retro-inset p-5 sm:p-8 bg-white text-black space-y-4 font-mono">
              <div className="text-xs font-bold text-[#000080] pb-2 border-b border-gray-200 uppercase flex items-center justify-between">
                <span>[DOCUMENT: SHAFEEK_PROFILE_STATEMENT]</span>
                <span className="text-gray-500 text-[10px]">READ-ONLY</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#111111] leading-relaxed font-sans">
                <p>
                  Hello, I'm <strong className="font-bold text-black font-mono">Shafeek Latheef</strong>, a software engineer with a strong focus on building resilient full-stack web applications, automated agentic pipelines, and scalable backend infrastructure.
                </p>

                <p>
                  I enjoy solving practical engineering challenges across the entire product lifecycle—from architecting clean frontend state machines in <strong className="font-mono text-black font-semibold">React & TypeScript</strong> to implementing performant backend APIs in <strong className="font-mono text-black font-semibold">FastAPI, Node.js, and PostgreSQL</strong>.
                </p>

                <p>
                  Currently pursuing my <strong className="font-bold text-black">B.Tech in Computer Science and Engineering (2022–2026)</strong> at APJ Abdul Kalam Technological University, I continuously explore developer ergonomics, AST-driven tooling, and multi-agent workflow systems.
                </p>
              </div>

              {/* 4 Metadata Cards Inset */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-gray-200">
                <div className="p-3 bg-[#F5F5F5] border border-[#D0D0D0] flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-[#000080] font-bold text-xs mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>EDUCATION</span>
                  </div>
                  <div className="text-xs font-bold text-black">B.Tech CSE (2022-26)</div>
                  <div className="text-[11px] text-gray-600 font-sans mt-0.5">APJ Abdul Kalam Tech Univ</div>
                </div>

                <div className="p-3 bg-[#F5F5F5] border border-[#D0D0D0] flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-[#000080] font-bold text-xs mb-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>DISCIPLINE</span>
                  </div>
                  <div className="text-xs font-bold text-black">Full-Stack Engineering</div>
                  <div className="text-[11px] text-gray-600 font-sans mt-0.5">Modern Web Applications</div>
                </div>

                <div className="p-3 bg-[#F5F5F5] border border-[#D0D0D0] flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-[#000080] font-bold text-xs mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>INTELLIGENCE</span>
                  </div>
                  <div className="text-xs font-bold text-black">AI & Agent Systems</div>
                  <div className="text-[11px] text-gray-600 font-sans mt-0.5">LangGraph & Workflows</div>
                </div>

                <div className="p-3 bg-[#F5F5F5] border border-[#D0D0D0] flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-[#000080] font-bold text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>LOCATION</span>
                  </div>
                  <div className="text-xs font-bold text-black">Kerala, India</div>
                  <div className="text-[11px] text-gray-600 font-sans mt-0.5">Open to Global Remote</div>
                </div>
              </div>
            </div>
          </div>

          {/* Notepad Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Ln 1, Col 1</span>
            <span>100%</span>
            <span>Windows (CRLF)</span>
            <span>UTF-8</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
