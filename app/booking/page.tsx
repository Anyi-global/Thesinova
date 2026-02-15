import { BookingWizard } from '@/components/booking-wizard';

export default function BookingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Book a Service</h1>
      <p className="mt-2 text-slate-300">Choose your service, schedule time, and confirm payment or invoice.</p>
      <div className="mt-8 max-w-3xl">
        <BookingWizard />
      </div>
    </div>
  );
}
