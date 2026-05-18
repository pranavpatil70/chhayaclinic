import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Languages,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import doctorAruna from "@/assets/Dr. Rakhi Sabale.png";
import doctorPawar from "@/assets/Dr. Pawar.png";
import doctorVijay from "@/assets/Dr. Vijay Ganesh.jpeg";
import doctorShantanu from "@/assets/shantanu harale.png";
import doctorDnyanesh from "@/assets/Dr. Dhnyaneshwar Chitte.png";
import doctorGangasagar from "@/assets/dr. Gangasagar Swati Gangadhar.png";
import doctorMaya from "@/assets/Dr. Maya.png";

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

const ALL_DOCTORS = [
  {
    name: "Dr. Rakhi Mahesh Sabale",
    role: "Chief Dentist & Clinical Director",
    qual:
      "B.D.S. Clinical Director with a focus on restorative dentistry, implants and smile rehabilitation. Registered with Maharashtra State Dental Council.",
    photo: doctorAruna,
    // tall narrow portrait — face sits in top 10%; pull crop window to the very top
    photoPosition: "object-[50%_5%]",
    years: 12,
    specialties: ["Implants", "Smile Design", "Crowns & Bridges"],
    languages: ["English", "Hindi", "Marathi"],
    bio:
      "Dr. Rakhi leads the clinical team at Chhaya Clinic with over a decade of hands-on experience. She specialises in implant dentistry, full-mouth rehabilitation and aesthetic smile design. As Chief Dentist and Clinical Director she oversees patient care standards, mentors junior clinicians, and ensures a patient-first approach across all services.",
    isChief: true,
  },
  {
    name: "Dr. Shantanu Harale",
    role: "Dental Surgeon",
    qual: "B.D.S — SARASWATI DHANWANTARI DENTAL COLLEGE AND HOSPITAL, PARBHANI (Pass out 2025-26). Registered with Maharashtra State Dental Council.",
    photo: doctorShantanu,
    // upper-body shot leaning on counter — face at ~20% from top
    photoPosition: "object-[50%_12%]",
    years: 1,
    specialties: ["Restorative Dentistry", "Cosmetic Dentistry"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Provides comprehensive dental care with attention to aesthetics and function.",
  },
  {
    name: "Dr. Yogesh Sarjerao Pawar",
    role: "Dental Surgeon",
    qual: "B.D.S — KIMSDU School of Dental Sciences, Karad (Pass out June 2011). Reg. A-22901. Registered with Maharashtra State Dental Council.",
    photo: doctorPawar,
    // full body with large empty wall above — face at ~28% from top
    photoPosition: "object-[50%_25%]",
    years: 15,
    specialties: ["General Dentistry", "Fillings", "Extractions"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Gentle dental surgeon with a focus on patient comfort and conservative care.",
  },
  {
    name: "Dr. S. Vijay Ganesh",
    role: "Endodontist",
    qual: "B.D.S — Sri Ramachandra Institute of Higher Education and Research (2014-2019); M.D.S — Bharati Vidyapeeth Dental College and Hospital (2020-2023), Conservative Dentistry & Endodontics. Reg. 28746. Registered with Maharashtra State Dental Council.",
    photo: doctorVijay,
    // square close-up with gray side bars — face fills center, anchor slightly above center
    photoPosition: "object-[50%_18%]",
    years: 6,
    specialties: ["Root Canal Treatment", "Endodontic Microsurgery"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Specialist in complex endodontic procedures and pain-free root canals.",
  },
  {
    name: "Dr. Maya Uddhavrao Shinde",
    role: "Pedodontist",
    qual: "B.D.S — Bharati Vidyapeeth Dental College and Hospital, Pune; M.D.S — Pediatric Dentistry (Pass out 2022). Reg. A-38558. Registered with Maharashtra State Dental Council.",
    photo: doctorMaya,
    photoPosition: "object-[50%_10%]",
    years: 4,
    specialties: ["Pediatric Dentistry", "Behavior Management"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Child-friendly dentist focused on preventive care and early intervention.",
  },
  {
    name: "Dr. Gangasagar Swati Gangadhar",
    role: "Associate Dentist",
    qual: "B.D.S — Aditya Dental College, Beed (Pass out 2025). Reg. 229891. Registered with Maharashtra State Dental Council.",
    photo: doctorGangasagar,
    // portrait, arms crossed, face at ~12% from top
    photoPosition: "object-[50%_10%]",
    years: 0,
    specialties: ["General Dentistry"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Associate dentist focused on patient comfort and preventive care.",
  },
  {
    name: "Dr. Dnyaneshwar Chitte",
    role: "Oral & Maxillofacial Surgeon",
    qual: "B.D.S — A B Shetty, Mangalore (NITTE University); M.D.S — Oral & Maxillofacial Surgery (Pass out 2020). Fellowships: Craniomaxillofacial Trauma; Oral Oncology & Reconstruction. Reg. A-33113. Registered with Maharashtra State Dental Council.",
    photo: doctorDnyanesh,
    // slightly landscape, face upper-center of frame
    photoPosition: "object-[50%_15%]",
    years: 8,
    specialties: ["Oral & Maxillofacial Surgery", "Craniomaxillofacial Trauma", "Oral Oncology & Reconstruction"],
    languages: ["English", "Hindi", "Marathi"],
    bio: "Specialist in oral and maxillofacial surgery with experience in trauma and oncologic reconstruction.",
  },
];

function DoctorCard({ doctor, index }: { doctor: typeof ALL_DOCTORS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-[28px] overflow-hidden border border-royal/10 shadow-soft hover:shadow-deep transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row items-stretch gap-0 md:min-h-[400px]">
        {/* Image — left side */}
        <div className="w-full md:w-2/5 shrink-0 relative">
          {/* Mobile: fixed height box */}
          <div className="h-72 overflow-hidden md:hidden">
            <img
              src={doctor.photo}
              alt={doctor.name}
              loading="lazy"
              className={`w-full h-full object-cover ${doctor.photoPosition ?? "object-center"}`}
            />
          </div>
          {/* Desktop: fills entire left column via absolute */}
          <img
            src={doctor.photo}
            alt={doctor.name}
            loading="lazy"
            className={`hidden md:block absolute inset-0 w-full h-full object-cover ${doctor.photoPosition ?? "object-center"}`}
          />
        </div>

        {/* Info — right side */}
        <div className="w-full md:w-3/5 p-8 flex flex-col justify-center gap-5">
          {doctor.isChief && (
            <span className="inline-block self-start px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-widest">
              Chief Dentist
            </span>
          )}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-bright mb-1">{doctor.role}</p>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink">{doctor.name}</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm text-ink/80">
              <GraduationCap className="size-5 shrink-0 text-royal mt-0.5" />
              <span className="leading-relaxed">{doctor.qual}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-ink/80">
              <Award className="size-5 shrink-0 text-royal mt-0.5" />
              <span>{doctor.years > 0 ? `${doctor.years} years of practice` : "Newly qualified dentist"}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-ink/80">
              <Languages className="size-5 shrink-0 text-royal mt-0.5" />
              <span>{doctor.languages.join(" · ")}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {doctor.specialties.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-royal/8 text-royal text-xs font-semibold border border-royal/15">
                {s}
              </span>
            ))}
          </div>

          <p className="text-base leading-relaxed text-ink/70">{doctor.bio}</p>

          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-royal to-bright text-ice font-semibold text-sm shadow-soft hover:shadow-deep hover:-translate-y-0.5 transition-all self-start"
          >
            Book with {doctor.name.split(" ")[1]}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

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
