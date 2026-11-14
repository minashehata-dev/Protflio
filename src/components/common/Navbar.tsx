import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile/tablet menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Disciplines', href: '#disciplines' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Immediately release body scroll lock so browser can scroll freely
    document.body.style.overflow = '';

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Wait 50ms for menu drawer collapse to not distort scroll positioning
      setTimeout(() => {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - navbarHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 50);

      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 py-3.5 sm:py-4 2xl:py-5 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0a0b0e]/95 backdrop-blur-md border-b border-white/15 shadow-2xl shadow-black/60'
          : 'bg-[#0a0b0e]/90 backdrop-blur-md border-b border-white/10'
      }`}
    >
      {/* 3-Column Bulletproof Flex Layout (Prevents any overlap or text collision) */}
      <div className="w-full px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-14 3xl:px-20 flex items-center justify-between">
        
        {/* Left Column: Brand Logo (shrink-0 guarantees it never gets compressed) */}
        <div className="flex items-center shrink-0">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 text-white group cursor-pointer"
          >
            <span
              translate="no"
              className="notranslate font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-sky-300 transition-colors"
            >
              MS<span className="text-sky-400">.</span>
            </span>
            {/* Name displays on tablet, laptop & desktop screens */}
            <div className="hidden md:flex items-center text-left pl-3 border-l-2 border-white/15">
              <span
                translate="no"
                className="notranslate font-bold text-xs md:text-sm text-white leading-tight"
              >
                {personalInfo.name}
              </span>
            </div>
          </a>
        </div>

        {/* Center Column: Nav Links (Visible on Laptop & Desktop >= lg 1024px) */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 lg:mx-6 min-w-0">
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs sm:text-sm font-medium text-white hover:text-sky-300 transition-colors relative py-1 group whitespace-nowrap tracking-wide cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>

        {/* Right Column: Action Controls (shrink-0 guarantees button never collides with links) */}
        <div className="flex items-center justify-end shrink-0 gap-2.5 sm:gap-3.5">
          {/* Consultation CTA Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-200 transition-all shadow-md hover:shadow-sky-500/10 hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
          </a>

          {/* Mobile & Tablet Hamburger Toggle (Active on < lg screens) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 sm:p-2.5 rounded-xl text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-Width Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0c0d12]/98 backdrop-blur-2xl border-b border-white/15 shadow-2xl overflow-hidden"
          >
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 sm:px-10 py-6 flex flex-col gap-3">
              {/* Profile Bar in Mobile Menu */}
              <div className="flex items-center gap-3 pb-4 mb-2 border-b border-white/10">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-10 h-10 rounded-xl object-cover border border-white/15"
                />
                <div>
                  <div className="font-bold text-sm text-white">{personalInfo.name}</div>
                </div>
              </div>

              {/* Links list */}
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="py-3 px-4 rounded-xl text-base sm:text-lg font-semibold text-slate-200 hover:text-sky-400 hover:bg-white/5 transition flex items-center justify-between cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-500 text-sm">→</span>
                  </a>
                ))}
              </div>

              {/* Quick Contact Actions in Drawer */}
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full py-3 px-5 rounded-xl bg-white text-slate-950 font-bold text-center text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-slate-200 transition shadow-md cursor-pointer"
                >
                  <span>Request Technical Consultation</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </a>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span className="truncate">Email</span>
                  </a>
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-400"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
