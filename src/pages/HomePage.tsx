import { PawPrint, ArrowRight, HeartHandshake, ShieldCheck, Stethoscope, Phone, Mail, Info } from 'lucide-react';
import { pets, featuredPetIds, stories, faqs, type Pet } from '@/data/pets';
import PetCard from '@/components/PetCard';
import InquiryForm from '@/components/InquiryForm';
import FaqAccordion from '@/components/FaqAccordion';
import { useReveal } from '@/hooks/usePaw';

interface Props {
  isFavorite: (id: number) => boolean;
  onToggleFavorite: (id: number) => void;
  onViewDetails: (pet: Pet) => void;
  onNavigate: (sectionId: string) => void;
  inquiryPetId: number | null;
  inquirySignal: number;
}

const steps = [
  {
    step: '01',
    title: 'Meet your match',
    text: 'Browse our cats and dogs, use the filters to find your kind of companion, and save favourites as you go.',
  },
  {
    step: '02',
    title: 'Say hello',
    text: 'Send an inquiry and we will arrange a meet-and-greet at the shelter — bring the whole family, pets included.',
  },
  {
    step: '03',
    title: 'Welcome home',
    text: 'Complete a short home check and paperwork, then bring your new best friend home. We check in for life.',
  },
];

const whyItems = [
  {
    icon: HeartHandshake,
    title: 'Matched with care',
    text: 'Our team knows every pet personally and helps you find the companion who fits your life, not just your sofa.',
  },
  {
    icon: Stethoscope,
    title: 'Healthy and happy',
    text: 'Every pet leaves fully vaccinated, microchipped, and neutered, with a complete medical record in your hands.',
  },
  {
    icon: ShieldCheck,
    title: 'Support for life',
    text: 'Adoption comes with lifetime advice from our behaviour team — and our door is always open if times get hard.',
  },
];

export default function HomePage({
  isFavorite,
  onToggleFavorite,
  onViewDetails,
  onNavigate,
  inquiryPetId,
  inquirySignal,
}: Props) {
  const revealRef = useReveal<HTMLElement>();
  const featured = featuredPetIds
    .map((id) => pets.find((p) => p.id === id))
    .filter((p): p is Pet => Boolean(p));

  return (
    <main ref={revealRef}>
      {/* ---------- HERO ---------- */}
      <section id="top" className="relative overflow-hidden bg-cream-100">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-clay-200/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-clay-100 blur-3xl"
          aria-hidden
        />
        <div className="container-paw relative grid items-center gap-12 pb-20 pt-28 sm:pt-32 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-40">
          <div className="animate-fade-up">
            <span className="section-eyebrow">
              <PawPrint className="h-3.5 w-3.5" /> Rescue · Love · Repeat
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.1] text-cocoa-900 sm:text-6xl lg:text-7xl">
              Find Your New{' '}
              <span className="relative inline-block text-clay-500">
                Best Friend
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full text-clay-300"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 9C60 3 160 3 217 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cocoa-600">
              Every wagging tail and gentle purr at PawHaven is waiting for one thing — a person to
              love. Open your heart, and someone furry will fill it forever.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => onNavigate('adopt')} className="btn-primary text-base">
                Adopt a Pet <ArrowRight className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => onNavigate('how-it-works')} className="btn-outline">
                How adoption works
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { n: '320+', l: 'Pets rehomed' },
                { n: '48', l: 'Waiting today' },
                { n: '12', l: 'Years of rescue' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl font-bold text-cocoa-900">{s.n}</p>
                  <p className="text-sm font-medium text-cocoa-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -left-6 -top-6 hidden rounded-2xl bg-white px-5 py-3 shadow-card animate-float sm:block">
              <p className="text-xs font-medium text-cocoa-400">Biscuit says</p>
              <p className="font-display text-lg font-semibold text-clay-600">"Pick me!"</p>
            </div>
            <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] shadow-lifted">
              <img
                src="https://images.pexels.com/photos/9428200/pexels-photo-9428200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="A young boy hugging his dog at home"
                className="aspect-[4/3.4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-card sm:right-8">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
              </span>
              <div>
                <p className="text-sm font-bold text-cocoa-900">Vet checked</p>
                <p className="text-xs font-medium text-cocoa-400">Vaccinated & microchipped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED PETS ---------- */}
      <section className="py-20 lg:py-28">
        <div className="container-paw">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Featured friends</span>
              <h2 className="mt-4 font-display text-4xl font-bold text-cocoa-900 sm:text-5xl">
                Ready to steal your heart
              </h2>
            </div>
            <button type="button" onClick={() => onNavigate('adopt')} className="btn-outline">
              See all pets <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="reveal mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                isFavorite={isFavorite(pet.id)}
                onToggleFavorite={onToggleFavorite}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how-it-works" className="bg-cocoa-900 py-20 text-cream-100 lg:py-28">
        <div className="container-paw">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="section-eyebrow bg-cocoa-800 text-clay-300">Simple as 1-2-3</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              How Adoption Works
            </h2>
            <p className="mt-4 text-cream-200/75">
              Three easy steps between you and the sound of paws on your floor.
            </p>
          </div>
          <div className="reveal mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="relative rounded-3xl bg-cocoa-800/70 p-8 transition-colors hover:bg-cocoa-800"
              >
                <span className="font-display text-5xl font-bold text-clay-400/60">{s.step}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-cream-200/70">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-clay-400 md:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY PAWHAVEN ---------- */}
      <section className="py-20 lg:py-28">
        <div className="container-paw">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Why PawHaven?</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-cocoa-900 sm:text-5xl">
              Because second chances deserve first-class care
            </h2>
          </div>
          <div className="reveal mt-14 grid gap-6 md:grid-cols-3">
            {whyItems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lifted"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-clay-100 text-clay-600 transition-colors group-hover:bg-clay-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-cocoa-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-cocoa-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STORIES ---------- */}
      <section id="stories" className="bg-cream-100 py-20 lg:py-28">
        <div className="container-paw">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Happy tails</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-cocoa-900 sm:text-5xl">
              Happy Adoption Stories
            </h2>
          </div>
          <div className="reveal mt-14 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lifted"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-cocoa-900">{story.title}</h3>
                  <blockquote className="mt-3 text-sm leading-relaxed text-cocoa-600">
                    "{story.quote}"
                  </blockquote>
                  <p className="mt-4 text-sm font-bold text-clay-600">{story.author}</p>
                  <p className="text-xs font-medium text-cocoa-400">{story.pet}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="py-20 lg:py-28">
        <div className="container-paw grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            <span className="section-eyebrow">Good to know</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-cocoa-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-cocoa-600">
              Can't find your answer here? Our adoption team replies to every message within one
              working day — just scroll down and say hello.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="bg-cream-100 py-20 lg:py-28">
        <div className="container-paw grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="section-eyebrow">Contact us</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-cocoa-900 sm:text-5xl">
              Come say hello
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-cocoa-600">
              Questions about a pet, volunteering, or donating? We would love to hear from you.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { label: 'Visit', value: '42 Maple Street, Springfield', icon: 'paw' },
                { label: 'Call', value: '(555) 012-3456', icon: 'phone' },
                { label: 'Email', value: 'hello@pawhaven.org', icon: 'mail' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-clay-100 text-clay-600">
                    {item.icon === 'paw' ? (
                      <PawPrint className="h-5 w-5" />
                    ) : item.icon === 'phone' ? (
                      <Phone className="h-5 w-5" />
                    ) : (
                      <Mail className="h-5 w-5" />
                    )}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cocoa-400">
                      {item.label}
                    </p>
                    <p className="font-semibold text-cocoa-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal rounded-3xl bg-white p-8 shadow-card sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-cocoa-900">
              {inquiryPetId ? `Adoption inquiry` : 'Send us a message'}
            </h3>
            <p className="mt-1 text-sm text-cocoa-500">
              {inquiryPetId
                ? 'A few details and our adoption team will be in touch.'
                : "General questions — for pet inquiries use the button on a pet's profile."}
            </p>
            <InquiryForm
              source="inquiry"
              petName={inquiryPetId ? pets.find((p) => p.id === inquiryPetId)?.name : undefined}
              focusSignal={inquirySignal}
            />
            {inquiryPetId && (
              <p className="mt-4 inline-flex items-start gap-2 rounded-xl bg-clay-100 px-4 py-3 text-sm font-medium text-clay-700">
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                You are inquiring about{' '}
                <strong className="font-bold">{pets.find((p) => p.id === inquiryPetId)?.name}</strong>
                . Tell us a little about your home and family.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
