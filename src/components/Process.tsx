import React from 'react';
import { MessageSquare, Settings, Zap } from 'lucide-react';
import Timeline from './Timeline';

const steps = [
  {
    Icon: MessageSquare,
    title: "Consultation",
    description: "We analyze your support needs and design a custom automation plan"
  },
  {
    Icon: Settings,
    title: "Development",
    description: "We build your custom chat and phone support systems with your business knowledge"
  },
  {
    Icon: Zap,
    title: "Integration",
    description: "We connect everything with your existing business tools and systems"
  }
];

export function Process() {
  return (
    <section id="how-it-works" className="how-it-works-section scroll-mt-16 py-24 bg-timeline-pattern">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white glow-text">How It Works</h2>
        <Timeline steps={steps} />
      </div>
    </section>
  );
}

export default Process;