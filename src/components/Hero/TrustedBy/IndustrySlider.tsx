import React from 'react';
import IndustryTrack from './IndustryTrack';
import { industries } from './industries';

export default function IndustrySlider() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
      
      {/* Two tracks for seamless infinite scroll */}
      <div className="flex">
        <IndustryTrack industries={industries} />
        <IndustryTrack industries={industries} />
      </div>
    </div>
  );
}