import React from 'react';

interface MountainLayerProps {
  className?: string;
  speed: number;
  color: string;
}

export default function MountainLayer({ className = '', speed, color }: MountainLayerProps) {
  return (
    <div 
      className={`absolute bottom-0 w-[200%] h-[70vh] bg-repeat-x ${className}`}
      style={{
        animation: `slide ${speed}s linear infinite`,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,600 L0,400 L200,350 L400,450 L600,380 L800,420 L1000,350 L1200,400 L1200,600 Z' fill='${encodeURIComponent(color)}' opacity='0.15'/%3E%3C/svg%3E")`,
        backgroundSize: '50% 100%'
      }}
    />
  );
}