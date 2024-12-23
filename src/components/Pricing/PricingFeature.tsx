import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeatureProps {
  feature: string;
}

export default function PricingFeature({ feature }: PricingFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 p-1 bg-brand-primary/10 rounded-full">
        <Check className="h-4 w-4 text-brand-primary" />
      </div>
      <span className="text-white">{feature}</span>
    </div>
  );
}