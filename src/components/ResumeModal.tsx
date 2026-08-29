import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Printer, FileText, Mail, Phone, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';
import { resumeData } from '../data/resume';
import { printResumeDocument } from '../utils/resumePrint';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleDownloadPdf = async () => {
    try {
      for (const path of ['/Shafeek_Latheef_Resume.pdf', '/shafeek_resume.pdf', '/resume.pdf']) {
        const res = await fetch(path);
        if (res.ok) {
          const blob = await res.blob();
          const blobUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'Shafeek_Latheef_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => window.URL.revokeObjectURL(blobUrl), 2000);
          return;
        }
      }
    } catch (e) {
      console.warn('Direct PDF download note:', e);
    }
    printResumeDocument();
  };

  const handlePrint = () => {
    printResumeDocument();
  };

  const { personalInfo, educations, projects, skills, certifications } = resumeData;

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="resume-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto font-mono">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-none cursor-pointer modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col retro-window-frame overflow-hidden z-10 my-auto shadow-2xl"
          >
            {/* Titlebar */}
            <div className="retro-titlebar">
              <div className="flex items-center gap-2 truncate">
                <FileText className="w-4 h-4 text-white inline" />
                <span className="text-xs sm:text-sm font-bold tracking-wide truncate">
                  Shafeek_Resume_Viewer.exe — [{personalInfo.name}]
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={onClose} className="retro-titlebar-btn bg-[#C0C0C0] text-red-700 font-bold" title="Close">✕</button>
              </div>
            </div>

            {/* Menu & Actions */}
            <div className="px-3 py-1.5 bg-[#C0C0C0] border-b border-[#808080] flex items-center justify-between text-xs text-black select-none border-t border-white">
              <div className="flex items-center gap-3">
                <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>F</u>ile</span>
                <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>P</u>rint</span>
                <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer"><u>V</u>iew</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPdf}
                  className="retro-btn px-2.5 py-1 text-xs font-bold uppercase flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black"
                >
                  <Download className="w-3.5 h-3.5 text-[#000080]" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="retro-btn px-2.5 py-1 text-xs font-bold uppercase hidden sm:flex items-center gap-1.5 bg-[#D4D0C8] hover:bg-[#E0E0E0] text-black"
                >
                  <Printer className="w-3.5 h-3.5 text-black" />
                  <span>Print</span>
                </button>
              </div>
            </div>

            {/* Scrollable Document Inset */}
            <div className="p-3 bg-[#C0C0C0] overflow-y-auto flex-1">
              <div
                id="printable-resume-container"
                className="retro-inset p-6 sm:p-8 bg-white text-[#111827] space-y-5 font-sans"
                style={{ colorScheme: 'light' }}
              >
                {/* Header */}
                <div className="text-center pb-2 border-b border-gray-300">
                  <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-black font-serif mb-0.5">
                    {personalInfo.name}
                  </h1>
                  <p className="text-xs italic text-gray-700 mb-2">
                    {personalInfo.title}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-800 font-mono">
                    <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1 hover:underline">
                      <Phone className="w-3 h-3 text-gray-700" />
                      <span>{personalInfo.phone}</span>
                    </a>

                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline">
                      <Mail className="w-3 h-3 text-gray-700" />
                      <span>{personalInfo.email}</span>
                    </a>

                    <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                      <Github className="w-3 h-3 text-gray-700" />
                      <span>{personalInfo.githubLabel}</span>
                    </a>

                    {personalInfo.linkedinUrl && (
                      <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                        <Linkedin className="w-3 h-3 text-gray-700" />
                        <span>{personalInfo.linkedinLabel || 'LinkedIn'}</span>
                      </a>
                    )}

                    <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                      <MessageSquare className="w-3 h-3 text-gray-700" />
                      <span>{personalInfo.whatsappLabel}</span>
                    </a>

                    <span className="flex items-center gap-1 text-gray-700">
                      <MapPin className="w-3 h-3 text-gray-700" />
                      <span>{personalInfo.location}</span>
                    </span>
                  </div>
                </div>

                {/* EDUCATIONS */}
                <div>
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5 font-mono">
                    EDUCATIONS
                  </h2>
                  <div className="space-y-2 text-xs">
                    {educations.map((edu, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-0.5 sm:gap-2">
                        <div>
                          <div className="font-bold text-black text-xs sm:text-sm">
                            {edu.institution} <span className="font-normal text-gray-700">| {edu.location}</span>
                          </div>
                          <div className="italic text-gray-800">{edu.degree}</div>
                          {edu.university && (
                            <div className="text-[11px] text-gray-600">{edu.university}</div>
                          )}
                        </div>
                        <div className="sm:text-right text-[11px] sm:text-xs shrink-0 font-mono">
                          <div className="italic text-gray-800">{edu.period}</div>
                          <div className="italic font-medium text-gray-700">{edu.grade}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PROJECTS */}
                <div>
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5 font-mono">
                    PROJECTS
                  </h2>
                  <div className="space-y-3.5 text-xs">
                    {projects.map((proj, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                          <div className="font-bold text-black text-xs sm:text-sm">
                            {proj.title}
                            {proj.githubUrl && (
                              <>
                                <span className="font-normal text-gray-500 mx-1">|</span>
                                <a
                                  href={proj.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-black font-medium hover:underline text-xs"
                                >
                                  <Github className="w-3 h-3 inline" />
                                  <span>Github</span>
                                </a>
                              </>
                            )}
                          </div>
                          <div className="italic text-gray-700 text-[11px] sm:text-xs shrink-0 font-mono">
                            {proj.period}
                          </div>
                        </div>

                        <div className="italic text-gray-700 text-[11px]">
                          {proj.role}
                        </div>

                        <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-900 leading-relaxed">
                          {proj.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>

                        <div className="text-[11px] text-black pt-0.5">
                          <strong className="text-black font-mono">Technologies / Tools Used :</strong>{' '}
                          <span className="italic text-gray-800">{proj.technologies}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SKILLS */}
                <div>
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5 font-mono">
                    SKILLS
                  </h2>
                  <div className="space-y-1 text-xs text-gray-900 leading-relaxed">
                    <div>
                      <strong className="inline-block w-44 sm:w-52 text-black font-mono">Databases :</strong>{' '}
                      <span>{skills.databases.join(', ')}</span>
                    </div>
                    <div>
                      <strong className="inline-block w-44 sm:w-52 text-black font-mono">Frameworks & Libraries :</strong>{' '}
                      <span>{skills.frameworks.join(', ')}</span>
                    </div>
                    <div>
                      <strong className="inline-block w-44 sm:w-52 text-black font-mono">Languages :</strong>{' '}
                      <span>{skills.languages.join(', ')}</span>
                    </div>
                    <div>
                      <strong className="inline-block w-44 sm:w-52 text-black font-mono">Programming Languages :</strong>{' '}
                      <span>{skills.programmingLanguages.join(', ')}</span>
                    </div>
                    <div>
                      <strong className="inline-block w-44 sm:w-52 text-black font-mono">Soft Skills :</strong>{' '}
                      <span>{skills.softSkills.join(', ')}</span>
                    </div>
                    <div>
                      <strong className="inline-block w-44 sm:w-52 text-black font-mono">Tools & Platforms :</strong>{' '}
                      <span>{skills.toolsPlatforms.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* CERTIFICATIONS */}
                <div>
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2 font-mono">
                    CERTIFICATIONS
                  </h2>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-900">
                    {certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="retro-statusbar border-t border-[#808080] bg-[#C0C0C0] px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-gray-700">Document: Page 1 of 1 (A4 / ATS Format)</span>
              <button
                onClick={onClose}
                className="retro-btn px-4 py-1 text-xs font-bold uppercase"
              >
                Close Viewer [ESC]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
