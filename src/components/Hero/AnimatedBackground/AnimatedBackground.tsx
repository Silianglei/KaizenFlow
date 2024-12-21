import React from 'react';
import MountainLayer from './MountainLayer';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-brand-dark via-brand-dark to-black/50" />
      
      {/* Back mountain layer - lightest and slowest */}
      <MountainLayer 
        speed={60}
        color="#6B6E70"
        className="translate-y-32 scale-150"
      />
      
      {/* Middle mountain layer */}
      <MountainLayer 
        speed={45}
        color="#474B4F"
        className="translate-y-16 scale-125"
      />
      
      {/* Front mountain layer - darkest and fastest */}
      <MountainLayer 
        speed={30}
        color="#222629"
        className="scale-110"
      />
    </div>
  );
}