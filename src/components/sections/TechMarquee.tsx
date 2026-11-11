import React from 'react';
import { marqueeTech } from '../../data/portfolioData';

export const TechMarquee: React.FC = () => {
  return (
    <section 
      className="relative py-7 sm:py-8 border-y border-white/10 bg-[#0a0b0e] overflow-hidden"
      style={{ contain: 'paint' }}
    >
      {/* Side gradient masks */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-r from-[#0a0b0e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-l from-[#0a0b0e] to-transparent z-10 pointer-events-none" />

      {/* Hardware-accelerated GPU track with 0% CPU consumption */}
      <div className="flex w-max animate-marquee space-x-3 sm:space-x-4 items-center hardware-marquee">
        {[...marqueeTech, ...marqueeTech].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm lg:text-base font-mono text-slate-200 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
