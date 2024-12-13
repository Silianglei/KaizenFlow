export interface ChatMessage {
  id: string;
  type: 'text' | 'buttons' | 'card';
  content: string | ButtonContent | CardContent;
  isBot: boolean;
  timestamp: number;
}

export interface ButtonContent {
  text: string;
  buttons: Array<{
    name: string;
    request: string;
  }>;
}

export interface CardContent {
  title: string;
  description: string;
  imageUrl?: string;
  buttons?: Array<{
    name: string;
    request: string;
  }>;
}

export interface VoiceflowResponse {
  type: string;
  payload: {
    message?: string;
    text?: string;
    buttons?: Array<{
      name: string;
      request: string;
    }>;
    title?: string;
    description?: string;
    imageUrl?: string;
    card?: {
      title: string;
      description: string;
      imageUrl?: string;
      buttons?: Array<{
        name: string;
        request: string;
      }>;
    };
  };
}