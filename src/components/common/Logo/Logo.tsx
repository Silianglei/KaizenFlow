import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <a 
      href="/"
      className={`flex items-center gap-2 group ${className}`}
    >
      <img 
        src="/logo.svg" 
        alt="Kaizen Flow" 
        className="h-16 w-16"
      />
      <span className="text-2xl font-bold text-white font-montserrat tracking-tight group-hover:text-brand-primary transition-colors">
        Kaizen Flow
      </span>
    </a>
  );
}