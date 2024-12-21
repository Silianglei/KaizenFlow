import React from 'react';
import LegalNav from '../common/LegalNav/LegalNav';
import SectionBackground from '../common/SectionBackground';
import TermsContent from './TermsContent';

export default function Terms() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <LegalNav />
      <SectionBackground>
        <div className="pt-32 pb-16">
          <TermsContent />
        </div>
      </SectionBackground>
    </div>
  );
}