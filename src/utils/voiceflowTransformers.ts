import { nanoid } from 'nanoid';
import { VoiceflowResponse, ChatMessage, ButtonContent, CardContent } from '../types/chat';

export function transformVoiceflowResponse(response: VoiceflowResponse): ChatMessage {
  try {
    switch (response.type) {
      case 'choice':
      case 'buttons':
        return createButtonMessage(response);
      case 'card':
        return createCardMessage(response);
      case 'text':
        return createTextMessage(getTextContent(response));
      default:
        // Handle any trace or other response types as text
        const textContent = getTextContent(response);
        if (textContent) {
          return createTextMessage(textContent);
        }
        return createTextMessage('Received an unknown response type');
    }
  } catch (error) {
    console.error('Error transforming Voiceflow response:', error, response);
    return createTextMessage('Sorry, there was an error processing the response.');
  }
}

function getTextContent(response: VoiceflowResponse): string {
  if (!response?.payload) return '';
  return response.payload.message || response.payload.text || '';
}

function createTextMessage(content: string): ChatMessage {
  return {
    id: nanoid(),
    type: 'text',
    content,
    isBot: true,
    timestamp: Date.now()
  };
}

function createButtonMessage(response: VoiceflowResponse): ChatMessage {
  const buttons = response.payload.buttons || [];
  const content: ButtonContent = {
    text: getTextContent(response),
    buttons: buttons.map(button => ({
      name: button.name,
      request: button.request || button.name // Fallback to name if request is not provided
    }))
  };

  return {
    id: nanoid(),
    type: 'buttons',
    content,
    isBot: true,
    timestamp: Date.now()
  };
}

function createCardMessage(response: VoiceflowResponse): ChatMessage {
  const cardData = response.payload.card || response.payload;
  const content: CardContent = {
    title: cardData.title || '',
    description: cardData.description || '',
    imageUrl: cardData.imageUrl,
    buttons: cardData.buttons?.map(button => ({
      name: button.name,
      request: button.request || button.name
    }))
  };

  return {
    id: nanoid(),
    type: 'card',
    content,
    isBot: true,
    timestamp: Date.now()
  };
}