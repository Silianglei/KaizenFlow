import { VoiceflowResponse, ChatMessage } from '../../../types/chat';
import { createCardMessage } from './cardTransformer';
import { createButtonMessage } from './buttonTransformer';
import { createTextMessage, getTextContent } from './textTransformer';
import { debugLog } from '../debug';

export function transformVoiceflowResponse(response: VoiceflowResponse): ChatMessage {
  debugLog('Transforming Voiceflow response:', response);

  try {
    switch (response.type.toLowerCase()) {
      case 'choice':
      case 'buttons':
        debugLog('Processing as button message');
        return createButtonMessage(response);
      
      case 'card':
        debugLog('Processing as card message');
        return createCardMessage(response);
      
      case 'text':
        debugLog('Processing as text message');
        return createTextMessage(getTextContent(response));
      
      default:
        debugLog('Unknown response type, checking for text content');
        const textContent = getTextContent(response);
        if (textContent) {
          return createTextMessage(textContent);
        }
        return createTextMessage('Received an unknown response type');
    }
  } catch (error) {
    console.error('Error transforming Voiceflow response:', error);
    debugLog('Transform error:', error);
    return createTextMessage('Sorry, there was an error processing the response.');
  }
}