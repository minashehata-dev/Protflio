import React from 'react';
import { InteractivePlanet } from './InteractivePlanet';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Motion.dev Interactive Planet / Globe with 3D Spring Mouse Tracking */}
      <InteractivePlanet />

      {/* 2. Vector Architectural Grid (Always crisp at any zoom level with crispEdges) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Minor 60px Architectural Grid Squares */}
          <pattern id="arch-grid-small" width="60" height="60" patternUnits="userSpaceOnUse">
            <path 
              d="M 60 0 L 0 0 0 60" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.12)" 
              strokeWidth="1" 
              shapeRendering="crispEdges" 
            />
          </pattern>
          {/* Major 240px Blueprint Square Highlights */}
          <pattern id="arch-grid-large" width="240" height="240" patternUnits="userSpaceOnUse">
            <rect width="240" height="240" fill="url(#arch-grid-small)" />
            <path 
              d="M 240 0 L 0 0 0 240" 
              fill="none" 
              stroke="rgba(56, 189, 248, 0.26)" 
              strokeWidth="1.5" 
              shapeRendering="crispEdges" 
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-grid-large)" />
      </svg>

      {/* 4. Gentle ambient light pools for depth and dimension */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-sky-500/[0.06] rounded-full blur-[170px]" />
      <div className="absolute top-[35%] -left-[10%] w-[900px] h-[700px] bg-indigo-700/[0.05] rounded-full blur-[190px]" />
      <div className="absolute top-[65%] -right-[10%] w-[1000px] h-[750px] bg-sky-900/[0.05] rounded-full blur-[190px]" />
    </div>
  );
};
