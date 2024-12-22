import React from 'react';
import { Building2 } from 'lucide-react';

export default function TrustedBy() {
  return (
    <div className="mt-16 text-center">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Building2 className="w-6 h-6 text-brand-primary" />
        <span className="text-xl font-semibold text-white">
          Trusted by <span className="text-brand-primary">100+</span> Business Owners
        </span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
        {['Property Management', 'Healthcare', 'Legal', 'Real Estate'].map((industry, index) => (
          <div 
            key={index}
            className="text-brand-light/70 font-medium hover:text-white/90 transition-colors"
          >
            {industry}
          </div>
        ))}
      </div>
    </div>
  );
}