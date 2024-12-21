import React from 'react';
import MountainLayer from '../Hero/MountainLayer';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionBackground({ children, className = '' }: SectionBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-radial from-brand-dark via-brand-dark/95 to-black/70" />
      
      <MountainLayer 
        speed={90}
        color="#86C232"
        className="opacity-[0.07]"
      />
      
      <MountainLayer 
        speed={60}
        color="#86C232"
        className="opacity-[0.05] translate-x-1/4"
      />
      
      <div className="relative">{children}</div>
    </div>
  );
}