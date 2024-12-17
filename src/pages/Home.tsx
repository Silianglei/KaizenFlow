import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import AboutTeam from '../components/AboutTeam';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <main className={`main-content pt-32`}>
        <Hero />
        <Features />
        <Process />
        <AboutTeam />
        <CTA />
      </main>
    </div>
  );
};

export default Home; 