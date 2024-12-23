import React from 'react';
import { Shield, Zap, LineChart, Clock } from 'lucide-react';
import TrustedBy from './TrustedBy';

const benefits = [
  {
    icon: Clock,
    title: '48-Hour Delivery',
    description: 'Get your system live in just 2 days'
  },
  {
    icon: Shield,
    title: '99% Success Rate',
    description: 'Industry-leading resolution rate'
  },
  {
    icon: LineChart,
    title: 'Proven Results',
    description: 'Join 100+ growing businesses'
  },
  {
    icon: Zap,
    title: 'Instant ROI',
    description: 'Start saving from day one'
  }
];

export default function SignupBenefits() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Transform Your
          <span className="text-brand-primary block mt-2">
            Phone Support
          </span>
        </h1>
        <p className="text-xl text-brand-light">
          Book your free consultation today
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={index}
              className="group bg-brand-gray/10 p-6 rounded-xl border border-brand-gray/20 hover:border-brand-primary/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-medium text-white">{benefit.title}</h3>
              </div>
              <p className="text-brand-light">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      <TrustedBy />
    </div>
  );
}