import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Prajakta Pisal",
    treatment: "Google Review",
    text: "My experience at this dental clinic was very good. The doctor is very professional and communicates calmly with patients. The treatment is effective, and proper hygiene is maintained at all times. The appointment system is well organized. This clinic is the best for dental problems. Highly recommended!",
    rating: 5,
  },
  {
    name: "Pramod Patil",
    treatment: "Google Review",
    text: "Dr. Rakhi madam treats every patient with genuine care and attention, ensuring comfort at each stage of the treatment. Her gentle approach, hygiene standards, and commitment to pain-free treatment truly reflect her dedication to the profession. She always makes sure the patient is comfortable and satisfied.",
    rating: 5,
  },
  {
    name: "Dhananjay Yadav",
    treatment: "Google Review",
    text: "Standard treatment and perfect counselling. Doctor's are talented. Staff is supportive. Pleasant ambience. Accurate diagnosis. One of the best clinic.",
    rating: 5,
  },
  {
    name: "Vaishnavi Patil",
    treatment: "Google Review",
    text: "Very professional doctor and excellent service. My root canal was completed efficiently in one visit with a smooth experience. Highly recommended.",
    rating: 5,
  },
  {
    name: "Vedant Thombre",
    treatment: "Google Review",
    text: "My overall experience with the hospital is too good. Doctors and supporting staff are co-operative. I must appreciate this hospital because of its service.",
    rating: 5,
  },
  {
    name: "Vilas Dalvi",
    treatment: "Google Review",
    text: "Thank you doctor, I had a lot of toothache and was having a lot of trouble eating and drinking. Your treatment was excellent. Thank you very much.",
    rating: 5,
  },
];

const CARDS_PER_PAGE = 3;
const PAGE_COUNT = Math.ceil(reviews.length / CARDS_PER_PAGE);

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function Testimonials() {
  const [[page, dir], setPage] = useState([0, 0]);

  function go(d: 1 | -1) {
    setPage(([p]) => [(p + d + PAGE_COUNT) % PAGE_COUNT, d]);
  }

  function goTo(i: number) {
    setPage(([p]) => [i, i >= p ? 1 : -1]);
  }

  const visible = reviews.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

  return (
    <section className="relative bg-ice text-ink py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <span className="text-bright font-semibold tracking-[0.2em] uppercase text-[11px]">
              What patients say
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-6xl font-light tracking-tighter text-balance">
              Real stories from{" "}
              <span className="italic text-bright">real smiles</span>.
            </h2>
          </div>
          <a
            href="https://maps.app.goo.gl/5HYbMALVA3f2YzkZA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-royal/15 hover:bg-royal hover:text-ice transition-colors text-sm font-semibold"
          >
            <Star className="size-4 fill-warning text-warning" />
            4.8 on Google • See all
          </a>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {visible.map((r, i) => (
                <article
                  key={i}
                  className="p-7 rounded-3xl bg-white border border-royal/5 shadow-soft"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="size-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-ink/80 mb-6">
                    "{r.text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-royal/5">
                    <div>
                      <p className="font-semibold text-sm">{r.name}</p>
                      <p className="text-xs text-ink/50">{r.treatment}</p>
                    </div>
                    <div className="size-7 rounded-full bg-gradient-to-br from-sky to-bright" />
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous reviews"
            className="size-10 rounded-full border border-royal/15 flex items-center justify-center hover:bg-royal hover:text-ice transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>

          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? "w-6 h-2.5 bg-bright"
                  : "size-2.5 bg-royal/20 hover:bg-royal/40"
              }`}
            />
          ))}

          <button
            onClick={() => go(1)}
            aria-label="Next reviews"
            className="size-10 rounded-full border border-royal/15 flex items-center justify-center hover:bg-royal hover:text-ice transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
