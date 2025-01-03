import React from 'react';

export default function SolutionsHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">INDUSTRY SOLUTIONS</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Voice AI That Works<br />
        <span className="text-brand-primary">For Your Business</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        From handling incoming customer calls to proactive outbound engagement, 
        our AI agents transform how businesses communicate
      </p>
    </div>
  );
}