export interface ProactiveMessage {
  type: string;
  payload: {
    message?: string;
    buttons?: Array<{
      name: string;
      request: string;
    }>;
  };
}

export interface VoiceflowConfig {
  verify: {
    projectID: string;
  };
  url: string;
  versionID: string;
  persist?: boolean;
  endSession?: boolean;
  launch?: {
    autoOpen?: boolean;
    autoEnd?: boolean;
  };
  user?: {
    name?: string;
  };
  session?: {
    persist?: boolean;
    resume?: boolean;
  };
}