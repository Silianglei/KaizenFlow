import React from 'react';
import LegalNav from '../common/LegalNav/LegalNav';
import SectionBackground from '../common/SectionBackground';
import PrivacyContent from './PrivacyContent';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <LegalNav />
      <SectionBackground>
        <div className="pt-32 pb-16">
          <PrivacyContent />
        </div>
      </SectionBackground>
    </div>
  );
}