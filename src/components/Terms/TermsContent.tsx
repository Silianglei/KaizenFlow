import React from 'react';
import { sections } from './termsData';
import TermsHeader from './TermsHeader';
import TableOfContents from './TableOfContents';

export default function TermsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <TermsHeader />
      
      <div className="prose prose-invert prose-lg max-w-none">
        <div className="text-lg text-brand-light mb-8">
          <p className="mb-4">
            We are Kaizen Flow ("Company," "we," "us," "our"), a company registered in Massachusetts, United States at 68 Pleasant St, Cambridge, MA 02139, USA, Unit 2, Cambridge, MA 02139.
          </p>
          
          <p className="mb-4">
            We operate the website https://www.gokaizenflow.com (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          
          <p className="mb-4">
            With KaizenFlow, you can get a custom AI phone system that handles all your calls 24/7, so you can focus on growing your business.
          </p>
          
          <p className="mb-4">
            You can contact us by phone at (+1)9179511434, email at brandon@gokaizenflow.com, or by mail to 68 Pleasant St, Cambridge, MA 02139, USA, Unit 2, Cambridge, MA 02139, United States.
          </p>
          
          <p className="mb-8">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Kaizen Flow, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </div>

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