import { createFileRoute, Link } from "@tanstack/react-router";
import { type FormEvent, type ReactNode, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Siren,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

const CLINIC = {
  phoneRaw: "9604658424",
  phoneDisplay: "+91 96046 58424",
  whatsappRaw: "919604658424",
  email: "hello@chhayaclinic.in",
  address:
    "Shop no. 111 Ganesh Park B Wing, Katraj Jakat Naka, Near Bhaji Mandai, Katraj Pune 411046",
  mapsQuery:
    "https://www.google.com/maps/search/?api=1&query=Shop+No+111+Ganesh+Park+B+Wing+Katraj+Jakat+Naka+Pune+411046",
};

type FormState = {
  name: string;
  phone: string;
  reason: string;
  message: string;
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions | Chhaya Clinic, Katraj Pune" },
      {
        name: "description",
        content:
          "Visit, call or WhatsApp Chhaya Clinic in Katraj, Pune. Open Mon-Sat 10:00 AM-8:00 PM and Sun 10:00 AM-2:00 PM. Same-day emergency support available.",
      },
      {
        property: "og:title",
        content: "Contact Chhaya Clinic - Katraj, Pune",
      },
      {
        property: "og:description",
        content: "Get directions, call, or message us on WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    reason: "Dental Consultation",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState<"phone" | "email" | null>(null);

  const contactCards = useMemo(
    () => [
      {
        icon: <Phone className="size-5" />,
        title: "Call us",
        value: CLINIC.phoneDisplay,
        href: `tel:+91${CLINIC.phoneRaw}`,
        cta: "Tap to call",
      },
      {
        icon: <MessageCircle className="size-5" />,
        title: "WhatsApp",
        value: "Average reply in 15 min",
        href: `https://wa.me/${CLINIC.whatsappRaw}`,
        cta: "Open WhatsApp",
        accent: "success" as const,
      },
      {
        icon: <Mail className="size-5" />,
        title: "Email",
        value: CLINIC.email,
        href: `mailto:${CLINIC.email}`,
        cta: "Send email",
      },
      {
        icon: <MapPin className="size-5" />,
        title: "Directions",
        value: "Katraj, Pune 411046",
        href: CLINIC.mapsQuery,
        cta: "Open maps",
      },
    ],
    []
  );

  const trimmedName = form.name.trim();
  const numericPhone = form.phone.replace(/\D/g, "");
  const messageLength = form.message.trim().length;
  const isFormReady =
    trimmedName.length >= 2 &&
    numericPhone.length >= 10 &&
    numericPhone.length <= 15 &&
    (messageLength === 0 || messageLength >= 8);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (trimmedName.length < 2) {
      next.name = "Please enter your full name.";
    }
    if (numericPhone.length < 10 || numericPhone.length > 15) {
      next.phone = "Please enter a valid phone number.";
    }
    if (form.message.trim().length > 0 && form.message.trim().length < 8) {
      next.message = "Please add a bit more detail or leave it blank.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildWhatsappText() {
    return [
      "Hi Chhaya Clinic, I would like to contact the clinic.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Reason: ${form.reason}`,
      `Message: ${form.message.trim() || "-"}`,
    ].join("\n");
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    window.open(
      `https://wa.me/${CLINIC.whatsappRaw}?text=${encodeURIComponent(buildWhatsappText())}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  async function copyValue(value: string, type: "phone" | "email") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  }

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-ink text-ice">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 size-[700px] rounded-full bg-bright/30 blur-[140px] animate-aurora" />
          <div
            className="absolute bottom-0 right-1/4 size-[500px] rounded-full bg-sky/25 blur-[120px] animate-aurora"
            style={{ animationDelay: "-6s" }}
          />
          <div className="absolute inset-0 bg-grid opacity-[0.24]" />
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.18em] text-sky">
              <Sparkles className="size-3" /> Fast support, clear directions
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-balance">
              Contact the clinic in a way that feels
              <span className="italic text-sky"> easiest for you</span>.
            </h1>
            <p className="mt-6 text-lg text-ice/72 max-w-2xl leading-relaxed font-light">
              Call us directly, send details on WhatsApp, or get one-tap
              directions. The contact flow is designed to be quick on mobile
              and clear on desktop.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <QuickChip icon={<Clock className="size-4" />} label="Mon-Sat" value="10:00 AM-8:00 PM" />
              <QuickChip icon={<CalendarDays className="size-4" />} label="Sunday" value="10:00 AM-2:00 PM" />
              <QuickChip icon={<Siren className="size-4" />} label="Emergency" value="Same-day support" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[30px] glass-strong border border-white/12 p-6 lg:p-7 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-sky font-semibold">
                Contact summary
              </p>
              <InfoRow icon={<Phone className="size-4 text-sky" />} label="Phone" value={CLINIC.phoneDisplay} />
              <InfoRow icon={<Mail className="size-4 text-sky" />} label="Email" value={CLINIC.email} />
              <InfoRow icon={<MapPin className="size-4 text-sky" />} label="Address" value={CLINIC.address} />
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={`tel:+91${CLINIC.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sky to-bright text-ink font-semibold text-sm"
                >
                  <Phone className="size-4" /> Call now
                </a>
                <a
                  href={`https://wa.me/${CLINIC.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-ice/90 text-sm hover:bg-white/5 transition-colors"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a
                  href={CLINIC.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-ice/90 text-sm hover:bg-white/5 transition-colors"
                >
                  <Navigation className="size-4" /> Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card) => (
              <ContactCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-24 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-[30px] bg-ink text-ice p-6 lg:p-10 shadow-deep relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-[0.08]" />
            <h2 className="relative font-display text-3xl sm:text-4xl font-light tracking-tight">
              Send us your details
            </h2>
            <p className="relative text-sm text-ice/60 mt-2 max-w-xl leading-relaxed">
              A short form is easier to finish on mobile and still gives us the
              details we need to reply quickly.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative mt-8 p-6 rounded-2xl bg-success/15 border border-success/30 text-center"
              >
                <div className="mx-auto size-12 rounded-full bg-success/30 flex items-center justify-center">
                  <Check className="size-6 text-success" />
                </div>
                <p className="mt-3 font-semibold text-ice">Ready to send on WhatsApp</p>
                <p className="text-sm text-ice/60 mt-1">
                  Your details were prepared successfully. We will reply shortly.
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-ice/90 text-sm hover:bg-white/5 transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="relative mt-6 space-y-4">
                <Field label="Your name" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    required
                    autoComplete="name"
                    placeholder="Priya Sharma"
                    className="w-full bg-ice/5 border border-ice/15 rounded-2xl px-4 py-3 text-ice placeholder:text-ice/30 focus:outline-none focus:border-sky transition-colors"
                  />
                </Field>

                <Field label="WhatsApp number" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      updateField("phone", e.target.value.replace(/[^\d+\s()-]/g, ""))
                    }
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 99999 99999"
                    className="w-full bg-ice/5 border border-ice/15 rounded-2xl px-4 py-3 text-ice placeholder:text-ice/30 focus:outline-none focus:border-sky transition-colors"
                  />
                  <p className="mt-1.5 text-xs text-ice/45">
                    Include country code for faster callback.
                  </p>
                </Field>

                <Field label="Reason">
                  <select
                    value={form.reason}
                    onChange={(e) => updateField("reason", e.target.value)}
                    className="w-full bg-ice/5 border border-ice/15 rounded-2xl px-4 py-3 text-ice focus:outline-none focus:border-sky transition-colors"
                  >
                    <option className="bg-ink text-ice">Dental Consultation</option>
                    <option className="bg-ink text-ice">Tooth Pain / Emergency</option>
                    <option className="bg-ink text-ice">Braces / Aligners</option>
                    <option className="bg-ink text-ice">Root Canal</option>
                    <option className="bg-ink text-ice">Dental Implant</option>
                  </select>
                </Field>

                <Field label="Message" error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={5}
                    maxLength={220}
                    placeholder="Briefly tell us what you need help with"
                    className="w-full bg-ice/5 border border-ice/15 rounded-2xl px-4 py-3 text-ice placeholder:text-ice/30 focus:outline-none focus:border-sky transition-colors resize-none"
                  />
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-xs text-ice/45">Optional, but helps us reply better.</p>
                    <p className="text-xs text-ice/45">{messageLength}/220</p>
                  </div>
                </Field>

                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="submit"
                    disabled={!isFormReady}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky to-bright text-ink font-semibold shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <Send className="size-4" /> Continue to WhatsApp
                  </button>
                  <a
                    href={`tel:+91${CLINIC.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/20 text-ice/90 font-medium hover:bg-white/5 transition-colors"
                  >
                    <Phone className="size-4" /> Call instead
                  </a>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-[28px] glass-light p-6 border border-royal/10 shadow-soft">
              <div className="flex items-center gap-2 text-sky">
                <Clock className="size-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Clinic hours
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <Row label="Mon - Sat" value="10:00 AM - 8:00 PM" />
                <Row label="Sunday" value="10:00 AM - 2:00 PM" />
                <Row label="Public holidays" value="Closed" />
              </ul>
            </div>

            <div className="rounded-[28px] glass-light p-6 border border-warning/35 shadow-soft">
              <div className="flex items-center gap-2 text-warning">
                <Siren className="size-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Dental emergency?
                </span>
              </div>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                For severe pain, swelling, or injury, call directly. We keep
                emergency slots open every day.
              </p>
              <a
                href={`tel:+91${CLINIC.phoneRaw}`}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-warning text-ink font-semibold text-sm"
              >
                <Phone className="size-4" /> Call emergency line
              </a>
            </div>

            <div className="rounded-[28px] glass-light p-4 border border-royal/10 shadow-soft">
              <a
                href={CLINIC.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative rounded-2xl overflow-hidden aspect-[4/3] border border-royal/10"
              >
                <iframe
                  title="Chhaya Clinic location"
                  src="https://www.google.com/maps?q=Shop+No+111+Ganesh+Park+B+Wing+Katraj+Jakat+Naka+Pune+411046&output=embed"
                  className="w-full h-full grayscale-[20%] opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-ink/70 text-ice flex items-center justify-between backdrop-blur-sm border border-white/15">
                  <span className="text-xs font-semibold">Open in Google Maps</span>
                  <ArrowRight className="size-4 text-sky" />
                </div>
              </a>

              <div className="mt-4 grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => copyValue(CLINIC.phoneDisplay, "phone")}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-royal/15 text-ink/80 text-sm hover:bg-royal/5 transition-colors"
                >
                  <Copy className="size-4" />
                  {copied === "phone" ? "Phone copied" : "Copy phone"}
                </button>
                <button
                  type="button"
                  onClick={() => copyValue(CLINIC.email, "email")}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-royal/15 text-ink/80 text-sm hover:bg-royal/5 transition-colors"
                >
                  <Copy className="size-4" />
                  {copied === "email" ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-[30px] bg-ink text-ice p-8 lg:p-12 shadow-deep overflow-hidden relative">
            <div className="absolute -top-16 -left-12 size-[260px] rounded-full bg-bright/25 blur-[90px]" />
            <div className="absolute inset-0 bg-grid opacity-[0.08]" />
            <h2 className="relative font-display text-3xl lg:text-5xl font-light tracking-tighter text-balance">
              Prefer to book directly?
            </h2>
            <p className="relative mt-3 text-ice/65 max-w-xl">
              Skip the message form and reserve a treatment slot with our
              guided booking flow.
            </p>
            <div className="relative mt-7 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky to-bright text-ink font-semibold shadow-glow"
              >
                Book appointment <ArrowRight className="size-4" />
              </Link>
              <a
                href={`https://wa.me/${CLINIC.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/20 text-ice/90 hover:bg-white/5 transition-colors"
              >
                WhatsApp now
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  cta,
  accent,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
  cta: string;
  accent?: "success";
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative p-6 rounded-[28px] glass-light border border-royal/10 shadow-soft hover:bg-white transition-colors block"
    >
      <div
        className={`size-11 rounded-2xl flex items-center justify-center mb-4 ${
          accent === "success"
            ? "bg-success/20 text-success"
            : "bg-sky/15 text-sky"
        }`}
      >
        {icon}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-ink/45">{title}</p>
      <p className="font-display text-lg text-ink mt-1">{value}</p>
      <p className="mt-3 text-xs font-semibold text-royal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        {cta} <ArrowRight className="size-3" />
      </p>
    </a>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-widest text-ice/55 mb-2">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-warning">{error}</span> : null}
    </label>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
      <span className="mt-0.5">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-ice/50">{label}</p>
        <p className="mt-1 text-sm text-ice/85 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between text-ink/78 gap-3">
      <span className="text-ink/55">{label}</span>
      <span className="font-semibold text-right">{value}</span>
    </li>
  );
}

function QuickChip({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl glass border border-white/12 px-3 py-3">
      <div className="flex items-center gap-2 text-sky text-xs font-semibold uppercase tracking-widest">
        {icon}
        <span>{label}</span>
      </div>
      <p className="mt-1 text-sm text-ice/80">{value}</p>
    </div>
  );
}
