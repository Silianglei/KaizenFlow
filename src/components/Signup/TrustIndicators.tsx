import React from 'react';
import { Users } from 'lucide-react';

const industries = ['Healthcare', 'Real Estate', 'Legal', 'Property Management', 'and more'];

export default function TrustIndicators() {
  return (
    <div className="mt-12 pt-12 border-t border-brand-gray/20">
      <div className="flex items-center gap-3 mb-6">
        <Users className="h-6 w-6 text-brand-primary" />
        <span className="text-xl font-semibold text-white">
          Join <span className="text-brand-primary">100+</span> Growing Businesses
        </span>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {industries.map((industry, index) => (
          <div 
            key={index}
            className={`text-brand-light/70 hover:text-white/90 transition-colors ${
              index === industries.length - 1 ? 'italic' : ''
            }`}
          >
            {industry}
          </div>
        ))}
      </div>
    </div>
  );
}