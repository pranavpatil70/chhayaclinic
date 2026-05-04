import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function ComingSoon({ title }: { title: string }) {
  return (
    <section className="relative min-h-[80dvh] flex items-center justify-center px-5 py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 size-[700px] rounded-full bg-bright/30 blur-[140px] animate-aurora" />
        <div
          className="absolute bottom-0 right-1/4 size-[600px] rounded-full bg-sky/20 blur-[120px] animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <div className="text-center max-w-xl">
        <span className="text-sky font-semibold tracking-[0.2em] uppercase text-[11px]">
          In progress
        </span>
        <h1 className="mt-4 font-display text-5xl lg:text-7xl font-light tracking-tighter text-balance">
          {title} <span className="italic text-sky">coming soon</span>.
        </h1>
        <p className="mt-5 text-ice/60 leading-relaxed">
          We're crafting this page with the same care we put into every smile.
          In the meantime, the homepage has everything you need.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-ice hover:bg-ice/10 transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
