import { useEffect, useRef } from 'react';
import { WELCOME_MESSAGES } from '../services/voiceflow/messages';
import { voiceflowService } from '../services/voiceflow/VoiceflowService';

export function useProactiveChat() {
  const hasShownMessages = useRef(false);

  useEffect(() => {
    if (hasShownMessages.current) return;

    const initializeChat = async () => {
      try {
        await voiceflowService.initialize();
        
        if (!hasShownMessages.current) {
          setTimeout(() => {
            voiceflowService.showWelcomeMessages(WELCOME_MESSAGES);
            hasShownMessages.current = true;
          }, 2000);
        }
      } catch (error) {
        console.error('Failed to initialize proactive chat:', error);
      }
    };

    initializeChat();
  }, []);
}