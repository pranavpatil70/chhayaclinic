import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  MessageCircle,
  CalendarDays,
  Clock,
  User,
  Sparkles,
  Calendar,
} from "lucide-react";

const GCAL_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ZheCrLIaWKNResM9ScqDeQ2K91Qpc1wkxin7fRtBnQQACFxnxYJWrWri51SmWt_I_dLcEogjK?gv=true";
import { z } from "zod";
import { SiteShell } from "@/components/site/SiteShell";
import { SERVICES } from "@/data/services";

const searchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/booking")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Free Consultation | Chhaya Clinic, Katraj Pune" },
      {
        name: "description",
        content:
          "Book your free first dental consultation at Chhaya Clinic, Katraj. Pick a treatment, choose your slot, and we'll confirm on WhatsApp.",
      },
      { property: "og:title", content: "Book a Free Dental Consultation — Chhaya Clinic" },
      {
        property: "og:description",
        content: "Three quick steps. Free first visit. Reply on WhatsApp within minutes.",
      },
    ],
  }),
  component: BookingPage,
});

const STEPS = ["Treatment", "Date & Time", "Your details"] as const;

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const WHATSAPP_NUMBER = "919999999999";

function getNextSevenDays() {
  const days: { iso: string; weekday: string; day: string; month: string }[] =
    [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      iso: d.toISOString().split("T")[0],
      weekday: d.toLocaleDateString("en-IN", { weekday: "short" }),
      day: d.getDate().toString().padStart(2, "0"),
      month: d.toLocaleDateString("en-IN", { month: "short" }),
    });
  }
  return days;
}

function BookingPage() {
  const { service: presetService } = Route.useSearch();

  const [bookingMode, setBookingMode] = useState<"google" | "whatsapp">("google");
  const [step, setStep] = useState(0);
  const [serviceSlug, setServiceSlug] = useState<string>(
    presetService ?? "consultation"
  );
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const days = useMemo(() => getNextSevenDays(), []);
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  const canNext =
    (step === 0 && !!service) ||
    (step === 1 && !!date && !!time) ||
    (step === 2 && name.trim().length > 1 && phone.trim().length >= 10);

  function buildWhatsAppLink() {
    const lines = [
      `Hi Chhaya Clinic, I'd like to book an appointment.`,
      ``,
      `*Treatment:* ${service?.name ?? "—"}`,
      `*Date:* ${date}`,
      `*Time:* ${time}`,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      notes ? `*Notes:* ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
  }

  function handleSubmit() {
    setSubmitted(true);
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
  }

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 size-[700px] rounded-full bg-bright/30 blur-[140px] animate-aurora" />
          <div
            className="absolute bottom-0 right-1/4 size-[600px] rounded-full bg-sky/20 blur-[120px] animate-aurora"
            style={{ animationDelay: "-6s" }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="max-w-4xl mx-auto px-5 lg:px-8 pt-16 pb-24 lg:pt-24">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.18em] text-sky">
              <Sparkles className="size-3" /> Free first consultation
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter leading-[0.95] text-balance">
              Book your{" "}
              <span className="italic text-sky">appointment</span>.
            </h1>
            <p className="mt-4 text-ice/60 leading-relaxed">
              Pick how you'd like to schedule — Google Calendar confirms
              instantly, or book via WhatsApp for a personal touch.
            </p>

            {/* Mode toggle */}
            <div className="mt-8 inline-flex items-center p-1 rounded-2xl glass gap-1">
              <button
                onClick={() => setBookingMode("google")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  bookingMode === "google"
                    ? "bg-gradient-to-r from-sky to-bright text-ink shadow-glow ring-1 ring-sky/40"
                    : "text-ice/60 hover:text-ice"
                }`}
              >
                <Calendar className="size-4" /> Google Calendar
              </button>
              <button
                onClick={() => setBookingMode("whatsapp")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  bookingMode === "whatsapp"
                    ? "bg-gradient-to-r from-success to-emerald-400 text-white shadow-[0_12px_30px_rgba(34,197,94,0.35)] ring-1 ring-success/40"
                    : "text-ice/60 hover:text-ice"
                }`}
              >
                <MessageCircle className="size-4" /> WhatsApp
              </button>
            </div>
          </div>

          {/* Google Calendar inline scheduler */}
          {bookingMode === "google" && (
            <motion.div
              key="gcal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-10 rounded-3xl overflow-hidden glass-strong"
            >
              <iframe
                src={GCAL_URL}
                style={{ border: 0 }}
                width="100%"
                height="650"
                title="Schedule an appointment"
                className="block"
              />
            </motion.div>
          )}

          {/* Stepper — only shown in WhatsApp mode */}
          {bookingMode === "whatsapp" && (
          <>
          <div className="mt-8 rounded-3xl border border-success/20 bg-success/10 px-4 py-4 sm:px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="size-11 rounded-2xl bg-success/20 flex items-center justify-center shrink-0">
                <MessageCircle className="size-5 text-success" />
              </div>
              <div>
                <p className="font-semibold text-ice">WhatsApp booking is the fastest option</p>
                <p className="text-sm text-ice/65 mt-1">
                  Fill the details below and send the request directly to the clinic team.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-success text-white font-semibold shadow-[0_12px_30px_rgba(34,197,94,0.35)] hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="size-4" /> Open WhatsApp
            </a>
          </div>

          {!submitted && (
            <div className="mt-12 flex items-center justify-center gap-3 sm:gap-6">
              {STEPS.map((label, i) => {
                const active = i === step;
                const done = i < step;
                return (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className={`flex items-center gap-2.5 ${
                        active || done ? "text-ice" : "text-ice/40"
                      }`}
                    >
                      <span
                        className={`size-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          done
                            ? "bg-success text-ink"
                            : active
                              ? "bg-gradient-to-br from-sky to-bright text-ink"
                              : "border border-ice/20"
                        }`}
                      >
                        {done ? <Check className="size-3.5" /> : i + 1}
                      </span>
                      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
                        {label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div
                        className={`w-8 sm:w-12 h-px ${done ? "bg-success" : "bg-ice/20"}`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Card */}
          <div className="mt-10 rounded-3xl glass-strong p-6 sm:p-10 min-h-[420px]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="mx-auto size-16 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="size-8 text-success" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-light tracking-tight">
                    Request sent on WhatsApp
                  </h2>
                  <p className="mt-3 text-ice/60 max-w-md mx-auto">
                    Our front desk will confirm your slot shortly. You can also
                    call us if it's urgent.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-success text-ink font-semibold"
                    >
                      <MessageCircle className="size-4" /> Reopen WhatsApp
                    </a>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass text-ice"
                    >
                      <Phone className="size-4" /> Call clinic
                    </a>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass text-ice"
                    >
                      <ArrowLeft className="size-4" /> Back to home
                    </Link>
                  </div>
                </motion.div>
              ) : step === 0 ? (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="font-display text-2xl font-medium">
                    Which treatment are you interested in?
                  </h2>
                  <p className="text-sm text-ice/50 mt-1">
                    Not sure? Pick "Dental Consultation" — it's free.
                  </p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1">
                    {SERVICES.map((s) => {
                      const selected = serviceSlug === s.slug;
                      return (
                        <button
                          key={s.slug}
                          onClick={() => setServiceSlug(s.slug)}
                          className={`text-left p-4 rounded-2xl border transition-all ${
                            selected
                              ? "border-sky bg-sky/10 shadow-glow"
                              : "border-ice/10 hover:border-ice/30 bg-ice/[0.02]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="font-semibold text-ice text-sm truncate">
                                {s.name}
                              </p>
                              <p className="text-xs text-ice/50 mt-0.5 line-clamp-1">
                                {s.short}
                              </p>
                            </div>
                            {selected && (
                              <Check className="size-4 text-sky shrink-0" />
                            )}
                          </div>
                          <p className="mt-3 text-[11px] font-semibold text-ice/70">
                            {s.priceFrom === 0
                              ? "Free first visit"
                              : `From ₹${s.priceFrom.toLocaleString("en-IN")}`}{" "}
                            · {s.duration}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : step === 1 ? (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="font-display text-2xl font-medium flex items-center gap-2">
                    <CalendarDays className="size-5 text-sky" /> Pick a date
                  </h2>
                  <div className="mt-5 grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {days.map((d) => {
                      const sel = date === d.iso;
                      return (
                        <button
                          key={d.iso}
                          onClick={() => setDate(d.iso)}
                          className={`p-3 rounded-2xl border text-center transition-all ${
                            sel
                              ? "border-sky bg-gradient-to-br from-sky/30 to-bright/20"
                              : "border-ice/10 hover:border-ice/30"
                          }`}
                        >
                          <p className="text-[10px] uppercase tracking-widest text-ice/50">
                            {d.weekday}
                          </p>
                          <p className="font-display text-2xl font-light mt-1">
                            {d.day}
                          </p>
                          <p className="text-[10px] text-ice/50">{d.month}</p>
                        </button>
                      );
                    })}
                  </div>

                  <h2 className="mt-8 font-display text-2xl font-medium flex items-center gap-2">
                    <Clock className="size-5 text-sky" /> Pick a time
                  </h2>
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((t) => {
                      const sel = time === t;
                      return (
                        <button
                          key={t}
                          onClick={() => setTime(t)}
                          disabled={!date}
                          className={`p-3 rounded-2xl border text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                            sel
                              ? "border-sky bg-sky/15 text-sky"
                              : "border-ice/10 hover:border-ice/30 text-ice/80"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="font-display text-2xl font-medium flex items-center gap-2">
                    <User className="size-5 text-sky" /> Your details
                  </h2>
                  <div className="mt-6 space-y-4 max-w-md">
                    <Field label="Full name">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Priya Sharma"
                        className="w-full bg-ice/5 border border-ice/15 rounded-2xl px-4 py-3 text-ice placeholder:text-ice/30 focus:outline-none focus:border-sky transition-colors"
                      />
                    </Field>
                    <Field label="WhatsApp number">
                      <input
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/[^\d+\s]/g, ""))
                        }
                        placeholder="+91 99999 99999"
                        inputMode="tel"
                        className="w-full bg-ice/5 border border-ice/15 rounded-2xl px-4 py-3 text-ice placeholder:text-ice/30 focus:outline-none focus:border-sky transition-colors"
                      />
                    </Field>
                    <Field label="Anything we should know? (optional)">
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        placeholder="Pain on the lower right, prefer female dentist, etc."
                        className="w-full bg-ice/5 border border-ice/15 rounded-2xl px-4 py-3 text-ice placeholder:text-ice/30 focus:outline-none focus:border-sky transition-colors resize-none"
                      />
                    </Field>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 p-4 rounded-2xl bg-ice/[0.04] border border-ice/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ice/50">
                      Summary
                    </p>
                    <div className="mt-2 grid sm:grid-cols-3 gap-3 text-sm">
                      <SummaryItem label="Treatment" value={service?.name} />
                      <SummaryItem label="Date" value={date} />
                      <SummaryItem label="Time" value={time} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Nav buttons */}
            {!submitted && (
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-ice/70 hover:text-ice disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
                {step < STEPS.length - 1 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky to-bright text-ink font-semibold disabled:opacity-40 disabled:cursor-not-allowed shadow-glow hover:-translate-y-0.5 transition-all"
                  >
                    Continue <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-success to-emerald-400 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-all shadow-[0_14px_35px_rgba(34,197,94,0.35)]"
                  >
                    <MessageCircle className="size-4" /> Confirm on WhatsApp
                  </button>
                )}
              </div>
            )}
          </div>
          </>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-widest text-ice/50 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function SummaryItem({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-ice/40">
        {label}
      </p>
      <p className="text-ice font-medium mt-0.5 truncate">{value || "—"}</p>
    </div>
  );
}
