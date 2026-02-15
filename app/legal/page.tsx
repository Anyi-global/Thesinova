import { Card } from '@/components/ui/card';

export default function LegalPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Legal</h1>
      <Card>
        <h2 className="text-xl font-semibold">Terms</h2>
        <p className="mt-2 text-slate-300">Services are provided under agreed scope, timelines, and ethical academic positioning. Clients retain final responsibility for submitted academic work.</p>
      </Card>
      <Card>
        <h2 className="text-xl font-semibold">Privacy</h2>
        <p className="mt-2 text-slate-300">Client data is used only for service delivery, communication, and invoicing. Data is not sold to third parties.</p>
      </Card>
    </div>
  );
}
