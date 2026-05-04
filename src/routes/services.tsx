import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Clock3,
  Stethoscope,
} from "lucide-react";

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
