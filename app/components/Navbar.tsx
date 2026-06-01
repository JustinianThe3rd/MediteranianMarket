"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-[fadeIn_0.8s_ease-out] ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-lg shadow-gold/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-heading text-lg tracking-wider transition-transform duration-300 group-hover:scale-110">
                A
              </div>
              <div className="hidden sm:block">
                <span className="block font-heading text-lg font-semibold text-charcoal leading-tight">
                  Ammon
                </span>
                <span className="block text-xs tracking-[0.25em] uppercase text-olive font-medium">
                  Mediterranean Market
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors duration-300 tracking-wide group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-terracotta transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="https://maps.google.com/?q=853+Cooper+Landing+Rd,+Cherry+Hill+Township,+NJ+08002"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-olive to-olive-dark text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-olive/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Directions
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-charcoal origin-center transition-transform duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-charcoal transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-charcoal origin-center transition-transform duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-warm-white/98 backdrop-blur-lg pt-24 md:hidden animate-[fadeIn_0.3s_ease-out]">
          <div className="flex flex-col items-center gap-8 py-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-2xl text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://maps.google.com/?q=853+Cooper+Landing+Rd,+Cherry+Hill+Township,+NJ+08002"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-gradient-to-r from-olive to-olive-dark text-white font-medium rounded-full"
            >
              Get Directions
            </a>
          </div>
        </div>
      )}
    </>
  );
}
