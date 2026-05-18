import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Star, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import chayya3 from "@/assets/chayya 3.jpeg";
import doctorAruna from "@/assets/Dr. Rakhi Sabale.png";
import { CLINIC_MAPS_URL } from "@/data/clinic";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ice text-ink">
      {/* Soft aurora background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 size-[800px] rounded-full bg-sky/30 blur-[140px] animate-aurora" />
        <div
          className="absolute top-1/3 -right-40 size-[700px] rounded-full bg-bright/20 blur-[140px] animate-aurora"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 size-[500px] rounded-full bg-royal/15 blur-[120px] animate-aurora"
          style={{ animationDelay: "-9s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.16 0.04 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.16 0.04 260) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ice" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-light"
            >
              <span className="size-2 rounded-full bg-bright animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                Now accepting new patients in Katraj
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-light tracking-tighter leading-[0.95] text-balance text-ink"
            >
              Your Perfect{" "}
              <span className="italic font-normal text-bright">Smile</span>
              <br className="hidden sm:block" /> Starts Right Here.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg lg:text-xl text-ink/65 leading-relaxed max-w-[55ch] font-light"
            >
              Trusted by 2600+ families in Katraj, Pune. Advanced dental care
              from gentle hands — at prices that respect your budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link
                to="/booking"
                className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-royal to-bright text-ice font-semibold shadow-[0_20px_50px_-15px_oklch(0.32_0.16_263/0.55)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Book an Appointment</span>
                <ArrowRight className="relative z-10 size-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
              </Link>
              <a
                href={CLINIC_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-royal/10 text-ink font-medium hover:border-bright/30 hover:shadow-soft transition-all"
              >
                <span className="size-9 rounded-full bg-bright/10 text-bright flex items-center justify-center group-hover:bg-bright group-hover:text-ice transition-colors">
                  <MapPin className="size-3.5 fill-current" />
                </span>
                Get the Location
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-xs"
            >
              <div className="flex items-center gap-2 text-ink/80">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3.5 fill-warning text-warning"
                    />
                  ))}
                </div>
                <span className="font-semibold">4.8</span>
                <span className="text-ink/50">on Google</span>
              </div>
              <div className="flex items-center gap-1.5 text-ink/65">
                <ShieldCheck className="size-3.5 text-success" />
                2600+ patients
              </div>
              <div className="flex items-center gap-1.5 text-ink/65">
                <Sparkles className="size-3.5 text-bright" />
                18 treatments
              </div>
              <div className="flex items-center gap-1.5 text-ink/65">
                <ShieldCheck className="size-3.5 text-success" />
                Pune's top rated
              </div>
            </motion.div>
          </div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Glow halo */}
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-sky/40 via-bright/25 to-transparent blur-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Frame */}
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-white border border-royal/10 shadow-deep">
                <img
                  src={chayya3}
                  alt="Chhaya Clinic interior"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => {
                    // navigate to gallery
                    window.location.href = "/gallery";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

                {/* Bottom doctor card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-strong">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full ring-2 ring-sky/50 p-0.5 shrink-0">
                      <img
                        src={doctorAruna}
                        alt="DR. RAKHI MAHESH SABALE B.D.S AND DENTAL SURGEON"
                        width={44}
                        height={44}
                        className="size-full rounded-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-sky font-bold tracking-widest uppercase">
                        Dental Surgeon
                      </p>
                      <p className="font-display text-[10px] sm:text-xs text-ice truncate">
                        DR. RAKHI MAHESH SABALE B.D.S AND DENTAL SURGEON
                      </p>
                    </div>
                  </div>
                </div>
              </div>

                {/* Thumbnails removed per request */}
              {/* Floating: next slot */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -left-4 lg:-left-10 top-10 px-4 py-3 rounded-2xl bg-white border border-royal/10 shadow-deep animate-float-slow hidden sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <span className="size-2.5 rounded-full bg-success animate-pulse" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-ink/50">
                      Next slot
                    </p>
                    <p className="text-xs font-semibold text-ink">
                      Today • 11:00 AM
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating: review */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="absolute -right-2 lg:-right-8 bottom-24 px-4 py-3 rounded-2xl bg-white border border-royal/10 shadow-deep max-w-[200px] animate-float-slow"
                style={{ animationDelay: "-2s" }}
              >
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3 fill-warning text-warning"
                    />
                  ))}
                </div>
                <p className="text-xs text-ink leading-snug">
                  "Best clinic in Katraj!"
                </p>
                <p className="text-[10px] text-ink/50 mt-1">— Priya S.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
