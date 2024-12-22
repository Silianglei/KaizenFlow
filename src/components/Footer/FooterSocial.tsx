import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export default function FooterSocial() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-2 bg-brand-gray/10 rounded-lg hover:bg-brand-primary/20 transition-colors group"
          >
            <Icon className="w-5 h-5 text-brand-light group-hover:text-brand-primary" />
          </a>
        );
      })}
    </div>
  );
}