import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-black text-[#C0C0C0] font-mono text-xs select-none"
    >
      <div className="space-y-2">
        <div className="text-white font-bold text-sm sm:text-base">
          Award Modular BIOS v4.51PG, An Energy Star Ally
        </div>
        <div className="text-gray-400">
          Copyright (C) 1984-2026, Award Software, Inc.
        </div>
        <div className="pt-2 text-[#00FF00]">
          Shafeek Workstation OS v3.0 ACPI BIOS Revision 1008
        </div>
        <div className="pt-2 text-white">
          Main Processor : Intel Pentium(R) Pro 200MHz
        </div>
        <div className="text-white">
          Memory Testing : 65536K OK
        </div>
        <div className="pt-2 text-[#FFFF00]">
          Primary Master : FAT32 1.44MB [SHAFEEK_PORTFOLIO_LOADED]
        </div>
      </div>

      <div className="flex items-center justify-between text-gray-500 text-[11px] border-t border-[#404040] pt-3">
        <span>Press &lt;DEL&gt; to enter SETUP</span>
        <span className="text-[#00FF00] animate-pulse">BOOTING SHAFEEK_OS...</span>
        <span>08/29/2026-i440FX-2A69KB09C-00</span>
      </div>
    </motion.div>
  );
};
