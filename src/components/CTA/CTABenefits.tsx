import React from 'react';
import { PhoneCall, Zap, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: PhoneCall,
    title: 'Never Miss a Call',
    description: 'AI agents answer instantly, 24/7/365'
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Custom system ready in 48 hours'
  },
  {
    icon: LineChart,
    title: 'Scale On Demand',
    description: 'Handle unlimited concurrent calls'
  }
];

export default function CTABenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div 
            key={index}
            className="group bg-brand-gray/10 p-6 rounded-xl border border-brand-gray/20 hover:border-brand-primary/30 transition-all text-center"
          >
            <div className="inline-flex p-3 bg-brand-primary/10 rounded-xl mb-4 group-hover:bg-brand-primary/20 transition-colors">
              <Icon className="h-6 w-6 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-primary transition-colors">
              {benefit.title}
            </h3>
            <p className="text-brand-light">
              {benefit.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}