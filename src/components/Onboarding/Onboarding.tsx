import React from 'react';
import OnboardingHeader from './OnboardingHeader';
import OnboardingTimeline from './OnboardingTimeline';
import SectionBackground from '../common/SectionBackground';

export default function Onboarding() {
  return (
    <SectionBackground>
      <section id="simple-onboarding-process" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OnboardingHeader />
          <OnboardingTimeline />
        </div>
      </section>
    </SectionBackground>
  );
}