import React from 'react';

export default function CTAHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">FREE SETUP • PAY MONTHLY</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Start With Zero Risk<br />
        <span className="text-brand-primary">Pay Only When It's Live</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        We'll build your custom AI phone system for free. Once it's handling your calls 
        perfectly, continue with a simple monthly subscription that scales with your needs.
      </p>
    </div>
  );
}