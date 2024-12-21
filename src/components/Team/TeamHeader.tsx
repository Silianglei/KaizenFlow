import React from 'react';

export default function TeamHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
        <span className="text-brand-primary font-medium">OUR MISSION</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Building Technology That<br />
        <span className="text-brand-primary">Makes a Difference</span>
      </h2>
      
      <p className="text-xl text-brand-light max-w-3xl mx-auto">
        We're on a mission to make advanced AI technology accessible to businesses of all sizes, 
        helping them deliver better customer experiences while reducing operational complexity
      </p>
    </div>
  );
}