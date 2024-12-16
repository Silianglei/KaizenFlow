import { ProactiveMessage } from './types';

export const WELCOME_MESSAGES: ProactiveMessage[] = [
  {
    type: 'text',
    payload: { 
      message: '👋 Welcome to KaizenFlow!' 
    }
  },
  {
    type: 'text',
    payload: { 
      message: 'I can help you learn about our AI solutions for property management.' 
    }
  },
  {
    type: 'buttons',
    payload: {
      message: 'What would you like to know more about?',
      buttons: [
        { name: 'Voice Assistant Features', request: 'Tell me about voice support' },
        { name: 'Chat Support Features', request: 'Tell me about chat support' },
        { name: 'Book Consultation', request: 'I want to book a consultation' }
      ]
    }
  }
] as const;