import React from 'react';
import { GraduationCap, TrendingUp, Building2 } from 'lucide-react';
import { founderAchievements } from './founderData';

export default function FounderAchievements() {
  const achievementIcons = {
    "MIT Graduate": GraduationCap,
    "$4B Startup Experience": TrendingUp,
    "Industry Leaders": Building2
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {founderAchievements.map((achievement, index) => {
        const Icon = achievementIcons[achievement.title as keyof typeof achievementIcons];
        return (
          <div 
            key={index}
            className="group bg-brand-gray/10 p-6 rounded-xl border border-brand-gray/20 hover:border-brand-primary/30 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                <Icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h4 className="text-white font-medium">{achievement.title}</h4>
            </div>
            <p className="text-brand-light">{achievement.description}</p>
          </div>
        );
      })}
    </div>
  );
}