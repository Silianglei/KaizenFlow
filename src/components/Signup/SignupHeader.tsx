import React from 'react';
import Logo from '../common/Logo/Logo';

export default function SignupHeader() {
  return (
    <nav className="fixed w-full z-50 bg-brand-dark/30 backdrop-blur-sm border-b border-brand-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-24">
          <Logo />
        </div>
      </div>
    </nav>
  );
}