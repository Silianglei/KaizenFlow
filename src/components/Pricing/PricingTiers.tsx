import React from 'react';
import PricingFeature from './PricingFeature';
import PricingCTA from './PricingCTA';

const buildFeatures = [
  'Customized to Your Business Needs',
  'Full CRM Integration',
  'Personalized Voice & Branding',
  'Dedicated Phone Number',
  'Complete System Testing',
  '100% Satisfaction Guarantee'
];

const monthlyFeatures = [
  '750 Minutes Included',
  'Unlimited Concurrent Calls',
  'Real-Time Call Analytics',
  'Weekly Performance Reports',
  'Automatic System Updates',
  'Priority Technical Support'
];

export default function PricingTiers() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Build Cost */}
      <div className="bg-brand-gray/10 rounded-2xl border border-brand-gray/20 overflow-hidden transform hover:scale-[1.02] transition-transform">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Initial Build</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-brand-primary">Custom</span>
            <span className="text-brand-light">one-time</span>
          </div>
          <p className="text-sm text-brand-primary mb-2">100% Money-Back Guarantee</p>
          <p className="text-sm text-brand-light mb-6">
            Tailored pricing based on your specific needs and scale
          </p>
          
          <p className="text-brand-light mb-8">
            Your complete custom AI phone system, built and deployed in 48 hours
          </p>

          <div className="space-y-4">
            {buildFeatures.map((feature, index) => (
              <PricingFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Service */}
      <div className="bg-brand-gray/10 rounded-2xl border border-brand-gray/20 overflow-hidden transform hover:scale-[1.02] transition-transform">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Monthly Service</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-brand-primary">$299</span>
            <span className="text-brand-light">/month</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <p className="text-sm text-brand-primary">Save 10% annually</p>
            <span className="text-sm text-brand-light">•</span>
            <p className="text-sm text-brand-light">Cancel anytime</p>
          </div>
          
          <div className="space-y-4 mb-8">
            {monthlyFeatures.map((feature, index) => (
              <PricingFeature key={index} feature={feature} />
            ))}
          </div>

          <div className="bg-brand-gray/10 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Additional Usage</h4>
            <div className="flex justify-between text-sm">
              <span className="text-brand-light">Minutes over 750</span>
              <span className="text-brand-primary">$0.20/minute</span>
            </div>
          </div>
        </div>
      </div>

      <PricingCTA />
    </div>
  );
}