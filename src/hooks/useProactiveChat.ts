import { useEffect, useCallback } from 'react';
import { sendProactiveMessage, sendProactiveMessages } from '../utils/chat/proactive';
import { WELCOME_MESSAGES } from '../utils/chat/messages';
import { ProactiveMessage } from '../utils/chat/types';

export function useProactiveChat() {
  // Send welcome messages after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      sendProactiveMessages(WELCOME_MESSAGES);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Utility function to send custom proactive messages
  const sendCustomMessage = useCallback((message: ProactiveMessage) => {
    sendProactiveMessage(message);
  }, []);

  // Utility function to send multiple custom proactive messages
  const sendCustomMessages = useCallback((messages: ProactiveMessage[]) => {
    sendProactiveMessages(messages);
  }, []);

  return {
    sendCustomMessage,
    sendCustomMessages
  };
}