import React from 'react';
import { Building2 } from 'lucide-react';

const industries = [
  'Healthcare',
  'Real Estate',
  'Legal Services',
  'Property Management',
  'Financial Services'
];

export default function TrustedBy() {
  return (
    <div className="mt-12 pt-12 border-t border-brand-gray/20">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="h-6 w-6 text-brand-primary" />
        <span className="text-xl font-semibold text-white">
          Trusted by <span className="text-brand-primary">100+</span> Growing Businesses
        </span>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {industries.map((industry, index) => (
          <div 
            key={index}
            className="text-brand-light/70 hover:text-white/90 transition-colors"
          >
            {industry}
          </div>
        ))}
      </div>
    </div>
  );
}