import { useEffect, useState, useRef } from 'react';
import { voiceflowService } from '../services/voiceflow/VoiceflowService';
import { WELCOME_MESSAGES } from '../services/voiceflow/messages';
import { debugLog } from '../services/voiceflow/debug';

export function useVoiceflowChat() {
  const [isLoading, setIsLoading] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    let mounted = true;

    const initChat = async () => {
      if (initialized.current) return;

      try {
        await voiceflowService.initialize();
        
        if (mounted) {
          setIsLoading(false);
          debugLog('Chat initialized successfully');

          // Show welcome messages
          setTimeout(() => {
            if (mounted && !initialized.current) {
              voiceflowService.showWelcomeMessages(WELCOME_MESSAGES);
              initialized.current = true;
            }
          }, 2000);
        }
      } catch (error) {
        console.error('Failed to initialize chat:', error);
        if (mounted) setIsLoading(false);
      }
    };

    initChat();
    return () => { mounted = false; };
  }, []);

  return { isLoading };
}