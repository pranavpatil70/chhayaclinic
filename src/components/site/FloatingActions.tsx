import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp — bottom right */}
      <a
        href="https://wa.me/919604658424?text=Hi%20Chhaya%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment"
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
        href="tel:+919604658424"
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
