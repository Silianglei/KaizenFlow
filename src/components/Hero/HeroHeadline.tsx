import React from 'react';

export default function HeroHeadline() {
  return (
    <div className="mb-12">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Your Business Never Sleeps.<br />
        <span className="text-brand-primary">Neither Should Your Phone.</span>
      </h1>
      
      <p className="max-w-3xl mx-auto text-xl text-brand-light">
        Transform your business with an AI phone system that delivers 100% call coverage, 
        99% resolution rate, and 24/7 availability - or your money back.
      </p>
    </div>
  );
}