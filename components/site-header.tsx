import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const links = [
  ['Services', '/services'],
  ['Booking', '/booking'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['Contact', '/contact']
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-700/30 bg-midnight/90 backdrop-blur dark:bg-midnight/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.svg" alt="Thesinova logo" width={30} height={30} />
          <span>Thesinova</span>
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-coolWhite/90 transition hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
