import { ShieldCheck, BadgeCheck, Award, IndianRupee } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "100% Sterilized", sub: "Hospital-grade hygiene" },
  { icon: BadgeCheck, title: "MCI Certified", sub: "Qualified specialists" },
  { icon: Award, title: "Google Verified", sub: "4.8★ on Google" },
  { icon: IndianRupee, title: "EMI Available", sub: "0% no-cost EMI" },
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-royal/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-bright/10 flex items-center justify-center shrink-0">
              <it.icon className="size-5 text-bright" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-ink">
                {it.title}
              </p>
              <p className="text-xs text-ink/55">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
