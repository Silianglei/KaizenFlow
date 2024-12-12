import React from 'react';
import { MessageSquare, Phone, Workflow } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    Icon: MessageSquare,
    title: "24/7 Chat Support",
    description: "Custom-built chat assistants that understand your business, handle customer questions, and provide instant help around the clock."
  },
  {
    Icon: Phone,
    title: "Automated Phone Support",
    description: "Smart phone systems that can answer calls, understand customer needs, and provide helpful responses just like a human support team."
  },
  {
    Icon: Workflow,
    title: "Business Integration",
    description: "Seamlessly connect with your existing tools like CRM, help desk, and payment systems for smooth, automated workflows."
  }
];

export function Features() {
  return (
    <section id="solutions" className="solutions-section scroll-mt-16 py-24 bg-solutions-pattern">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white glow-text">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;