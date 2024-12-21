import React from 'react';

export default function HeroHeadline() {
  return (
    <div className="mb-12">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Your Business Never Sleeps.<br />
        <span className="text-brand-primary">Neither Should Your Phone.</span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-xl text-brand-light">
        Get a custom AI phone system that handles all your calls 24/7,
        <br className="hidden md:block" /> so you can focus on growing your business.
      </p>
    </div>
  );
}