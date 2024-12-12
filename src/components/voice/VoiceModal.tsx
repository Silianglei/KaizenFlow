import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import Modal from '../shared/Modal';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function VoiceModal({ isOpen, onClose }: VoiceModalProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleVoice = () => {
    setIsActive(!isActive);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Voice Assistant" maxWidth="max-w-md">
      <div className="p-8">
        <div className="flex flex-col items-center">
          <p className="text-brand-light mb-8 text-center">
            {isActive 
              ? "I'm listening... Click the microphone when you're done."
              : "Click the microphone to start talking with me."}
          </p>
          
          <button
            onClick={toggleVoice}
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive 
                ? 'bg-brand-primary text-brand-dark animate-pulse scale-110'
                : 'bg-brand-dark border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-dark'
            }`}
          >
            {isActive ? (
              <MicOff className="w-16 h-16" />
            ) : (
              <Mic className="w-16 h-16" />
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default VoiceModal;