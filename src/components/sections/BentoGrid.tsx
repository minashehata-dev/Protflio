import React from 'react';
import { MapPin, CheckCircle2, Globe2 } from 'lucide-react';
import { personalInfo, stats } from '../../data/portfolioData';

export const BentoGrid: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto">
      {/* Header */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-sky-400 mb-2 sm:mb-3">
          Track Record & Architecture
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Built for commercial confidence.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {/* Card 1: Bio / Philosophy (Spans 2 cols on desktop) */}
        <div className="lg:col-span-2 pro-card rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white/10 shadow-lg shrink-0"
              />
              <div>
                <h3 translate="no" className="notranslate text-xl sm:text-2xl lg:text-3xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-sky-400 font-mono mt-0.5">{personalInfo.title}</p>
                <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">Microcontrollers • Mobile Apps • Distributed Cloud</p>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-light mb-6">
              {personalInfo.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-300">
              <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 shrink-0" />
              <span>Zero-Crash Firmware</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-300">
              <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 shrink-0" />
              <span>Offline Mobile Sync</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-300">
              <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 shrink-0" />
              <span>High-Scale Cloud APIs</span>
            </div>
          </div>
        </div>

        {/* Card 2: Location & Presence */}
        <div className="pro-card rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 mb-6">
              <MapPin className="w-6 h-6 text-sky-400" />
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">Base & Timezone</p>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{personalInfo.location}</h4>
            <p className="text-xs sm:text-sm text-slate-400">{personalInfo.timezone} • Remote Worldwide</p>
          </div>

          <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
            <Globe2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Worldwide Commercial Engagements</span>
          </div>
        </div>

        {/* Card 3: Key Numerical Metrics (Spans all cols, 3 cols for the 3 stats) */}
        <div className="lg:col-span-3 pro-card rounded-2xl p-5 sm:p-7 lg:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1 font-mono tracking-tight">
                {item.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-200">{item.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
