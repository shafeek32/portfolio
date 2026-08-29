import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HardDrive, CheckSquare, Layers, Cpu, Database, Sparkles, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'fullstack' | 'ai' | 'tools'>('all');

  const techCategories = [
    {
      id: 'languages',
      number: 'DEV_01',
      group: 'fullstack',
      label: 'LANGUAGES & RUNTIMES',
      icon: <Terminal className="w-3.5 h-3.5 text-[#000080]" />,
      items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python', 'C++', 'SQL']
    },
    {
      id: 'frontend',
      number: 'DEV_02',
      group: 'fullstack',
      label: 'FRONTEND ARCHITECTURE',
      icon: <Layers className="w-3.5 h-3.5 text-[#000080]" />,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 / Semantic UI', 'Framer Motion']
    },
    {
      id: 'backend',
      number: 'DEV_03',
      group: 'fullstack',
      label: 'BACKEND SERVICES & APIS',
      icon: <Cpu className="w-3.5 h-3.5 text-[#000080]" />,
      items: ['Node.js', 'Express.js', 'Python FastAPI', 'Spring Boot', 'REST APIs', 'JWT Auth']
    },
    {
      id: 'database',
      number: 'DEV_04',
      group: 'fullstack',
      label: 'DATABASES & STORAGE',
      icon: <Database className="w-3.5 h-3.5 text-[#000080]" />,
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Relational Schema Design']
    },
    {
      id: 'ai',
      number: 'DEV_05',
      group: 'ai',
      label: 'AI & AGENT WORKFLOWS',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#000080]" />,
      items: ['LangGraph Workflows', 'LangChain', 'Groq Llama 3', 'OCR Pipelines (Tesseract)', 'Document Ingestion']
    },
    {
      id: 'tools',
      number: 'DEV_06',
      group: 'tools',
      label: 'DEVOPS, TOOLS & ENVIRONMENT',
      icon: <HardDrive className="w-3.5 h-3.5 text-[#000080]" />,
      items: ['Git & GitHub', 'Docker', 'Linux CLI / Bash', 'VS Code', 'Postman', 'Vercel']
    }
  ];

  const filteredCategories = techCategories.filter((cat) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'fullstack') return cat.group === 'fullstack';
    if (activeTab === 'ai') return cat.group === 'ai';
    if (activeTab === 'tools') return cat.group === 'tools';
    return true;
  });

  return (
    <section id="skills" className="py-8 px-3 sm:px-6 lg:px-12 relative z-10 font-mono">
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
              <HardDrive className="w-4 h-4 text-white inline shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                System_Properties.exe — [Device Manager & Driver Inventory]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* System Properties Tabs */}
          <div className="px-3 pt-2 pb-0 bg-[#C0C0C0] border-b border-[#808080] flex flex-wrap items-center gap-1 text-xs select-none border-t border-white">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 font-bold ${
                activeTab === 'all'
                  ? 'bg-[#FFFFFF] border-t-2 border-l-2 border-r-2 border-[#808080] text-black shadow-sm'
                  : 'bg-[#C0C0C0] text-gray-700 hover:text-black'
              }`}
            >
              [ General Drivers ]
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-3 py-1 font-bold ${
                activeTab === 'fullstack'
                  ? 'bg-[#FFFFFF] border-t-2 border-l-2 border-r-2 border-[#808080] text-black shadow-sm'
                  : 'bg-[#C0C0C0] text-gray-700 hover:text-black'
              }`}
            >
              [ Full-Stack Stack ]
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1 font-bold ${
                activeTab === 'ai'
                  ? 'bg-[#FFFFFF] border-t-2 border-l-2 border-r-2 border-[#808080] text-black shadow-sm'
                  : 'bg-[#C0C0C0] text-gray-700 hover:text-black'
              }`}
            >
              [ AI & Agent Systems ]
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-3 py-1 font-bold ${
                activeTab === 'tools'
                  ? 'bg-[#FFFFFF] border-t-2 border-l-2 border-r-2 border-[#808080] text-black shadow-sm'
                  : 'bg-[#C0C0C0] text-gray-700 hover:text-black'
              }`}
            >
              [ Tools & Environment ]
            </button>
          </div>

          {/* Body: Technical Inventory Grid */}
          <div className="p-4 sm:p-7 bg-[#C0C0C0] space-y-4">
            <div className="text-xs text-black font-bold flex items-center justify-between pb-1 border-b border-[#808080]">
              <span>DEVICE DRIVER & TECHNICAL COMPONENT TREE:</span>
              <span className="text-gray-600 text-[10px]">ALL SYSTEMS OPERATIONAL</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="retro-inset p-4 bg-[#FFFFFA] flex flex-col justify-between hover:border-[#000080] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-gray-200 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-black truncate">
                        {category.icon}
                        <span className="text-[11px] truncate uppercase">{category.label}</span>
                      </div>
                      <span className="text-[#000080] font-bold text-[10px]">[{category.number}]</span>
                    </div>

                    <ul className="space-y-1.5">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs font-mono text-[#222222] flex items-center gap-2"
                        >
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-200 text-[10px] text-gray-500 font-bold flex items-center justify-between">
                    <span>DRIVER: VERIFIED</span>
                    <span className="text-emerald-800">OK</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>Drivers: {techCategories.reduce((acc, c) => acc + c.items.length, 0)} Active</span>
            <span>Driver Signature: Verified (SHA-256)</span>
            <span>Status: Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
