import React, { useRef, useEffect, useState } from 'react';

interface FittyProps {
  children: React.ReactNode;
  minSize?: number;
  maxSize?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Fitty Component - Scales font-size automatically to fit its parent container perfectly
 * Modeled after the popular 'fitty' and 'react-fitty' libraries.
 */
export const Fitty: React.FC<FittyProps> = ({
  children,
  minSize = 16,
  maxSize = 120,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [fontSize, setFontSize] = useState<number>(minSize);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const resize = () => {
      const containerWidth = container.clientWidth;
      if (containerWidth === 0) return;

      // Temporary reference measurement
      text.style.fontSize = '64px';
      text.style.display = 'inline-block';
      text.style.whiteSpace = 'nowrap';

      const textWidth = text.scrollWidth;
      if (textWidth === 0) return;

      const scale = containerWidth / textWidth;
      const targetSize = Math.max(minSize, Math.min(maxSize, 64 * scale));

      text.style.fontSize = `${targetSize}px`;
      setFontSize(targetSize);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    window.addEventListener('resize', resize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, [children, minSize, maxSize]);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`} style={style}>
      <span
        ref={textRef}
        style={{
          fontSize: `${fontSize}px`,
          whiteSpace: 'nowrap',
          display: 'inline-block',
          lineHeight: 1.1,
        }}
      >
        {children}
      </span>
    </div>
  );
};
