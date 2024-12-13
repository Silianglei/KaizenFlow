import { useCallback } from 'react';

export function useVoiceflowWidget() {
  const openChat = useCallback(() => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  }, []);

  const closeChat = useCallback(() => {
    if (window.voiceflow?.chat?.close) {
      window.voiceflow.chat.close();
    }
  }, []);

  return {
    openChat,
    closeChat
  };
}