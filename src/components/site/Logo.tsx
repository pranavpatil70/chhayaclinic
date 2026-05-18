import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/new changes/logo1.jpeg";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={logoImg}
        alt="Chhaya Clinic & Dental Care logo"
        className="size-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-base tracking-tight ${
            isLight ? "text-ice" : "text-royal"
          }`}
        >
          Chhaya Clinic
        </span>
        <span
          className={`text-[11px] font-bold tracking-[0.15em] uppercase mt-0.5 ${
            isLight ? "text-ice/90" : "text-royal"
          }`}
        >
          &amp; Dental Care
        </span>
      </div>
    </Link>
  );
}
