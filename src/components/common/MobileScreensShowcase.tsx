import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ImagePreviewModal } from './ImagePreviewModal';

export interface MobileScreenItem {
  url: string;
  title: string;
  subtitle?: string;
}

interface MobileScreensShowcaseProps {
  screens: (string | MobileScreenItem)[];
  projectName?: string;
}

export const MobileScreensShowcase: React.FC<MobileScreensShowcaseProps> = ({
  screens,
  projectName = 'Mobile Application',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  // Normalize screens array to MobileScreenItem format
  const normalizedScreens: MobileScreenItem[] = screens.map((screen, idx) => {
    if (typeof screen === 'string') {
      const titles = [
        'Home & AI Assistant',
        'Course Catalog',
        'Digital Wallet (InstaPay)',
        'Student Leaderboard & XP',
      ];
      return {
        url: screen,
        title: titles[idx] || `Screen ${idx + 1}`,
        subtitle: `Page 0${idx + 1}`,
      };
    }
    return screen;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#07090e] border border-white/10 p-4 sm:p-6 lg:p-8">
      {/* 1. Navigation Controls */}
      <div className="flex items-center justify-end mb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* 2. Side-By-Side Vertical Phone Mockups Container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-5 sm:gap-7 lg:gap-8 overflow-x-auto pb-4 pt-1 px-2 scroll-smooth scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent snap-x snap-mandatory"
        style={{ scrollbarWidth: 'thin' }}
      >
        {normalizedScreens.map((screen, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 snap-center group/phone cursor-pointer"
            onClick={() => setPreviewIndex(idx)}
          >
            {/* Clean Vertical Image (Without Phone Chassis / Frame) */}
            <div className="relative w-[190px] sm:w-[220px] md:w-[240px] h-[420px] sm:h-[480px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover/phone:scale-[1.03] bg-black">
              <img
                src={screen.url}
                alt={screen.title}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />

              {/* Hover Quick Zoom Pill */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] opacity-0 group-hover/phone:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-3 py-1.5 rounded-full bg-white text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 shadow-xl">
                  <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Preview</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Cinematic Full-Screen Preview Modal */}
      <ImagePreviewModal
        isOpen={previewIndex !== null}
        onClose={() => setPreviewIndex(null)}
        images={normalizedScreens}
        initialIndex={previewIndex ?? 0}
        projectTitle={projectName}
      />
    </div>
  );
};
