import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Thesinova</h1>
      <Card>
        <p className="text-slate-300">
          Thesinova is a freelance service brand focused on ethical academic support, practical career documents,
          and profile optimization. The operating model is clarity first: define the scope, set realistic timelines,
          and deliver work with transparent communication.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl font-semibold">Process</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-300">
          <li>Discovery and service matching</li>
          <li>Package confirmation and timeline</li>
          <li>Execution with progress updates</li>
          <li>Delivery and refinement</li>
        </ol>
      </Card>
    </div>
  );
}
