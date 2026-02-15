import { cn } from '@/lib/utils';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('w-full rounded-lg border border-slate-400/40 bg-transparent px-3 py-2 text-sm outline-none ring-indigoBrand focus:ring-2', props.className)} />;
}
