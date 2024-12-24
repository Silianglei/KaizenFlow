import React from 'react';
import { PhoneIncoming, PhoneOutgoing, Brain, Zap } from 'lucide-react';
import TrustedBy from './TrustedBy';

const benefits = [
  {
    icon: PhoneIncoming,
    title: 'Intelligent Conversations',
    description: 'AI agents that understand context and deliver human-like experiences'
  },
  {
    icon: Brain,
    title: 'Cognitive Intelligence',
    description: 'Advanced neural networks that learn and adapt to your business'
  },
  {
    icon: PhoneOutgoing,
    title: 'Proactive Engagement',
    description: 'Transform passive systems into active revenue generators'
  },
  {
    icon: Zap,
    title: 'Instant Implementation',
    description: 'Quick setup and seamless integration with your existing systems'
  }
];

export default function SignupBenefits() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-white">
          Transform Your Business with{' '}
          <span className="text-brand-primary">Voice AI</span>
        </h1>
        <p className="text-xl text-brand-light mt-4">
          Let's explore how AI-powered communication can revolutionize your customer experience
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={index}
              className="group bg-brand-gray/10 p-6 rounded-xl border border-brand-gray/20 hover:border-brand-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-brand-primary transition-colors">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-brand-light text-sm">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      <TrustedBy />
    </div>
  );
}