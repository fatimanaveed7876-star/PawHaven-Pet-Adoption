import { useCallback, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AdoptPage from '@/pages/AdoptPage';
import PetModal from '@/components/PetModal';
import { useFavorites } from '@/hooks/usePaw';
import type { Pet } from '@/data/pets';

type Page = 'home' | 'adopt' | 'favorites';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [inquiryPetId, setInquiryPetId] = useState<number | null>(null);
  const [inquirySignal, setInquirySignal] = useState(0);
  const { favorites, toggleFavorite } = useFavorites();

  const scrollToId = useCallback((id: string, delay = 0) => {
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, delay);
  }, []);

  const navigate = useCallback(
    (sectionId: string) => {
      if (sectionId === 'top') {
        setPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (sectionId === 'adopt' || sectionId === 'favorites') {
        setPage(sectionId);
        window.scrollTo({ top: 0 });
        return;
      }
      // Section on the home page — wait for the page switch to render first
      const needsPageSwitch = page !== 'home';
      if (needsPageSwitch) setPage('home');
      scrollToId(sectionId, needsPageSwitch ? 80 : 0);
    },
    [page, scrollToId]
  );

  const openDetails = useCallback((pet: Pet) => {
    setSelectedPet(pet);
  }, []);

  const startInquiry = useCallback(
    (pet: Pet) => {
      setInquiryPetId(pet.id);
      setInquirySignal((s) => s + 1);
      setSelectedPet(null);
      const needsPageSwitch = page !== 'home';
      if (needsPageSwitch) setPage('home');
      // Delay lets the modal unmount restore page scrolling before we scroll
      scrollToId('contact', needsPageSwitch ? 80 : 60);
    },
    [page, scrollToId]
  );

  const isFavorite = useCallback((id: number) => favorites.includes(id), [favorites]);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar onNavigate={navigate} favoriteCount={favorites.length} />

      {page === 'home' ? (
        <HomePage
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          onViewDetails={openDetails}
          onNavigate={navigate}
          inquiryPetId={inquiryPetId}
          inquirySignal={inquirySignal}
        />
      ) : (
        <AdoptPage
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          onViewDetails={openDetails}
          showFavoritesOnly={page === 'favorites'}
          onLeaveFavorites={() => navigate('adopt')}
          resetOnMount
        />
      )}

      <Footer onNavigate={navigate} />

      {selectedPet && (
        <PetModal
          pet={selectedPet}
          isFavorite={isFavorite(selectedPet.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedPet(null)}
          onStartInquiry={startInquiry}
        />
      )}
    </div>
  );
}

export default App;
