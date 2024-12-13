import { nanoid } from 'nanoid';
import { makeVoiceflowRequest } from './api';
import { VoiceflowResponse } from '../../types/chat';

export function generateSessionId(): string {
  return nanoid();
}

export async function startVoiceflowInteraction(sessionId: string) {
  return makeVoiceflowRequest(sessionId, {
    type: 'launch'
  });
}

export async function sendMessageToVoiceflow(
  sessionId: string, 
  message: string,
  isChoice: boolean = false
): Promise<VoiceflowResponse[]> {
  const action = {
    type: isChoice ? 'choice' : 'text',
    payload: isChoice ? { request: message } : message
  };

  return makeVoiceflowRequest(sessionId, action);
}