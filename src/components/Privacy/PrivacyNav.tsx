import React from 'react';
import { CircuitBoard } from 'lucide-react';

export default function PrivacyNav() {
  return (
    <nav className="fixed w-full z-50 bg-brand-dark/30 backdrop-blur-sm border-b border-brand-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <a href="/" className="flex items-center group">
            <CircuitBoard className="h-8 w-8 text-brand-primary" />
            <span className="ml-2 text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
              KaizenFlow
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}