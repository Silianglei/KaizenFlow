import React from 'react';
import CTAHeader from './CTAHeader';
import CTAButton from './CTAButton';
import CTABenefits from './CTABenefits';
import SectionBackground from '../common/SectionBackground';

export default function CTA() {
  return (
    <SectionBackground>
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <CTAHeader />
            <CTAButton />
            <CTABenefits />
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}