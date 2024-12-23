import React from 'react';
import { Clock, Phone, Zap } from 'lucide-react';

const stats = [
  { icon: Clock, label: '48-Hour Build Time' },
  { icon: Phone, label: '99% Resolution Rate' },
  { icon: Zap, label: 'Instant Setup' }
];

export default function PricingStats() {
  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-light">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}