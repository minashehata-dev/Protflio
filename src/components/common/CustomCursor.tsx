import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring for outer magnetic ring
  const ringX = useSpring(-100, { damping: 26, stiffness: 320 });
  const ringY = useSpring(-100, { damping: 26, stiffness: 320 });

  // Fast spring for inner pinpoint dot
  const dotX = useSpring(-100, { damping: 35, stiffness: 800 });
  const dotY = useSpring(-100, { damping: 35, stiffness: 800 });

  const magneticTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine cursor control
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);
    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest(
        'button, a, [role="button"], input, select, textarea, .cursor-pointer, [data-magnetic]'
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        setIsText(false);
        magneticTargetRef.current = interactiveEl;

        // Calculate magnetic attraction towards the center of the interactive element
        const rect = interactiveEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const pullFactor = 0.35; // 35% magnetic attraction

        const magneticX = e.clientX + (centerX - e.clientX) * pullFactor;
        const magneticY = e.clientY + (centerY - e.clientY) * pullFactor;

        ringX.set(magneticX);
        ringY.set(magneticY);
        dotX.set(e.clientX);
        dotY.set(e.clientY);
      } else {
        setIsHovered(false);
        magneticTargetRef.current = null;

        // Check if hovering selectable text
        const isTextEl = target?.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote');
        setIsText(Boolean(isTextEl && !target?.closest('button, a')));

        ringX.set(e.clientX);
        ringY.set(e.clientY);
        dotX.set(e.clientX);
        dotY.set(e.clientY);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [ringX, ringY, dotX, dotY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Outer Magnetic Fluid Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isClicking ? 32 : isHovered ? 48 : isText ? 28 : 22,
          height: isClicking ? 32 : isHovered ? 48 : isText ? 28 : 22,
          backgroundColor: isHovered
            ? 'rgba(56, 189, 248, 0.12)'
            : isText
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(56, 189, 248, 0.03)',
          borderColor: isHovered
            ? 'rgba(56, 189, 248, 0.85)'
            : isText
            ? 'rgba(255, 255, 255, 0.35)'
            : 'rgba(56, 189, 248, 0.35)',
          boxShadow: isHovered
            ? '0 0 25px rgba(56, 189, 248, 0.45), inset 0 0 10px rgba(56, 189, 248, 0.2)'
            : '0 0 12px rgba(56, 189, 248, 0.15)',
          scale: isClicking ? 0.82 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 400,
        }}
      >
        {/* Subtle Cyber Corner Reticles when Hovering */}
        {isHovered && (
          <span className="absolute inset-0 rounded-full border border-sky-300/40 animate-ping opacity-25" />
        )}
      </motion.div>

      {/* 2. Inner Precision Pinpoint Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isClicking ? 4 : isHovered ? 7 : isText ? 2 : 5,
          height: isClicking ? 4 : isHovered ? 7 : isText ? 14 : 5,
          opacity: isText ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 600,
        }}
      />
    </>
  );
};
