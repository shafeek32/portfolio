import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Project } from '../types';
import { Folder, ExternalLink, Github, ArrowRight, AppWindow, HardDrive, CheckSquare, Layers } from 'lucide-react';

interface ProjectsProps {
  onViewProjectDetails: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onViewProjectDetails }) => {
  const [selectedId, setSelectedId] = useState<string>(projects[0].id);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features'>('overview');

  const currentProject = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section id="projects" className="py-8 px-3 sm:px-6 lg:px-12 relative z-10 font-mono">
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
              <Folder className="w-4 h-4 text-white inline shrink-0" />
              <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                Project_Explorer.exe — [C:\Shafeek\Selected_Work\]
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="retro-titlebar-btn">_</button>
              <button className="retro-titlebar-btn">□</button>
              <button className="retro-titlebar-btn">✕</button>
            </div>
          </div>

          {/* Explorer Menu & Path Bar */}
          <div className="px-3 py-1 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
            <div className="flex items-center gap-3">
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ile</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>E</u>dit</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>V</u>iew</span>
              <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>T</u>ools</span>
            </div>
            <div className="text-[11px] text-gray-700 hidden sm:block">
              Address: C:\Shafeek\Projects\{currentProject.id}\
            </div>
          </div>

          {/* Explorer Body: 2-Pane Layout */}
          <div className="p-3 sm:p-5 bg-[#C0C0C0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
              {/* Left Sidebar: Folder / Project Tree */}
              <div className="lg:col-span-4 retro-inset p-3 bg-[#FFFFFA] flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xs font-bold text-[#000080] pb-1.5 border-b border-gray-300 uppercase flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5" />
                      <span>MY DIRECTORIES</span>
                    </span>
                    <span className="text-gray-500 text-[10px]">{projects.length} ITEMS</span>
                  </div>

                  <div className="space-y-1">
                    {projects.map((project, idx) => {
                      const isSelected = project.id === selectedId;
                      return (
                        <button
                          key={project.id}
                          onClick={() => {
                            setSelectedId(project.id);
                            setActiveTab('overview');
                          }}
                          className={`w-full text-left p-2 text-xs font-mono flex items-center gap-2 border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#000080] text-white border-[#000080] font-bold shadow-inner'
                              : 'bg-[#F5F5F0] hover:bg-[#EAEAEA] text-black border-[#D0D0D0]'
                          }`}
                        >
                          <Folder
                            className={`w-4 h-4 shrink-0 ${
                              isSelected ? 'text-yellow-300 fill-yellow-400' : 'text-yellow-600 fill-yellow-500'
                            }`}
                          />
                          <div className="truncate flex-1">
                            <div className="truncate text-xs">{project.title}</div>
                            <div className={`text-[10px] truncate ${isSelected ? 'text-blue-200' : 'text-gray-500'}`}>
                              [{project.category}]
                            </div>
                          </div>
                          <span className="text-[10px] opacity-70">0{idx + 1}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-2.5 bg-[#E8E8E8] border border-[#B0B0B0] text-[10px] text-gray-700 leading-tight">
                  Click any folder above to inspect live system architecture & documentation.
                </div>
              </div>

              {/* Right Panel: Active Project Details & Preview */}
              <div className="lg:col-span-8 retro-inset p-4 sm:p-6 bg-[#FFFFFA] flex flex-col justify-between space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Project Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-gray-200">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-[#000080] text-white text-[10px] font-bold uppercase">
                            OBJ: {currentProject.id.toUpperCase()}
                          </span>
                          <span className="text-xs text-gray-600 font-bold uppercase">
                            [{currentProject.category}]
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-black tracking-tight leading-snug">
                          {currentProject.title}
                        </h3>
                      </div>

                      {/* Launch Case Study Modal Button */}
                      <button
                        onClick={() => onViewProjectDetails(currentProject)}
                        className="retro-btn px-3 py-1.5 text-xs font-bold uppercase flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black shrink-0 shadow-sm"
                      >
                        <span>Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#000080]" />
                      </button>
                    </div>

                    {/* Screenshot Frame in Retro Window Chrome */}
                    <div
                      onClick={() => onViewProjectDetails(currentProject)}
                      className="cursor-pointer group retro-window-frame overflow-hidden bg-[#C0C0C0]"
                    >
                      <div className="px-2 py-1 bg-[#000080] text-white flex items-center justify-between text-[11px] font-bold select-none">
                        <div className="flex items-center gap-1.5 truncate">
                          <AppWindow className="w-3 h-3 text-white" />
                          <span className="truncate">{currentProject.id}_preview.bmp</span>
                        </div>
                        <span className="text-[10px] bg-[#C0C0C0] text-black px-1 leading-tight font-mono">CLICK TO EXPAND</span>
                      </div>

                      <div className="aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-black relative border-t-2 border-b-2 border-[#808080]">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Interactive Details Tabs: Overview / Architecture / Features */}
                    <div>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-0.5 text-xs select-none">
                        <button
                          onClick={() => setActiveTab('overview')}
                          className={`px-3 py-1 font-bold transition-colors ${
                            activeTab === 'overview'
                              ? 'bg-[#C0C0C0] border-t-2 border-l-2 border-r-2 border-[#FFFFFF] text-black shadow-sm'
                              : 'text-gray-600 hover:text-black'
                          }`}
                        >
                          [ 📖 Overview ]
                        </button>
                        <button
                          onClick={() => setActiveTab('architecture')}
                          className={`px-3 py-1 font-bold transition-colors ${
                            activeTab === 'architecture'
                              ? 'bg-[#C0C0C0] border-t-2 border-l-2 border-r-2 border-[#FFFFFF] text-black shadow-sm'
                              : 'text-gray-600 hover:text-black'
                          }`}
                        >
                          [ ⚙ Architecture ]
                        </button>
                        <button
                          onClick={() => setActiveTab('features')}
                          className={`px-3 py-1 font-bold transition-colors ${
                            activeTab === 'features'
                              ? 'bg-[#C0C0C0] border-t-2 border-l-2 border-r-2 border-[#FFFFFF] text-black shadow-sm'
                              : 'text-gray-600 hover:text-black'
                          }`}
                        >
                          [ 🛠 Key Capabilities ]
                        </button>
                      </div>

                      <div className="p-3 bg-[#F8F8F5] border border-t-0 border-gray-300 min-h-[90px] text-xs font-sans text-[#222222]">
                        {activeTab === 'overview' && (
                          <div className="space-y-2">
                            <p className="leading-relaxed">{currentProject.shortDescription}</p>
                            {currentProject.highlight && (
                              <div className="p-1.5 bg-[#FFFFCC] border border-[#D0D080] text-[#604000] text-[11px] font-bold font-mono">
                                ★ {currentProject.highlight}
                              </div>
                            )}
                          </div>
                        )}

                        {activeTab === 'architecture' && (
                          <p className="leading-relaxed">{currentProject.architecture}</p>
                        )}

                        {activeTab === 'features' && (
                          <ul className="space-y-1">
                            {currentProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <CheckSquare className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-bold font-mono bg-[#EAEAEA] border border-[#B0B0B0] text-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Link Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-2.5 border-t border-gray-200">
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="retro-btn px-3 py-1.5 text-xs font-bold uppercase flex items-center gap-1.5 bg-[#FFFFE0] hover:bg-white text-[#000080]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Launch Live Demo</span>
                        </a>
                      )}

                      {currentProject.githubUrl && (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="retro-btn px-3 py-1.5 text-xs font-bold uppercase flex items-center gap-1.5 bg-[#EAEAEA] hover:bg-white text-black"
                        >
                          <Github className="w-3.5 h-3.5 text-[#000080]" />
                          <span>Source Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => onViewProjectDetails(currentProject)}
                        className="retro-btn px-3 py-1.5 text-xs font-bold uppercase flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Case Study Specs</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* GitHub Callout Banner Inset */}
            <div className="retro-inset p-4 bg-[#FFFFFA] mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-[#000080] font-bold text-xs">
                  <Github className="w-4 h-4" />
                  <span>Looking for more open-source repositories & experiments?</span>
                </div>
                <p className="text-xs text-gray-600 font-sans mt-0.5">
                  Explore full repositories, architecture benchmarks, and developer utilities.
                </p>
              </div>

              <a
                href="https://github.com/shafeek32"
                target="_blank"
                rel="noreferrer"
                className="retro-btn px-3 py-1.5 text-xs font-bold uppercase flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black shrink-0"
              >
                <span>GitHub @shafeek32</span>
                <ExternalLink className="w-3 h-3 text-[#000080]" />
              </a>
            </div>
          </div>

          {/* Status Bar */}
          <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-3 py-1">
            <span>{projects.length} Objects</span>
            <span>Selected: {currentProject.title}</span>
            <span>File System: FAT32</span>
            <span>Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
