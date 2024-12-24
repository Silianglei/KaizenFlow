import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PricingCTA() {
  return (
    <div className="md:col-span-2 mt-12 text-center">
      <a 
        href="/chat"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5 transition-all hover:scale-[1.02]"
      >
        <div className="relative flex items-center gap-4 rounded-[6px] bg-brand-dark px-8 py-4 transition-all group-hover:bg-opacity-0">
          <span className="text-xl font-semibold text-brand-primary group-hover:text-brand-dark">
            Get Started
          </span>
          <ArrowRight className="w-5 h-5 text-brand-primary group-hover:text-brand-dark group-hover:translate-x-1 transition-all" />
        </div>
      </a>
      
      <p className="mt-4 text-sm text-brand-light">
        Free consultation • 48-hour delivery • Money-back guarantee
      </p>
    </div>
  );
}