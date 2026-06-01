"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    emoji: "🧆",
    name: "Falafel",
    reviewCount: 95,
    description: "Crispy on the outside, fluffy inside. Made from scratch with authentic herbs and spices.",
    items: ["Classic Falafel", "Falafel Plate", "Falafel Sandwich"],
  },
  {
    emoji: "🥙",
    name: "Shawarma",
    reviewCount: 77,
    description: "Slow-marinated and carved to order. A customer favorite that keeps them coming back.",
    items: ["Chicken Shawarma", "Lamb Shawarma", "Mixed Shawarma Combo"],
  },
  {
    emoji: "🫒",
    name: "Hummus & Dips",
    reviewCount: 45,
    description: "Creamy, rich, and made fresh daily. The perfect start to any Mediterranean feast.",
    items: ["Classic Hummus", "Hummus Beiruti", "Baba Ganoush", "Labneh"],
  },
  {
    emoji: "🥩",
    name: "Halal Meats",
    reviewCount: 21,
    description: "Premium halal cuts prepared with care. From everyday cooking to special occasions.",
    items: ["Chicken", "Lamb", "Beef", "Kofta"],
  },
  {
    emoji: "🫓",
    name: "Fresh Bread",
    reviewCount: 18,
    description: "Baked fresh throughout the day. Warm pita, markook, and more.",
    items: ["Pita Bread", "Markoom", "Manoushe", "Spinach Pie"],
  },
  {
    emoji: "🧁",
    name: "Sweets & Pastries",
    reviewCount: 14,
    description: "Traditional Mediterranean desserts made with love and the finest ingredients.",
    items: ["Baklava", "Knafeh", "Maamoul", "Pastries Variety Box"],
  },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    label: "In-Store Shopping",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    label: "Curbside Pickup",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    label: "Delivery Available",
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Menu() {
  const ref = useReveal();

  return (
    <section id="menu" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-olive-dark to-olive-dark" />

      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 border border-gold/5 rounded-full animate-[spin_120s_linear_infinite]" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 border border-gold/5 rounded-full animate-[spin_90s_linear_infinite_reverse]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div data-reveal className="text-center mb-20">
          <span className="text-gold-light font-medium tracking-[0.3em] uppercase text-sm">
            Our Offerings
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Flavors That{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Tell a Story
            </span>
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-gold shrink-0">
              <path fill="currentColor" d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
            </svg>
          </div>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            From our crispy falafel to slow-carved shawarma, every item on our menu carries
            generations of Mediterranean tradition. Here&apos;s what our community loves most.
          </p>
        </div>

        {/* Menu categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-gold/20 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{cat.emoji}</span>
                <span className="text-xs text-gold/60 bg-gold/10 px-3 py-1 rounded-full">
                  {cat.reviewCount} reviews
                </span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                {cat.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div data-reveal className="mt-16 flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/60"
            >
              {service.icon}
              <span className="text-sm font-medium">{service.label}</span>
              <svg className="w-4 h-4 text-green-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal className="text-center mt-16">
          <p className="text-white/40 mb-6">
            Ready to explore our full menu? Visit us in-store!
          </p>
          <a
            href="https://maps.google.com/?q=853+Cooper+Landing+Rd,+Cherry+Hill+Township,+NJ+08002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-charcoal font-medium rounded-full hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:-translate-y-1"
          >
            Visit Us Today
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
