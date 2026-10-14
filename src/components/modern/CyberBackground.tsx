import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle density
    const isMobile = width < 768;
    const particleCount = isMobile ? 32 : 65;
    const connectionDistance = isMobile ? 85 : 120;
    const mouseRadius = 140;

    const colors = ['#00f0ff', '#ff007f', '#a855f7', '#00f0ff'];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 1.8 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Mouse tracking for interactive network
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle dot with neon glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();

        // Connect with other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Gradient connection line between particle colors
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.22;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          }
        }

        // Connect with mouse position
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);

          if (mDist < mouseRadius) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = (1 - mDist / mouseRadius) * 0.45;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Animated Ambient Neon Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] animate-pulse" />
      <div
        className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-[#ff007f]/10 rounded-full blur-[150px] animate-pulse"
        style={{ animationDuration: '6s' }}
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[160px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />

      {/* Cyber Digital Mesh / Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-75" />

      {/* Interactive HTML5 Cyber Canvas Network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />

      {/* Subtle Vignette Rim Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050711]/50 to-[#050711]/90" />
    </div>
  );
};
