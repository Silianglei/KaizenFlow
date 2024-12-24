import React from 'react';
import SignInForm from './SignInForm';
import SignInContent from './SignInContent';
import SectionBackground from '../common/SectionBackground';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <SectionBackground>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex w-full max-w-7xl bg-brand-gray/5 rounded-2xl border border-brand-gray/10 backdrop-blur-sm overflow-hidden">
            <div className="hidden lg:block lg:w-1/2 p-12 bg-gradient-to-br from-brand-primary/10 to-transparent">
              <SignInContent />
            </div>
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="lg:hidden mb-8">
                <div className="flex items-center justify-center gap-3">
                  <img 
                    src="/logo.svg" 
                    alt="Kaizen Flow Logo" 
                    className="h-20 w-20"
                  />
                  <span className="text-3xl font-bold text-white">Kaizen Flow</span>
                </div>
              </div>
              <SignInForm />
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}