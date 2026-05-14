/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Loader from './components/Loader';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['hero', 'about', 'work', 'contact'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-hidden">
        <AnimatePresence>
          {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {/* Grain/Noise Overlay */}
        <div className="fixed inset-0 noise-overlay pointer-events-none z-[9998]" />
        
        <CustomCursor />
        <AudioPlayer />
        
        <Sidebar 
          activeSection={activeSection} 
          onNavigate={scrollToSection} 
        />
        
        <main className="pl-20 md:pl-24">
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </main>

        {/* Dynamic Background Accents */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-neon-cyan/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 -left-1/4 w-[50vw] h-[50vw] bg-neon-lime/5 rounded-full blur-[150px]" />
        </div>
      </div>
    </SmoothScroll>
  );
}
