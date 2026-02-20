"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Large PSW background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span className="psw-mono text-[40vw] leading-none text-[#e07b00]/[0.02]">
          PSW
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#e07b00]" />
            <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#e07b00]">
              Kontakt
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-barlow)] font-black text-5xl lg:text-7xl uppercase leading-[0.9] text-[#e8e4dc] mb-6">
            Máte
            <br />
            projekt?
          </h2>

          <p className="font-[family-name:var(--font-inter)] text-[#6b6560] text-lg leading-relaxed max-w-xl mb-10">
            Pošlete mi výkres nebo popište co potřebujete. Ozvu se co nejdříve
            s cenovou nabídkou a termínem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e07b00] text-[#0c0c0c] font-[family-name:var(--font-inter)] font-semibold text-sm tracking-wide uppercase hover:bg-[#c96e00] transition-colors duration-200"
            >
              Napsat poptávku
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="tel:+420123456789"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#2a2a2a] text-[#9a9087] font-[family-name:var(--font-inter)] font-semibold text-sm tracking-wide uppercase hover:border-[#e07b00]/50 hover:text-[#e8e4dc] transition-colors duration-200"
            >
              +420 123 456 789
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
