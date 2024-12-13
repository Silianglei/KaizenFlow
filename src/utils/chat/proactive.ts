import { ProactiveMessage } from './types';
import { debugLog } from '../voiceflow/debug';

export function sendProactiveMessage(message: ProactiveMessage): void {
  if (window.voiceflow?.chat?.proactive) {
    debugLog('Sending proactive message:', message);
    window.voiceflow.chat.proactive.push(message);
  }
}

export function sendProactiveMessages(messages: ProactiveMessage[]): void {
  if (window.voiceflow?.chat?.proactive) {
    debugLog('Sending multiple proactive messages:', messages);
    window.voiceflow.chat.proactive.push(...messages);
  }
}

export function sendWelcomeMessage(): void {
  sendProactiveMessage({
    type: 'text',
    payload: { 
      message: '👋 Hi there! Need help exploring our AI automation solutions?' 
    }
  });
}