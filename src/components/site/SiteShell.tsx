import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-ice text-ink antialiased">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
