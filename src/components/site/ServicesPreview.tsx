import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Smile,
  Sparkle,
  Stethoscope,
  Baby,
  Bone,
  ShieldPlus,
} from "lucide-react";

const services = [
  {
    icon: Sparkle,
    name: "Teeth Whitening",
    desc: "Laser whitening that's safe, fast and dramatic.",
    price: "₹2,500",
    duration: "60 min",
  },
  {
    icon: Stethoscope,
    name: "Root Canal (RCT)",
    desc: "Painless single-sitting RCT with rotary endodontics.",
    price: "₹2,000",
    duration: "45 min",
  },
  {
    icon: Bone,
    name: "Dental Implants",
    desc: "Permanent tooth replacement with titanium implants.",
    price: "₹15,000",
    duration: "90 min",
  },
  {
    icon: Smile,
    name: "Clear Aligners",
    desc: "Invisible braces for a discreet, comfortable journey.",
    price: "₹30,000",
    duration: "consult",
  },
  {
    icon: Baby,
    name: "Pediatric Care",
    desc: "Gentle dentistry designed for happy little patients.",
    price: "₹300",
    duration: "30 min",
  },
  {
    icon: ShieldPlus,
    name: "Checkup & Cleaning",
    desc: "Routine ultrasonic scaling and oral health review.",
    price: "₹200",
    duration: "30 min",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative bg-ice text-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-bright font-semibold tracking-[0.2em] uppercase text-[11px]">
              What we do
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-6xl font-light tracking-tighter text-balance">
              Every treatment, under{" "}
              <span className="italic text-bright">one roof</span>.
            </h2>
            <p className="mt-5 text-ink/60 text-lg leading-relaxed max-w-xl">
              From a routine cleaning to full-mouth implants — we offer 18
              treatments using modern technology, with transparent pricing.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-royal text-ice text-sm font-semibold hover:bg-bright transition-colors shrink-0"
          >
            All 18 services
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative p-7 rounded-3xl bg-white border border-royal/5 shadow-soft hover:-translate-y-1 hover:shadow-deep transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-gradient-to-br from-sky/30 to-bright/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-bright to-royal text-ice flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="size-5" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-2">
                  {s.name}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed mb-5">
                  {s.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-royal/5 text-royal text-xs font-semibold">
                      from {s.price}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky/10 text-bright text-xs font-medium">
                      {s.duration}
                    </span>
                  </div>
                  <Link
                    to="/booking"
                    className="size-9 rounded-full bg-ink text-ice flex items-center justify-center hover:bg-bright transition-colors"
                    aria-label={`Book ${s.name}`}
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
