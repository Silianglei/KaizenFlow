export interface VoiceflowConfig {
  verify: {
    projectID: string;
  };
  url: string;
  versionID: string;
}

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: VoiceflowConfig) => void;
      };
    };
  }
}