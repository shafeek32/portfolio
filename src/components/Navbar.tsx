import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, FileText, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Cybersecurity', href: '#cybersecurity' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border-subtle shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-text-primary hover:text-accent-cyan transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-background-elevated border border-border-strong flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 group-hover:shadow-glow-cyan transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base group-hover:text-gradient-cyan transition-colors">
              Shafeek Latheef
            </span>
            <span className="text-[10px] text-text-muted font-mono tracking-wide">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-background-secondary/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-border-subtle shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-accent-cyan bg-accent-cyan/10 font-semibold border border-accent-cyan/20'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons (GitHub, LinkedIn, Resume) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/shafeek32"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent hover:border-border-subtle transition-all"
            title="GitHub: shafeek32"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/shafeek-latheef/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent hover:border-border-subtle transition-all"
            title="LinkedIn: Shafeek Latheef"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onResumeClick}
            className="group relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-text-primary bg-background-elevated hover:bg-accent-cyan/10 border border-border-strong hover:border-accent-cyan/40 rounded-lg transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-accent-cyan group-hover:scale-110 transition-transform" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-accent-cyan transition-colors" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onResumeClick}
            className="p-2 text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-lg"
            title="Resume"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 border border-border-subtle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background-secondary/95 backdrop-blur-2xl border-b border-border-strong px-5 py-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-accent-cyan/10 text-accent-cyan font-semibold border border-accent-cyan/20'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/shafeek32"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-text-secondary hover:text-text-primary bg-background-elevated rounded-lg border border-border-subtle"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shafeek-latheef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-text-secondary hover:text-text-primary bg-background-elevated rounded-lg border border-border-subtle"
                  title="LinkedIn: Shafeek Latheef"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-background bg-accent-cyan hover:bg-accent-cyan-light rounded-lg shadow-glow-cyan"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
