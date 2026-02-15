import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { services, testimonials, faqs } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="gradient-hero rounded-3xl border border-slate-600/30 p-8">
        <span className="inline-flex rounded-full border border-gold px-3 py-1 text-xs text-gold">Premium professional support</span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Research, career, and profile services built for clear outcomes.</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Thesinova helps clients execute with clarity: academic support, ATS-friendly CVs, and LinkedIn profile optimization.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/booking"><Button>Book a service</Button></Link>
          <Link href="/services"><Button variant="outline">Explore services</Button></Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-slate-300">{service.summary}</p>
            <Link href={`/services/${service.slug}`} className="mt-4 inline-flex items-center text-indigoBrand">
              View details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <p className="text-slate-200">“{item.quote}”</p>
            <p className="mt-3 text-sm text-gold">{item.name} · {item.role}</p>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Card key={faq.q}>
              <h3 className="font-semibold"><ShieldCheck className="mr-2 inline h-4 w-4 text-gold" />{faq.q}</h3>
              <p className="mt-2 text-slate-300">{faq.a}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
