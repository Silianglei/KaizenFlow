import React from 'react';
import { PhoneCall, Lightbulb, Cog, LucideIcon } from 'lucide-react';

interface TimelineStep {
  Icon: LucideIcon;
  title: string;
  description: string;
}

function Timeline() {
  const steps: TimelineStep[] = [
    {
      Icon: PhoneCall,
      title: "Discovery Call",
      description: "We discuss your business goals and identify automation opportunities"
    },
    {
      Icon: Lightbulb,
      title: "Strategy Session",
      description: "Our team develops a tailored automation roadmap"
    },
    {
      Icon: Cog,
      title: "Implementation",
      description: "We build and deploy your custom automation solutions"
    }
  ];

  return (
    <div className="timeline-container">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="timeline-step flex-1 relative z-10">
                <div className="icon-circle">
                  <step.Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 text-lg max-w-[250px] mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block flex-shrink-0 arrow-container">
                  <div className="arrow-line" />
                  <div className="arrow-head" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;