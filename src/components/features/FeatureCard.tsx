import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black/20 p-8 rounded-xl hover:bg-black/30 transition-colors backdrop-blur-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}