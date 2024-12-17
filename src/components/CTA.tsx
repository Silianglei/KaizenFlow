import React from 'react';
import { ArrowRight } from 'lucide-react';

function CTA() {
  return (
    <section className="cta-section py-20 px-4 bg-gradient-to-b from-brand-dark to-brand-gray/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Elevate your property <br className="hidden sm:block" />
          management with AI
        </h2>
        <p className="text-lg md:text-xl text-brand-light mb-10 max-w-2xl mx-auto">
          Book a free consultation to see how we can help automate your property management operations<br className="hidden sm:block" />
          Let's discuss your needs and explore the perfect AI solution for your properties.
        </p>
        <a
          href="https://fg8dqkk77s6.typeform.com/kaizenflow"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex items-center justify-center space-x-3 text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-glow-xl hover:shadow-glow-xl-hover w-full sm:w-auto"
        >
          <span>Book Free Consultation</span>
          <ArrowRight className="w-6 h-6" />
        </a>
        <p className="mt-4 text-brand-light text-base">No commitment required - let's explore how AI can transform your property management.</p>
      </div>
    </section>
  );
}

export default CTA;