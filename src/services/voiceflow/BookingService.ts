import { voiceflowService } from './VoiceflowService';
import { debugLog } from './debug';

class BookingService {
  private static instance: BookingService;

  private constructor() {}

  static getInstance(): BookingService {
    if (!BookingService.instance) {
      BookingService.instance = new BookingService();
    }
    return BookingService.instance;
  }

  async startBookingFlow(): Promise<void> {
    try {
      debugLog('Starting booking flow');
      
      // Initialize if needed
      await voiceflowService.initialize();

      // Open chat
      voiceflowService.openChat();

      // Small delay to ensure chat is open and ready
      setTimeout(() => {
        voiceflowService.sendMessage('I want to book a consultation');
      }, 1000);
    } catch (error) {
      console.error('Failed to start booking flow:', error);
    }
  }
}

export const bookingService = BookingService.getInstance();