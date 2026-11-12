import { Heart } from 'lucide-react';
import type { Pet } from '@/data/pets';

const statusStyles: Record<Pet['status'], string> = {
  Available: 'bg-emerald-100 text-emerald-800',
  Pending: 'bg-amber-100 text-amber-800',
  Adopted: 'bg-cocoa-200 text-cocoa-700',
};

interface Props {
  pet: Pet;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onViewDetails: (pet: Pet) => void;
}

export default function PetCard({ pet, isFavorite, onToggleFavorite, onViewDetails }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lifted">
      <div className="relative h-56 overflow-hidden">
        <img
          src={pet.image}
          alt={`${pet.name}, ${pet.breed}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${statusStyles[pet.status]}`}
        >
          {pet.status}
        </span>
        <button
          type="button"
          aria-label={isFavorite ? `Remove ${pet.name} from favourites` : `Save ${pet.name} to favourites`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(pet.id)}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all duration-200 hover:scale-110"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? 'fill-clay-500 text-clay-500' : 'text-cocoa-400'
            }`}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-cocoa-900">{pet.name}</h3>
          <span className="text-sm font-medium text-cocoa-400">{pet.age}</span>
        </div>
        <p className="mt-0.5 text-sm font-medium text-clay-600">{pet.breed}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {pet.personality.map((trait) => (
            <span key={trait} className="chip">
              {trait}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-cocoa-400">
          <span className="rounded-lg bg-cream-100 px-2 py-1">{pet.size}</span>
          <span className="rounded-lg bg-cream-100 px-2 py-1">{pet.gender}</span>
          <span className="ml-auto capitalize">{pet.type === 'dog' ? 'Dog' : 'Cat'}</span>
        </div>

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => onViewDetails(pet)}
            className="btn-primary w-full text-sm"
          >
            {pet.status === 'Adopted' ? 'View their story' : 'View Details'}
          </button>
        </div>
      </div>
    </article>
  );
}
