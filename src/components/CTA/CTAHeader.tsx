import React from 'react';

export default function CTAHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">FUTURE-PROOF YOUR BUSINESS</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        The Future of Business is AI-Powered<br />
        <span className="text-brand-primary">Start Your Journey Today</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-2xl mx-auto">
        Don't wait until AI adoption becomes mandatory. Get ahead of the curve and transform 
        your business communications while your competitors are still catching up.
      </p>
    </div>
  );
}