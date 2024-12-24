import React from 'react';
import { handleNavClick } from '../../utils/scrollUtils';

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center justify-end space-x-8">
      <button 
        onClick={() => handleNavClick('Solutions')}
        className="text-brand-light hover:text-white transition-colors"
      >
        Solutions
      </button>
      <button 
        onClick={() => handleNavClick('How It Works')}
        className="text-brand-light hover:text-white transition-colors"
      >
        How It Works
      </button>
      <button 
        onClick={() => handleNavClick('Pricing')}
        className="text-brand-light hover:text-white transition-colors"
      >
        Pricing
      </button>
      <button 
        onClick={() => handleNavClick('Team')}
        className="text-brand-light hover:text-white transition-colors"
      >
        Team
      </button>
      <a 
        href="/chat"
        className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary hover:bg-brand-primary/20 transition-colors"
      >
        Book Free Call
      </a>
    </div>
  );
}