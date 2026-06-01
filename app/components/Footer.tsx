"use client";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-white py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] mediterranean-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-heading text-lg">
                A
              </div>
              <div>
                <span className="block font-heading text-lg font-semibold leading-tight">
                  Ammon
                </span>
                <span className="block text-xs tracking-[0.2em] uppercase text-gold-light">
                  Mediterranean Market
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Cherry Hill&apos;s authentic Mediterranean & Middle Eastern grocery destination.
              Family-owned, community-loved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Menu", href: "#menu" },
                { label: "Reviews", href: "#reviews" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/40">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                853 Cooper Landing Rd, Cherry Hill Township, NJ 08002
              </li>
              <li className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 shrink-0 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18564865909" className="text-white/40 hover:text-gold transition-colors">
                  (856) 486-5909
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/40">
                <span className="w-4 h-4 shrink-0 text-green-400 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </span>
                Open Daily · 9 AM – 9 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Ammon Mediterranean Market. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with{" "}
            <svg className="w-3.5 h-3.5 text-terracotta fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>{" "}
            for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
