import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroButtons from './HeroButtons';
import HeroBenefits from './HeroBenefits';
import HeroBackground from './HeroBackground';
import TrustedBy from './TrustedBy/TrustedBy';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      <HeroBackground />
      
      <div className="relative max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8">
            <span className="text-brand-primary font-medium">FREE CUSTOM-BUILT AI PHONE SYSTEM IN 48 HOURS ★</span>
          </div>
          
          <HeroHeadline />
          
          <div className="flex flex-col items-center">
            <HeroButtons />
            <p className="mt-6 text-brand-light">
              <span className="text-brand-primary">★</span> 99% Caller Resolution Rate or Get a Full Monthly Refund <span className="text-brand-primary">★</span>
            </p>
          </div>

          <TrustedBy />
          <HeroBenefits />
        </div>
      </div>
    </div>
  );
}