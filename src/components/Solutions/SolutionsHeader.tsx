import React from 'react';

export default function SolutionsHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">TAILORED TO YOUR BUSINESS</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Custom Solutions That<br />
        <span className="text-brand-primary">Fit Your Business</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        Get an AI phone system customized to your unique business needs, 
        workflows, and customer interactions
      </p>
    </div>
  );
}