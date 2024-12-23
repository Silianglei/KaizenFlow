import React from 'react';
import { CircuitBoard, Check, ArrowRight } from 'lucide-react';

const features = [
  'Access your custom AI phone system dashboard',
  'View real-time call analytics and insights',
  'Manage your account settings and preferences',
  'Get 24/7 priority support from our team'
];

const stats = [
  { value: '40+', label: 'Hours Saved Weekly' },
  { value: '60%', label: 'Cost Reduction' },
  { value: '100%', label: 'Call Answer Rate' }
];

export default function SignInContent() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-12">
        <CircuitBoard className="h-10 w-10 text-brand-primary" />
        <span className="text-2xl font-bold text-white">Kaizen Flow</span>
      </div>

      <div className="flex-1">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Your
          <span className="block text-brand-primary mt-2">AI Phone System</span>
        </h1>

        <p className="text-lg text-brand-light mb-12">
          Access your dashboard to view insights, manage settings, and optimize your 
          automated phone support system.
        </p>

        <div className="space-y-4 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 p-1 bg-brand-primary/10 rounded-full">
                <Check className="h-5 w-5 text-brand-primary" />
              </div>
              <span className="text-white">{feature}</span>
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