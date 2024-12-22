import React from 'react';
import { CircuitBoard } from 'lucide-react';

export default function Logo() {
  return (
    <a 
      href="/"
      className="flex items-center cursor-pointer group" 
    >
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-180">
        <CircuitBoard className="h-8 w-8 text-brand-primary" />
      </div>
      <div className="ml-2 text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
        Kaizen Flow
      </div>
    </a>
  );
}