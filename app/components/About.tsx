"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Family-Owned & Operated",
    description:
      "Run by a warm, welcoming family who treat every customer like a guest in their home.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Authentic & Imported",
    description:
      "Specialty items sourced directly from the Mediterranean & Middle Eastern regions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Freshly Prepared Daily",
    description:
      "Falafel, shawarma, hummus, and more made fresh every single day in-house.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Halal Certified",
    description:
      "All meats are 100% halal, carefully sourced to meet the highest standards.",
  },
];

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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-cream" />
      <div className="absolute inset-0 mediterranean-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div data-reveal className="text-center mb-20">
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm">
            Our Story
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-4 mb-6">
            A Hidden Gem in{" "}
            <span className="bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
              Cherry Hill
            </span>
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-gold shrink-0">
              <path fill="currentColor" d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
            </svg>
          </div>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            At Ammon Mediterranean Market, we bring the rich flavors and traditions of the
            Mediterranean & Middle Eastern world to South Jersey. What started as a passion
            for authentic food has become a beloved community gathering place — where every
            visit feels like coming home.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gold/10 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal/55 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div data-reveal className="mt-20 flex flex-wrap justify-center gap-12 sm:gap-20">
          {[
            { value: "4.6★", label: "Google Rating" },
            { value: "539+", label: "Happy Reviews" },
            { value: "100%", label: "Halal Certified" },
            { value: "Daily", label: "Fresh Prepared" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-charcoal/45 mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
