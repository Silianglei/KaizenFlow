import React from 'react';
import NewsletterForm from './NewsletterForm';

export default function FooterNewsletter() {
  return (
    <div className="max-w-md">
      <h3 className="text-2xl font-bold text-white mb-4">
        Stay Updated with KaizenFlow
      </h3>
      <p className="text-brand-light mb-6">
        Get the latest updates on AI technology and business automation. 
        No spam, just valuable insights delivered to your inbox.
      </p>
      
      <NewsletterForm />
    </div>
  );
}