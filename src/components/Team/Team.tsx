import React from 'react';
import TeamHeader from './TeamHeader';
import TeamFounder from './TeamFounder';
import SectionBackground from '../common/SectionBackground';

export default function Team() {
  return (
    <SectionBackground>
      <section id="meet-our-team" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamHeader />
          <TeamFounder />
        </div>
      </section>
    </SectionBackground>
  );
}