import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="flex flex-col items-center gap-6">
      <a 
        href="https://fg8dqkk77s6.typeform.com/kaizenflow"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5 transition-all hover:scale-105"
      >
        <div className="relative flex items-center gap-3 rounded-[6px] bg-brand-dark px-8 py-4 transition-all group-hover:bg-opacity-0">
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold text-brand-primary group-hover:text-brand-dark">
              Start Your Free 48-Hour Build
            </span>
            <span className="text-sm text-brand-light group-hover:text-brand-dark/80">
              $0 Upfront • Pay Monthly • Cancel Anytime
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-brand-primary group-hover:text-brand-dark group-hover:translate-x-1 transition-all" />
        </div>
      </a>
    </div>
  );
}