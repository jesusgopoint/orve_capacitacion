import { Resend } from 'resend';
import { generateEmailHTML } from './email-template';

export async function sendEmail(
  to: string,
  from: string,
  subject: string,
  data: {
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    mensaje: string;
  },
  replyTo?: string
) {
  const apiKey = process.env.VITE_RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('VITE_RESEND_API_KEY environment variable is not set');
  }
  
  const resend = new Resend(apiKey);
  
  const emailHTML = generateEmailHTML(data);
  
  const response = await resend.emails.send({
    from,
    to,
    subject,
    html: emailHTML,
    replyTo: replyTo || from
  });
  
  return response;
}
