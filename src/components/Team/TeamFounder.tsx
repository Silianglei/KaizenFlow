import React from 'react';
import FounderBio from './FounderBio';
import FounderAchievements from './FounderAchievements';
import profileImage from '../../aboutme_pic.jpg';
export default function TeamFounder() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1">
          <h3 className="text-3xl font-bold text-white mb-4">
            Brandon Lei
            <span className="text-brand-primary ml-2">Founder & CEO</span>
          </h3>
          
          <FounderBio />
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
              <img 
                src={profileImage} 
                alt="Brandon Lei, Founder of KaizenFlow"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <FounderAchievements />
    </div>
  );
}