import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, ShieldCheck, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[78vh] flex items-center justify-center py-6 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-14">
        
        {/* Left Column: Hero Content */}
        <div className="flex-1 max-w-3xl text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full subtle-badge text-xs sm:text-sm font-mono text-slate-200 mb-4 sm:mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </motion.div>

          {/* Subtitle / Tag */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block text-xs sm:text-sm md:text-base font-mono font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-2 sm:mb-3"
          >
            Android • Web Application • Embedded Systems
          </motion.span>

          {/* Main Title - Reasonable & Proportional */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words"
          >
            Hi, <br className="hidden sm:inline" />
            I'm <span translate="no" className="notranslate">{personalInfo.name}</span>.
          </motion.h1>

          {/* Description - Reasonable font size */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl"
          >
            Android, Web & Embedded Systems Developer with 3 years of experience.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10"
          >
            <a
              href="#projects"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm lg:text-base hover:bg-slate-200 transition shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 text-slate-800 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full subtle-badge hover:bg-white/10 text-slate-200 font-bold text-xs sm:text-sm lg:text-base transition flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Let's Talk</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-mono text-slate-400 pt-5 sm:pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Commercial-Grade Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Hardware & Software Convergence</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: CodingNepal Organic Morphing Blob Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center items-center relative w-full"
        >
          {/* Morphing Blob Image Frame — fluid clamp sizing, identical in VS Code & Chrome */}
          <div className="blob-container relative">
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
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0a0b0e]/90 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs lg:text-sm font-mono text-slate-200 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active & Available</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
