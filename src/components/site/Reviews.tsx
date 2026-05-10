import { useEffect, useState } from "react";

type Review = {
  author_name: string;
  profile_photo?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

export function Reviews() {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [loading, setLoading] = useState(true);
  const elfsightId = import.meta.env.VITE_ELFSIGHT_WIDGET_ID as string | undefined;

  useEffect(() => {
    if (elfsightId) {
      // Load Elfsight platform script once
      if (!document.querySelector('script[src="https://apps.elfsight.com/p/platform.js"]')) {
        const s = document.createElement('script');
        s.src = 'https://apps.elfsight.com/p/platform.js';
        s.defer = true;
        document.body.appendChild(s);
      }
      // No need to fetch server reviews when using Elfsight
      setLoading(false);
      return;
    }

    let mounted = true;
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setReviews(data.reviews || []);
      })
      .catch((e) => {
        console.error("Failed to load reviews", e);
        if (mounted) setReviews([]);
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [elfsightId]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <h3 className="text-2xl font-semibold mb-4">Patient Reviews</h3>
        {loading && <div className="text-slate-500">Loading reviews…</div>}

        {!loading && reviews && reviews.length === 0 && (
          <div className="text-slate-500">No reviews available.</div>
        )}

        {elfsightId ? (
          <div className="max-w-3xl mx-auto">
            <div className={`elfsight-app-${elfsightId}`} />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews && reviews.slice(0, 6).map((r, i) => (
              <blockquote key={i} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <img
                    src={r.profile_photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.author_name)}`}
                    alt={r.author_name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{r.author_name}</div>
                    <div className="text-xs text-slate-500">{r.relative_time_description}</div>
                  </div>
                </div>

                <p className="mt-3 text-slate-700 text-sm">{r.text}</p>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
