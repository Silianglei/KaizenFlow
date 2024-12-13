import { VoiceflowConfig } from './types';

export const CHAT_CONFIG: VoiceflowConfig = {
  verify: { 
    projectID: '675b4b3edb9909bd11db5779'
  },
  url: 'https://general-runtime.voiceflow.com',
  versionID: 'production',
  persist: true,
  endSession: false,
  launch: {
    autoOpen: false,
    autoEnd: false
  }
} as const;