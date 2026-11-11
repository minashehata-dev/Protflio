import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-36 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20 lg:mb-24">
        <p className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-sky-400 mb-3 sm:mb-4">
          Professional Trajectory
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
          Experience & Industry Milestones.
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-10 md:ml-12 pl-8 sm:pl-12 md:pl-14 space-y-12 sm:space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Minimalist Node */}
            <div className="absolute -left-[41px] sm:-left-[57px] md:-left-[65px] top-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0a0b0e] border-2 border-slate-400 group-hover:border-sky-400 transition-colors">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-400 block m-auto mt-1 group-hover:bg-sky-400 transition-colors" />
            </div>

            {/* Card */}
            <div className="pro-card rounded-3xl p-8 sm:p-10 lg:p-12 xl:p-14">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base sm:text-lg lg:text-xl font-semibold text-slate-300 font-mono mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base lg:text-lg text-slate-400 font-mono">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-4 my-8">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-300 font-light leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-6 border-t border-white/5">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm lg:text-base font-mono text-slate-300 bg-white/[0.04] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
