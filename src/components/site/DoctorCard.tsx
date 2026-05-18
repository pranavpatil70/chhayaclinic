import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Languages, Award, ArrowRight } from "lucide-react";

export type Doctor = {
  name: string;
  role: string;
  qual: string;
  photo: string;
  photoPosition?: string;
  years: number;
  specialties: string[];
  languages: string[];
  bio: string;
  isChief?: boolean;
};

export function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-[28px] overflow-hidden border border-royal/10 shadow-soft hover:shadow-deep transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row items-stretch gap-0 md:min-h-[400px]">
        <div className="w-full md:w-2/5 shrink-0 relative">
          <div className="h-72 overflow-hidden md:hidden">
            <img
              src={doctor.photo}
              alt={doctor.name}
              loading="lazy"
              className={`w-full h-full object-cover ${doctor.photoPosition ?? "object-center"}`}
            />
          </div>
          <img
            src={doctor.photo}
            alt={doctor.name}
            loading="lazy"
            className={`hidden md:block absolute inset-0 w-full h-full object-cover ${doctor.photoPosition ?? "object-center"}`}
          />
        </div>

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
