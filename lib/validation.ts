import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  serviceSlug: z.string().min(1),
  packageName: z.string().min(1),
  meetingDate: z.string().min(1),
  meetingTime: z.string().min(1),
  details: z.string().min(10),
  paymentOption: z.enum(['PAYSTACK', 'INVOICE'])
});

export type BookingInput = z.infer<typeof bookingSchema>;
