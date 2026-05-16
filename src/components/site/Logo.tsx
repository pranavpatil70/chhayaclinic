import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/chyya logo.jpeg";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div
        className={`size-9 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? "bg-gradient-to-br from-sky to-bright shadow-[0_0_20px_oklch(0.78_0.16_220/0.5)]"
            : "bg-gradient-to-br from-royal to-bright shadow-[0_8px_20px_-6px_oklch(0.32_0.16_263/0.5)]"
        }`}
      >
        <img src={logoImg} alt="Chhaya Clinic logo" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-base tracking-tight ${
            isLight ? "text-ice" : "text-royal"
          }`}
        >
          Chhaya Clinic
        </span>
        <span
          className={`text-[9px] font-medium tracking-[0.2em] uppercase mt-0.5 ${
            isLight ? "text-ice/60" : "text-royal/55"
          }`}
        >
          &amp; Dental Care
        </span>
      </div>
    </Link>
  );
}
