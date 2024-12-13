// Voiceflow configuration constants
export const VOICEFLOW_CONFIG = {
  verify: { 
    projectID: '675b4b3edb9909bd11db5779'
  },
  url: 'https://general-runtime.voiceflow.com',
  versionID: 'production',
  // Keep chat session alive
  persist: true,
  // Never end the chat session automatically
  endSession: false,
  // Customize launch behavior
  launch: {
    autoOpen: false,
    // Disable auto-end
    autoEnd: false
  },
  // Add user preferences
  user: {
    name: 'Visitor'
  },
  // Configure session behavior
  session: {
    persist: true,
    resume: true
  }
} as const;