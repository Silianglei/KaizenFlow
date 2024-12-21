import React from 'react';
import { Clock, DollarSign, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save 40+ Hours/Week',
    description: 'Never miss a call or waste time on repetitive phone tasks'
  },
  {
    icon: DollarSign,
    title: 'Cut Costs by 60%',
    description: 'Reduce overhead while maintaining 24/7 professional support'
  },
  {
    icon: LineChart,
    title: 'Scale Instantly',
    description: 'Handle unlimited concurrent calls without hiring'
  }
];

export default function HeroBenefits() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div 
            key={index} 
            className="group bg-brand-gray/10 p-6 rounded-xl backdrop-blur-sm border border-brand-gray/20 hover:border-brand-primary/30 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                <Icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-white font-medium">{benefit.title}</h3>
            </div>
            <p className="text-brand-light">{benefit.description}</p>
          </div>
        );
      })}
    </div>
  );
}