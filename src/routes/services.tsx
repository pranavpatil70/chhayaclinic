import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { PROCEDURES, FACILITIES } from "@/data/services";
import logoImg from "@/assets/new changes/logo1.jpeg";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Clock3,
  Stethoscope,
  Building2,
  Crown,
  AlignJustify,
  LayoutGrid,
  Sparkles,
  Zap,
  Bone,
  Layers,
  Scissors,
  Cpu,
  Wrench,
  Users,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

const PROCEDURE_ICONS: Record<string, LucideIcon> = {
  "Ceramic Bridges": Crown,
  "Hybrid Dentures": AlignJustify,
  "Dental Braces": LayoutGrid,
  "Dental Bleaching": Sparkles,
  "3M Lava Crowns": Crown,
  "Laser RCT (Root Canal)": Zap,
  "Dental Bone Graft": Bone,
  "Cast Partial Denture": Layers,
  "Dental and Surgical Extractions": Scissors,
  "Dental Laser": Zap,
  "Dental Ceramic Crown": Crown,
  "Zirconia Bridges": Crown,
  "CAD-CAM Dental Restorations": Cpu,
  "Dental Braces Fixing": Wrench,
};

const FACILITY_ICONS: Record<string, LucideIcon> = {
  "Dental OPD": Stethoscope,
  "Corporate Dental Camps": Users,
  "Online Appointments": CalendarCheck,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services | Chhaya Clinic" },
      {
        name: "description",
        content:
          "Explore our dental treatments at Chhaya Clinic. Simple, high-quality, and transparent care.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <div className="bg-slate-50 text-slate-900 min-h-screen">
        {/* HERO SECTION */}
        <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Comprehensive Dental Care
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            The right treatment for every smile.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            From routine check-ups to advanced treatments, we provide high-quality and comfortable dental care in a clean, professional environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Book an Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
              View Treatments
            </a>
          </div>
        </section>

        {/* PROCEDURES & FACILITIES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            {/* Logo + heading */}
            <div className="flex flex-col items-center text-center mb-14">
              <img
                src={logoImg}
                alt="Chhaya Clinic logo"
                className="size-20 rounded-2xl object-contain mb-5 shadow-soft"
              />
              <span className="text-bright font-semibold tracking-[0.2em] uppercase text-[11px] mb-2">
                What we offer
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-light tracking-tighter text-ink">
                Treatments &amp; <span className="italic text-bright">Facilities</span>
              </h2>
              <p className="mt-3 text-ink/50 max-w-md text-sm leading-relaxed">
                {PROCEDURES.length} specialized procedures · all under one roof
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">

              {/* Procedures — 2 cols */}
              <div className="lg:col-span-2 rounded-3xl border border-royal/10 bg-ice p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-9 rounded-xl bg-royal/8 flex items-center justify-center shrink-0">
                    <BadgeCheck className="size-4 text-royal" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">Treatments &amp; Procedures</h3>
                    <p className="text-[11px] text-ink/40 uppercase tracking-widest">{PROCEDURES.length} available</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROCEDURES.map((p) => {
                    const Icon = PROCEDURE_ICONS[p] ?? BadgeCheck;
                    return (
                      <div
                        key={p}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-royal/8 hover:border-bright/30 hover:bg-bright/5 transition-all duration-200 group cursor-default"
                      >
                        <div className="size-8 rounded-xl bg-royal/6 flex items-center justify-center shrink-0 group-hover:bg-bright/10 transition-colors">
                          <Icon className="size-4 text-royal group-hover:text-bright transition-colors" />
                        </div>
                        <span className="text-sm text-ink/70 font-medium group-hover:text-ink transition-colors leading-snug">{p}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Facilities — 1 col */}
              <div className="rounded-3xl border border-royal/10 bg-ice p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-9 rounded-xl bg-royal/8 flex items-center justify-center shrink-0">
                    <Building2 className="size-4 text-royal" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">Facilities</h3>
                    <p className="text-[11px] text-ink/40 uppercase tracking-widest">{FACILITIES.length} on-site</p>
                  </div>
                </div>
                <div className="space-y-2.5 flex-1">
                  {FACILITIES.map((f) => {
                    const Icon = FACILITY_ICONS[f] ?? BadgeCheck;
                    return (
                      <div
                        key={f}
                        className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-white border border-royal/8 hover:border-bright/30 hover:bg-bright/5 transition-all duration-200 group"
                      >
                        <div className="size-9 rounded-xl bg-royal/6 flex items-center justify-center shrink-0 group-hover:bg-bright/10 transition-colors">
                          <Icon className="size-4 text-royal group-hover:text-bright transition-colors" />
                        </div>
                        <span className="text-sm text-ink/70 font-medium group-hover:text-ink transition-colors">{f}</span>
                      </div>
                    );
                  })}
                </div>
                <Link
                  to="/booking"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-royal text-white font-semibold text-sm hover:bg-bright transition-colors"
                >
                  Book Appointment
                  <ArrowRight className="size-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Stethoscope, title: "Consult & Diagnose", desc: "Detailed oral exam and a clear explanation of options." },
                { icon: CalendarClock, title: "Plan & Schedule", desc: "A transparent treatment plan with clear timelines." },
                { icon: BadgeCheck, title: "Treat & Review", desc: "Comfortable treatments and proactive aftercare." }
              ].map((step, idx) => (
                <div key={idx} className="p-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENTS GRID */}
        <section id="treatments" className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ServicesGrid />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what you need?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a quick 30-minute consultation. We will examine your teeth and provide a clear, easy-to-understand treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-blue-700 font-bold hover:bg-slate-50 transition"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-200">
              <Clock3 className="w-4 h-4" /> Open for emergencies and walk-ins.
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

export { ComingSoon } from "@/components/site/ComingSoon";
