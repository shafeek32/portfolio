import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll while loader is visible
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Check prefers-reduced-motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Ensure progress is safely bounded between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, Math.round(progress)));

  // Determine current status message
  const statusMessage = useMemo(() => {
    if (clampedProgress < 20) return 'Initializing portfolio...';
    if (clampedProgress < 40) return 'Loading projects...';
    if (clampedProgress < 65) return 'Loading skills...';
    if (clampedProgress < 85) return 'Loading experience...';
    if (clampedProgress < 100) return 'Preparing portfolio...';
    return 'Welcome to my portfolio.';
  }, [clampedProgress]);

  // Compute ASCII progress bar string (total 20 segments)
  const totalBlocks = 20;
  const filledBlocksCount = Math.max(0, Math.min(totalBlocks, Math.round((clampedProgress / 100) * totalBlocks)));
  const emptyBlocksCount = Math.max(0, totalBlocks - filledBlocksCount);
  const filledString = '█'.repeat(filledBlocksCount);
  const emptyString = '░'.repeat(emptyBlocksCount);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      setIsCompleted(true);
      timeoutRef.current = setTimeout(() => {
        onComplete();
      }, 150);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    const duration = 1200; // total duration ~1.2s
    const startTime = performance.now();
    let animId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.max(0, Math.min(1, elapsed / duration));
      
      // Smooth natural easing (easeOutQuad)
      const easeOut = 1 - Math.pow(1 - rawProgress, 2.2);
      const currentVal = Math.max(0, Math.min(100, Math.round(easeOut * 100)));

      setProgress(currentVal);

      if (rawProgress < 1) {
        animId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setIsCompleted(true);
        // Brief pause at 100% to let user see "Welcome to my portfolio."
        timeoutRef.current = setTimeout(() => {
          onComplete();
        }, 280);
      }
    };

    animId = requestAnimationFrame(updateProgress);
    return () => {
      cancelAnimationFrame(animId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [onComplete, prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.99, filter: 'blur(4px)' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background px-4 sm:px-6 select-none overflow-hidden"
    >
      {/* Background ambient glowing grid */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Main Terminal Loader Card */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative w-full max-w-lg rounded-2xl border border-border-strong bg-[#090d16]/90 backdrop-blur-2xl shadow-2xl p-5 sm:p-7 overflow-hidden"
      >
        {/* Top subtle accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-75" />

        {/* Window Title Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
            <span className="text-[11px] sm:text-xs font-mono text-text-muted ml-2 tracking-wide">
              shafeek@portfolio: ~/boot.sh
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-accent-cyan">
            <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-accent-cyan animate-pulse'}`} />
            <span className="tracking-wider uppercase font-semibold">
              {isCompleted ? 'READY' : 'INITIALIZING'}
            </span>
          </div>
        </div>

        {/* Brand Display */}
        <div className="flex flex-col items-center justify-center my-3 sm:my-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-background-elevated border border-border-strong flex items-center justify-center text-accent-cyan shadow-glow-cyan mb-3">
            <Terminal className="w-6 h-6" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] font-mono text-gradient-cyan uppercase">
            SHAFEEK
          </h1>
          <p className="text-[11px] sm:text-xs font-mono text-text-muted mt-1 tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-accent-emerald inline-block" />
            <span>Software Engineer Portfolio</span>
          </p>
        </div>

        {/* Terminal Status Output Area */}
        <div className="my-5 sm:my-6 rounded-xl bg-background-secondary/70 border border-border-subtle p-3.5 sm:p-4 font-mono text-xs text-text-secondary space-y-2.5">
          {/* Active Command Prompt */}
          <div className="flex items-center gap-2 text-text-primary">
            <span className="text-accent-cyan font-bold select-none">&gt;</span>
            <span className="font-semibold text-text-primary tracking-wide text-xs sm:text-sm">
              {statusMessage}
            </span>
            <span className="w-2 h-4 bg-accent-cyan inline-block animate-pulse ml-0.5" />
          </div>

          {/* Dynamic ASCII Block Bar */}
          <div className="pt-2 flex items-center justify-between gap-2 text-[11px] sm:text-xs font-mono">
            <div className="tracking-tighter select-none font-mono text-text-primary overflow-x-hidden whitespace-nowrap">
              <span className="text-text-muted">[</span>
              <span className="text-accent-cyan font-bold">{filledString}</span>
              <span className="text-text-dim">{emptyString}</span>
              <span className="text-text-muted">]</span>
            </div>
            <div className="font-bold text-accent-emerald min-w-[3rem] text-right font-mono">
              {clampedProgress}%
            </div>
          </div>

          {/* Visual Sleek Progress Bar Track */}
          <div className="w-full h-1.5 bg-background-elevated rounded-full overflow-hidden border border-white/5 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-cyan via-accent-cyan-light to-accent-emerald rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(6,182,212,0.6)]"
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        </div>

        {/* Footer info inside terminal card */}
        <div className="flex items-center justify-between text-[10px] font-mono text-text-dim pt-2 border-t border-border-subtle/50">
          <span className="flex items-center gap-1">
            {isCompleted ? (
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
            )}
            <span>{isCompleted ? 'System boot complete' : 'Loading modules...'}</span>
          </span>
          <span className="text-text-muted">v1.0.0</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
