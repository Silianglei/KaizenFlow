const DEBUG = true;

export function debugLog(message: string, data?: any) {
  if (DEBUG) {
    console.log(`[Voiceflow Debug] ${message}`, data || '');
  }
}