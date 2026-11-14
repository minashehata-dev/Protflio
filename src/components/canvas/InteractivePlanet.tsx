import React, { useEffect, useRef } from 'react';

/**
 * 3D Holographic Web Development Symbol (< / >)
 * Assembles and morphs dynamically in 3D space as you scroll.
 * Features:
 * - 3D Angle Brackets `<` and `>` with Center Slash `/`
 * - Silicon Chip Frame & Hardware Pins representing Web & Embedded IoT
 * - Scroll-Driven Magnetic Assembly from Floating Data Dust into 3D Web Symbol
 * - Calm, elegant, non-intrusive aesthetic with smooth 60fps Canvas 2D
 * - 100% fluid & responsive across Mobile, Tablet, Laptop & 4K screens
 */
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

    // -------------------------------------------------------------
    // CANVAS RESIZING & DPR SCALING
    // -------------------------------------------------------------
    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;

      const rawDpr = window.devicePixelRatio || 1;
      const dpr = width < 768 ? 1 : Math.min(rawDpr, 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);
    window.addEventListener('resize', handleResize, { passive: true });

    // -------------------------------------------------------------
    // INTERACTION & SCROLL STATE
    // -------------------------------------------------------------
    const mouse = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
    };

    let scrollY = window.scrollY || 0;
    let targetAssembleProgress = Math.min(scrollY / 420, 1.0);
    let currentAssembleProgress = targetAssembleProgress;
    let scrollRotation = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / (width || 1) - 0.5) * 2;
      mouse.targetY = (e.clientY / (height || 1) - 0.5) * 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.targetX = (touch.clientX / (width || 1) - 0.5) * 1.5;
        mouse.targetY = (touch.clientY / (height || 1) - 0.5) * 1.5;
      }
    };

    const handleTouchEnd = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || 0;
      // Assembles progressively from 0 to 420px of scroll
      targetAssembleProgress = Math.min(Math.max(scrollY / 420, 0), 1.0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) animationFrameId = requestAnimationFrame(render);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // -------------------------------------------------------------
    // 3D GEOMETRY SYNTHESIS: WEB DEVELOPMENT SYMBOL (< / >)
    // -------------------------------------------------------------
    const TOTAL_POINTS = 660;

    const origX = new Float32Array(TOTAL_POINTS);
    const origY = new Float32Array(TOTAL_POINTS);
    const origZ = new Float32Array(TOTAL_POINTS);

    const targetX = new Float32Array(TOTAL_POINTS);
    const targetY = new Float32Array(TOTAL_POINTS);
    const targetZ = new Float32Array(TOTAL_POINTS);

    const pointTypes = new Uint8Array(TOTAL_POINTS); // 0: brackets < >, 1: slash /, 2: frame, 3: pins, 4: orbit
    let idx = 0;

    // Dispersed spherical cloud origin
    const setOrigin = (i: number, spread = 2.4) => {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * spread + 0.8;
      const sinPhi = Math.sin(phi);
      origX[i] = r * sinPhi * Math.cos(theta);
      origY[i] = r * sinPhi * Math.sin(theta);
      origZ[i] = r * Math.cos(phi);
    };

    // 1. LEFT BRACKET `<` (60 points with 3D Z-thickness)
    const countBracket = 30;
    for (let layer = -1; layer <= 1; layer += 2) {
      const zOffset = layer * 0.16;
      for (let i = 0; i < countBracket / 2; i++) {
        const t = i / (countBracket / 2 - 1);
        targetX[idx] = -0.45 + t * (-0.95 - -0.45);
        targetY[idx] = 0.45 + t * (0.0 - 0.45);
        targetZ[idx] = zOffset;
        pointTypes[idx] = 0;
        setOrigin(idx);
        idx++;
      }
      for (let i = 0; i < countBracket / 2; i++) {
        const t = i / (countBracket / 2 - 1);
        targetX[idx] = -0.95 + t * (-0.45 - -0.95);
        targetY[idx] = 0.0 + t * (-0.45 - 0.0);
        targetZ[idx] = zOffset;
        pointTypes[idx] = 0;
        setOrigin(idx);
        idx++;
      }
    }

    // 2. CENTER SLASH `/` (44 points with 3D Z-thickness)
    const countSlash = 22;
    for (let layer = -1; layer <= 1; layer += 2) {
      const zOffset = layer * 0.16;
      for (let i = 0; i < countSlash; i++) {
        const t = i / (countSlash - 1);
        targetX[idx] = -0.22 + t * (0.22 - -0.22);
        targetY[idx] = -0.55 + t * (0.55 - -0.55);
        targetZ[idx] = zOffset;
        pointTypes[idx] = 1;
        setOrigin(idx);
        idx++;
      }
    }

    // 3. RIGHT BRACKET `>` (60 points with 3D Z-thickness)
    for (let layer = -1; layer <= 1; layer += 2) {
      const zOffset = layer * 0.16;
      for (let i = 0; i < countBracket / 2; i++) {
        const t = i / (countBracket / 2 - 1);
        targetX[idx] = 0.45 + t * (0.95 - 0.45);
        targetY[idx] = 0.45 + t * (0.0 - 0.45);
        targetZ[idx] = zOffset;
        pointTypes[idx] = 0;
        setOrigin(idx);
        idx++;
      }
      for (let i = 0; i < countBracket / 2; i++) {
        const t = i / (countBracket / 2 - 1);
        targetX[idx] = 0.95 + t * (0.45 - 0.95);
        targetY[idx] = 0.0 + t * (-0.45 - 0.0);
        targetZ[idx] = zOffset;
        pointTypes[idx] = 0;
        setOrigin(idx);
        idx++;
      }
    }

    // 4. CHIP PERIMETER FRAME (160 points)
    const countFrameEdge = 20;
    const chipW = 1.35;
    const chipH = 0.95;
    for (let layer = -1; layer <= 1; layer += 2) {
      const zOffset = layer * 0.22;
      for (let i = 0; i < countFrameEdge; i++) {
        const t = (i / (countFrameEdge - 1)) * 2 - 1;
        targetX[idx] = t * chipW;
        targetY[idx] = chipH;
        targetZ[idx] = zOffset;
        pointTypes[idx] = 2;
        setOrigin(idx);
        idx++;
      }
      for (let i = 0; i < countFrameEdge; i++) {
        const t = (i / (countFrameEdge - 1)) * 2 - 1;
        targetX[idx] = t * chipW;
        targetY[idx] = -chipH;
        targetZ[idx] = zOffset;
        pointTypes[idx] = 2;
        setOrigin(idx);
        idx++;
      }
      for (let i = 0; i < countFrameEdge; i++) {
        const t = (i / (countFrameEdge - 1)) * 2 - 1;
        targetX[idx] = -chipW;
        targetY[idx] = t * chipH;
        targetZ[idx] = zOffset;
        pointTypes[idx] = 2;
        setOrigin(idx);
        idx++;
      }
      for (let i = 0; i < countFrameEdge; i++) {
        const t = (i / (countFrameEdge - 1)) * 2 - 1;
        targetX[idx] = chipW;
        targetY[idx] = t * chipH;
        targetZ[idx] = zOffset;
        pointTypes[idx] = 2;
        setOrigin(idx);
        idx++;
      }
    }

    // 5. HARDWARE PINS (112 points)
    const pinCount = 7;
    for (let p = 0; p < pinCount; p++) {
      const pinY = ((p / (pinCount - 1)) * 2 - 1) * 0.72;
      for (let step = 0; step < 4; step++) {
        const t = step / 3;
        targetX[idx] = -chipW - t * 0.35;
        targetY[idx] = pinY;
        targetZ[idx] = 0;
        pointTypes[idx] = 3;
        setOrigin(idx);
        idx++;
      }
      for (let step = 0; step < 4; step++) {
        const t = step / 3;
        targetX[idx] = chipW + t * 0.35;
        targetY[idx] = pinY;
        targetZ[idx] = 0;
        pointTypes[idx] = 3;
        setOrigin(idx);
        idx++;
      }
    }

    // 6. QUANTUM DATA ORBIT (Remaining points)
    while (idx < TOTAL_POINTS) {
      const t = (idx / TOTAL_POINTS) * Math.PI * 2;
      const orbitR = 1.95;
      targetX[idx] = Math.cos(t) * orbitR;
      targetY[idx] = Math.sin(t) * orbitR * 0.45;
      targetZ[idx] = Math.sin(t) * 0.75;
      pointTypes[idx] = 4;
      setOrigin(idx, 3.0);
      idx++;
    }

    // -------------------------------------------------------------
    // RENDER LOOP WITH CONTINUOUS 3D MATH & PERSPECTIVE
    // -------------------------------------------------------------
    let time = 0;
    let autoSpin = 0;

    const render = () => {
      if (!isVisible) return;

      time += 0.015;
      autoSpin += 0.0035;

      // Smooth lerp for scroll-driven assembly
      currentAssembleProgress += (targetAssembleProgress - currentAssembleProgress) * 0.08;
      // Scroll smoothly rotates the 3D web symbol
      scrollRotation += ((scrollY * 0.0016) - scrollRotation) * 0.06;

      // Mouse & touch inertia
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.045;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.045;

      ctx.clearRect(0, 0, width, height);

      // Base scaling factor - moderate and refined
      const scaleFactor = Math.max(0.55, Math.min(width / 1300, 1.05));
      const isNarrow = width < 1024;

      // Web Symbol Base Scale: Calm, moderate proportions
      const shortSide = Math.min(width, height);
      const baseRadius = isNarrow
        ? Math.min(shortSide * 0.24, 135)
        : Math.min(shortSide * 0.27, 220);

      // Center positioning: centered on mobile, right offset on wide desktop
      const centerX = isNarrow ? width * 0.5 : width * 0.62;
      const centerY = isNarrow ? Math.min(height * 0.36, 270) : height * 0.5;

      // Assembly factor: 0.18 when scroll=0 (gentle floating hint), 1.0 when scrolled
      const assembleRatio = 0.18 + currentAssembleProgress * 0.82;

      // 3D Rotation Angles (Yaw, Pitch, Roll)
      const rotY = autoSpin + scrollRotation + mouse.currentX * 0.6;
      const rotX = -mouse.currentY * 0.5 + 0.15 + Math.sin(time * 0.5) * 0.08;
      const rotZ = Math.sin(time * 0.3) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      const fov = 950;

      // Batch Paths for single-pass GPU fills (maximum performance)
      const bracketPath = new Path2D(); // Cyan < >
      const slashPath = new Path2D();   // Emerald /
      const framePath = new Path2D();   // Deep Sky Blue Chip
      const pinPath = new Path2D();     // Luminous White Pins
      const orbitPath = new Path2D();   // Orbiting Data Nodes

      const projX = new Float32Array(TOTAL_POINTS);
      const projY = new Float32Array(TOTAL_POINTS);

      for (let i = 0; i < TOTAL_POINTS; i++) {
        const tx = targetX[i];
        const ty = targetY[i];
        const tz = targetZ[i];

        const ox = origX[i];
        const oy = origY[i];
        const oz = origZ[i];

        const floatWave = Math.sin(time * 1.5 + i * 0.1) * 0.03 * (1 - currentAssembleProgress);

        const x = (ox + (tx - ox) * assembleRatio) * baseRadius;
        const y = (oy + (ty - oy) * assembleRatio + floatWave) * baseRadius;
        const z = (oz + (tz - oz) * assembleRatio) * baseRadius;

        // 3D Matrix Rotation (Yaw Y)
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;

        // 3D Matrix Rotation (Pitch X)
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // 3D Matrix Rotation (Roll Z)
        const x3 = x1 * cosZ - y2 * sinZ;
        const y3 = x1 * sinZ + y2 * cosZ;

        // Perspective Projection
        const depth = fov / (fov + z2);
        const px = centerX + x3 * depth;
        const py = centerY + y3 * depth;

        projX[i] = px;
        projY[i] = py;

        const type = pointTypes[i];
        let r = 1.0;

        if (type === 0) {
          // Web Brackets `< >` (Electric Cyan)
          r = 1.05 * scaleFactor * depth;
          bracketPath.moveTo(px + r, py);
          bracketPath.arc(px, py, r, 0, Math.PI * 2);
        } else if (type === 1) {
          // Center Slash `/` (Emerald Green)
          r = 1.15 * scaleFactor * depth;
          slashPath.moveTo(px + r, py);
          slashPath.arc(px, py, r, 0, Math.PI * 2);
        } else if (type === 2) {
          // Perimeter Frame
          r = 0.85 * scaleFactor * depth;
          framePath.moveTo(px + r, py);
          framePath.arc(px, py, r, 0, Math.PI * 2);
        } else if (type === 3) {
          // Hardware Pins
          r = 0.75 * scaleFactor * depth;
          pinPath.moveTo(px + r, py);
          pinPath.arc(px, py, r, 0, Math.PI * 2);
        } else {
          // Data orbit
          r = 0.65 * scaleFactor * depth;
          orbitPath.moveTo(px + r, py);
          orbitPath.arc(px, py, r, 0, Math.PI * 2);
        }
      }

      // -------------------------------------------------------------
      // DRAW CONNECTING LINES WHEN ASSEMBLED ON SCROLL
      // -------------------------------------------------------------
      if (currentAssembleProgress > 0.35) {
        const lineAlpha = (currentAssembleProgress - 0.35) / 0.65;

        // Left bracket `<` line
        ctx.beginPath();
        ctx.moveTo(projX[0], projY[0]);
        for (let i = 1; i < 30; i++) ctx.lineTo(projX[i], projY[i]);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * lineAlpha})`;
        ctx.lineWidth = 1.1 * scaleFactor;
        ctx.stroke();

        // Center slash `/` line
        ctx.beginPath();
        ctx.moveTo(projX[60], projY[60]);
        for (let i = 61; i < 60 + 22; i++) ctx.lineTo(projX[i], projY[i]);
        ctx.strokeStyle = `rgba(52, 211, 153, ${0.60 * lineAlpha})`;
        ctx.lineWidth = 1.3 * scaleFactor;
        ctx.stroke();

        // Right bracket `>` line
        ctx.beginPath();
        ctx.moveTo(projX[104], projY[104]);
        for (let i = 105; i < 104 + 30; i++) ctx.lineTo(projX[i], projY[i]);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * lineAlpha})`;
        ctx.lineWidth = 1.1 * scaleFactor;
        ctx.stroke();

        // Outer chip boundary frame
        ctx.beginPath();
        const frameStart = 164;
        ctx.moveTo(projX[frameStart], projY[frameStart]);
        for (let i = frameStart + 1; i < frameStart + 80; i++) {
          ctx.lineTo(projX[i], projY[i]);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * lineAlpha})`;
        ctx.lineWidth = 0.8 * scaleFactor;
        ctx.stroke();
      }

      // -------------------------------------------------------------
      // DRAW BATCHED 3D NODES
      // -------------------------------------------------------------
      ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.fill(orbitPath);

      ctx.fillStyle = 'rgba(56, 189, 248, 0.65)';
      ctx.fill(framePath);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.80)';
      ctx.fill(pinPath);

      ctx.fillStyle = 'rgba(56, 189, 248, 0.95)';
      ctx.fill(bracketPath);

      ctx.fillStyle = 'rgba(52, 211, 153, 0.98)';
      ctx.fill(slashPath);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
};
