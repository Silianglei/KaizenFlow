import { nanoid } from 'nanoid';
import { VoiceflowResponse, ChatMessage } from '../../../types/chat';
import { debugLog } from '../debug';

export function createTextMessage(content: string): ChatMessage {
  debugLog('Creating text message with content:', content);

  return {
    id: nanoid(),
    type: 'text',
    content,
    isBot: true,
    timestamp: Date.now()
  };
}

export function getTextContent(response: VoiceflowResponse): string {
  if (!response?.payload) return '';
  return response.payload.message || response.payload.text || '';
}