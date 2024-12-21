import React from 'react';
import { Check } from 'lucide-react';

interface OnboardingStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function OnboardingStep({ number, title, description, isLast }: OnboardingStepProps) {
  return (
    <div className="relative flex gap-8 items-start group">
      <div className="flex-shrink-0 w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center border-2 border-brand-primary group-hover:bg-brand-primary/20 transition-all">
        {isLast ? (
          <Check className="h-8 w-8 text-brand-primary" />
        ) : (
          <span className="text-2xl font-bold text-brand-primary">{number}</span>
        )}
      </div>
      
      <div className="flex-1 pt-3">
        <div className="bg-brand-gray/10 p-6 rounded-xl border border-brand-gray/20 group-hover:border-brand-primary/30 transition-all">
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-brand-primary transition-colors">
            {title}
          </h3>
          <p className="text-lg text-brand-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}