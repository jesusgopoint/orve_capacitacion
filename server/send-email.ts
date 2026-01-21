import { Resend } from 'resend';
import { generateEmailHTML } from './email-template';

interface SendEmailParams {
  to: string;
  from: string;
  subject: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  mensaje: string;
  replyTo: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  campaign_id?: string;
}

export async function sendEmail(params: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const apiKey = process.env.VITE_RESEND_API_KEY;
    
    if (!apiKey) {
      return { success: false, error: 'VITE_RESEND_API_KEY environment variable is not set' };
    }
    
    const resend = new Resend(apiKey);
    
    const emailHTML = generateEmailHTML(params);
    
    const response = await resend.emails.send({
      from: params.from,
      to: params.to,
      subject: params.subject,
      html: emailHTML,
      replyTo: params.replyTo
    });
    
    if (response.error) {
      console.error('[Resend Error]', response.error);
      return { success: false, error: response.error.message };
    }
    
    console.log('[Resend Success]', response.data);
    return { success: true };
  } catch (error) {
    console.error('[Send Email Error]', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
