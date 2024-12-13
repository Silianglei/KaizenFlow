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
      message: 'I can help you learn more about our AI automation solutions.' 
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
] as const;