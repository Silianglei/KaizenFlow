// Types for welcome messages
interface WelcomeMessage {
  type: string;
  payload: {
    message?: string;
    buttons?: Array<{
      name: string;
      request: string;
    }>;
  };
}

// Welcome messages configuration
const welcomeMessages: WelcomeMessage[] = [
  {
    type: 'text',
    payload: { 
      message: '👋 Welcome to KaizenFlow!' 
    }
  },
  {
    type: 'text',
    payload: { 
      message: 'I can help you learn more about our AI automation solutions. Feel free to ask me anything!'
    }
  },
  {
    type: 'buttons',
    payload: {
      message: 'What would you like to know more about?',
      buttons: [
        { name: 'Chat Support Features', request: 'Tell me about chat support' },
        { name: 'Pricing Plans', request: 'What are your pricing plans?' },
        { name: 'Book Demo', request: 'I want to book a demo' }
      ]
    }
  }
];

let hasInitialized = false;

export function initializeProactiveChat() {
  if (hasInitialized) return;
  
  let retryCount = 0;
  const maxRetries = 20;
  
  const checkVoiceflow = setInterval(() => {
    if (window.voiceflow?.chat?.proactive) {
      clearInterval(checkVoiceflow);
      hasInitialized = true;
      
      // Add welcome messages with a slight delay
      setTimeout(() => {
        try {
          window.voiceflow.chat.proactive.push(...welcomeMessages);
        } catch (error) {
          console.debug('Error sending welcome messages:', error);
        }
      }, 2000);
      return;
    }

    retryCount++;
    if (retryCount >= maxRetries) {
      clearInterval(checkVoiceflow);
      console.debug('Voiceflow initialization timed out');
    }
  }, 500);

  // Cleanup interval after timeout
  setTimeout(() => {
    clearInterval(checkVoiceflow);
  }, 10000);
}