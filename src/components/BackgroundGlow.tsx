import React, { useEffect, useState } from 'react';

export const BackgroundGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Spotlight (Subtle) */}
      <div
        className="absolute rounded-full w-[600px] h-[600px] transition-all duration-300 ease-out opacity-25 blur-3xl hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 80%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      />

      {/* Top Center Glow Orb */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl" />

      {/* Side Glow Orbs */}
      <div className="absolute top-[20%] -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute top-[60%] -right-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      <div className="absolute top-[85%] left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 mask-gradient" />
    </div>
  );
};
