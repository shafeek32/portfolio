import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Server, Cpu } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const pillars = [
    {
      number: 'MOD_01',
      icon: <Layers className="w-5 h-5 text-[#000080]" />,
      title: 'Full-Stack Applications',
      tag: 'REACT • TS • NEXT.JS',
      description: 'Modern, high-performance web applications built across intuitive frontend UI, backend microservices, and persistent database layers.'
    },
    {
      number: 'MOD_02',
      icon: <Sparkles className="w-5 h-5 text-[#000080]" />,
      title: 'AI-Powered Products',
      tag: 'LANGGRAPH • GROQ • FASTAPI',
      description: 'Applications integrating LLMs, stateful agentic workflows (LangGraph), automated OCR document ingestion, and intelligent pipeline orchestration.'
    },
    {
      number: 'MOD_03',
      icon: <Server className="w-5 h-5 text-[#000080]" />,
      title: 'Backend Systems & APIs',
      tag: 'PYTHON • NODE • POSTGRESQL',
      description: 'High-throughput asynchronous APIs, relational & document database schemas, server-side authentication, and microservice business logic.'
    }
  ];

  return (
    <section className="py-12 px-3 sm:px-6 lg:px-12 relative z-10">
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
              <Cpu className="w-4 h-4 text-white inline" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                02_Core_Disciplines.sys — [System Architecture Modules]
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-4 sm:p-8 bg-[#C0C0C0] space-y-4">
            <div className="text-xs text-black font-bold mb-2 flex items-center justify-between pb-2 border-b border-[#808080]">
              <span>ACTIVE SYSTEM DISCIPLINES & EXPERTISE DOMAINS</span>
              <span className="text-gray-600 text-[10px]">TOTAL: 3 MODULES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="retro-inset p-5 bg-[#FFFFFA] flex flex-col justify-between space-y-4 hover:border-[#000080] transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-3">
                      <div className="p-1.5 bg-[#E8E8E8] border border-[#A0A0A0]">
                        {pillar.icon}
                      </div>
                      <span className="text-[11px] font-bold text-[#000080] bg-[#E0E8FF] px-2 py-0.5 border border-[#80A0FF]">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-black group-hover:text-[#000080] transition-colors mb-1 font-mono">
                      {pillar.title}
                    </h3>

                    <div className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-3">
                      [{pillar.tag}]
                    </div>

                    <p className="text-xs text-[#333333] font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-[10px] text-emerald-800 font-bold">
                    <span>● STATUS: OPERATIONAL</span>
                    <span>v3.0</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>3 Modules Active</span>
            <span>Subsystems: OK</span>
            <span>Load: Normal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
