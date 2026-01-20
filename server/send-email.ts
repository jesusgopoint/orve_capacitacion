import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export async function sendEmail(
  to: string,
  from: string,
  subject: string,
  html: string,
  replyTo?: string
) {
  try {
    const response = await resend.emails.send({
      from: from,
      to: to,
      subject: subject,
      html: html,
      replyTo: replyTo,
    });

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
