import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Clock3,
  MapPin,
  Phone,
  BadgeCheck,
  Sparkles,
  Users,
  ArrowRight,
  Quote,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctorAruna from "@/assets/doctor-aruna.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chhaya Clinic | Katraj's Trusted Dentist Since 2014" },
      {
        name: "description",
        content:
          "Founded in 2014 by Dr. Aruna Deshmukh, Chhaya Clinic combines world-class dentistry with the warmth of a family practice. Our story, mission, and values.",
      },
      { property: "og:title", content: "Our Story — Chhaya Clinic & Dental Care" },
      {
        property: "og:description",
        content: "10+ years, 500+ families, one promise: gentle, honest dentistry.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Gentle by default",
    body: "Every procedure starts with comfort — pain-free anaesthesia, calm music, and time to ask anything.",
  },
  {
    icon: ShieldCheck,
    title: "Honest pricing",
    body: "Written quotes before treatment. No hidden charges, no pressure to upgrade.",
  },
  {
    icon: Sparkles,
    title: "World-class tech",
    body: "Digital X-rays, rotary endodontics, intraoral scanners — the same kit as premium chains.",
  },
  {
    icon: Users,
    title: "A family practice",
    body: "We treat grandparents, parents and kids — often three generations on the same day.",
  },
];

const STATS = [
  { value: "10+", label: "years in Katraj" },
  { value: "500+", label: "families treated" },
  { value: "4.8★", label: "Google review rating" },
  { value: "3", label: "specialty doctors" },
];

const HIGHLIGHTS = [
  "Digital diagnosis and treatment planning",
  "Comfort-first chairside experience",
  "Family dentistry for every age group",
  "Transparent estimates before treatment",
];

const TIMELINE = [
  { year: "2014", text: "Chhaya Clinic opened in Katraj with a simple goal: make premium dental care feel personal." },
  { year: "2017", text: "Expanded with digital X-rays, rotary endodontics, and a more comfortable patient flow." },
  { year: "2019", text: "Became a trusted clinic for families across Pune seeking long-term dental care." },
  { year: "2021", text: "Added stronger pediatric and orthodontic support for growing family needs." },
  { year: "2024", text: "Continued to grow through referrals, reviews, and repeat visits from happy patients." },
];

function AboutPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 size-[700px] rounded-full bg-bright/30 blur-[140px] animate-aurora" />
          <div
            className="absolute bottom-0 right-1/4 size-[600px] rounded-full bg-sky/25 blur-[120px] animate-aurora"
            style={{ animationDelay: "-7s" }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ice to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.18em] text-sky">
              <Sparkles className="size-3" /> Serving Katraj since 2014
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.94] text-balance">
              About the clinic that makes dental care feel{" "}
              <span className="italic text-sky">calm, clear, and premium</span>.
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed font-light">
              Chhaya Clinic was built for families who want modern treatment,
              honest guidance, and a space that feels reassuring from the first
              hello. Every detail here is designed to remove fear and build
              trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky to-bright text-ink font-semibold shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Book a visit <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-ice hover:bg-ice/10 transition-colors"
              >
                Meet our doctors
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="rounded-3xl glass-light px-4 py-4 border border-royal/10 shadow-soft"
                >
                  <p className="font-display text-2xl lg:text-3xl font-light text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink/55">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-sky/25 via-transparent to-bright/20 blur-2xl" />
            <div className="relative rounded-[36px] overflow-hidden glass-strong shadow-deep border border-white/12 bg-white/5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={clinicInterior}
                  alt="Inside Chhaya Clinic, Katraj"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                <div className="absolute left-4 right-4 bottom-4 rounded-[24px] glass-strong p-4 border border-white/12">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-sky font-semibold">
                    Clinic experience
                  </p>
                  <p className="mt-1 font-display text-xl text-ice font-light leading-tight">
                    Clean, bright, and designed to feel safe the moment you walk in.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-8">
          <div className="rounded-[30px] glass-light border border-royal/10 p-5 lg:p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="size-9 rounded-2xl bg-gradient-to-br from-sky/20 to-bright/10 text-sky flex items-center justify-center shrink-0">
                  <BadgeCheck className="size-5" />
                </span>
                <p className="text-sm text-ink/75 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <div className="max-w-2xl">
            <span className="text-sky font-semibold tracking-[0.2em] uppercase text-[11px]">
              What we stand for
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-light tracking-tighter">
              Four promises we keep every single visit.
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-[28px] glass-light border border-royal/10 shadow-soft"
              >
                <div className="size-12 rounded-2xl bg-gradient-to-br from-sky/25 to-bright/15 flex items-center justify-center mb-4">
                  <v.icon className="size-5 text-sky" />
                </div>
                <h3 className="font-display text-lg font-medium text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story split */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-[32px] bg-ink text-ice p-7 lg:p-10 shadow-deep overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />
              <div className="absolute -top-24 -right-24 size-[340px] rounded-full bg-sky/20 blur-[100px] pointer-events-none" />
              <span className="relative text-sky font-semibold tracking-[0.2em] uppercase text-[11px]">
                Our philosophy
              </span>
              <h2 className="relative mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tighter text-balance">
                Dentistry should feel precise, human, and never rushed.
              </h2>
              <p className="relative mt-5 text-ice/72 leading-relaxed max-w-2xl">
                From the first consultation to the final polish, we focus on a
                calm rhythm: explain clearly, treat gently, and finish with a
                plan that actually makes sense for your life. That is why
                families keep coming back and bringing the next generation with
                them.
              </p>

              <div className="relative mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  "Detailed consultation before treatment",
                  "Comfort-first, minimally invasive procedures",
                  "Modern equipment with family-friendly care",
                  "Follow-up support after every major procedure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-ice/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="lg:col-span-5 rounded-[32px] glass-light border border-royal/10 p-7 lg:p-8 shadow-soft"
            >
              <span className="text-sky font-semibold tracking-[0.2em] uppercase text-[11px]">
                Quick details
              </span>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock3 className="size-5 text-sky mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Timings</p>
                    <p className="text-sm text-ink/65 leading-relaxed">
                      Morning: 10:00 AM to 1:30 PM
                      <br />
                      Evening: 6:00 PM to 9:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-sky mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Location</p>
                    <p className="text-sm text-ink/65 leading-relaxed">
                      Shop no. 111 Ganesh Park B Wing, Katraj Jakat Naka,
                      Near Bhaji Mandai, Katraj Pune 411046
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-sky mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Contact</p>
                    <p className="text-sm text-ink/65 leading-relaxed">
                      Mob. No. 9604658424
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-white/70 border border-royal/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-sky font-semibold">
                  Best for
                </p>
                <p className="mt-2 text-sm text-ink/75 leading-relaxed">
                  Families who want a premium clinic experience without losing
                  the warmth and trust of a neighborhood practice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <div className="rounded-[32px] glass-strong p-8 lg:p-14 grid lg:grid-cols-12 gap-8 items-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 size-[400px] rounded-full bg-sky/30 blur-[100px]" />
            <div className="relative lg:col-span-4 flex justify-center">
              <div className="size-40 lg:size-52 rounded-full ring-4 ring-sky/30 p-1 bg-white/5">
                <img
                  src={doctorAruna}
                  alt="DR. RAKHI SABALE"
                  width={192}
                  height={192}
                  loading="lazy"
                  className="size-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 relative">
              <Quote className="size-7 text-sky/60" />
              <p className="mt-4 font-display text-2xl lg:text-3xl font-light leading-snug text-ice text-balance">
                "Every patient is someone's mother, child, or grandparent. We
                treat them the way we'd want our own family treated — gently,
                honestly, and with the best technology we can offer."
              </p>
              <div className="mt-6">
                <p className="font-semibold text-ice">DR. RAKHI SABALE</p>
                <p className="text-xs text-ice/50 uppercase tracking-widest">
                  Founder · B.D.S (M.U.H.S) · 12 years experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sky font-semibold tracking-[0.2em] uppercase text-[11px]">
              Our journey
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-light tracking-tighter">
              A decade of steady growth, one neighbourhood.
            </h2>
          </div>
          <ol className="mt-12 relative border-l border-royal/10 pl-8 space-y-8">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[42px] top-1 size-4 rounded-full bg-gradient-to-br from-sky to-bright ring-4 ring-ice" />
                <p className="font-display text-2xl font-light text-sky">
                  {t.year}
                </p>
                <p className="mt-1 text-ink/75 leading-relaxed">{t.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-32">
          <div className="rounded-[32px] bg-ink text-ice p-10 lg:p-14 text-center relative overflow-hidden shadow-deep">
            <div className="absolute -top-20 -left-20 size-[400px] rounded-full bg-bright/30 blur-[100px]" />
            <div className="absolute inset-0 bg-grid opacity-[0.07]" />
            <h2 className="relative font-display text-3xl lg:text-5xl font-light tracking-tighter text-balance">
              Ready to meet the team?
            </h2>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-sky to-bright text-ink font-semibold shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Book a free visit <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl glass text-ice hover:bg-ice/10 transition-colors"
              >
                Meet our doctors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
