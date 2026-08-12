import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  glow: boolean;
  phase: number;
  connections: number[];
  layer: number; // 0 = background (slower), 1 = foreground (more responsive)
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const BackgroundNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      active: false,
    };

    let scrollY = window.scrollY;

    // Node & Packet storage
    let nodes: Node[] = [];
    let packets: DataPacket[] = [];

    // Colors matching the portfolio's cyber palette
    const colors = [
      'rgba(6, 182, 212, ',   // Cyan
      'rgba(34, 211, 238, ',  // Cyan-Light
      'rgba(16, 185, 129, ',  // Emerald
      'rgba(52, 211, 153, ',  // Emerald-Light
      'rgba(99, 102, 241, ',  // Indigo
    ];

    // Determine density based on screen size
    const getSettings = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      return {
        nodeCount: isMobile ? 15 : isTablet ? 28 : 50,
        maxDistance: isMobile ? 110 : isTablet ? 140 : 170,
        maxConnectionsPerNode: isMobile ? 2 : 3,
        packetCount: isMobile ? 4 : isTablet ? 8 : 14,
        gridSize: isMobile ? 70 : 85,
      };
    };

    const initNetwork = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const settings = getSettings();

      nodes = [];
      packets = [];

      for (let i = 0; i < settings.nodeCount; i++) {
        // Distribute organically across viewport with margin
        const x = Math.random() * width;
        const y = Math.random() * height;
        const colorBase = colors[Math.floor(Math.random() * colors.length)];
        const layer = Math.random() > 0.4 ? 1 : 0;
        const isHub = Math.random() > 0.85;

        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * (layer === 1 ? 0.25 : 0.12),
          vy: (Math.random() - 0.5) * (layer === 1 ? 0.25 : 0.12),
          radius: isHub ? 2.8 + Math.random() * 0.8 : 1.2 + Math.random() * 1.2,
          color: colorBase,
          alpha: isHub ? 0.65 : 0.25 + Math.random() * 0.35,
          glow: isHub || Math.random() > 0.6,
          phase: Math.random() * Math.PI * 2,
          connections: [],
          layer,
        });
      }
    };

    const createPackets = () => {
      const settings = getSettings();
      packets = [];

      // Find valid connected pairs to spawn data packets on
      for (let i = 0; i < nodes.length && packets.length < settings.packetCount; i++) {
        const node = nodes[i];
        if (node.connections.length > 0) {
          const targetIndex = node.connections[Math.floor(Math.random() * node.connections.length)];
          packets.push({
            fromNode: i,
            toNode: targetIndex,
            progress: Math.random(),
            speed: 0.003 + Math.random() * 0.004,
            color: node.color,
          });
        }
      }
    };

    // Calculate node connections
    const updateConnections = () => {
      const settings = getSettings();
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = [];
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (
            nodes[i].connections.length >= settings.maxConnectionsPerNode ||
            nodes[j].connections.length >= settings.maxConnectionsPerNode
          ) {
            continue;
          }

          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < settings.maxDistance) {
            nodes[i].connections.push(j);
            nodes[j].connections.push(i);
          }
        }
      }
    };

    initNetwork();
    updateConnections();
    createPackets();

    let lastTime = 0;
    let isTabActive = true;

    // Animation Loop
    const render = (time: number) => {
      if (!isTabActive) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.1) : 0.016;
      lastTime = time;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const settings = getSettings();

      // 1. Draw Fine Technical Grid with subtle coordinate ticks
      const gridSize = settings.gridSize;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
      ctx.lineWidth = 1;

      // Grid vertical lines
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      // Grid horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Subtle Grid intersection dots
      ctx.fillStyle = 'rgba(6, 182, 212, 0.05)';
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
        }
      }

      // 2. Update and Draw Connections
      updateConnections();

      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let c = 0; c < nodeA.connections.length; c++) {
          const j = nodeA.connections[c];
          if (i < j) {
            const nodeB = nodes[j];
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Normalized distance alpha fade
            const alpha = (1 - dist / settings.maxDistance) * 0.16;

            // Connection line gradient
            const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            grad.addColorStop(0, `${nodeA.color}${alpha})`);
            grad.addColorStop(1, `${nodeB.color}${alpha * 0.7})`);

            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // 3. Update and Draw Data Packets
      if (!prefersReducedMotion) {
        for (let p = 0; p < packets.length; p++) {
          const packet = packets[p];
          const from = nodes[packet.fromNode];
          const to = nodes[packet.toNode];

          if (!from || !to) continue;

          packet.progress += packet.speed;
          if (packet.progress >= 1) {
            packet.progress = 0;
            // Pick a new connected target
            if (to.connections.length > 0) {
              packet.fromNode = packet.toNode;
              packet.toNode = to.connections[Math.floor(Math.random() * to.connections.length)];
            } else {
              packet.fromNode = Math.floor(Math.random() * nodes.length);
              const newFrom = nodes[packet.fromNode];
              if (newFrom.connections.length > 0) {
                packet.toNode = newFrom.connections[Math.floor(Math.random() * newFrom.connections.length)];
              }
            }
          }

          const currentX = from.x + (to.x - from.x) * packet.progress;
          const currentY = from.y + (to.y - from.y) * packet.progress;

          // Tiny glowing packet
          ctx.beginPath();
          ctx.arc(currentX, currentY, 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `${packet.color}0.75)`;
          ctx.fill();

          // Packet micro-glow
          const packetGlow = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 5);
          packetGlow.addColorStop(0, `${packet.color}0.35)`);
          packetGlow.addColorStop(1, `${packet.color}0)`);
          ctx.fillStyle = packetGlow;
          ctx.beginPath();
          ctx.arc(currentX, currentY, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Update and Draw Nodes
      const scrollOffset = scrollY * 0.035;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          // Slow organic floating
          node.phase += delta * 0.8;
          const floatOffset = Math.sin(node.phase) * 0.15;

          node.baseX += node.vx;
          node.baseY += node.vy;

          // Wrap edges smoothly
          if (node.baseX < -20) node.baseX = width + 20;
          if (node.baseX > width + 20) node.baseX = -20;
          if (node.baseY < -20) node.baseY = height + 20;
          if (node.baseY > height + 20) node.baseY = -20;

          // Mouse interaction (soft attraction / displacement)
          let targetX = node.baseX;
          let targetY = node.baseY;

          if (mouse.active) {
            const mdx = mouse.x - node.baseX;
            const mdy = mouse.y - node.baseY;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mDist < mouse.radius && mDist > 0) {
              const force = (1 - mDist / mouse.radius) * (node.layer === 1 ? 16 : 8);
              targetX += (mdx / mDist) * force;
              targetY += (mdy / mDist) * force;
            }
          }

          // Apply layer parallax
          const layerParallax = node.layer === 1 ? scrollOffset : scrollOffset * 0.5;
          targetY -= layerParallax % height;
          if (targetY < -20) targetY += height + 40;

          node.x += (targetX - node.x) * 0.08 + floatOffset;
          node.y += (targetY - node.y) * 0.08 + floatOffset;
        }

        // Draw node glow aura if highlighted
        if (node.glow) {
          const glowGrad = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.radius * 6
          );
          glowGrad.addColorStop(0, `${node.color}${node.alpha * 0.4})`);
          glowGrad.addColorStop(1, `${node.color}0)`);

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw solid node center point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${node.alpha})`;
        ctx.fill();
      }

      // 5. Cursor Soft Ambient Light
      if (mouse.active && !prefersReducedMotion) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        mouseGlow.addColorStop(0, 'rgba(6, 182, 212, 0.045)');
        mouseGlow.addColorStop(0.6, 'rgba(16, 185, 129, 0.015)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      initNetwork();
      updateConnections();
      createPackets();
      if (prefersReducedMotion) {
        render(0);
      }
    };

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial render
    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Deep Atmospheric Radial Gradients (Preserving Existing Theme) */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl opacity-80" />
      <div className="absolute top-[22%] -left-48 w-[420px] h-[420px] bg-cyan-600/8 rounded-full blur-3xl" />
      <div className="absolute top-[58%] -right-48 w-[450px] h-[450px] bg-emerald-600/7 rounded-full blur-3xl" />
      <div className="absolute top-[82%] left-1/4 w-[380px] h-[380px] bg-indigo-600/8 rounded-full blur-3xl" />

      {/* 2. Living Digital Network Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
};
