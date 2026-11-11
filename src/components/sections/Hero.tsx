import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, ShieldCheck, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center justify-center py-10 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="relative z-10 w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 sm:gap-14 lg:gap-16 xl:gap-20">
        
        {/* Left Column: Hero Content */}
        <div className="flex-1 max-w-4xl xl:max-w-5xl text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full subtle-badge text-xs sm:text-sm lg:text-base font-mono text-slate-200 mb-6 sm:mb-8 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </motion.div>

          {/* Subtitle / Tag */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block text-xs sm:text-sm md:text-base lg:text-lg font-mono font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3 sm:mb-4"
          >
            Android • Web Application • Embedded Systems
          </motion.span>

          {/* Main Title - Pure Crisp White */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[5.5rem] 3xl:text-[6.2rem] font-bold tracking-tight text-white leading-[1.12] mb-6 sm:mb-8 break-words"
          >
            Hi, <br className="hidden sm:inline" />
            I'm <span translate="no" className="notranslate">{personalInfo.name}</span>.
          </motion.h1>

          {/* Description - Pure Crisp White */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white leading-relaxed font-normal mb-10 sm:mb-12 max-w-3xl xl:max-w-4xl"
          >
            Android, Web & Embedded Systems Developer with 3 years of experience.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12 sm:mb-14"
          >
            <a
              href="#projects"
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-slate-950 font-bold text-sm sm:text-base lg:text-lg xl:text-xl hover:bg-slate-200 transition shadow-xl flex items-center justify-center gap-2.5 sm:gap-3 group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full subtle-badge hover:bg-white/10 text-slate-200 font-bold text-sm sm:text-base lg:text-lg xl:text-xl transition flex items-center justify-center gap-2.5 sm:gap-3"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
              <span>Let's Talk</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm md:text-base lg:text-lg font-mono text-slate-400 pt-6 sm:pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>Commercial-Grade Quality</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
              <span>Hardware & Software Convergence</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: CodingNepal Organic Morphing Blob Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Morphing Blob Image Frame */}
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[580px] xl:h-[580px] 2xl:w-[640px] 2xl:h-[640px]">
            <img
              src={personalInfo.avatar}
              alt={`${personalInfo.name} - Android, Web & Embedded Systems Developer - مينا شحاتة برنابا`}
              title="Mina Shehata Bernaba | مينا شحاتة"
              itemProp="image"
              loading="eager"
              decoding="async"
              className="hero-blob-image w-full h-full object-cover border-4 border-white/15 shadow-2xl cursor-pointer"
            />

            {/* Active Status Floating Tag */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0a0b0e]/90 backdrop-blur-md border border-white/10 text-xs sm:text-sm lg:text-base font-mono text-slate-200 flex items-center gap-2.5 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active & Available</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
