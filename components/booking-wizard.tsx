'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingInput } from '@/lib/validation';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const steps = ['Service', 'Schedule', 'Details', 'Payment'];

export function BookingWizard() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceSlug: params.get('service') ?? services[0].slug,
      packageName: services[0].packages[0].name,
      paymentOption: 'PAYSTACK'
    }
  });

  const selectedService = useMemo(
    () => services.find((s) => s.slug === form.watch('serviceSlug')) ?? services[0],
    [form.watch('serviceSlug')]
  );

  async function onSubmit(values: BookingInput) {
    setLoading(true);
    setMessage('');
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setMessage(data.error || 'Booking failed.');
      return;
    }

    if (values.paymentOption === 'PAYSTACK' && data.paymentUrl) {
      window.location.href = data.paymentUrl;
      return;
    }

    setMessage('Booking submitted successfully. Check your email for confirmation.');
    form.reset();
    setStep(0);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border border-slate-600/30 p-6">
      <div className="flex flex-wrap gap-2 text-sm">
        {steps.map((label, i) => (
          <span key={label} className={`rounded-full px-3 py-1 ${i <= step ? 'bg-indigoBrand text-white' : 'bg-slate-700/40 text-slate-300'}`}>
            {i + 1}. {label}
          </span>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <label className="block text-sm">Service</label>
          <select className="w-full rounded-lg border border-slate-500/40 bg-transparent p-2" {...form.register('serviceSlug')}>
            {services.map((service) => (
              <option className="text-midnight" key={service.slug} value={service.slug}>{service.title}</option>
            ))}
          </select>

          <label className="block text-sm">Package</label>
          <select className="w-full rounded-lg border border-slate-500/40 bg-transparent p-2" {...form.register('packageName')}>
            {selectedService.packages.map((pkg) => (
              <option className="text-midnight" key={pkg.name} value={pkg.name}>{pkg.name} - ${pkg.price}</option>
            ))}
          </select>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 md:grid-cols-2">
          <div><label>Date</label><Input type="date" {...form.register('meetingDate')} /></div>
          <div><label>Time</label><Input type="time" {...form.register('meetingTime')} /></div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div><label>Full name</label><Input {...form.register('name')} /></div>
          <div><label>Email</label><Input type="email" {...form.register('email')} /></div>
          <div><label>Project details</label><Textarea rows={5} {...form.register('details')} /></div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2">
          <label className="flex gap-2"><input type="radio" value="PAYSTACK" {...form.register('paymentOption')} /> Pay now with Paystack</label>
          <label className="flex gap-2"><input type="radio" value="INVOICE" {...form.register('paymentOption')} /> Invoice me / pay later</label>
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button type="button" variant="outline" onClick={() => setStep((s) => Math.max(s - 1, 0))} disabled={step === 0}>Back</Button>
        {step < 3 ? (
          <Button type="button" onClick={() => setStep((s) => Math.min(s + 1, 3))}>Next</Button>
        ) : (
          <Button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Confirm booking'}</Button>
        )}
      </div>

      {message && <p className="text-sm text-gold">{message}</p>}
    </form>
  );
}
