import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Maximize2 } from 'lucide-react';

interface RunwayImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badgeText?: string;
  objectPosition?: string;
  onClick?: () => void;
}

export const RunwayImage: React.FC<RunwayImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  badgeText,
  objectPosition = 'object-center',
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`relative w-full overflow-hidden bg-[#0a0d14] rounded-2xl border border-white/10 group ${aspectRatio} ${className} ${
        onClick ? 'cursor-pointer hover:border-sky-400/60 transition-colors' : ''
      }`}
    >
      {/* 1. Runway Technical Corner Brackets (HUD Overlay) */}
      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-sky-400/60 z-20 pointer-events-none transition-colors group-hover:border-sky-300" />
      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-sky-400/60 z-20 pointer-events-none transition-colors group-hover:border-sky-300" />
      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-sky-400/60 z-20 pointer-events-none transition-colors group-hover:border-sky-300" />
      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-sky-400/60 z-20 pointer-events-none transition-colors group-hover:border-sky-300" />

      {/* 2. Runway Active Loading State (Shimmer, Grid & Laser Scanline) */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center runway-scan-grid bg-[#0b0e17]">
          {/* Cyan Laser Scan Beam Sweeping Vertically */}
          <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-runway-laser pointer-events-none" />

          {/* Runway Processing Tag */}
          <div className="relative px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-sky-400/30 flex items-center gap-2.5 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-sky-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>RUNWAY GEN // BUFFERING</span>
            </span>
          </div>

          <span className="mt-3 text-[10px] font-mono text-slate-500 tracking-wider">
            SAMPLING LATENT ASSETS • 4K
          </span>
        </div>
      )}

      {/* 3. The Actual Image with Progressive Blur-Up & Rive Fit.Cover */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${objectPosition} transition-all duration-700 ease-out ${
          isLoaded
            ? 'opacity-100 blur-0 scale-100 group-hover:scale-[1.03]'
            : 'opacity-0 blur-xl scale-105'
        }`}
      />

      {/* 4. Film Grain / Contrast Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/30 to-transparent pointer-events-none" />

      {/* 5. Runway Loaded Status Pill (Shows when loaded) */}
      {isLoaded && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <div className="px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono text-slate-300 flex items-center gap-1.5 shadow-md">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>RUNWAY // {badgeText || '4K READY'}</span>
          </div>
        </div>
      )}

      {/* 6. Subtle Technical Spec Footer on Hover */}
      <div className="absolute bottom-3 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-3 text-[10px] font-mono text-slate-400 bg-black/80 px-2.5 py-1 rounded border border-white/10">
        <span>FPS: 60</span>
        <span className="text-slate-600">|</span>
        <span>RES: 3840×2160</span>
      </div>

      {/* 7. Hover Preview Overlay if Clickable */}
      {onClick && isLoaded && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-white text-slate-950 font-mono text-xs font-bold flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Click for Preview</span>
          </div>
        </div>
      )}
    </div>
  );
};
