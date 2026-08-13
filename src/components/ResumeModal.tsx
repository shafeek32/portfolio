import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, Mail, Phone, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';
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
      // 1. Fetch physical PDF as blob and trigger true instant download
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
    // 2. Fallback to clean ATS print engine
    printResumeDocument();
  };

  const handlePrint = () => {
    printResumeDocument();
  };

  const { personalInfo, educations, projects, skills, certifications } = resumeData;

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="resume-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md cursor-pointer modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0e1524] border border-border-strong rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-border-subtle bg-[#141d30]/80 backdrop-blur-md shrink-0 no-print">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-text-primary">
                    {personalInfo.name} &mdash; Official Resume
                  </h3>
                  <p className="text-[11px] text-text-secondary hidden sm:block">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 modal-header-actions">
                <button
                  onClick={handleDownloadPdf}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-background bg-accent-cyan hover:bg-accent-cyan-light rounded-lg transition-all shadow-glow-cyan"
                  title="Download / Save PDF (Shafeek_Latheef_Resume.pdf)"
                  aria-label="Download PDF Resume"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary bg-background-elevated hover:bg-white/10 border border-border-subtle rounded-lg transition-colors"
                  title="Print Resume"
                  aria-label="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors ml-1"
                  aria-label="Close resume preview modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Resume Sheet */}
            <div
              id="printable-resume-container"
              className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white text-[#111827] space-y-5 font-sans"
              style={{ colorScheme: 'light' }}
            >
              {/* Header */}
              <div className="text-center pb-2">
                <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-black font-serif mb-0.5">
                  {personalInfo.name}
                </h1>
                <p className="text-xs italic text-gray-700 mb-2">
                  {personalInfo.title}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-800">
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <Phone className="w-3 h-3 text-gray-700" />
                    <span>{personalInfo.phone}</span>
                  </a>

                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <Mail className="w-3 h-3 text-gray-700" />
                    <span>{personalInfo.email}</span>
                  </a>

                  <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <Github className="w-3 h-3 text-gray-700" />
                    <span>{personalInfo.githubLabel}</span>
                  </a>

                  {personalInfo.linkedinUrl && (
                    <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-3 h-3 text-gray-700" />
                      <span>{personalInfo.linkedinLabel || 'LinkedIn'}</span>
                    </a>
                  )}

                  <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
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
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5">
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
                      <div className="sm:text-right text-[11px] sm:text-xs shrink-0">
                        <div className="italic text-gray-800">{edu.period}</div>
                        <div className="italic font-medium text-gray-700">{edu.grade}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECTS */}
              <div>
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5">
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
                        <div className="italic text-gray-700 text-[11px] sm:text-xs shrink-0">
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
                        <strong className="text-black">Technologies / Tools Used :</strong>{' '}
                        <span className="italic text-gray-800">{proj.technologies}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS */}
              <div>
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2.5">
                  SKILLS
                </h2>
                <div className="space-y-1 text-xs text-gray-900 leading-relaxed">
                  <div>
                    <strong className="inline-block w-44 sm:w-52 text-black">Databases :</strong>{' '}
                    <span>{skills.databases.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="inline-block w-44 sm:w-52 text-black">Frameworks & Libraries :</strong>{' '}
                    <span>{skills.frameworks.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="inline-block w-44 sm:w-52 text-black">Languages :</strong>{' '}
                    <span>{skills.languages.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="inline-block w-44 sm:w-52 text-black">Programming Languages :</strong>{' '}
                    <span>{skills.programmingLanguages.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="inline-block w-44 sm:w-52 text-black">Soft Skills :</strong>{' '}
                    <span>{skills.softSkills.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="inline-block w-44 sm:w-52 text-black">Tools & Platforms :</strong>{' '}
                    <span>{skills.toolsPlatforms.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div>
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                  CERTIFICATIONS
                </h2>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-900">
                  {certifications.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="px-4 sm:px-6 py-3 border-t border-border-subtle bg-[#141d30]/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-text-muted shrink-0 no-print">
              <span>Official resume of Shafeek Latheef</span>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handleDownloadPdf}
                  className="px-3.5 py-1.5 text-xs font-semibold text-accent-cyan hover:bg-accent-cyan/10 border border-accent-cyan/20 rounded-lg transition-colors"
                >
                  Download PDF
                </button>
                <button
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-text-secondary hover:text-text-primary transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
