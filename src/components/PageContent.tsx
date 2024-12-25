import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Solutions from './Solutions/Solutions';
import Onboarding from './Onboarding/Onboarding';
import Team from './Team/Team';
import FAQ from './FAQ/FAQ';
import CTA from './CTA/CTA';
import Footer from './Footer/Footer';

export default function PageContent() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <Solutions />
      <Onboarding />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}