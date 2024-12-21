import React from 'react';
import { handleNavClick } from '../../utils/scrollUtils';

interface FooterSectionProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="text-left">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            {link.href.startsWith('#') ? (
              <button 
                onClick={() => handleNavClick(link.label)}
                className="text-brand-light hover:text-brand-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ) : (
              <a 
                href={link.href}
                className="text-brand-light hover:text-brand-primary transition-colors"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}