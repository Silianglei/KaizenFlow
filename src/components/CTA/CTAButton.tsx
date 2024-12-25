import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTAButton() {
  return (
    <div className="flex justify-center mb-16">
      <a 
        href="/chat"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5 transition-all hover:scale-105"
      >
        <div className="relative flex items-center gap-4 rounded-[10px] bg-brand-dark px-8 py-6 transition-all group-hover:bg-opacity-0">
          <Calendar className="w-6 h-6 text-brand-primary group-hover:text-brand-dark" />
          <span className="text-2xl font-bold text-brand-primary group-hover:text-brand-dark">
            Get Started For Free
          </span>
          <ArrowRight className="w-6 h-6 text-brand-primary group-hover:text-brand-dark group-hover:translate-x-1 transition-all" />
        </div>
      </a>
    </div>
  );
}