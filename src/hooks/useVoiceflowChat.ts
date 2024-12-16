import { useEffect } from 'react';
import { initializeVoiceflowChat } from '../utils/chat/initialize';

export function useVoiceflowChat() {
  useEffect(() => {
    const init = async () => {
      try {
        await initializeVoiceflowChat();
      } catch (error) {
        console.error('Failed to initialize Voiceflow chat:', error);
      }
    };
    
    init();
  }, []);

  return { isInitialized: true };
}