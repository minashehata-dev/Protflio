import React, { useState, useEffect } from 'react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats } from '../../data/portfolioData';

export const BentoGrid: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto">
      {/* Header */}
      <div className="mb-14 sm:mb-18 lg:mb-20">
        <p className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-sky-400 mb-3 sm:mb-4">
          Track Record & Architecture
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
          Built for commercial confidence.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {/* Card 1: Bio / Philosophy (Spans 2 cols on desktop) */}
        <div className="lg:col-span-2 pro-card rounded-3xl p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl object-cover border-2 border-white/10 shadow-lg shrink-0"
              />
              <div>
                <h3 translate="no" className="notranslate text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-sky-400 font-mono mt-1">{personalInfo.title}</p>
                <p className="text-xs sm:text-sm lg:text-base text-slate-400 font-mono mt-1">Microcontrollers • Mobile Apps • Distributed Cloud</p>
              </div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-300 leading-relaxed font-light mb-10">
              {personalInfo.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-white/5">
            <div className="flex items-center gap-3 text-sm sm:text-base lg:text-lg font-mono text-slate-300">
              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 shrink-0" />
              <span>Zero-Crash Firmware</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base lg:text-lg font-mono text-slate-300">
              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 shrink-0" />
              <span>Offline Mobile Sync</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base lg:text-lg font-mono text-slate-300">
              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400 shrink-0" />
              <span>High-Scale Cloud APIs</span>
            </div>
          </div>
        </div>

        {/* Card 2: Location & Real-Time Availability */}
        <div className="pro-card rounded-3xl p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 mb-8">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-sky-400" />
            </div>
            <p className="text-xs sm:text-sm lg:text-base font-mono uppercase tracking-wider text-slate-400 mb-2">Base & Timezone</p>
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{personalInfo.location}</h4>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 mb-8">{personalInfo.timezone} • Remote Worldwide</p>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-sky-400" />
              <span className="font-mono text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide">
                {currentTime || 'Syncing...'}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-mono uppercase px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Open for Calls
            </span>
          </div>
        </div>

        {/* Card 3: Key Numerical Metrics (Spans all cols, 3 cols for the 3 stats) */}
        <div className="lg:col-span-3 pro-card rounded-3xl p-8 sm:p-12 lg:p-14 xl:p-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-center">
              <div className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-2 font-mono tracking-tight">
                {item.value}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-semibold text-slate-200">{item.label}</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-400 mt-1">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
