"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "System", href: "#system" },
  { label: "Work", href: "#work" },
  { label: "Books", href: "#books" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-between items-center z-100 transition-all duration-400 max-[820px]:px-6 ${
          scrolled
            ? "bg-navy/92 backdrop-blur-[12px] py-4 px-14"
            : "bg-transparent py-6 px-14"
        }`}
      >
        <a href="#" className="block">
          <Image src="/logo-gold.svg" alt="Code 1" width={120} height={26} className="h-[26px] w-auto" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden min-[821px]:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] tracking-[0.08em] uppercase text-warm-white/70 no-underline hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#assessment"
            className="text-xs text-gold border border-gold px-[22px] py-[10px] rounded-[1px] tracking-[1px] no-underline hover:bg-gold hover:text-navy hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300"
          >
            Begin Assessment
          </a>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="min-[821px]:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer"
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5 h-[1.5px] bg-warm-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-warm-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-warm-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-navy/98 z-90 flex flex-col items-center justify-center gap-8 min-[821px]:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[14px] tracking-[0.08em] uppercase text-warm-white/70 no-underline hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#assessment"
            onClick={() => setMobileOpen(false)}
            className="text-xs text-gold border border-gold px-[22px] py-[10px] rounded-[1px] tracking-[1px] no-underline hover:bg-gold hover:text-navy transition-all duration-300 mt-4"
          >
            Begin Assessment
          </a>
        </div>
      )}
    </>
  );
}
