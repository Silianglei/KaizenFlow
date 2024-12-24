import React from 'react';

export default function LegalNavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      <a 
        href="/privacy" 
        className="text-brand-light hover:text-white transition-colors"
      >
        Privacy Policy
      </a>
      <a 
        href="/terms" 
        className="text-brand-light hover:text-white transition-colors"
      >
        Terms of Service
      </a>
      <a 
        href="/chat"
        className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary hover:bg-brand-primary/20 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}