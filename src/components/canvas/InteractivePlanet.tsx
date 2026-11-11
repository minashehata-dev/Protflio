import React, { useEffect, useRef } from 'react';

export const InteractivePlanet: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Responsive Canvas Sizing with clamped DPR for crisp 60fps performance
    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse & Touch Tracking with Smooth Spring/Lerp Physics
    const mouse = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized coordinates [-1, 1] relative to center
      mouse.targetX = (e.clientX / width - 0.5) * 2;
      mouse.targetY = (e.clientY / height - 0.5) * 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.targetX = (touch.clientX / width - 0.5) * 1.5;
        mouse.targetY = (touch.clientY / height - 0.5) * 1.5;
      }
    };

    const handleTouchEnd = () => {
      // Return smoothly to level horizon on mobile when touch finishes
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Pause animation when tab is inactive to guarantee zero CPU/battery drain
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // -------------------------------------------------------------
    // PRE-ALLOCATED TYPED ARRAYS (Zero Garbage Collection = Zero Lag)
    // Mathematical Fibonacci Spiral Distribution for Uniform Density
    // -------------------------------------------------------------
    const TOTAL_PARTICLES = 950;
    const baseX = new Float32Array(TOTAL_PARTICLES);
    const baseY = new Float32Array(TOTAL_PARTICLES);
    const baseZ = new Float32Array(TOTAL_PARTICLES);
    const thetas = new Float32Array(TOTAL_PARTICLES);
    const phis = new Float32Array(TOTAL_PARTICLES);

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const t = i / TOTAL_PARTICLES;
      const inclination = Math.acos(1 - 2 * t); // phi: 0 to PI
      const azimuth = angleIncrement * i; // theta: 0 to 2*PI

      thetas[i] = azimuth;
      phis[i] = inclination;

      baseX[i] = Math.sin(inclination) * Math.cos(azimuth);
      baseY[i] = Math.sin(inclination) * Math.sin(azimuth);
      baseZ[i] = Math.cos(inclination);
    }

    let time = 0;
    let autoRotation = 0;

    // -------------------------------------------------------------
    // HIGH-PERFORMANCE RENDER LOOP (Identical Desktop Look on Mobile)
    // -------------------------------------------------------------
    const render = () => {
      if (!isVisible) return;

      time += 0.018;
      autoRotation += 0.0028;

      // Smooth inertia lerp for fluid rotation
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.045;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.045;

      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1280;

      // 1. Proportional Planet Radius (Generous scale on mobile so dots breathe)
      const planetRadius = isMobile
        ? Math.min(width * 0.52, 215)
        : isTablet
        ? Math.min(width, height) * 0.38
        : Math.min(width, height) * 0.44;

      // 2. Center Position
      const centerX = isMobile ? width * 0.5 : isTablet ? width * 0.54 : width * 0.62;
      const centerY = isMobile ? Math.min(height * 0.38, 310) : height * 0.5;

      // 3. Density Scaling (Identical dot spacing on mobile as on computer)
      const activeCount = isMobile ? 480 : isTablet ? 720 : TOTAL_PARTICLES;

      // 4. 3D Rotation Angles
      const rotX = -mouse.currentY * 0.55 + 0.12;
      const rotY = autoRotation + mouse.currentX * 0.65;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Batched Path2D for 3 Depth Tiers (Pure floating 3D points)
      const tier1Path = new Path2D(); // Front Highlight
      const tier2Path = new Path2D(); // Mid Sphere
      const tier3Path = new Path2D(); // Back Hemisphere

      const fov = 950;

      for (let i = 0; i < activeCount; i++) {
        const th = thetas[i];
        const ph = phis[i];

        // Motion.dev Signature Fluid Surface Morph Wave
        const morphWave =
          0.065 * Math.sin(3 * th + 2 * ph + time * 1.4) +
          0.035 * Math.cos(4 * th - time * 1.8);
        const r = planetRadius * (1 + morphWave);

        // 3D Coordinates
        const x0 = baseX[i] * r;
        const y0 = baseY[i] * r;
        const z0 = baseZ[i] * r;

        // Rotate Y (Yaw & Auto-Spin)
        const x1 = x0 * cosY + z0 * sinY;
        const z1 = -x0 * sinY + z0 * cosY;

        // Rotate X (Pitch from Mouse/Touch)
        const y2 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;

        // Perspective Projection
        const depth = fov / (fov + z2);
        const px = centerX + x1 * depth;
        const py = centerY + y2 * depth;

        // Responsive Dot Radii: Delicate and crisp on mobile, bold on desktop
        if (z2 > planetRadius * 0.28) {
          // Front Highlight Tier
          const pr = (isMobile ? 1.6 : 2.6) * depth;
          tier1Path.moveTo(px + pr, py);
          tier1Path.arc(px, py, pr, 0, Math.PI * 2);
        } else if (z2 > -planetRadius * 0.25) {
          // Mid Sphere Tier
          const pr = (isMobile ? 1.1 : 1.9) * depth;
          tier2Path.moveTo(px + pr, py);
          tier2Path.arc(px, py, pr, 0, Math.PI * 2);
        } else {
          // Back Hemisphere Tier
          const pr = (isMobile ? 0.7 : 1.2) * depth;
          tier3Path.moveTo(px + pr, py);
          tier3Path.arc(px, py, pr, 0, Math.PI * 2);
        }
      }

      // Execute exactly 3 GPU-batched draws:
      // Pass 1: Back tier (deep celestial cyan-slate)
      ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.fill(tier3Path);

      // Pass 2: Mid tier (electric cyan)
      ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
      ctx.fill(tier2Path);

      // Pass 3: Front highlight tier (luminous white-cyan)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
      ctx.fill(tier1Path);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
