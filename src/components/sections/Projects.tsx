import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { featuredProjects } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { RunwayImage } from '../common/RunwayImage';
import { RunwayReel } from './RunwayReel';
import { MobileScreensShowcase } from '../common/MobileScreensShowcase';
import { ImagePreviewModal } from '../common/ImagePreviewModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Mobile', 'Web', 'Embedded'];

  const filtered = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 w-full">
      {/* 1. Header & Rive Layout Controls (Fill width with responsive clamping) */}
      <div className="w-full max-w-[1920px] 3xl:max-w-[2200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-16">
          <div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-sky-400 mb-2 sm:mb-3">
              Selected Case Studies
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Commercial Systems & Deployments.
            </h2>
          </div>

          {/* Category Filter Pills (Rive Hug Sizing Mode) */}
          <div className="flex flex-wrap gap-2 mt-5 md:mt-0 p-1.5 rounded-xl subtle-badge bg-black/40 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-white text-slate-900 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Rive Layout Grid (Fill tracks on Tablet & Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Runway Live Media Showcase Reel */}
      <div className="mt-12 sm:mt-16">
        <RunwayReel />
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [activeImage, setActiveImage] = useState(project.image);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const isMobileMultiScreen = Boolean(project.category === 'Mobile' && project.screenshots && project.screenshots.length > 1);

  useEffect(() => {
    setActiveImage(project.image);
  }, [project.image]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={`pro-card rounded-3xl overflow-hidden flex flex-col justify-between group h-full ${
        isMobileMultiScreen ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      {/* Visual Showcase Container */}
      {isMobileMultiScreen && project.screenshots ? (
        <div className="p-3 sm:p-5 lg:p-6 pb-0">
          <MobileScreensShowcase
            screens={project.screenshots}
            projectName={project.title}
          />
        </div>
      ) : (
        <div className="p-4 sm:p-5 pb-0">
          <div className="relative">
            <RunwayImage
              src={activeImage}
              alt={project.title}
              aspectRatio="aspect-[16/10]"
              objectPosition="object-top"
              badgeText={`${project.category.toUpperCase()} 4K`}
              onClick={() => setIsPreviewOpen(true)}
            />

            {/* Metrics Pill (Rive Hug Mode) */}
            {project.metrics && (
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono bg-black/80 backdrop-blur-md text-emerald-400 border border-white/10 shadow-lg">
                  <TrendingUp className="w-4 h-4" />
                  <span>{project.metrics}</span>
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail switcher for multi-screen non-mobile cards (e.g. Web project) */}
          {project.screenshots && project.screenshots.length > 1 && !isMobileMultiScreen && (
            <div className="flex items-center gap-2.5 mt-3.5 px-1">
              {project.screenshots.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-14 sm:w-16 h-10 sm:h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImage === imgUrl
                      ? 'border-sky-400 scale-105 shadow-md shadow-sky-500/20'
                      : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Screen ${idx + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Cinematic Full-Screen Preview Modal */}
      {!isMobileMultiScreen && (
        <ImagePreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          images={project.screenshots || [{ url: activeImage }]}
          initialIndex={
            project.screenshots
              ? Math.max(0, project.screenshots.indexOf(activeImage))
              : 0
          }
          projectTitle={project.title}
        />
      )}

      {/* Content (Rive Fill Mode with Adaptive Constraints) */}
      <div className="p-5 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mb-3">{project.tagline}</p>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-5">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech tags (Rive Hug Items) */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 sm:px-3 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.05] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links (Rive Row Alignment) */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-4 border-t border-white/5 text-xs sm:text-sm lg:text-base font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-sky-400 transition"
              >
                <span>Live Implementation</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
