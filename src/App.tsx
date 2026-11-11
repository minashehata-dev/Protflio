import React from 'react';
import { AmbientBackground } from './components/canvas/AmbientBackground';
import { Navbar } from './components/common/Navbar';
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
    <div className="relative min-h-screen bg-[#0a0b0e] text-slate-100 selection:bg-slate-700 selection:text-white">
      {/* Zero-Lag Ambient Background */}
      <AmbientBackground />

      {/* Fixed Full-Width Navigation (Always Visible at Top) */}
      <Navbar />

      {/* Main Content Sections with Top Padding for Fixed Large Navbar */}
      <main className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
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
