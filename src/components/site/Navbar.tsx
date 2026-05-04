import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-sky via-bright to-royal transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ice/85 backdrop-blur-xl border-b border-royal/10 shadow-soft"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <Logo variant="dark" />

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-4 py-2 text-sm font-medium text-ink/70 hover:text-royal transition-colors rounded-full"
                  activeProps={{
                    className: "text-royal",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="tel:+919604658424"
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full glass-light text-ink text-xs font-semibold hover:bg-royal/5 transition-colors"
              >
                <Phone className="size-3.5 text-bright" />
                <span className="hidden md:inline">+91 96046 58424</span>
              </a>
              <Link
                to="/booking"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-royal to-bright text-ice font-semibold text-sm shadow-[0_8px_30px_-8px_oklch(0.32_0.16_263/0.5)] hover:shadow-[0_12px_40px_-8px_oklch(0.32_0.16_263/0.7)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Now
                <ArrowRight className="size-3.5" />
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 rounded-lg glass-light text-ink"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ice border-l border-royal/10 p-6 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <Logo variant="dark" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg glass-light text-ink"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-4 px-4 rounded-2xl text-ink/80 hover:bg-royal/5 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
                activeProps={{ className: "bg-royal/5 text-royal" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                <span className="font-display text-2xl font-light tracking-tight">
                  {l.label}
                </span>
                <ArrowRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-8 border-t border-royal/10">
            <a
              href="tel:+919604658424"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-light text-ink"
            >
              <Phone className="size-4 text-bright" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-ink/50">
                  Call Now
                </span>
                <span className="font-semibold text-sm">+91 96046 58424</span>
              </div>
            </a>
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-royal to-bright text-ice font-semibold"
            >
              Book an Appointment <ArrowRight className="size-4" />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
