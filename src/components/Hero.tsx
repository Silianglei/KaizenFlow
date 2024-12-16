import React from 'react';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="hero-section relative pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-brand-gray/30 rounded-full mb-6">
          <span className="text-brand-primary font-semibold">PROPERTY MANAGEMENT AI SOLUTIONS</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
          Transform your <span className="gradient-text">property management</span> with AI-powered support
        </h1>
        <p className="text-xl text-brand-light mb-12 max-w-2xl mx-auto">
          Streamline tenant communications, automate maintenance requests, and provide 24/7 support. 
          Our AI solutions help property managers reduce workload while improving tenant satisfaction.
        </p>
        <a 
          href="https://form.typeform.com/to/xxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>Book Free Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default Hero;