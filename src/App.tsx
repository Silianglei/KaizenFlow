import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import IntroAnimation from './components/IntroAnimation';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import AboutTeam from './components/AboutTeam';
import CTA from './components/CTA';

function App() {
  const [mounted, setMounted] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setNavVisible(true);
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }, 800);
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;