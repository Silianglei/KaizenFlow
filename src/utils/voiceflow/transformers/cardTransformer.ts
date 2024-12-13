import { nanoid } from 'nanoid';
import { VoiceflowResponse, ChatMessage, CardContent } from '../../../types/chat';
import { debugLog } from '../debug';

export function createCardMessage(response: VoiceflowResponse): ChatMessage {
  debugLog('Creating card message from response:', response);

  let cardData;
  if (response.payload.card) {
    cardData = response.payload.card;
    debugLog('Using nested card data:', cardData);
  } else {
    cardData = response.payload;
    debugLog('Using direct payload as card data:', cardData);
  }

  const content: CardContent = {
    title: cardData.title || '',
    description: cardData.description || '',
    imageUrl: cardData.imageUrl,
    buttons: cardData.buttons?.map(button => ({
      name: button.name,
      request: button.request || button.name
    }))
  };

  debugLog('Transformed card content:', content);

  return {
    id: nanoid(),
    type: 'card',
    content,
    isBot: true,
    timestamp: Date.now()
  };
}