import { useEffect, useMemo, useState } from 'react';
import { Search, Heart, Dog, Cat, PawPrint, RotateCcw } from 'lucide-react';
import { pets, type Pet } from '@/data/pets';
import PetCard from '@/components/PetCard';

interface Props {
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (id: number) => void;
  onViewDetails: (pet: Pet) => void;
  showFavoritesOnly: boolean;
  onLeaveFavorites: () => void;
  resetOnMount?: boolean;
}

type TypeFilter = 'all' | 'dog' | 'cat';
type SizeFilter = 'all' | 'Small' | 'Medium' | 'Large';

export default function AdoptPage({
  isFavorite,
  onToggleFavorite,
  onViewDetails,
  showFavoritesOnly,
  onLeaveFavorites,
  resetOnMount,
}: Props) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<TypeFilter>('all');
  const [size, setSize] = useState<SizeFilter>('all');
  const [age, setAge] = useState<'all' | 'baby' | 'young' | 'adult'>('all');

  const filtered = useMemo(() => {
    return pets.filter((p) => {
      if (showFavoritesOnly && !isFavorite(p.id)) return false;
      if (type !== 'all' && p.type !== type) return false;
      if (size !== 'all' && p.size !== size) return false;
      if (age === 'baby' && p.ageMonths > 12) return false;
      if (age === 'young' && (p.ageMonths <= 12 || p.ageMonths > 36)) return false;
      if (age === 'adult' && p.ageMonths <= 36) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        const haystack = `${p.name} ${p.breed} ${p.personality.join(' ')}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, type, size, age, showFavoritesOnly, isFavorite]);

  const resetFilters = () => {
    setQuery('');
    setType('all');
    setSize('all');
    setAge('all');
  };

  const hasActiveFilters = query.trim() !== '' || type !== 'all' || size !== 'all' || age !== 'all';

  // Switching between the catalogue and favourites clears stale filters
  // so a leftover search can never make a full list look empty.
  useEffect(() => {
    if (resetOnMount) resetFilters();
  }, [resetOnMount]);

  const selectCls =
    'field-input cursor-pointer appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22%237C604A%22 viewBox=%220 0 16 16%22%3E%3Cpath d=%22M8 11L3 6h10z%22/%3E%3C/svg%3E")] bg-[right_1rem_center] bg-no-repeat pr-10 font-medium';

  return (
    <main className="pb-24">
      <section className="bg-cocoa-900 pb-14 pt-28 text-cream-100 sm:pt-36">
        <div className="container-paw">
          {showFavoritesOnly ? (
            <>
              <span className="section-eyebrow bg-cocoa-800 text-clay-300">
                <Heart className="h-3.5 w-3.5 fill-clay-300" /> Your saved friends
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
                Your Favourites
              </h1>
              <p className="mt-3 max-w-xl text-cream-200/75">
                The pets you have hearted live here. When one of them really steals your heart, open
                their profile and start an inquiry.
              </p>
            </>
          ) : (
            <>
              <span className="section-eyebrow bg-cocoa-800 text-clay-300">
                <PawPrint className="h-3.5 w-3.5" /> The adoption catalogue
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
                Meet the pets
              </h1>
              <p className="mt-3 max-w-xl text-cream-200/75">
                Search by name, filter by type, age and size, then tap a card to read each pet's
                full story.
              </p>
            </>
          )}
        </div>
      </section>

      <section className="container-paw -mt-8">
        <div className="rounded-3xl bg-white p-5 shadow-lifted sm:p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cocoa-300" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, breed or personality…"
              aria-label="Search pets"
              className="field-input pl-12"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="filter-type" className="field-label">
                Animal type
              </label>
              <select
                id="filter-type"
                value={type}
                onChange={(e) => setType(e.target.value as TypeFilter)}
                className={selectCls}
              >
                <option value="all">All animals</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
              </select>
            </div>
            <div>
              <label htmlFor="filter-age" className="field-label">
                Age
              </label>
              <select
                id="filter-age"
                value={age}
                onChange={(e) => setAge(e.target.value as typeof age)}
                className={selectCls}
              >
                <option value="all">Any age</option>
                <option value="baby">Up to 1 year</option>
                <option value="young">1 – 3 years</option>
                <option value="adult">Over 3 years</option>
              </select>
            </div>
            <div>
              <label htmlFor="filter-size" className="field-label">
                Size
              </label>
              <select
                id="filter-size"
                value={size}
                onChange={(e) => setSize(e.target.value as SizeFilter)}
                className={selectCls}
              >
                <option value="all">Any size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-medium text-cocoa-500" aria-live="polite">
              {filtered.length === 0
                ? 'No pets match your filters'
                : `${filtered.length} ${filtered.length === 1 ? 'pet' : 'pets'} found`}
            </p>
            <div className="flex gap-2">
              {type !== 'all' && (
                <span className="chip gap-1">
                  {type === 'dog' ? <Dog className="h-3.5 w-3.5" /> : <Cat className="h-3.5 w-3.5" />}
                  {type === 'dog' ? 'Dogs' : 'Cats'}
                </span>
              )}
              {hasActiveFilters && (
                <button type="button" onClick={resetFilters} className="btn-ghost text-sm">
                  <RotateCcw className="h-4 w-4" /> Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container-paw mt-10">
        {filtered.length === 0 ? (
          <div className="mx-auto max-w-md rounded-3xl bg-white p-12 text-center shadow-card">
            <PawPrint className="mx-auto h-12 w-12 text-cocoa-200" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-cocoa-900">
              {showFavoritesOnly ? 'No favourites yet' : 'No matches found'}
            </h3>
            <p className="mt-2 text-cocoa-500">
              {showFavoritesOnly
                ? 'Tap the heart on any pet to save them here for later.'
                : 'Try a different name, or loosen the filters — the right friend might be one click away.'}
            </p>
            {showFavoritesOnly ? (
              <button type="button" onClick={onLeaveFavorites} className="btn-primary mt-6">
                Browse all pets
              </button>
            ) : (
              <button type="button" onClick={resetFilters} className="btn-primary mt-6">
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                isFavorite={isFavorite(pet.id)}
                onToggleFavorite={onToggleFavorite}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
