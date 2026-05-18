import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { DoctorCard } from "@/components/site/DoctorCard";
import { ALL_DOCTORS } from "@/data/doctors";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Dental Team | Chhaya Clinic, Katraj Pune" },
      {
        name: "description",
        content:
          "Meet Dr. Rakhi Mahesh Sabale and the team at Chhaya Clinic — qualified specialists in implants, orthodontics and paediatric dentistry serving Katraj, Pune.",
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

function DoctorsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ice">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 size-[700px] rounded-full bg-bright/20 blur-[140px] animate-aurora" />
          <div
            className="absolute bottom-0 right-1/4 size-[600px] rounded-full bg-sky/15 blur-[120px] animate-aurora"
            style={{ animationDelay: "-7s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-royal/8 border border-royal/15 text-[11px] font-bold uppercase tracking-[0.18em] text-royal">
              <Sparkles className="size-3.5" /> The team behind every smile
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-balance text-ink">
              Meet your{" "}
              <span className="italic text-bright">dentists</span>.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-ink/65 max-w-xl leading-relaxed font-light">
              Qualified specialists, one philosophy: gentle, honest, and at your
              service. Combined decades of putting patients first.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Cards — all in image-left / info-right format */}
      <section className="bg-ice pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-8">
          {ALL_DOCTORS.map((doctor, i) => (
            <DoctorCard key={doctor.name} doctor={doctor} index={i} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
