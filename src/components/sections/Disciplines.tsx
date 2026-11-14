import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cpu, CheckCircle } from 'lucide-react';
import { corePillars } from '../../data/portfolioData';

export const Disciplines: React.FC = () => {
  const icons = [Globe, Smartphone, Cpu];

  return (
    <section id="disciplines" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-sky-400 mb-2 sm:mb-3">
          Core Disciplines
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Three Disciplines. One Unified Architecture.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 font-light leading-relaxed">
          Most developers only work on the screen. I bridge the entire stack — from deterministic microcontroller firmware to scalable cloud applications and fluid mobile interfaces.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
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
              className={`pro-card rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between ${
                isThirdOnTablet ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky-400 mb-6 shadow-sm">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {pillar.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-xs font-mono text-slate-200"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
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
