import { useState } from 'react';
import { Menu, ShoppingCart, User, Search } from 'lucide-react';

const navLinks = [
  { name: 'Men', href: '#' },
  { name: 'Women', href: '#' },
  { name: 'Collections', href: '#' },
  { name: 'Lookbook', href: '#' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none"
            onClick={() => setOpen(v => !v)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <a href="#" className="font-extrabold tracking-tight text-white text-xl">VX Street</a>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300 hover:text-white hover:border-neutral-700">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
          <button className="p-2 rounded-md hover:bg-neutral-800 text-neutral-300 hover:text-white">
            <User className="h-5 w-5" />
          </button>
          <button className="relative p-2 rounded-md hover:bg-neutral-800 text-neutral-300 hover:text-white">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 bg-white text-black rounded">2</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-800">
          <nav className="px-4 py-3 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
