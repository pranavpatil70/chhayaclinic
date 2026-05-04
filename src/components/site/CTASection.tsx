import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

export function CTASection() {
  return (
    <section className="relative bg-white text-ink py-24 lg:py-32 overflow-hidden border-t border-royal/10">
      <div className="absolute inset-0 -z-10">
        <img
          src={clinicInterior}
          alt=""
          aria-hidden
          width={1280}
          height={800}
          loading="lazy"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-sky/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-bright font-semibold tracking-[0.2em] uppercase text-[11px]">
            Ready when you are
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-7xl font-light tracking-tighter text-balance leading-[0.95] text-ink">
            Walk in for a check-up.{" "}
            <span className="italic text-bright">Walk out smiling.</span>
          </h2>
          <p className="mt-6 text-lg text-ink/65 max-w-xl leading-relaxed">
            Your first consultation is on us. No commitment, no hidden charges
            — just an honest conversation about your dental health.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-royal to-bright text-ice font-semibold shadow-[0_20px_50px_-15px_oklch(0.32_0.16_263/0.55)] hover:-translate-y-0.5 transition-all"
            >
              Book an Appointment
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919604658424"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white border border-royal/15 text-ink font-medium hover:border-bright/40 hover:shadow-soft transition-all"
            >
              <Phone className="size-4 text-bright" />
              +91 96046 58424
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
