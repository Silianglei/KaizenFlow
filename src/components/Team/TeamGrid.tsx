import React from 'react';
import TeamMember from './TeamMember';
import { teamMembers } from './teamData';

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          {...member}
        />
      ))}
    </div>
  );
}