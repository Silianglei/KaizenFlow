import React from 'react';
import { CircuitBoard } from 'lucide-react';

export default function LegalNav() {
  return (
    <nav className="fixed w-full z-50 bg-brand-dark/30 backdrop-blur-sm border-b border-brand-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-180">
              <CircuitBoard className="h-8 w-8 text-brand-primary" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
              KaizenFlow
            </span>
          </a>

          {/* Navigation Links */}
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
              href="https://fg8dqkk77s6.typeform.com/kaizenflow"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary hover:bg-brand-primary/20 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}