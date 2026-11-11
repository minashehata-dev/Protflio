import React from 'react';
import { featuredProjects } from '../../data/portfolioData';
import { Sparkles, Terminal } from 'lucide-react';

export const RunwayReel: React.FC = () => {
  // Double list for seamless infinite marquee loop
  const reelItems = [...featuredProjects, ...featuredProjects];

  return (
    <div 
      className="w-full overflow-hidden py-8 my-6 bg-[#090b10] border-y border-white/10 relative group"
      style={{ contain: 'paint' }}
    >
      {/* Runway Header Bar */}
      <div className="max-w-[1920px] 3xl:max-w-[2200px] mx-auto px-6 sm:px-10 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-sky-400 uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>RUNWAY // LIVE PRODUCTION REEL</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>4K ASSETS STREAMING • 60 FPS</span>
        </div>
      </div>

      {/* Side gradient masks for smooth fade */}
      <div className="absolute left-0 inset-y-0 w-24 sm:w-44 bg-gradient-to-r from-[#090b10] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 sm:w-44 bg-gradient-to-l from-[#090b10] to-transparent z-20 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee space-x-6 items-center hardware-marquee hover:[animation-play-state:paused]">
        {reelItems.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="relative w-72 sm:w-96 aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0f18] border border-white/15 shadow-xl shrink-0 group/card cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-sky-400/60"
          >
            {/* Cyber Corner HUD */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-sky-400 z-20" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-sky-400 z-20" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-sky-400 z-20" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-sky-400 z-20" />

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Runway Tag */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-sky-300 flex items-center gap-1.5 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>RUNWAY GEN // 0{((index % 4) + 1)}</span>
            </div>

            {/* Project info on bottom */}
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <h4 className="text-white font-bold text-sm sm:text-base leading-tight truncate">
                {project.title}
              </h4>
              <p className="text-[11px] font-mono text-slate-300 truncate mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
