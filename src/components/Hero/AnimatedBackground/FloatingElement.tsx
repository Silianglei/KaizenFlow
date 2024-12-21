import React from 'react';

interface FloatingElementProps {
  icon: React.ReactNode;
  className?: string;
}

export default function FloatingElement({ icon, className = '' }: FloatingElementProps) {
  return (
    <div className={`absolute opacity-10 ${className}`}>
      {icon}
    </div>
  );
}