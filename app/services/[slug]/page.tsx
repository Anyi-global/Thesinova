import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  return (
    <div>
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p className="mt-2 max-w-3xl text-slate-300">{service.description}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Scope</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Packages</h2>
          <div className="mt-3 space-y-3">
            {service.packages.map((pkg) => (
              <div key={pkg.name} className="rounded-lg border border-slate-600/30 p-3">
                <p className="font-medium">{pkg.name} {pkg.premium && <span className="ml-2 rounded-full bg-gold/20 px-2 py-1 text-xs text-gold">Premium</span>}</p>
                <p className="text-slate-300">${pkg.price} · {pkg.timeline}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Link href={`/booking?service=${service.slug}`} className="mt-6 inline-block"><Button>Book this service</Button></Link>
    </div>
  );
}
