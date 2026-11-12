import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  source: 'contact' | 'inquiry';
  petName?: string;
  focusSignal?: number;
}

export default function InquiryForm({ source, petName, focusSignal = 0 }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const switchView = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  // Arriving from a pet's profile: clear any previous draft, show a fresh form
  // and bring it into view. focusSignal increments on every inquiry start.
  useEffect(() => {
    if (focusSignal === 0 || !petName) return;
    switchView();
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      formRef.current?.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusSignal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email and a short message.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div ref={formRef} className="flex flex-col items-center rounded-2xl bg-emerald-50 p-8 text-center animate-pop-in">
        <CheckCircle2 className="h-14 w-14 text-emerald-600" />
        <h4 className="mt-4 font-display text-2xl font-semibold text-emerald-900">
          Thank you, {name.trim()}!
        </h4>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-emerald-800/80">
          {source === 'inquiry' && petName
            ? `Your inquiry about ${petName} has been received. Our adoption team will email you within one working day to arrange a meet-and-greet.`
            : 'Your message has been received. Our team will get back to you within one working day.'}
        </p>
        <button
          type="button"
          onClick={switchView}
          className="btn-outline mt-6 text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div ref={formRef}>
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
      <div>
        <label htmlFor={`${source}-name`} className="field-label">
          Your name
        </label>
        <input
          id={`${source}-name`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jamie Parker"
          className="field-input"
        />
      </div>
      <div>
        <label htmlFor={`${source}-email`} className="field-label">
          Email address
        </label>
        <input
          id={`${source}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jamie@example.com"
          className="field-input"
        />
      </div>
      <div>
        <label htmlFor={`${source}-message`} className="field-label">
          {source === 'inquiry' ? `Why would ${petName ?? 'this pet'} be a great match?` : 'Message'}
        </label>
        <textarea
          id={`${source}-message`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder={
            source === 'inquiry'
              ? 'Tell us about your home, family, and experience with pets…'
              : 'How can we help?'
          }
          className="field-input resize-none"
        />
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary w-full">
        {source === 'inquiry' ? 'Send adoption inquiry' : 'Send message'}
      </button>
    </form>
    </div>
  );
}
