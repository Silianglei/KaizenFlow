import React from 'react';
import { footerLinks } from './footerData';
import { scrollToSection } from '../../utils/scrollUtils';

export default function FooterLinks() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category}>
          <h4 className="text-white font-semibold mb-4">{category}</h4>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-brand-light hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}