import React from 'react';

export default function CTAHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">GUARANTEED SUCCESS RATE</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Transform Your Phone System<br />
        <span className="text-brand-primary">In Just 48 Hours</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-2xl mx-auto">
        Get your custom AI phone system built and deployed with zero upfront costs. 
        Only pay for what you use, with our 99% success rate guarantee.
      </p>
    </div>
  );
}