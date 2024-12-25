import React, { useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionBackground from '../common/SectionBackground';
import { useLocation } from '../hooks/useLocation';

export default function ConsultationConfirmation() {
  const location = useLocation();
  const formData = location.state?.formData;

  useEffect(() => {
    // Build Calendly URL with form data
    const calendlyUrl = new URL('https://calendly.com/brandon-gokaizenflow/30min');
    
    if (formData) {
      calendlyUrl.searchParams.set('name', `${formData.firstName} ${formData.lastName}`);
      calendlyUrl.searchParams.set('email', formData.email);
    }

    // Open Calendly immediately with a minimal delay for UI feedback
    const timer = setTimeout(() => {
      window.open(calendlyUrl.toString(), '_blank');
    }, 500);

    return () => clearTimeout(timer);
  }, [formData]);

  return (
    <div className="min-h-screen bg-brand-dark">
      <SectionBackground>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl text-center">
            <div className="mb-8 inline-flex p-3 bg-brand-primary/10 rounded-full">
              <Calendar className="h-8 w-8 text-brand-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Almost There!<br />
              <span className="text-brand-primary">Choose Your Free 30-Min Slot</span>
            </h1>
            
            <p className="text-xl text-brand-light mb-8">
              You should be redirected to schedule your consultation. If not, 
              click below to choose a time that works best for you.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a 
                href={`https://calendly.com/brandon-gokaizenflow/30min${formData ? 
                  `?name=${encodeURIComponent(`${formData.firstName} ${formData.lastName}`)}&email=${encodeURIComponent(formData.email)}` : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors group"
              >
                <span>Open Calendar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/"
                className="text-brand-light hover:text-white transition-colors"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}