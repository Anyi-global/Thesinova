import nodemailer from 'nodemailer';
import { Resend } from 'resend';

type ConfirmationData = {
  email: string;
  name: string;
  service: string;
  packageName: string;
  date: string;
  time: string;
  paymentOption: string;
};

export async function sendConfirmationEmail(data: ConfirmationData) {
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'noreply@thesinova.com',
      to: data.email,
      subject: 'Your Thesinova booking is received',
      html: `<p>Hello ${data.name},</p><p>Your booking for <strong>${data.service}</strong> (${data.packageName}) is received for ${data.date} at ${data.time}.</p><p>Payment option: ${data.paymentOption}</p>`
    });
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL ?? process.env.SMTP_USER,
      to: data.email,
      subject: 'Your Thesinova booking is received',
      text: `Hello ${data.name}, your booking for ${data.service} (${data.packageName}) is received for ${data.date} at ${data.time}. Payment option: ${data.paymentOption}.`
    });
  }
}
