import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Languages,
  Award,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import doctorAruna from "@/assets/doctor-aruna.jpg";
import doctorRohan from "@/assets/doctor-rohan.jpg";
import doctorMeera from "@/assets/doctor-meera.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Dental Team | Chhaya Clinic, Katraj Pune" },
      {
        name: "description",
        content:
          "Meet Dr. Aruna Deshmukh and the team at Chhaya Clinic — qualified specialists in implants, orthodontics and paediatric dentistry serving Katraj, Pune.",
      },
      { property: "og:title", content: "Meet Our Dentists — Chhaya Clinic" },
      {
        property: "og:description",
        content: "Friendly, qualified specialists with decades of combined experience.",
      },
    ],
  }),
  component: DoctorsPage,
});

const DOCTORS = [
  {
    name: "DR. RAKHI SABALE",
    role: "Founder & Lead Dentist",
    qual: "B.D.S (M.U.H.S)",
    photo: doctorAruna,
    years: 12,
    rating: 4.9,
    specialties: ["Implants", "Smile Design", "Crowns & Bridges"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "A decade of crafting confident smiles, with a special love for full-mouth rehabilitation and implants.",
  },
  {
    name: "DR. MAHESH SABALE",
    role: "Endodontist & Surgeon",
    qual: "Demo Qualification",
    photo: doctorRohan,
    years: 8,
    rating: 4.8,
    specialties: ["Single-sitting RCT", "Wisdom Teeth", "Gum Surgery"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Demo profile text for the second doctor. Replace with the final treatment focus and experience details when ready.",
  },
  {
    name: "Dr. Meera Joshi",
    role: "Pediatric & Orthodontist",
    qual: "Demo Qualification",
    photo: doctorMeera,
    years: 6,
    rating: 5.0,
    specialties: ["Clear Aligners", "Braces", "Kids Dentistry"],
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    bio: "Demo profile text for the third doctor. Replace with the final specialization and background details when ready.",
  },
];

function DoctorsPage() {
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
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.18em] text-sky">
              <Sparkles className="size-3" /> The team behind every smile
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-balance">
              Meet your{" "}
              <span className="italic text-sky">dentists</span>.
            </h1>
            <p className="mt-6 text-lg text-ice/70 max-w-xl leading-relaxed font-light">
              Three specialists, one philosophy: gentle, honest, and at your
              service. Combined 26 years of putting patients first.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map((d, i) => (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-[28px] glass overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.photo}
                    alt={d.name}
                    width={768}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full glass-strong flex items-center gap-1 text-xs">
                    <Star className="size-3 fill-warning text-warning" />
                    <span className="font-semibold text-ice">{d.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-sky">
                      {d.role}
                    </p>
                    <h3 className="font-display text-2xl font-light text-ice mt-1">
                      {d.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-2 text-xs text-ice/70">
                    <GraduationCap className="size-4 shrink-0 text-sky mt-0.5" />
                    <span>{d.qual}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-ice/70">
                    <Award className="size-4 shrink-0 text-sky mt-0.5" />
                    <span>{d.years} years of practice</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-ice/70">
                    <Languages className="size-4 shrink-0 text-sky mt-0.5" />
                    <span>{d.languages.join(" · ")}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {d.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-full bg-sky/10 text-sky text-[10px] font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-ice/65 leading-relaxed">{d.bio}</p>

                  <Link
                    to="/booking"
                    className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-ice/5 hover:bg-gradient-to-r hover:from-sky hover:to-bright hover:text-ink text-ice font-semibold text-sm transition-all"
                  >
                    Book with {d.name.split(" ")[1]}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
