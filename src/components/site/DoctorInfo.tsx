import { Link } from "@tanstack/react-router";
import { BadgeCheck, Clock3, MapPin, Phone, Sparkles, ArrowRight } from "lucide-react";
import doctorAruna from "@/assets/Dr. Rakhi Sabale.png";
import { CLINIC_MAPS_URL } from "@/data/clinic";
import { ALL_DOCTORS } from "@/data/doctors";
import { DoctorCard } from "@/components/site/DoctorCard";

const highlights = [
  "B.D.S — Dental Surgeon",
  "Gentle family dentistry",
  "Modern, painless treatment planning",
];

export function DoctorInfo() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Doctors And Specialists Team
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: DOCTOR IMAGE */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={doctorAruna}
                    alt="DR. RAKHI MAHESH SABALE B.D.S AND DENTAL SURGEON"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                Available Today
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 pt-20">
                <p className="text-white font-bold text-xl tracking-tight">DR. RAKHI MAHESH SABALE</p>
                <p className="text-blue-200 text-sm mt-1 font-medium">B.D.S AND DENTAL SURGEON</p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
                  <BadgeCheck className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-slate-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: INFO DETAILS */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-4">
                Meet The Doctor
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A calm, patient-first approach to dentistry.
              </h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-3xl italic">
                "Every treatment starts with listening. The goal is simple: make you feel informed, comfortable, and confident before we begin."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Why patients choose her",
                  desc: "Clear advice, gentle treatment, and a focus on long-term oral health rather than unnecessary procedures."
                },
                {
                  icon: Clock3,
                  title: "Clinic timings",
                  desc: "Morning: 10:00 AM to 1:30 PM\nEvening: 6:00 PM to 9:00 PM"
                },
                {
                  icon: MapPin,
                  title: "Visit the clinic",
                  desc: "Shop no. 111 Ganesh Park B Wing\nKatraj Jakat Naka\nNear Bhaji Mandai\nPune 411046"
                },
                {
                  icon: MapPin,
                  title: "Find directions",
                  desc: "Open Google Maps to get step-by-step driving directions to the clinic.",
                  href: CLINIC_MAPS_URL,
                  button: "Get directions"
                },
                {
                  icon: Phone,
                  title: "Talk to us",
                  desc: "Mobile No. 9921498104"
                }
              ].map((info, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <info.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{info.desc}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                    >
                      {info.button ?? "Get directions"}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                Book an Appointment <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={CLINIC_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:shadow-sm transition-all w-full sm:w-auto"
              >
                Get the Location <ArrowRight className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="max-w-3xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-4">
            Our dental team
          </span>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the rest of the team.
          </h3>
          <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
            All the other specialists from our doctors page are listed here as well, so you can choose the right dentist without leaving the homepage.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {ALL_DOCTORS.filter((doctor) => !doctor.isChief).map((doctor, i) => (
            <DoctorCard key={doctor.name} doctor={doctor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}