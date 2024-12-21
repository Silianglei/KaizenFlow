import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Solutions from './Solutions/Solutions';
import Onboarding from './Onboarding/Onboarding';
import Team from './Team/Team';
import CTA from './CTA/CTA';
import Footer from './Footer/Footer';
import VoiceflowChat from './Chat/VoiceflowChat';
import { TIMING, EASING } from '../utils/animationUtils';

interface PageContentProps {
  isVisible: boolean;
}

export default function PageContent({ isVisible }: PageContentProps) {
  if (!isVisible) return null;
  
  return (
    <div className="min-h-screen bg-brand-dark">
      <div 
        className="animate-slide-down"
        style={{
          animationDuration: `${TIMING.NAVBAR_SLIDE}ms`,
          animationTimingFunction: EASING.SMOOTH_OUT,
          animationDelay: '0ms' // Start immediately after logo
        }}
      >
        <Navbar />
      </div>
      
      <div 
        className="animate-slide-up"
        style={{
          animationDuration: `${TIMING.CONTENT_SLIDE}ms`,
          animationTimingFunction: EASING.SMOOTH_OUT,
          animationDelay: `${TIMING.NAVBAR_SLIDE}ms`, // Start after navbar finishes
          animationFillMode: 'backwards'
        }}
      >
        <Hero />
        <Solutions />
        <Onboarding />
        <Team />
        <CTA />
        <Footer />
        <VoiceflowChat />
      </div>
    </div>
  );
}