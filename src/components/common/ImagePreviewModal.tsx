import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface PreviewImageItem {
  url: string;
  title?: string;
  subtitle?: string;
  category?: string;
}

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: (string | PreviewImageItem)[];
  initialIndex?: number;
  projectTitle?: string;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Normalize images to PreviewImageItem
  const normalizedImages: PreviewImageItem[] = images.map((img, idx) => {
    if (typeof img === 'string') {
      return {
        url: img,
        title: `Asset 0${idx + 1}`,
      };
    }
    return img;
  });

  // Sync index whenever initialIndex or isOpen changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard controls: Escape to close, Arrows to navigate
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : normalizedImages.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev < normalizedImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, normalizedImages.length]);

  if (!isOpen || normalizedImages.length === 0) return null;

  const currentItem = normalizedImages[currentIndex] || normalizedImages[0];
  const hasMultiple = normalizedImages.length > 1;

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev < normalizedImages.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : normalizedImages.length - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 select-none"
        >
          {/* Floating Exit Button Only (زرار خروج فقط) */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 sm:p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-2xl flex items-center justify-center group"
            aria-label="Exit preview"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Main Stage (Viewport Image with Navigation) */}
          <div className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto">
            {/* Left Arrow */}
            {hasMultiple && (
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:left-6 z-30 p-3 sm:p-4 rounded-2xl bg-black/60 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-2xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}

            {/* Centered Image (No outer frame, pure clean image) */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-full flex items-center justify-center"
            >
              <motion.img
                key={currentItem.url}
                src={currentItem.url}
                alt="Preview"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="max-h-[88vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl select-none"
              />
            </div>

            {/* Right Arrow */}
            {hasMultiple && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:right-6 z-30 p-3 sm:p-4 rounded-2xl bg-black/60 hover:bg-black/90 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-2xl"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
