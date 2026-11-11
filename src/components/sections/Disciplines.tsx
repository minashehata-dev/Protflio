import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cpu, CheckCircle } from 'lucide-react';
import { corePillars } from '../../data/portfolioData';

export const Disciplines: React.FC = () => {
  const icons = [Globe, Smartphone, Cpu];

  return (
    <section id="disciplines" className="py-20 sm:py-28 lg:py-36 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24">
        <p className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-sky-400 mb-3 sm:mb-4">
          Core Disciplines
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
          Three Disciplines. One Unified Architecture.
        </h2>
        <p className="text-slate-300 text-base sm:text-xl lg:text-2xl mt-4 sm:mt-6 font-light leading-relaxed">
          Most developers only work on the screen. I bridge the entire stack — from deterministic microcontroller firmware to scalable cloud applications and fluid mobile interfaces.
        </p>
      </div>

      {/* 3 Pillars Grid - Fluid Responsive on Mobile, Tablet & Wide Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {corePillars.map((pillar, index) => {
          const IconComponent = icons[index % icons.length];
          const isThirdOnTablet = index === 2;

          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`pro-card rounded-3xl p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between ${
                isThirdOnTablet ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400 mb-8 shadow-sm">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              <div>
                <div className="text-xs sm:text-sm lg:text-base font-mono text-slate-400 uppercase tracking-wider mb-4">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {pillar.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white/[0.04] border border-white/5 text-xs sm:text-sm lg:text-base font-mono text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-sky-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
