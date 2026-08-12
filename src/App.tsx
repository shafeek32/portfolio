import { useState } from 'react';
import { BackgroundNetwork } from './components/BackgroundNetwork';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Cybersecurity } from './components/Cybersecurity';
import { GithubActivity } from './components/GithubActivity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-x-hidden">
      {/* Living Digital Network Background Layer */}
      <BackgroundNetwork />

      {/* Navigation */}
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects onViewProjectDetails={(project) => setSelectedProject(project)} />
        <Experience />
        <Certifications />
        <Cybersecurity onResumeClick={() => setIsResumeModalOpen(true)} />
        <GithubActivity />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
