import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-slate-300">Choose a service track that matches your goal.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id}>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-slate-300">{service.description}</p>
            <Link className="mt-4 inline-block text-indigoBrand" href={`/services/${service.slug}`}>
              See service details
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
