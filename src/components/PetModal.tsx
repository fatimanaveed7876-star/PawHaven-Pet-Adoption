import { useEffect } from 'react';
import { X, Heart, MapPin, Cake, Ruler, Info } from 'lucide-react';
import type { Pet } from '@/data/pets';

interface Props {
  pet: Pet;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClose: () => void;
  onStartInquiry: (pet: Pet) => void;
}

export default function PetModal({
  pet,
  isFavorite,
  onToggleFavorite,
  onClose,
  onStartInquiry,
}: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-cocoa-950/60 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${pet.name}'s profile`}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream-50 shadow-lifted animate-pop-in sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-72">
          <img src={pet.image} alt={`${pet.name}, ${pet.breed}`} className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-cocoa-800 shadow-sm transition hover:scale-110"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
            <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur">
              <h3 className="font-display text-2xl font-semibold text-cocoa-900">{pet.name}</h3>
              <p className="text-sm font-medium text-clay-600">{pet.breed}</p>
            </div>
            <button
              type="button"
              onClick={() => onToggleFavorite(pet.id)}
              className="btn h-11 rounded-full bg-white/95 px-4 text-sm shadow-card hover:scale-105"
            >
              <Heart
                className={`h-5 w-5 ${isFavorite ? 'fill-clay-500 text-clay-500' : 'text-cocoa-400'}`}
              />
              {isFavorite ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <Cake className="mx-auto h-5 w-5 text-clay-500" />
              <p className="mt-1 text-xs font-medium text-cocoa-400">Age</p>
              <p className="text-sm font-bold text-cocoa-800">{pet.age}</p>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <Ruler className="mx-auto h-5 w-5 text-clay-500" />
              <p className="mt-1 text-xs font-medium text-cocoa-400">Size</p>
              <p className="text-sm font-bold text-cocoa-800">{pet.size}</p>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <Info className="mx-auto h-5 w-5 text-clay-500" />
              <p className="mt-1 text-xs font-medium text-cocoa-400">Gender</p>
              <p className="text-sm font-bold text-cocoa-800">{pet.gender}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {pet.personality.map((trait) => (
              <span key={trait} className="chip">
                {trait}
              </span>
            ))}
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                pet.status === 'Available'
                  ? 'bg-emerald-100 text-emerald-800'
                  : pet.status === 'Pending'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-cocoa-200 text-cocoa-700'
              }`}
            >
              {pet.status}
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-cocoa-700">{pet.description}</p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cocoa-400">
            <MapPin className="h-4 w-4 text-clay-500" /> Waiting at {pet.location}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onStartInquiry(pet)}
              disabled={pet.status !== 'Available'}
              className="btn-primary flex-1"
            >
              {pet.status === 'Available'
                ? `Start adoption inquiry for ${pet.name}`
                : pet.status === 'Pending'
                  ? 'Adoption in progress'
                  : 'Already found a home'}
            </button>
            <button type="button" onClick={onClose} className="btn-outline sm:w-auto">
              Keep browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
