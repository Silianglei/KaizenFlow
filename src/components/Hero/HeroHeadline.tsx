import React from 'react';

export default function HeroHeadline() {
  return (
    <div className="mb-12">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Intelligent AI That Transforms
        <span className="text-brand-primary block mt-2">Your Phone Support</span>
      </h1>
      
      <p className="max-w-3xl mx-auto text-xl text-brand-light">
        Automate both inbound and outbound calls with AI agents that sound natural, 
        understand context, and deliver results. From customer service to lead generation, 
        our Voice AI handles calls with exceptional quality and reliability.
      </p>
    </div>
  );
}