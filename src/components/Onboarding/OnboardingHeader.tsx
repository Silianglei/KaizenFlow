import React from 'react';

export default function OnboardingHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">48-HOUR SETUP GUARANTEE</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        From Concept to Calls<br />
        <span className="text-brand-primary">In Just 48 Hours</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        Our streamlined process gets your custom AI phone system up and running fast,
        with continuous improvements to match your evolving needs
      </p>
    </div>
  );
}