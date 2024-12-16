// Voiceflow configuration constants
export const VOICEFLOW_CONFIG = {
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
  },
  user: {
    name: 'Visitor'
  },
  session: {
    persist: true,
    resume: true
  }
} as const;