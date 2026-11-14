import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-white/10 bg-[#08090c] text-slate-400">
      <div className="w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-xs sm:text-sm font-mono">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
          <Cpu className="w-4 h-4 text-sky-400 shrink-0" />
          <span translate="no" className="notranslate text-white font-bold text-sm sm:text-base">{personalInfo.name}</span>
        </div>

        <div className="text-slate-400 text-center md:text-left text-xs sm:text-sm">
          © {new Date().getFullYear()} Mina Shehata Bernaba. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 sm:p-3 rounded-lg subtle-badge hover:bg-white/10 text-slate-300 hover:text-white transition shadow-sm cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </footer>
  );
};
