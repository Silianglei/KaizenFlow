import React from 'react';
import Navbar from '../Navbar';
import IntroAnimation from '../IntroAnimation';
import Hero from '../Hero';
import Features from '../Features';
import Process from '../Process';
import AboutTeam from '../AboutTeam';
import CTA from '../CTA';
import { Footer } from '../Footer';

interface AppLayoutProps {
  mounted: boolean;
  navVisible: boolean;
  contentVisible: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  mounted,
  navVisible,
  contentVisible
}) => {
  const handleScrollTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {mounted && <IntroAnimation />}
      <div className="min-h-screen bg-brand-dark">
        <div className={`${navVisible ? '' : 'nav-hidden'}`}>
          <Navbar />
        </div>
        <main className={`main-content pt-32 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Hero />
          <Features />
          <Process />
          <AboutTeam />
          <CTA />
        </main>
      </div>
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
};