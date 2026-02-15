import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-2xl border border-slate-700/30 bg-cardDark p-6 shadow-soft dark:border-slate-500/20', className)} {...props} />;
}
