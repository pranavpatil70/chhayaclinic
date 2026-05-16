import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import chayya1 from "@/assets/chayya 1.jpeg";
import chayya2 from "@/assets/chayya 2.jpeg";
import chayya3 from "@/assets/chayya 3.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Clinic Gallery | Chhaya Clinic, Katraj Pune" },
      {
        name: "description",
        content:
          "Take a visual tour of Chhaya Clinic — our treatment rooms, sterilisation suite, equipment and patient transformations in Katraj, Pune.",
      },
      { property: "og:title", content: "Clinic Gallery — Chhaya Clinic" },
      {
        property: "og:description",
        content: "Step inside our Katraj clinic before you even visit.",
      },
    ],
  }),
  component: GalleryPage,
});

type Cat = "all" | "clinic" | "equipment" | "smiles";

const ITEMS: { src: string; alt: string; cat: Exclude<Cat, "all">; tall?: boolean }[] = [
  { src: chayya1, alt: "Chhaya Clinic — Interior 1", cat: "clinic", tall: true },
  { src: chayya2, alt: "Chhaya Clinic — Interior 2", cat: "clinic" },
  { src: chayya3, alt: "Chhaya Clinic — Interior 3", cat: "clinic" },
];

const CATS: { value: Cat; label: string }[] = [
  { value: "all", label: "All" },
  { value: "clinic", label: "Clinic" },
  { value: "equipment", label: "Equipment" },
  { value: "smiles", label: "Smiles" },
];

function GalleryPage() {
  const [cat, setCat] = useState<Cat>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === "all" ? ITEMS : ITEMS.filter((i) => i.cat === cat)),
    [cat]
  );

  function nav(dir: 1 | -1) {
    if (open === null) return;
    setOpen((open + dir + items.length) % items.length);
  }

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 size-[700px] rounded-full bg-bright/30 blur-[140px] animate-aurora" />
          <div
            className="absolute bottom-0 right-1/4 size-[500px] rounded-full bg-sky/20 blur-[120px] animate-aurora"
            style={{ animationDelay: "-6s" }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-10 lg:pt-24">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[10px] font-bold uppercase tracking-[0.18em] text-sky">
            <Sparkles className="size-3" /> A peek inside
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-[0.95] text-balance max-w-3xl">
            Step into our{" "}
            <span className="italic text-sky">clinic</span>.
          </h1>
          <p className="mt-6 text-lg text-ice/70 max-w-xl leading-relaxed font-light">
            Spotless rooms, premium equipment, and the warm faces you'll meet
            at every visit.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-6 flex flex-wrap gap-2">
          {CATS.map((c) => {
            const active = cat === c.value;
            return (
              <button
                key={c.value}
                onClick={() => setCat(c.value)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  active ? "text-ink" : "text-ice/60 hover:text-ice border border-ice/15"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="gallery-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-sky to-bright"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{c.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Masonry */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-24">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
          >
            <AnimatePresence>
              {items.map((it, i) => (
                <motion.button
                  layout
                  key={it.src}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: (i % 6) * 0.04 }}
                  onClick={() => setOpen(i)}
                  className={`group mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl glass relative ${
                    it.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="absolute bottom-3 left-3 right-3 text-left text-xs font-semibold text-ice opacity-0 group-hover:opacity-100 transition-opacity">
                    {it.alt}
                  </p>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              className="absolute top-5 right-5 size-11 rounded-full glass-strong flex items-center justify-center text-ice"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nav(-1);
              }}
              className="absolute left-3 sm:left-8 size-11 rounded-full glass-strong flex items-center justify-center text-ice"
              aria-label="Previous"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nav(1);
              }}
              className="absolute right-3 sm:right-8 size-11 rounded-full glass-strong flex items-center justify-center text-ice"
              aria-label="Next"
            >
              <ArrowRight className="size-5" />
            </button>

            <motion.img
              key={items[open].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={items[open].src}
              alt={items[open].alt}
              className="max-h-[85dvh] max-w-[90vw] object-contain rounded-2xl shadow-deep"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SiteShell>
  );
}
