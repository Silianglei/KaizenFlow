import React from 'react';
import { Building2 } from 'lucide-react';
import AnimatedIndustry from './AnimatedIndustry';

export default function TrustedBy() {
  return (
    <div className="mt-16 text-center px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-1">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
          <span className="text-lg sm:text-xl font-semibold text-white">
            Trusted by <span className="text-brand-primary">100+</span> businesses
          </span>
        </div>
        
        <div className="flex items-center text-lg sm:text-xl font-semibold">
          <span className="text-white sm:ml-1">across</span>
          <AnimatedIndustry />
        </div>
      </div>
    </div>
  );
}