import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, Flame } from "lucide-react";
import { CATEGORIES, SERVICES, type ServiceCategory } from "@/data/services";

type Filter = ServiceCategory | "all";

const U = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&h=800&fit=crop&q=85&auto=format`;

// All 18 services — curated Unsplash photos, free for commercial use
const serviceImages: Record<string, string> = {
  consultation:        U("photo-1606811842243-af7e16970c1f"), // dentist with patient
  "scaling-polishing": U("photo-1698749778813-ad5f2814e50f"), // dental cleaning tools
  "tooth-filling":     U("photo-1588776814546-daab30f310ce"), // dental procedure
  "root-canal":        U("photo-1643292116094-bd2fb3ed4d64"), // endodontic files
  "crown-bridge":      U("photo-1663755787934-3742b0f5983a"), // dental clinic work
  "dental-implants":   U("photo-1609918438269-9a4c5f8fe3a4"), // implant model
  "teeth-whitening":   U("photo-1489278353717-f64c6ee8a4d2"), // bright white smile
  veneers:             U("photo-1690167687106-180b0ea1d813"), // cosmetic dentistry
  "smile-design":      U("photo-1677026010083-78ec7f1b84ed"), // confident smile
  braces:              U("photo-1598256989809-394fa4f6cd26"), // silver braces close-up
  aligners:            U("photo-1651180352574-669683817463"), // clear aligner trays
  "wisdom-tooth":      U("photo-1619988252418-a1e6ee10b122"), // tooth extraction
  "gum-treatment":     U("photo-1606811951341-756fdd437682"), // dental hygiene
  "kids-dentistry":    U("photo-1619236233405-bb5d430f0620"), // child at dentist
  "fluoride-sealants": U("photo-1606811841689-23dfddce3e95"), // fluoride dental
  dentures:            U("photo-1620775997990-ee3c25938b4c"), // dental prosthetics
  "digital-xray":      U("photo-1522849696084-818b29dfe210"), // dental X-ray machine
  emergency:           U("photo-1758206524132-72a2aa6639e2"), // dental clinic urgent
};

export function ServicesGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const categoryLabel = useMemo(
    () => Object.fromEntries(CATEGORIES.map((c) => [c.value, c.label])) as Record<Filter, string>,
    []
  );

  const filtered = useMemo(
    () => filter === "all" ? SERVICES : SERVICES.filter((s) => s.category === filter),
    [filter]
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-200">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
            Explore Treatments
          </h2>
          <p className="text-slate-600">
            Showing {filtered.length} services
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((c) => {
            const active = filter === c.value;
            return (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((s) => {
          const Icon = (Icons[s.icon as keyof typeof Icons] as React.ElementType) ?? Icons.CheckCircle;
          const imageUrl = serviceImages[s.slug];
          return (
            <article
              key={s.slug}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={imageUrl}
                  alt={s.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-flex px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold uppercase tracking-wider text-slate-700 rounded-md">
                    {categoryLabel[s.category]}
                  </span>
                </div>

                {s.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-md">
                      <Flame className="w-3.5 h-3.5" /> Popular
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {s.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                   <Link
                    to="/booking"
                    search={{ service: s.slug }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition group/link"
                  >
                    Book Appointment <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No services found.
        </div>
      )}
    </div>
  );
}
