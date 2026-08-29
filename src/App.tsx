import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { DesktopOS } from './components/DesktopOS';
import { playRetroSound } from './utils/sound';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    playRetroSound('startup');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && <DesktopOS />}
    </>
  );
}

export default App;
