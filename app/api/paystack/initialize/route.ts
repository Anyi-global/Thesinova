import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const publicKey = process.env.PAYSTACK_PUBLIC_KEY;
  if (!publicKey) {
    return NextResponse.json({ error: 'PAYSTACK_PUBLIC_KEY is not configured' }, { status: 400 });
  }

  return NextResponse.json({
    message: 'Initialize payment on client with Paystack popup or redirect flow.',
    payload: body
  });
}
