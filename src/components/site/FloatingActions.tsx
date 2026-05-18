import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, CalendarDays, Phone, CheckCircle2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShowTop = window.scrollY > 400;
      setShowTop(shouldShowTop);

      if (
        window.scrollY > 700 &&
        !sessionStorage.getItem("booking-popup-seen")
      ) {
        sessionStorage.setItem("booking-popup-seen", "1");
        setBookingOpen(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="sm:max-w-sm p-0 rounded-3xl border-0 bg-transparent shadow-2xl overflow-hidden [&>button]:hidden">
          {/* Gradient header banner */}
          <div className="relative bg-gradient-to-br from-royal via-bright to-[#4f9cf9] px-6 pt-7 pb-8">
            {/* Close button */}
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-3 right-3 size-7 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="size-3.5 text-white" />
            </button>

            {/* Icon badge */}
            <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-inner">
              <CalendarDays className="size-6 text-white" />
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1">
              Chhaya Clinic &amp; Dental Care
            </p>
            <h2 className="text-2xl font-display font-bold text-white leading-snug">
              Book Your Dental Visit
            </h2>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Get confirmed in minutes — choose your preferred way to book.
            </p>

            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 size-24 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -top-4 -left-4 size-16 rounded-full bg-white/10 pointer-events-none" />
          </div>

          {/* White card body */}
          <div className="bg-white px-6 pt-6 pb-6">
            {/* Feature bullets */}
            <div className="space-y-2.5 mb-6">
              {[
                "Instant WhatsApp confirmation with our team",
                "Full appointment form with date & time selection",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-bright mt-0.5 shrink-0" />
                  <span className="text-sm text-ink/75 leading-snug">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/919921498104?text=Hi%20Chhaya%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-[#22c55e] text-white font-semibold text-sm shadow-[0_8px_24px_rgba(34,197,94,0.35)] hover:shadow-[0_12px_32px_rgba(34,197,94,0.45)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="size-4" />
                Book on WhatsApp
              </a>
              <Link
                to="/booking"
                onClick={() => setBookingOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-royal text-white font-semibold text-sm shadow-[0_8px_24px_rgba(37,71,197,0.25)] hover:shadow-[0_12px_32px_rgba(37,71,197,0.4)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <CalendarDays className="size-4" />
                Open Booking Page
              </Link>
            </div>

            {/* Trust note */}
            <p className="text-center text-[11px] text-ink/40 mt-4">
              No spam · Free consultation · Same-day slots available
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* WhatsApp — bottom right */}
      <a
        href="https://wa.me/919921498104?text=Hi%20Chhaya%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex items-center justify-center p-1 sm:p-1.5 rounded-lg bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.55)] hover:-translate-y-1 hover:bg-white/30 transition-all duration-400 cursor-pointer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] drop-shadow-md"
        />
      </a>

      {/* Call — bottom left */}
      <a
        href="tel:+919921498104"
        aria-label="Call clinic"
        className="fixed bottom-5 left-5 z-40 flex items-center justify-center p-1 sm:p-1.5 rounded-lg bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(10,132,255,0.35)] hover:shadow-[0_8px_40px_rgba(10,132,255,0.55)] hover:-translate-y-1 hover:bg-white/30 transition-all duration-400 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] drop-shadow-md">
          <defs>
            <linearGradient id="phoneBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4CA1FF" />
              <stop offset="100%" stopColor="#005BFF" />
            </linearGradient>
          </defs>
          <circle cx="256" cy="256" r="256" fill="url(#phoneBlue)"/>
          <path d="M371 319c-12 0-24-2-35-5a21 21 0 0 0-21 5l-27 27a195 195 0 0 1-89-89l27-27a21 21 0 0 0 5-21 163 163 0 0 1-5-35 22 22 0 0 0-21-21h-43a22 22 0 0 0-22 22 223 223 0 0 0 223 223 22 22 0 0 0 22-22v-43a22 22 0 0 0-21-22z" fill="#fff"/>
        </svg>
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-24 right-5 z-40 size-11 rounded-full bg-white border border-royal/15 text-royal flex items-center justify-center shadow-soft transition-all duration-300 hover:bg-royal hover:text-ice ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="size-4" />
      </button>
    </>
  );
}
