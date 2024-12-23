import React from 'react';
import { CircuitBoard, Check, ArrowRight } from 'lucide-react';

const benefits = [
  'AI-powered phone system that handles calls 24/7',
  'Custom built for your business in 48 hours',
  '99% success rate guarantee or money back',
  'Zero upfront costs, pay monthly, cancel anytime'
];

const stats = [
  { value: '100+', label: 'Happy Clients' },
  { value: '99%', label: 'Success Rate' },
  { value: '24/7', label: 'Availability' }
];

export default function SignupContent() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-12">
        <CircuitBoard className="h-10 w-10 text-brand-primary" />
        <span className="text-2xl font-bold text-white">Kaizen Flow</span>
      </div>

      <div className="flex-1">
        <h1 className="text-4xl font-bold text-white mb-6">
          Transform Your Business
          <span className="block text-brand-primary mt-2">With Intelligent AI</span>
        </h1>

        <p className="text-lg text-brand-light mb-12">
          Join hundreds of businesses using Kaizen Flow to automate their phone support 
          and deliver exceptional customer service.
        </p>

        <div className="space-y-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 p-1 bg-brand-primary/10 rounded-full">
                <Check className="h-5 w-5 text-brand-primary" />
              </div>
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-brand-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-brand-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-12 border-t border-brand-gray/10">
        <a 
          href="/"
          className="inline-flex items-center gap-2 text-brand-light hover:text-brand-primary transition-colors group"
        >
          <ArrowRight className="h-4 w-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </a>
      </div>
    </div>
  );
}