import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp, Terminal } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-border-subtle bg-background-secondary/80 backdrop-blur-md pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8">
        
        {/* Top Tier: Identity & Navigation */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-text-primary text-base">Shafeek Latheef</span>
            </div>
            <p className="text-xs text-text-muted">
              Software Engineer • Full-Stack Developer • Cybersecurity Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shafeek32"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-cyan bg-background-elevated hover:bg-white/5 border border-border-subtle hover:border-accent-cyan/30 transition-all"
              title="GitHub: shafeek32"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/shafeek-latheef/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-cyan bg-background-elevated hover:bg-white/5 border border-border-subtle hover:border-accent-cyan/30 transition-all"
              title="LinkedIn: Shafeek Latheef"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/qr/Z73NBLC5WL7FO1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with me on WhatsApp"
              className="p-2.5 rounded-xl text-text-secondary hover:text-emerald-400 bg-background-elevated hover:bg-white/5 border border-border-subtle hover:border-emerald-500/30 transition-all"
              title="Chat with me on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:shafeekl2002@gmail.com"
              aria-label="Email Address"
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-cyan bg-background-elevated hover:bg-white/5 border border-border-subtle hover:border-accent-cyan/30 transition-all"
              title="Email: shafeekl2002@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="tel:+917593936350"
              aria-label="Phone Number"
              className="p-2.5 rounded-xl text-text-secondary hover:text-emerald-400 bg-background-elevated hover:bg-white/5 border border-border-subtle hover:border-emerald-500/30 transition-all"
              title="Call: +91 7593936350"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl text-text-secondary hover:text-accent-cyan bg-background-elevated hover:bg-white/5 border border-border-subtle hover:border-accent-cyan/30 transition-all ml-2"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Credits */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="font-mono">
            © 2026 Shafeek Latheef. All rights reserved.
          </p>

          <p className="flex items-center gap-1 font-mono text-[11px]">
            Designed & engineered with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
