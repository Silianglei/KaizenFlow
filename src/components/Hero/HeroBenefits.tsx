import React from 'react';
import { PhoneIncoming, PhoneOutgoing, Brain } from 'lucide-react';

const benefits = [
  {
    icon: PhoneIncoming,
    title: 'Smart Inbound Handling',
    description: '24/7 call answering with instant response and perfect routing'
  },
  {
    icon: PhoneOutgoing,
    title: 'Automated Outreach',
    description: 'Proactive lead engagement and appointment setting at scale'
  },
  {
    icon: Brain,
    title: 'Contextual Intelligence',
    description: 'Natural conversations that understand and adapt in real-time'
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