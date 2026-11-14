import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-sky-400 mb-2 sm:mb-3">
          Professional Trajectory
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Experience & Industry Milestones.
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-white/10 ml-3 sm:ml-8 md:ml-12 pl-5 sm:pl-10 md:pl-14 space-y-8 sm:space-y-10">
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
            <div className="absolute -left-[31px] sm:-left-[51px] md:-left-[67px] top-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0a0b0e] border-2 border-slate-400 group-hover:border-sky-400 transition-colors">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400 block m-auto mt-0.5 group-hover:bg-sky-400 transition-colors" />
            </div>

            {/* Card */}
            <div className="pro-card rounded-2xl p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-slate-300 font-mono mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-400 font-mono">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3 my-5">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-slate-300 font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 sm:px-3 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/5"
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
