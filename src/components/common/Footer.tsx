import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-white/10 bg-[#08090c] text-slate-400">
      <div className="w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm sm:text-base lg:text-lg font-mono">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <Cpu className="w-5 h-5 text-sky-400 shrink-0" />
          <span translate="no" className="notranslate text-white font-bold text-base sm:text-lg lg:text-xl">{personalInfo.name}</span>
        </div>

        <div className="text-slate-400 text-center md:text-left">
          © {new Date().getFullYear()} Mina Shehata Bernaba. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="p-3.5 sm:p-4 rounded-xl subtle-badge hover:bg-white/10 text-slate-300 hover:text-white transition shadow-sm cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </footer>
  );
};
