import React from 'react';
import { sections } from './privacyData';
import PrivacyHeader from './PrivacyHeader';
import TableOfContents from './TableOfContents';

export default function PrivacyContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <PrivacyHeader />
      
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-lg text-brand-light mb-8">
          This Privacy Notice for Kaizen Flow ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
        </p>

        <ul className="list-disc pl-6 mb-8 text-brand-light">
          <li>Visit our website at https://www.gokaizenflow.com, or any website of ours that links to this Privacy Notice</li>
          <li>Use Kaizen Flow. We provide custom AI-powered phone systems that handle inbound and outbound calls for businesses. Our intelligent voice AI agents manage customer inquiries, appointments, lead qualification, and support requests 24/7. Our services integrate with your existing business systems to deliver seamless, automated phone support while maintaining the highest standards of data privacy and security.</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>

        <p className="text-lg text-brand-light mb-12">
          Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at brandon@gokaizenflow.com.
        </p>

        <TableOfContents />

        {sections.map((section, index) => (
          <section key={index} id={section.id} className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-6">
              {`${index + 1}. ${section.title}`}
            </h2>
            <div className="text-brand-light whitespace-pre-wrap">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}