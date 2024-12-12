import React, { useState } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import ChatModal from './chat/ChatModal';
import VoiceModal from './voice/VoiceModal';

export function DemoSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-col gap-6">
        {/* Chat Demo Button */}
        <div className="demo-button-container">
          <button 
            className="demo-button hover:bg-brand-primary group"
            onClick={() => setIsChatOpen(true)}
          >
            <MessageSquare className="w-10 h-10 text-brand-primary group-hover:text-brand-dark transition-colors duration-300" />
          </button>
          <div className="demo-label-container">
            <svg className="w-20 h-12 text-brand-primary" viewBox="0 0 100 50">
              <path
                d="M0,25 Q20,25 30,10 T60,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M50,5 L60,10 L50,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="demo-label">Try Chat!</span>
          </div>
        </div>

        {/* Phone Demo Button */}
        <div className="demo-button-container">
          <button 
            className="demo-button hover:bg-brand-primary group"
            onClick={() => setIsVoiceOpen(true)}
          >
            <Phone className="w-10 h-10 text-brand-primary group-hover:text-brand-dark transition-colors duration-300" />
          </button>
          <div className="demo-label-container">
            <svg className="w-20 h-12 text-brand-primary" viewBox="0 0 100 50">
              <path
                d="M0,25 Q20,25 30,40 T60,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M50,35 L60,40 L50,45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="demo-label">Try Voice!</span>
          </div>
        </div>
      </div>

      <ChatModal 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
      
      <VoiceModal
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
      />
    </div>
  );
}