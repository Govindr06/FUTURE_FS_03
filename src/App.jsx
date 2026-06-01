import { useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Gem,
  Mail,
  Phone,
  Scissors,
  Sparkles,
  User,
} from 'lucide-react';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
};

const services = [
  {
    title: 'Custom Balayage',
    price: 'From $285',
    description: 'Dimensional, hand-painted color designed around your complexion and lifestyle.',
    icon: Sparkles,
  },
  {
    title: 'Luxury Extensions',
    price: 'From $650',
    description: 'Seamless length and volume with a private consultation and tailored maintenance plan.',
    icon: Gem,
  },
  {
    title: 'Bridal Styling',
    price: 'From $420',
    description: 'Camera-ready hair for ceremonies, receptions, and full wedding-week beauty moments.',
    icon: CalendarCheck,
  },
  {
    title: 'Signature Cut & Gloss',
    price: 'From $160',
    description: 'Precision shaping, luminous gloss, and a polished finish for effortless daily wear.',
    icon: Scissors,
  },
];

const serviceOptions = services.map((service) => service.title);

function App() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      setFormState(initialFormState);
      setFormMessage({
        type: 'success',
        text: 'Your consultation request has been received. Our concierge will contact you shortly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <ServicesMenu />
      <BookingForm
        formState={formState}
        formMessage={formMessage}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=85"
        alt="A luxury salon styling station with warm lighting"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(190,24,93,0.2),transparent_32%)]" />

      <nav className="absolute left-0 right-0 top-0 z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <a href="#top" className="font-serif text-2xl tracking-wide text-white">
          Aura
        </a>
        <a
          href="#booking"
          className="hidden items-center gap-2 rounded-full border border-rose-300/35 px-5 py-2 text-sm font-medium text-rose-100 transition hover:border-rose-200 hover:bg-white/10 sm:inline-flex"
        >
          Book Now
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </nav>

      <div id="top" className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 border border-rose-300/25 bg-zinc-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose-200 backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Aura Premium Salon
          </p>
          <h1 className="font-serif text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Elevate Your Everyday
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            Bespoke color, polished styling, and discreet VIP consultations for clients who expect
            every detail to feel intentional.
          </p>
          <a
            href="#booking"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-rose-800 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            Request VIP Consultation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesMenu() {
  return (
    <section className="border-y border-white/10 bg-zinc-950 px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
              Services Menu
            </p>
            <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
              Premium work, tailored to you.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-300">
            Each appointment begins with a consultation so the service, finish, and maintenance plan
            align with your calendar and personal style.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="border border-white/10 bg-white/[0.03] p-7 transition hover:border-rose-300/35 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-950 text-rose-200">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-8 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl text-white">{service.title}</h3>
                  <p className="shrink-0 text-sm font-semibold text-rose-300">{service.price}</p>
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-300">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BookingForm({ formState, formMessage, isSubmitting, onChange, onSubmit }) {
  return (
    <section id="booking" className="bg-zinc-950 px-6 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-300">
            VIP Booking
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Private consultation, elegantly requested.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Share the essentials once. This portfolio demo simulates a refined booking flow with
            polished loading and confirmation states.
          </p>
          <div className="mt-8 space-y-4 text-sm text-zinc-300">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-rose-300" aria-hidden="true" />
              <span>Elegant lead capture for high-intent inquiries</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-rose-300" aria-hidden="true" />
              <span>Phone and service details captured for a concierge follow-up</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField label="Name" htmlFor="name" icon={User}>
              <input
                required
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
              />
            </FormField>

            <FormField label="Email" htmlFor="email" icon={Mail}>
              <input
                required
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
              />
            </FormField>

            <FormField label="Phone Number" htmlFor="phone" icon={Phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={onChange}
                placeholder="(555) 123-4567"
                className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
              />
            </FormField>

            <FormField label="Service Requested" htmlFor="service" icon={Scissors}>
              <select
                required
                id="service"
                name="service"
                value={formState.service}
                onChange={onChange}
                className="w-full bg-transparent text-white outline-none"
              >
                <option value="" disabled className="bg-zinc-950 text-zinc-400">
                  Select a service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service} className="bg-zinc-950 text-white">
                    {service}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-rose-800 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:bg-rose-950 disabled:text-rose-100/70"
          >
            {isSubmitting ? 'Sending...' : 'Send VIP Request'}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {formMessage && (
            <p
              className="mt-5 border border-rose-300/25 bg-rose-950/50 px-4 py-3 text-sm text-rose-100"
              role="status"
            >
              {formMessage.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function FormField({ label, htmlFor, icon: Icon, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block border border-white/10 bg-zinc-950/80 px-4 py-3 focus-within:border-rose-300/60"
    >
      <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label}
      </span>
      {children}
    </label>
  );
}

export default App;
