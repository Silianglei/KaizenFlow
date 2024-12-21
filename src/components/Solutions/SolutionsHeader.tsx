import React from 'react';

export default function SolutionsHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">INTELLIGENT CALL HANDLING</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Your AI Phone System,<br />
        <span className="text-brand-primary">Exactly How You Want It</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        Customize every aspect of your phone system with enterprise-grade AI that adapts
        to your unique business needs
      </p>
    </div>
  );
}