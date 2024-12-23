import React from 'react';

export default function CTAHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">TRANSFORM YOUR BUSINESS</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Scale Your Support Team<br />
        <span className="text-brand-primary">With Intelligent AI</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-2xl mx-auto">
        Join businesses achieving 99% call resolution rates and complete coverage 
        with our custom-built AI phone system
      </p>
    </div>
  );
}