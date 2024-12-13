import { useEffect } from 'react';
import { initializeVoiceflowChat } from '../utils/chat/initialize';

export function useVoiceflowChat() {
  useEffect(() => {
    initializeVoiceflowChat();
  }, []);
}