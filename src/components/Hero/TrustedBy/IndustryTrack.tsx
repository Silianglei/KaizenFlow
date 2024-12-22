import React from 'react';
import IndustryItem from './IndustryItem';

interface IndustryTrackProps {
  industries: string[];
}

export default function IndustryTrack({ industries }: IndustryTrackProps) {
  return (
    <div className="flex animate-scroll">
      {industries.map((industry) => (
        <IndustryItem key={industry} name={industry} />
      ))}
    </div>
  );
}