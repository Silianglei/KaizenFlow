import React from 'react';
import { handleNavClick } from '../../utils/scrollUtils';

export default function NavLinks() {
  const isPrivacyPage = window.location.pathname === '/privacy';

  const handleClick = (label: string) => {
    if (isPrivacyPage) {
      window.location.href = '/#' + label.toLowerCase().replace(/\s+/g, '-');
    } else {
      handleNavClick(label);
    }
  };

  return (
    <div className="hidden md:flex justify-end space-x-12">
      <button 
        onClick={() => handleClick('Solutions')}
        className="text-brand-light hover:text-white transition-colors"
      >
        Solutions
      </button>
      <button 
        onClick={() => handleClick('How It Works')}
        className="text-brand-light hover:text-white transition-colors"
      >
        How It Works
      </button>
      <button 
        onClick={() => handleClick('About Us')}
        className="text-brand-light hover:text-white transition-colors"
      >
        Our Team
      </button>
    </div>
  );
}