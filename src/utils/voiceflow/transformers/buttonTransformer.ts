import { nanoid } from 'nanoid';
import { VoiceflowResponse, ChatMessage, ButtonContent } from '../../../types/chat';
import { debugLog } from '../debug';

export function createButtonMessage(response: VoiceflowResponse): ChatMessage {
  debugLog('Creating button message from response:', response);

  const buttons = response.payload.buttons || [];
  const content: ButtonContent = {
    text: response.payload.message || response.payload.text || '',
    buttons: buttons.map(button => ({
      name: button.name,
      request: button.request || button.name
    }))
  };

  debugLog('Transformed button content:', content);

  return {
    id: nanoid(),
    type: 'buttons',
    content,
    isBot: true,
    timestamp: Date.now()
  };
}