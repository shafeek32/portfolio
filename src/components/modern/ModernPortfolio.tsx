import React, { useState } from 'react';
import { ModernNavbar } from './ModernNavbar';
import { ModernHero } from './ModernHero';
import { ModernProjects } from './ModernProjects';
import { ModernExperience } from './ModernExperience';
import { ModernSkills } from './ModernSkills';
import { ModernCertifications } from './ModernCertifications';
import { ModernContact } from './ModernContact';
import { ModernFooter } from './ModernFooter';
import { CyberBackground } from './CyberBackground';
import { ProjectModal } from '../ProjectModal';
import { ResumeModal } from '../ResumeModal';
import { Project } from '../../types';

interface ModernPortfolioProps {
  onLaunchOS: () => void;
}

export const ModernPortfolio: React.FC<ModernPortfolioProps> = ({ onLaunchOS }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#050711] text-slate-100 font-sans selection:bg-[#ff007f] selection:text-white relative">
      {/* Cyberpunk Interactive Particle Network & Ambient Glows */}
      <CyberBackground />

      {/* Modern Sticky Navigation */}
      <ModernNavbar
        onLaunchOS={onLaunchOS}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Hero Section with Interactive Computer Monitor */}
      <main className="relative z-10">
        <ModernHero
          onLaunchOS={onLaunchOS}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        {/* Featured Projects with Number Hunt highlight */}
        <ModernProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Experience & Engineering Journey */}
        <ModernExperience />

        {/* Skills & Architecture Stack */}
        <ModernSkills />

        {/* Verified Certifications */}
        <ModernCertifications />

        {/* Interactive Contact Form & Details */}
        <ModernContact />
      </main>

      {/* Modern Tech Footer */}
      <ModernFooter onLaunchOS={onLaunchOS} />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};
