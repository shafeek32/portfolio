import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ModernPortfolio } from './components/modern/ModernPortfolio';
import { DesktopOS } from './components/DesktopOS';
import { playRetroSound } from './utils/sound';

export function App() {
  const [viewMode, setViewMode] = useState<'portfolio' | 'fullscreen-os'>('portfolio');
  const [isBooting, setIsBooting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Lock body scroll when in fullscreen OS mode
  useEffect(() => {
    if (viewMode === 'fullscreen-os') {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [viewMode]);

  const handleLaunchOS = () => {
    setIsBooting(true);
    playRetroSound('startup');
    setTimeout(() => {
      setViewMode('fullscreen-os');
      setIsBooting(false);
    }, 450);
  };

  const handleExitOS = () => {
    playRetroSound('close');
    setViewMode('portfolio');
  };

  return (
    <>
      {/* Quick CRT Boot Flash when entering Fullscreen OS */}
      <AnimatePresence>
        {isBooting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-emerald-400 select-none p-6 text-center"
          >
            <div className="w-12 h-12 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm tracking-widest font-bold">BOOTING WORKSTATION OS v3.0...</p>
            <p className="text-xs text-slate-500 mt-2">INITIALIZING GRAPHICAL ENVIRONMENT</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Portfolio Page (Always renders unless in Fullscreen OS mode) */}
      {viewMode === 'portfolio' ? (
        <ModernPortfolio onLaunchOS={handleLaunchOS} />
      ) : (
        <DesktopOS
          isEmbedded={false}
          onExitFullscreen={handleExitOS}
          initialWindowsOpen={true}
        />
      )}
    </>
  );
}

export default App;
