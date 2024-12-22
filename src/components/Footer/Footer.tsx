import React from 'react';
import FooterNewsletter from './FooterNewsletter/FooterNewsletter';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark/95 backdrop-blur-md border-t border-brand-gray/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <FooterNewsletter />
            <FooterLinks />
          </div>
          
          <div className="border-t border-brand-gray/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <FooterCopyright />
              <FooterSocial />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}