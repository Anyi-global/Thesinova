import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { bookingSchema } from '@/lib/validation';
import { sendConfirmationEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const input = bookingSchema.parse(payload);

    const booking = await prisma.booking.create({
      data: {
        ...input,
        meetingDate: new Date(input.meetingDate)
      }
    });

    await sendConfirmationEmail({
      email: input.email,
      name: input.name,
      service: input.serviceSlug,
      packageName: input.packageName,
      date: input.meetingDate,
      time: input.meetingTime,
      paymentOption: input.paymentOption
    });

    if (input.paymentOption === 'PAYSTACK') {
      const paymentUrl = `${process.env.PAYSTACK_BASE_URL ?? 'https://checkout.paystack.com'}/${booking.id}`;
      return NextResponse.json({ id: booking.id, paymentUrl });
    }

    return NextResponse.json({ id: booking.id, status: 'invoice_requested' });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create booking' }, { status: 400 });
  }
}
