import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
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
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Ensure page always starts at the very top on initial load / refresh
  useEffect(() => {
    // Disable browser automatic scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Guarantee top position when loading finishes and homepage reveals
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <>
      {/* Initial Animated Developer Splash / Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-background text-text-primary overflow-x-hidden">
        {/* Living Digital Network Background Layer */}
        <BackgroundNetwork />

        {/* Navigation */}
        <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />

        {/* Main Page Content */}
        <motion.main
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects onViewProjectDetails={(project) => setSelectedProject(project)} />
          <Experience />
          <Certifications />
          <Cybersecurity onResumeClick={() => setIsResumeModalOpen(true)} />
          <GithubActivity />
          <Contact />
        </motion.main>

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
    </>
  );
}

export default App;

