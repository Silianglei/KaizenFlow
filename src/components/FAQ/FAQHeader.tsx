import React from 'react';

export default function FAQHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">COMMON QUESTIONS</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Everything You Need<br />
        <span className="text-brand-primary">To Know</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        Get answers to common questions about our Voice AI technology and how it can transform your business
      </p>
    </div>
  );
}