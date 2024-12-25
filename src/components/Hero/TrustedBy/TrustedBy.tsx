import React from 'react';
import { Rocket } from 'lucide-react';

export default function TrustedBy() {
  return (
    <div className="mt-16 text-center px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-1">
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
          <span className="text-lg sm:text-xl font-semibold text-white">
            Stay Ahead of the Competition
          </span>
        </div>
      </div>
      
      <p className="mt-4 text-brand-light max-w-2xl mx-auto">
        By 2025, 75% of businesses will use AI for customer interactions. 
        Get your free custom AI phone system today and lead your industry.
      </p>
    </div>
  );
}