import React from 'react';
import { AmbientBackground } from './components/canvas/AmbientBackground';
import { Navbar } from './components/common/Navbar';
import { CustomCursor } from './components/common/CustomCursor';
import { Hero } from './components/sections/Hero';
import { Disciplines } from './components/sections/Disciplines';
import { TechMarquee } from './components/sections/TechMarquee';
import { BentoGrid } from './components/sections/BentoGrid';
import { Projects } from './components/sections/Projects';
import { ExperienceSection } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0b0e] text-slate-100 selection:bg-slate-700 selection:text-white overflow-x-hidden">
      {/* Precision Magnetic Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Zero-Lag Ambient Background */}
      <AmbientBackground />

      {/* Fixed Full-Width Navigation (Always Visible at Top) */}
      <Navbar />

      {/* Main Content Sections with Top Padding for Fixed Large Navbar */}
      <main className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-24">
        <Hero />
        <Disciplines />
        <TechMarquee />
        <BentoGrid />
        <Projects />
        <ExperienceSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
