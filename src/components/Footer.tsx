import { PawPrint, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="bg-cocoa-950 text-cream-100">
      <div className="container-paw grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <button type="button" onClick={() => onNavigate('top')} className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-clay-500 text-white">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl font-bold text-white">
              Paw<span className="text-clay-300">Haven</span>
            </span>
          </button>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/70">
            A non-profit rescue helping every dog and cat find a family of their own. Every tail
            deserves a happy ending.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#top"
                aria-label={label}
                onClick={(e) => e.preventDefault()}
                className="grid h-10 w-10 place-items-center rounded-full bg-cocoa-800 text-cream-100 transition hover:bg-clay-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { id: 'adopt', label: 'Adopt a Pet' },
              { id: 'how-it-works', label: 'How Adoption Works' },
              { id: 'stories', label: 'Happy Stories' },
              { id: 'faq', label: 'FAQ' },
            ].map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(l.id)}
                  className="text-cream-200/80 transition hover:text-clay-300"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Shelter hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream-200/80">
            <li className="flex justify-between gap-6">
              <span>Mon – Fri</span>
              <span className="font-medium text-cream-100">9:00 – 18:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Saturday</span>
              <span className="font-medium text-cream-100">10:00 – 16:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Sunday</span>
              <span className="font-medium text-cream-100">Closed</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream-200/80">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-clay-300" /> 42 Maple Street, Springfield
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-clay-300" /> (555) 012-3456
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-clay-300" /> hello@pawhaven.org
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cocoa-800 py-6 text-center text-xs text-cream-200/60">
        © {new Date().getFullYear()} PawHaven Animal Rescue. Made with love for every stray heart.
      </div>
    </footer>
  );
}
