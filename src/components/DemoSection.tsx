import React, { useState } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import VoiceModal from './voice/VoiceModal';
import { DemoButton } from './demo/DemoButton';

export default function DemoSection() {
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  const openVoiceflowChat = () => {
    // The widget exposes a global method to toggle the chat
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-6">
        <DemoButton
          icon={MessageSquare}
          label="Try Chat!"
          onClick={openVoiceflowChat}
        />
        <DemoButton
          icon={Phone}
          label="Try Voice!"
          onClick={() => setIsVoiceOpen(true)}
        />
      </div>
      
      <VoiceModal
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
      />
    </div>
  );
}