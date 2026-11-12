import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  items: { q: string; a: string }[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="reveal space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl bg-white shadow-card">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-cocoa-900">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-clay-500 transition-transform duration-300 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-cocoa-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
