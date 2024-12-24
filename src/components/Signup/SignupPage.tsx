import React from 'react';
import SignupForm from './SignupForm';
import SignupBenefits from './SignupBenefits';
import SectionBackground from '../common/SectionBackground';
import SignupHeader from './SignupHeader';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <SignupHeader />
      
      <SectionBackground>
        <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hide benefits on mobile */}
              <div className="hidden lg:block">
                <SignupBenefits />
              </div>
              
              {/* Show a simplified header on mobile */}
              <div className="lg:hidden text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-4">
                  Transform Your Business with Voice AI
                </h1>
                <p className="text-brand-light">
                  Book your free consultation today
                </p>
              </div>
              
              <SignupForm />
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}