import React from 'react';
import PricingHeader from './PricingHeader';
import PricingTiers from './PricingTiers';
import SectionBackground from '../common/SectionBackground';

export default function Pricing() {
  return (
    <SectionBackground>
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingHeader />
          <PricingTiers />
        </div>
      </section>
    </SectionBackground>
  );
}