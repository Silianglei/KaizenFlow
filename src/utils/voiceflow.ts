import { nanoid } from 'nanoid';
import { VOICEFLOW_CONFIG } from '../config/voiceflow';
import { VoiceflowResponse } from '../types/chat';

export function generateSessionId(): string {
  return nanoid();
}

export async function startVoiceflowInteraction(sessionId: string) {
  const response = await fetch(`${VOICEFLOW_CONFIG.url}/state/user/${sessionId}/interact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'versionID': VOICEFLOW_CONFIG.versionID,
    },
    body: JSON.stringify({
      action: { type: 'launch' },
    }),
  });

  const data = await response.json();
  return data;
}

export async function sendMessageToVoiceflow(
  sessionId: string, 
  message: string,
  action: 'text' | 'choice' = 'text'
): Promise<VoiceflowResponse[]> {
  const body = action === 'choice' 
    ? {
        action: {
          type: action,
          payload: message
        }
      }
    : {
        action: {
          type: action,
          payload: message
        }
      };
  
  const response = await fetch(`${VOICEFLOW_CONFIG.url}/state/user/${sessionId}/interact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'versionID': VOICEFLOW_CONFIG.versionID,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
}