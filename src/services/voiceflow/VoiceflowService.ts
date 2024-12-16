import { VOICEFLOW_CONFIG } from './config';
import { debugLog } from './debug';
import { ProactiveMessage } from './types';

class VoiceflowService {
  private static instance: VoiceflowService;
  private initialized = false;
  private initPromise: Promise<void> | null = null;
  private messageQueue: ProactiveMessage[] = [];
  private processingQueue = false;

  private constructor() {}

  static getInstance(): VoiceflowService {
    if (!VoiceflowService.instance) {
      VoiceflowService.instance = new VoiceflowService();
    }
    return VoiceflowService.instance;
  }

  private async processMessageQueue(): Promise<void> {
    if (this.processingQueue || !this.messageQueue.length) return;
    
    this.processingQueue = true;
    debugLog('Processing message queue:', this.messageQueue.length);

    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      if (message && window.voiceflow?.chat?.proactive) {
        window.voiceflow.chat.proactive.push(message);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    this.processingQueue = false;
  }

  initialize(): Promise<void> {
    if (this.initialized) return Promise.resolve();
    if (this.initPromise) return this.initPromise;

    debugLog('Initializing Voiceflow service');
    
    this.initPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      
      const handlerName = `_vf_init_${Date.now()}`;
      (window as any)[handlerName] = () => {
        if (window.voiceflow?.chat?.load) {
          window.voiceflow.chat.load({
            ...VOICEFLOW_CONFIG,
            endSession: false,
            launch: {
              ...VOICEFLOW_CONFIG.launch,
              autoEnd: false
            },
            session: {
              persist: true,
              resume: true
            }
          });
          
          // Check for chat availability
          const checkChat = setInterval(() => {
            if (window.voiceflow?.chat?.proactive) {
              clearInterval(checkChat);
              this.initialized = true;
              debugLog('Voiceflow loaded successfully');
              this.processMessageQueue();
              resolve();
            }
          }, 100);
        }
      };

      script.innerHTML = `
        (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = window.${handlerName};
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
          v.type = "text/javascript";
          s.parentNode.insertBefore(v, s);
        })(document, 'script');
      `;

      document.head.appendChild(script);

      // Cleanup after timeout
      setTimeout(() => {
        if (!this.initialized) {
          debugLog('Voiceflow initialization timed out');
          resolve();
        }
        delete (window as any)[handlerName];
      }, 10000);
    }).finally(() => {
      this.initPromise = null;
    });

    return this.initPromise;
  }

  showWelcomeMessages(messages: ProactiveMessage[]): void {
    if (!messages.length) return;
    
    debugLog('Queueing welcome messages');
    this.messageQueue.push(...messages);
    
    if (this.initialized) {
      this.processMessageQueue();
    }
  }

  openChat(): void {
    if (!window.voiceflow?.chat?.open) {
      debugLog('Cannot open chat - Voiceflow not initialized');
      return;
    }

    window.voiceflow.chat.open();
  }

  sendMessage(message: string): void {
    if (!message.trim()) return;

    this.messageQueue.push({
      type: 'text',
      payload: { message }
    });
    
    if (this.initialized) {
      this.processMessageQueue();
    }
  }
}

export const voiceflowService = VoiceflowService.getInstance();