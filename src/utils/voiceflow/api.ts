import { VOICEFLOW_CONFIG } from '../../config/voiceflow';
import { VoiceflowResponse } from '../../types/chat';

interface VoiceflowAction {
  type: 'launch' | 'text' | 'choice';
  payload?: string | { request: string };
}

export async function makeVoiceflowRequest(
  sessionId: string,
  action: VoiceflowAction
): Promise<VoiceflowResponse[]> {
  try {
    const response = await fetch(`${VOICEFLOW_CONFIG.baseURL}/state/user/${sessionId}/interact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': VOICEFLOW_CONFIG.apiKey,
        'versionID': VOICEFLOW_CONFIG.versionID,
      },
      body: JSON.stringify({ action }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Voiceflow API error:', errorData);
      throw new Error(`Voiceflow API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Voiceflow request failed:', error);
    throw error;
  }
}