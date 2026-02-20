"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/prace", label: "Naše práce" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0c0c]/95 backdrop-blur-sm border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="psw-mono text-2xl lg:text-3xl">PSW</span>
            <div className="hidden sm:block h-6 w-px bg-[#2a2a2a]" />
            <span className="hidden sm:block font-[family-name:var(--font-inter)] text-sm text-[#6b6560] tracking-widest uppercase">
              Svoboda Welding
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-inter)] text-sm tracking-wide transition-colors duration-200 hover-amber-line ${
                  pathname === link.href
                    ? "text-[#e07b00]"
                    : "text-[#9a9087] hover:text-[#e8e4dc]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-4 px-5 py-2 bg-[#e07b00] text-[#0c0c0c] font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide uppercase hover:bg-[#c96e00] transition-colors duration-200"
            >
              Nezávazná poptávka
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#e8e4dc] p-2"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#111111] border-t border-[#2a2a2a] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 border-b border-[#1e1e1e] font-[family-name:var(--font-inter)] text-sm tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-[#e07b00]"
                      : "text-[#9a9087]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mt-4 px-5 py-3 bg-[#e07b00] text-[#0c0c0c] font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide uppercase text-center"
              >
                Nezávazná poptávka
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
