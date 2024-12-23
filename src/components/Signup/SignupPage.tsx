import React from 'react';
import SignupForm from './SignupForm';
import SignupBenefits from './SignupBenefits';
import Logo from '../Navbar/Logo';
import SectionBackground from '../common/SectionBackground';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <nav className="fixed w-full z-50 bg-brand-dark/30 backdrop-blur-sm border-b border-brand-gray/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <Logo />
        </div>
      </nav>
      
      <SectionBackground>
        <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SignupBenefits />
              <SignupForm />
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}