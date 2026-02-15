import { Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <Card>
        <p className="text-slate-300">For questions before booking, reach out directly.</p>
        <p className="mt-3 flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> hello@thesinova.com</p>
        <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +000 000 0000</p>
      </Card>
    </div>
  );
}
