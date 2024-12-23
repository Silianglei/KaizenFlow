import React from 'react';

export default function PricingHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">TRANSPARENT PRICING</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Simple, Clear Pricing<br />
        <span className="text-brand-primary">No Hidden Fees</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        Start with a one-time build backed by our satisfaction guarantee. 
        Then only pay for what you use with our flexible monthly service.
      </p>
    </div>
  );
}