import React from 'react';
import { onboardingSteps } from './onboardingData';
import OnboardingStep from './OnboardingStep';

export default function OnboardingTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary/50 to-transparent" />
        
        {/* Steps */}
        <div className="space-y-16">
          {onboardingSteps.map((step, index) => (
            <OnboardingStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === onboardingSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}