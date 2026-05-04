import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div
        className={`size-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? "bg-gradient-to-br from-sky to-bright shadow-[0_0_20px_oklch(0.78_0.16_220/0.5)]"
            : "bg-gradient-to-br from-royal to-bright shadow-[0_8px_20px_-6px_oklch(0.32_0.16_263/0.5)]"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path
            d="M12 2c-3 0-5 2-7 2-1.5 0-2 1-2 3 0 4 2 9 4 13 1 2 2 2 2.5 0L11 14h2l1.5 6c.5 2 1.5 2 2.5 0 2-4 4-9 4-13 0-2-.5-3-2-3-2 0-4-2-7-2z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-base tracking-tight ${
            isLight ? "text-ice" : "text-royal"
          }`}
        >
          Chhaya<span className={isLight ? "text-sky" : "text-bright"}>.</span>
        </span>
        <span
          className={`text-[9px] font-medium tracking-[0.2em] uppercase mt-0.5 ${
            isLight ? "text-ice/60" : "text-royal/55"
          }`}
        >
          Dental Care
        </span>
      </div>
    </Link>
  );
}
