"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0c0c0c] bg-industrial noise overflow-hidden flex flex-col">
      {/* Top amber accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e07b00]" />

      {/* Large PSW watermark in background */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
        <span
          className="psw-mono text-[28vw] leading-none text-[#e07b00]/[0.035] translate-x-[10%]"
          aria-hidden
        >
          PSW
        </span>
      </div>

      {/* Diagonal amber accent */}
      <div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#e07b00]/40 via-[#e07b00]/10 to-transparent"
        style={{ right: "8%" }}
      />

      {/* Main content */}
      <div className="flex-1 flex items-center max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="w-full max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-[#e07b00]" />
            <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#e07b00]">
              Zakázková svářečská výroba
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-barlow)] font-black text-[14vw] sm:text-[10vw] lg:text-[8vw] xl:text-[7rem] leading-[0.9] uppercase tracking-tight text-[#e8e4dc]"
          >
            Svoboda
            <br />
            <span className="text-[#e07b00]">Welding</span>
          </motion.h1>

          {/* Separator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-[#e07b00]/60 via-[#e07b00]/20 to-transparent my-8 max-w-2xl"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-[#6b6560] max-w-xl leading-relaxed"
          >
            Ruční svařování kovových konstrukcí a součástí přesně podle vašich
            výkresů. Zakázková výroba od malých dílů po velké celky.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e07b00] text-[#0c0c0c] font-[family-name:var(--font-inter)] font-semibold text-sm tracking-wide uppercase hover:bg-[#c96e00] transition-colors duration-200"
            >
              Poptávka zdarma
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/prace"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#2a2a2a] text-[#9a9087] font-[family-name:var(--font-inter)] font-semibold text-sm tracking-wide uppercase hover:border-[#e07b00]/50 hover:text-[#e8e4dc] transition-colors duration-200"
            >
              Naše práce
            </Link>
          </motion.div>

          {/* Facts strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-0 max-w-lg"
          >
            {[
              { value: "100%", label: "Ruční výroba" },
              { value: "Dle", label: "výkresů" },
              { value: "Malé", label: "i velké kusy" },
            ].map((item, i) => (
              <div
                key={i}
                className={`py-4 ${i !== 0 ? "pl-6 border-l border-[#2a2a2a]" : ""}`}
              >
                <div className="font-[family-name:var(--font-barlow)] font-extrabold text-2xl text-[#e07b00] leading-none">
                  {item.value}
                </div>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#6b6560] mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bounce-down text-[#3d3a37]"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
