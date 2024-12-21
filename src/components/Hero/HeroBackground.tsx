import React from 'react';
import MountainLayer from './MountainLayer';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-brand-dark via-brand-dark/95 to-black/70" />
      
      {/* Back layer */}
      <MountainLayer 
        speed={90}
        color="#86C232"
        className="opacity-20"
      />
      
      {/* Middle layer */}
      <MountainLayer 
        speed={60}
        color="#86C232"
        className="opacity-15 translate-x-1/4"
      />
      
      {/* Front layer */}
      <MountainLayer 
        speed={30}
        color="#86C232"
        className="opacity-10 -translate-x-1/4"
      />
    </div>
  );
}