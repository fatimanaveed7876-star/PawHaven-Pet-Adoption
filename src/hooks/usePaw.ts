import { useEffect, useRef, useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const raw = localStorage.getItem('pawhaven-favorites');
      return raw ? (JSON.parse(raw) as number[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pawhaven-favorites', JSON.stringify(favorites));
    } catch {
      // storage unavailable (private mode) — favorites just won't persist
    }
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return { favorites, toggleFavorite };
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll<HTMLElement>('.reveal').forEach((child) => observer.observe(child));
    if (el.classList.contains('reveal')) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
