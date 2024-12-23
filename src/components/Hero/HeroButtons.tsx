import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full max-w-2xl">
        <a 
          href="/signup"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5 transition-all hover:scale-105"
        >
          <div className="relative flex items-center gap-4 rounded-[10px] bg-brand-dark px-8 py-6 transition-all group-hover:bg-opacity-0">
            <Calendar className="w-6 h-6 text-brand-primary group-hover:text-brand-dark" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-brand-primary group-hover:text-brand-dark">
                Book Your Free Design Call
              </span>
              <span className="text-sm text-brand-light group-hover:text-brand-dark/80 mt-2">
                45-Min Consultation • Custom Solution Design • No Obligation
              </span>
            </div>
            <ArrowRight className="w-6 h-6 text-brand-primary group-hover:text-brand-dark group-hover:translate-x-1 transition-all" />
          </div>
        </a>
      </div>
    </div>
  );
}