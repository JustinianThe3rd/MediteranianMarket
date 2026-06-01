"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Casi King",
    badge: "Local Guide",
    reviews: 172,
    photos: 427,
    date: "3 months ago",
    rating: 5,
    text: "This market is the perfect definition of a hidden gem. I stopped in just out of curiosity and left with a bag full of Mediterranean goodness. At first glance it's a small grocery full of specialty items you would be hard pressed to find anywhere else in South Jersey.",
  },
  {
    name: "しづ",
    badge: "Local Guide",
    reviews: 18,
    photos: 34,
    date: "2 months ago",
    rating: 5,
    text: "This is such a hidden gem. I am absolutely in love with this place. The family that runs it are some of the nicest people I've ever met, I've never felt more welcomed somewhere before. Their simple kind gestures are what makes this place so special.",
  },
  {
    name: "Penelope H",
    badge: "Local Guide",
    reviews: 21,
    photos: 5,
    date: "2 months ago",
    rating: 5,
    text: "Ammon Mediterranean Market has the best Arabic food I've tried in South Jersey. I'm originally from North Jersey, where great Arabic food is everywhere, so it's been hard to find something comparable down here. But honestly, this place is the real deal.",
  },
  {
    name: "Verified Customer",
    badge: "Google Review",
    date: "Recent",
    rating: 5,
    text: "We LOVE this place, the food is amazing and the service is super friendly. The falafel is the best I've had outside of the Middle East. Highly recommend stopping by!",
  },
  {
    name: "Verified Customer",
    badge: "Google Review",
    date: "Recent",
    rating: 5,
    text: "Ordered the chicken shawarma and falafel — they both tasted incredible. The portions are generous and the prices are very fair. This is now my go-to spot for authentic Mediterranean food.",
  },
  {
    name: "Verified Customer",
    badge: "Google Review",
    date: "Recent",
    rating: 5,
    text: "My meal was a combination of chicken and lamb shawarma. Absolutely delicious! The hummus was smooth and flavorful. The family running the place made us feel like old friends.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Reviews() {
  const ref = useReveal();

  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-cream" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div data-reveal className="text-center mb-20">
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm">
            What People Say
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-4 mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-terracotta to-terracotta-light bg-clip-text text-transparent">
              Our Community
            </span>
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-gold shrink-0">
              <path fill="currentColor" d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
            </svg>
          </div>

          {/* Google rating summary */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gold/10">
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-charcoal">4.6</div>
              <StarRating rating={5} />
            </div>
            <div className="w-px h-12 bg-gold/20" />
            <div className="text-left">
              <div className="text-2xl font-semibold text-charcoal">539+ Reviews</div>
              <div className="text-sm text-charcoal/45">on Google Maps</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gold/10 hover:border-gold/25 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-olive to-olive-dark flex items-center justify-center text-white font-heading text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-charcoal text-sm">{review.name}</div>
                    <div className="text-xs text-charcoal/40">
                      {review.badge}
                      {review.reviews != null && review.reviews > 0 && ` · ${review.reviews} reviews`}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-charcoal/30">{review.date}</span>
              </div>
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal className="text-center mt-16">
          <a
            href="https://www.google.com/maps/place/Ammon+Mediterranean+Market/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold/40 text-charcoal font-medium rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-500 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
