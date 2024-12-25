import React from 'react';
import SignupForm from './SignupForm';
import SectionBackground from '../common/SectionBackground';
import SignupHeader from './SignupHeader';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <SignupHeader />
      
      <SectionBackground>
        <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
                <span className="text-brand-primary font-medium">FREE SETUP • NO RISK</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Transform Your Business<br />
                <span className="text-brand-primary">With Voice AI</span>
              </h1>
              <p className="text-lg text-brand-light">
                Get your custom AI phone system built for free.<br />
                Pay only when it's live and delivering results.
              </p>
            </div>
            
            <SignupForm />
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}