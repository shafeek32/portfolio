import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

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
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    // Generate clean text-based or printable resume
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-background-secondary border border-border-strong rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-background-tertiary/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Shafeek Latheef — Resume</h3>
                  <p className="text-xs text-text-secondary">Software Engineer • Full-Stack & AI Systems</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-background bg-accent-cyan hover:bg-accent-cyan-light rounded-lg transition-all shadow-glow-cyan"
                  title="Print / Save as PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download / Print</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Resume Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-text-secondary">
              {/* Header Info */}
              <div className="border-b border-border-subtle pb-6">
                <h1 className="text-2xl font-bold text-text-primary mb-1">Shafeek Latheef</h1>
                <p className="text-accent-cyan font-medium mb-3">Software Engineer • Full-Stack Developer • AI & Cybersecurity Enthusiast</p>
                <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">📍 Kerala, India</span>
                  <a href="mailto:shafeekl2002@gmail.com" className="flex items-center gap-1 hover:text-accent-cyan transition-colors">✉️ shafeekl2002@gmail.com</a>
                  <a href="tel:+917593936350" className="flex items-center gap-1 hover:text-accent-cyan transition-colors">📞 +91 7593936350</a>
                  <a href="https://github.com/shafeek32" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent-cyan transition-colors">
                    <ExternalLink className="w-3 h-3" /> github.com/shafeek32
                  </a>
                  <a href="https://linkedin.com/in/shafeek-latheef" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent-cyan transition-colors">
                    <ExternalLink className="w-3 h-3" /> linkedin.com/in/shafeek-latheef
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">Executive Summary</h4>
                <p className="leading-relaxed text-text-secondary">
                  Computer Science graduate from APJ Abdul Kalam Technological University with demonstrated experience designing and deploying full-stack web applications, AI-powered document extraction pipelines, and automated developer tools. Passionate about software craftsmanship, clean code architecture, system performance, and web security.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-3">Technical Proficiencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-background-tertiary border border-border-subtle">
                    <span className="text-xs font-bold text-text-primary block mb-1">Languages & Core:</span>
                    <span className="text-xs text-text-muted">Python, JavaScript, TypeScript, Java, C, C++, SQL, HTML5, CSS3</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-tertiary border border-border-subtle">
                    <span className="text-xs font-bold text-text-primary block mb-1">Frontend & Frameworks:</span>
                    <span className="text-xs text-text-muted">React, Tailwind CSS, Vite, Framer Motion, Responsive UI Design</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-tertiary border border-border-subtle">
                    <span className="text-xs font-bold text-text-primary block mb-1">Backend & Databases:</span>
                    <span className="text-xs text-text-muted">FastAPI, Node.js, Express.js, PostgreSQL, MongoDB, Supabase, REST APIs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-tertiary border border-border-subtle">
                    <span className="text-xs font-bold text-text-primary block mb-1">AI & Cybersecurity:</span>
                    <span className="text-xs text-text-muted">LangGraph, LangChain, Groq, OCR, Linux Administration, OWASP Top 10, Bash</span>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-3">Highlighted Engineering Projects</h4>
                <div className="space-y-4">
                  <div className="p-3.5 rounded-lg bg-background-tertiary/60 border border-border-subtle">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-text-primary text-sm">AI Customer Complaint Management System</span>
                      <span className="text-xs text-accent-cyan">FastAPI • LangGraph • Groq • React</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2">
                      Engineered an automated grievance platform with multimodal document OCR, structured LLM extraction, and multi-agent LangGraph triage workflows.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-background-tertiary/60 border border-border-subtle">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-text-primary text-sm">Decision Companion System</span>
                      <span className="text-xs text-accent-cyan">React • Node.js • Express • MongoDB • Recharts</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2">
                      Implemented a multi-criteria Decision Support System utilizing a Weighted Sum Model (WSM) for travel destination analytics.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-background-tertiary/60 border border-border-subtle">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-text-primary text-sm">ArivNxt (Live Project)</span>
                      <span className="text-xs text-accent-cyan">React • TypeScript • Vite • Tailwind</span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2">
                      Modern educational platform engineered with reusable React component architecture and student-focused UI/UX.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">Education</h4>
                  <p className="font-semibold text-text-primary text-sm">B.Tech in Computer Science & Engg.</p>
                  <p className="text-xs text-text-secondary">APJ Abdul Kalam Technological University</p>
                  <p className="text-xs text-text-muted">2020 - 2024 • Kerala, India</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">Certifications</h4>
                  <p className="font-semibold text-text-primary text-sm">Python Pro Bootcamp — Udemy</p>
                  <p className="font-semibold text-text-primary text-sm mt-1">Full Stack Web Development — Udemy</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-border-subtle bg-background-tertiary/50 flex justify-between items-center text-xs text-text-muted">
              <span>Open to Software Engineering & Developer roles</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg hover:bg-white/5 text-text-secondary hover:text-text-primary transition-colors"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
