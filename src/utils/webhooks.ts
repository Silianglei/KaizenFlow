// Webhook URLs
export const WEBHOOKS = {
  CONSULTATION: 'https://hook.us2.make.com/ezsllq3wknl8nxzezjitar6apufezlcx',
  NEWSLETTER: 'https://hook.us2.make.com/3x358l6vsbbkf46ijtvgzcqcfmzdu52u'
} as const;

interface WebhookData {
  type: string;
  timestamp: string;
  data: Record<string, any>;
}

export async function sendWebhook(webhook: string, data: WebhookData): Promise<Response> {
  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error('Webhook error:', error instanceof Error ? error.message : 'Unknown error');
    throw error;
  }
}