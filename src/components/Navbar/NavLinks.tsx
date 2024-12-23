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
        onClick={() => handleNavClick('About Us')}
        className="text-brand-light hover:text-white transition-colors"
      >
        Our Team
      </button>
    </div>
  );
}