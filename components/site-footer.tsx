import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-700/20 py-8 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 md:flex-row">
        <p>© {new Date().getFullYear()} Thesinova. Professional freelance services.</p>
        <div className="flex gap-4">
          <Link href="/legal">Legal</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
