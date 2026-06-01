"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-gold-light/20" />
      <div className="absolute inset-0 mediterranean-pattern" />

      {/* Decorative floating elements (CSS-animated to prevent GPU render loops) */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-32 left-[5%] w-80 h-80 rounded-full bg-gradient-to-br from-terracotta/8 to-transparent blur-3xl animate-[float_10s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/3 left-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-olive/8 to-transparent blur-3xl animate-[float_6s_ease-in-out_infinite_0.5s]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Ornamental top */}
        <div className="flex justify-center mb-8 animate-[fadeScaleIn_1s_ease-out_0.2s_both]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold">
              <path
                fill="currentColor"
                d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z"
              />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Main heading */}
        <div className="animate-[fadeInUp_1s_ease-out_0.4s_both]">
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-charcoal leading-[1.1] mb-6">
            <span className="block">Ammon</span>
            <span className="block bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              Mediterranean
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-medium text-olive mt-2">
              Market
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-charcoal/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.7s_both]">
          Cherry Hill&apos;s hidden gem for authentic Mediterranean & Middle Eastern
          groceries, freshly prepared foods, and the warmest welcome you&apos;ll find anywhere.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_0.9s_both]">
          <a
            href="https://maps.google.com/?q=853+Cooper+Landing+Rd,+Cherry+Hill+Township,+NJ+08002"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-olive to-olive-dark text-white font-medium rounded-full hover:shadow-xl hover:shadow-olive/25 transition-all duration-500 hover:-translate-y-1 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Find Us on Map
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          <a
            href="tel:+18564865909"
            className="px-8 py-4 border-2 border-gold/40 text-charcoal font-medium rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-500 hover:-translate-y-1 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (856) 486-5909
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fadeIn_0.5s_ease-out_1.5s_both]">
          <div className="flex flex-col items-center gap-2 text-charcoal/30 animate-[scrollBounce_2s_ease-in-out_infinite]">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
