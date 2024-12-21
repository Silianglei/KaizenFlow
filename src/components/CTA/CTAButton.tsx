import React from 'react';
import { ArrowRight, Clock, Shield, DollarSign } from 'lucide-react';

export default function CTAButton() {
  return (
    <div className="flex flex-col items-center mb-16">
      <a 
        href="https://fg8dqkk77s6.typeform.com/kaizenflow"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5 transition-all hover:scale-105"
      >
        <div className="relative flex items-center gap-4 rounded-[10px] bg-brand-dark px-8 py-6 transition-all group-hover:bg-opacity-0">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-brand-primary group-hover:text-brand-dark">
              Start Your 48-Hour Build Now
            </span>
            <span className="text-brand-light group-hover:text-brand-dark/80 mt-2">
              $0 Upfront • Pay Monthly • Cancel Anytime
            </span>
          </div>
          <ArrowRight className="w-6 h-6 text-brand-primary group-hover:text-brand-dark group-hover:translate-x-1 transition-all" />
        </div>
      </a>

      <div className="flex items-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-brand-primary" />
          <span className="text-brand-light">48-Hour Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-brand-primary" />
          <span className="text-brand-light">99% Success Rate</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-brand-primary" />
          <span className="text-brand-light">Money-Back Guarantee</span>
        </div>
      </div>
    </div>
  );
}