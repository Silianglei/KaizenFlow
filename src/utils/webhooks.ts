// Webhook URLs
const WEBHOOKS = {
  CONSULTATION: 'https://hook.us2.make.com/ezsllq3wknl8nxzezjitar6apufezlcx',
  NEWSLETTER: 'https://hook.us2.make.com/3x358l6vsbbkf46ijtvgzcqcfmzdu52u'
} as const;

export async function sendWebhook(url: string, data: any) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Webhook failed');
    }
    
    return response;
  } catch (error) {
    console.error('Error sending webhook:', error);
    throw error;
  }
}

export { WEBHOOKS };