import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { founderSocial } from '../../data/socialLinks';

export default function FounderBio() {
  return (
    <div className="space-y-6 text-lg text-brand-light">
      <p>
        Hey! I'm Brandon, the founder of KaizenFlow. I graduated from MIT, ranked as the #1 
        technology school by US News & World Report. My journey in tech has been focused on 
        pushing the boundaries of what's possible with AI.
      </p>
      
      <p>
        With experience at an AI startup that reached $4 billion in valuation, plus roles at 
        industry leaders like Google and DoorDash, I bring deep expertise in building AI 
        solutions that deliver real business value.
      </p>
      
      <p>
        Now, I'm passionate about transforming business communication through intelligent automation, 
        helping companies provide exceptional customer service 24/7 while reducing operational costs.
      </p>
      
      <div className="flex gap-4">
        <a 
          href={founderSocial.linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-brand-gray/10 rounded-lg hover:bg-brand-primary/20 transition-colors group"
        >
          <Linkedin className="h-5 w-5 text-brand-light group-hover:text-brand-primary" />
        </a>
        <a 
          href={`mailto:${founderSocial.email}`}
          className="p-2 bg-brand-gray/10 rounded-lg hover:bg-brand-primary/20 transition-colors group"
        >
          <Mail className="h-5 w-5 text-brand-light group-hover:text-brand-primary" />
        </a>
      </div>
    </div>
  );
}