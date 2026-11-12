import { useEffect, useState } from 'react';
import { PawPrint, Heart, Menu, X } from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
  favoriteCount: number;
}

const links = [
  { id: 'adopt', label: 'Adopt a Pet' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'stories', label: 'Stories' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onNavigate, favoriteCount }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-paw flex h-16 items-center justify-between sm:h-20">
        <button
          type="button"
          onClick={() => go('top')}
          className="flex items-center gap-2"
          aria-label="PawHaven home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-clay-500 text-white shadow-card">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-bold text-cocoa-900">
            Paw<span className="text-clay-500">Haven</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button key={link.id} type="button" onClick={() => go(link.id)} className="btn-ghost">
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go('favorites')}
            className="btn relative h-10 w-10 rounded-full bg-white text-cocoa-700 shadow-sm transition hover:scale-105"
            aria-label={`Favourite pets (${favoriteCount})`}
          >
            <Heart
              className={`h-5 w-5 ${favoriteCount > 0 ? 'fill-clay-500 text-clay-500' : ''}`}
            />
            {favoriteCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-clay-500 text-[11px] font-bold text-white">
                {favoriteCount}
              </span>
            )}
          </button>
          <button type="button" onClick={() => go('adopt')} className="btn-primary hidden sm:inline-flex">
            Adopt a Pet
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="btn h-10 w-10 rounded-full bg-white shadow-sm lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-cream-200 bg-cream-50/95 px-5 pb-6 pt-2 backdrop-blur-md animate-fade-in lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="rounded-xl px-4 py-3 text-left font-semibold text-cocoa-800 transition hover:bg-clay-100 hover:text-clay-600"
              >
                {link.label}
              </button>
            ))}
            <button type="button" onClick={() => go('adopt')} className="btn-primary mt-3">
              Adopt a Pet
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
