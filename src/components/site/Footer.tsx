import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { CLINIC_MAPS_URL } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="relative bg-ink text-ice/80 overflow-hidden">
      {/* Aurora glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-bright/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-ice/60 max-w-sm">
              Chhaya Clinic & Dental Care is Katraj's most-loved dental practice.
              Trusted by 2600+ families for honest care at fair prices.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, url: "https://www.instagram.com/chhayadentalcare_24?igsh=MWloOW05ajcybmJnZg==", label: "Instagram" },
                { Icon: Facebook, url: "https://facebook.com", label: "Facebook" },
                { Icon: Youtube, url: "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-10 rounded-full glass flex items-center justify-center hover:bg-sky hover:text-ink transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold text-ice mb-5 uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/services", "Services"],
                ["/doctors", "Doctors"],
                ["/gallery", "Gallery"],
                ["/about", "About"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-ice/60 hover:text-sky transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold text-ice mb-5 uppercase tracking-widest">
              Treatments
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Implants",
                "Root Canal",
                "Whitening",
                "Aligners",
                "Pediatric",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-ice/60 hover:text-sky transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-semibold text-ice mb-5 uppercase tracking-widest">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="size-4 text-sky shrink-0 mt-0.5" />
                <span className="text-ice/70 leading-relaxed">
                  Shop no. 111 Ganesh Park B Wing,
                  <br />
                  Katraj Jakat Naka, Near Bhaji Mandai,
                  <br />
                  Katraj Pune 411046
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 text-sky shrink-0 mt-0.5" />
                <a
                  href="tel:+919921498104"
                  className="text-ice/70 hover:text-sky transition-colors"
                >
                  +91 99214 98104
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 text-sky shrink-0 mt-0.5" />
                <a
                  href="mailto:chhayaclinic007@gmail.com"
                  className="text-ice/70 hover:text-sky transition-colors"
                >
                  chhayaclinic007@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-2xl glass text-xs text-ice/70">
              <span className="block text-sky font-semibold mb-1">
                Clinic Hours
              </span>
              Morning: 10:00 AM to 1:30 PM
              <br />
              Evening: 6:00 PM to 9:00 PM
            </div>
          </div>
        </div>

        {/* Map Section */}
        <a
          id="location"
          href={CLINIC_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 rounded-2xl overflow-hidden glass h-[300px] border border-ice/10 w-full relative block group"
          aria-label="Open Chhaya Clinic location in Google Maps"
        >
          <iframe
            title="Chhaya Clinic location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15137.935745778846!2d73.8567!3d18.4533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzExLjkiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1714152528821!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-100 group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
          ></iframe>
          <div className="absolute inset-x-3 bottom-3 px-4 py-3 rounded-xl bg-ink/75 text-ice flex items-center justify-between backdrop-blur-sm border border-white/15">
            <span className="text-sm font-semibold">Open in Google Maps</span>
            <span className="text-xs uppercase tracking-[0.18em] text-sky">Directions</span>
          </div>
        </a>

        <div className="mt-16 pt-8 border-t border-ice/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ice/50">
          <p>© {new Date().getFullYear()} Chhaya Clinic & Dental Care. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="tracking-widest uppercase">Crafted with care • Pune, India</p>
            <span className="hidden md:inline">•</span>
            <p className="tracking-widest uppercase text-sky">designed and manage by strox.media</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
