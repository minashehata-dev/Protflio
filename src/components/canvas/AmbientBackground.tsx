import React from 'react';
import { InteractivePlanet } from './InteractivePlanet';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Motion.dev Interactive Planet / Globe with 3D Spring Mouse Tracking */}
      <InteractivePlanet />

      {/* 2. Vector Architectural Grid — finer on mobile so it looks light & airy */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Mobile fine grid: 40px cells, very faint stroke */}
          <pattern id="arch-grid-small-mobile" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.055)"
              strokeWidth="0.5"
              shapeRendering="crispEdges"
            />
          </pattern>
          <pattern id="arch-grid-large-mobile" width="160" height="160" patternUnits="userSpaceOnUse">
            <rect width="160" height="160" fill="url(#arch-grid-small-mobile)" />
            <path
              d="M 160 0 L 0 0 0 160"
              fill="none"
              stroke="rgba(56, 189, 248, 0.10)"
              strokeWidth="0.75"
              shapeRendering="crispEdges"
            />
          </pattern>

          {/* Desktop grid: 60px cells, standard stroke */}
          <pattern id="arch-grid-small" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.10)"
              strokeWidth="1"
              shapeRendering="crispEdges"
            />
          </pattern>
          <pattern id="arch-grid-large" width="240" height="240" patternUnits="userSpaceOnUse">
            <rect width="240" height="240" fill="url(#arch-grid-small)" />
            <path
              d="M 240 0 L 0 0 0 240"
              fill="none"
              stroke="rgba(56, 189, 248, 0.20)"
              strokeWidth="1"
              shapeRendering="crispEdges"
            />
          </pattern>
        </defs>

        {/* Mobile grid (hidden on md+) */}
        <rect width="100%" height="100%" fill="url(#arch-grid-large-mobile)" className="block md:hidden" />
        {/* Desktop grid (hidden below md) */}
        <rect width="100%" height="100%" fill="url(#arch-grid-large)" className="hidden md:block" />
      </svg>

      {/* 3. Gentle ambient light pools for depth and dimension */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1100px] h-[500px] md:h-[650px] bg-sky-500/[0.05] rounded-full blur-[120px] md:blur-[170px]" />
      <div className="absolute top-[35%] -left-[10%] w-[600px] md:w-[900px] h-[500px] md:h-[700px] bg-indigo-700/[0.04] rounded-full blur-[150px] md:blur-[190px]" />
      <div className="absolute top-[65%] -right-[10%] w-[700px] md:w-[1000px] h-[600px] md:h-[750px] bg-sky-900/[0.04] rounded-full blur-[150px] md:blur-[190px]" />
    </div>
  );
};
