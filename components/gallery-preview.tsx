"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ImagePlus } from "lucide-react";

// Placeholder items - will be replaced with real photos
const placeholders = [
  { id: 1, label: "Ocelová konstrukce", size: "lg" },
  { id: 2, label: "Zakázkový díl", size: "sm" },
  { id: 3, label: "Svařovaný rám", size: "sm" },
  { id: 4, label: "Nosná svařenec", size: "md" },
  { id: 5, label: "Detailní svar", size: "md" },
];

export function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0c0c] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#e07b00]" />
              <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#e07b00]">
                Portfolio
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black text-5xl lg:text-6xl uppercase leading-[0.95] text-[#e8e4dc]">
              Naše
              <br />
              <span className="text-[#e07b00]">Práce</span>
            </h2>
          </div>
          <Link
            href="/prace"
            className="group inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-[#6b6560] hover:text-[#e07b00] transition-colors"
          >
            Celá galerie
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
          {/* Large placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 aspect-square lg:aspect-auto lg:h-[420px] bg-[#111111] border border-[#1e1e1e] flex flex-col items-center justify-center gap-3 group hover:border-[#e07b00]/30 transition-colors"
          >
            <ImagePlus size={28} className="text-[#2a2a2a] group-hover:text-[#e07b00]/40 transition-colors" />
            <span className="font-[family-name:var(--font-inter)] text-xs text-[#2a2a2a] group-hover:text-[#3d3a37] transition-colors">
              Foto bude přidáno
            </span>
          </motion.div>

          {/* Smaller placeholders */}
          {placeholders.slice(1).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              className="aspect-square bg-[#111111] border border-[#1e1e1e] flex flex-col items-center justify-center gap-2 group hover:border-[#e07b00]/30 transition-colors"
            >
              <ImagePlus size={18} className="text-[#1e1e1e] group-hover:text-[#e07b00]/30 transition-colors" />
              <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#1e1e1e] group-hover:text-[#2a2a2a] transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 font-[family-name:var(--font-inter)] text-xs text-[#3d3a37] text-center"
        >
          Fotografie prací budou brzy přidány.
        </motion.p>
      </div>
    </section>
  );
}
