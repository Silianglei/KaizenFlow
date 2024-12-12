import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DemoSection } from './DemoSection';

function Hero() {
  return (
    <section className="hero-section relative pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="md:col-span-3 text-left">
            <div className="inline-block px-4 py-2 bg-brand-gray/30 rounded-full mb-6">
              <span className="text-brand-primary font-semibold">CUSTOMER SUPPORT AUTOMATION</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              Build a <span className="gradient-text">24/7 customer support team</span> that never sleeps
            </h1>
            <p className="text-xl text-brand-light mb-12">
              Transform your customer support with intelligent chat and phone systems. 
              Provide instant, personalized assistance around the clock while reducing costs.
            </p>
            <a href="https://form.typeform.com/to/xxxxx" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-primary inline-flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Demo */}
          <div className="md:col-span-2 flex justify-center md:justify-start pl-4">
            <DemoSection />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;