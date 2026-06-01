"use client";

import { useEffect, useRef } from "react";

const hours = [
  { day: "Monday", time: "9:00 AM – 9:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 9:00 PM" },
  { day: "Thursday", time: "9:00 AM – 9:00 PM" },
  { day: "Friday", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday", time: "9:00 AM – 9:00 PM" },
  { day: "Sunday", time: "9:00 AM – 9:00 PM", note: "A little busy" },
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

export default function Visit() {
  const ref = useReveal();

  return (
    <section id="visit" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-gold-light/10" />
      <div className="absolute inset-0 mediterranean-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div data-reveal className="text-center mb-20">
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm">
            Find Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mt-4 mb-6">
            Visit Your New{" "}
            <span className="bg-gradient-to-r from-olive to-olive-light bg-clip-text text-transparent">
              Favorite Spot
            </span>
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mb-8">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-gold shrink-0">
              <path fill="currentColor" d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location card */}
          <div data-reveal className="reveal-left p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gold/10">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal">Location</h3>
                <p className="text-charcoal/50 text-sm mt-1">
                  853 Cooper Landing Rd<br />
                  Cherry Hill Township, NJ 08002
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gold/10 mb-6 aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5!2d-75.0!3d39.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU0JzAwLjAiTiA3NcKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ammon Mediterranean Market Location"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=853+Cooper+Landing+Rd,+Cherry+Hill+Township,+NJ+08002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-olive to-olive-dark text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-olive/25 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
              <a
                href="tel:+18564865909"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 border-2 border-gold/40 text-charcoal text-sm font-medium rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (856) 486-5909
              </a>
            </div>
          </div>

          {/* Hours & info card */}
          <div data-reveal className="reveal-right space-y-6">
            {/* Hours */}
            <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gold/10">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal">Store Hours</h3>
                  <p className="text-green-600 text-sm font-medium flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Open · Closes 9 PM
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${
                      h.day === "Sunday" ? "bg-gold/5 border border-gold/10" : ""
                    }`}
                  >
                    <span className="text-charcoal/60 font-medium">{h.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-charcoal/80">{h.time}</span>
                      {h.note && (
                        <span className="text-xs text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                          {h.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-olive-dark to-olive text-white">
              <h3 className="font-heading text-xl font-semibold mb-6">Shopping Options</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                      </svg>
                    ),
                    label: "In-Store Shopping",
                    desc: "Browse our full selection of imported goods & fresh items",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    ),
                    label: "Curbside Pickup",
                    desc: "Order ahead and we&apos;ll bring it right to your car",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    ),
                    label: "Delivery",
                    desc: "Fresh Mediterranean flavors delivered to your door",
                  },
                ].map((s) => (
                  <div key={s.label} className="flex items-start gap-3">
                    <div className="text-gold shrink-0 mt-0.5">{s.icon}</div>
                    <div>
                      <div className="font-medium text-sm">{s.label}</div>
                      <div className="text-white/50 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
