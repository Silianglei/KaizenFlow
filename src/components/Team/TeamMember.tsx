import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export default function TeamMember({ name, role, description, image, linkedin }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-brand-primary transition-colors">
            {name}
          </h3>
          <p className="text-brand-primary">{role}</p>
        </div>
        
        <a 
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-brand-gray/10 rounded-lg hover:bg-brand-primary/20 transition-colors group/link"
        >
          <Linkedin className="h-5 w-5 text-brand-light group-hover/link:text-brand-primary" />
        </a>
      </div>
      
      <p className="text-brand-light">{description}</p>
    </div>
  );
}