"use client";

import { motion } from "framer-motion";
import { ImagePlus, Video } from "lucide-react";

// Placeholder grid – swap these for real <Image> components when photos are ready
const items = [
  { id: 1, label: "Ocelová konstrukce", span: "col-span-2 row-span-2", aspect: "aspect-square" },
  { id: 2, label: "Zakázkový díl", span: "", aspect: "aspect-square" },
  { id: 3, label: "Svařovaný rám", span: "", aspect: "aspect-square" },
  { id: 4, label: "Nosný svařenec", span: "", aspect: "aspect-[4/3]" },
  { id: 5, label: "Detailní svar", span: "", aspect: "aspect-[4/3]" },
  { id: 6, label: "Ukázka práce", span: "", aspect: "aspect-square" },
  { id: 7, label: "Hotová zakázka", span: "", aspect: "aspect-square" },
  { id: 8, label: "Příprava materiálu", span: "", aspect: "aspect-square" },
  { id: 9, label: "Výroba rámu", span: "col-span-2", aspect: "aspect-[16/9]" },
];

export function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      {/* Page header */}
      <div className="bg-[#0a0a0a] border-b border-[#1a1a1a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#e07b00]" />
              <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#e07b00]">
                Portfolio
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-barlow)] font-black text-6xl lg:text-8xl uppercase leading-[0.9] text-[#e8e4dc]">
              Naše
              <br />
              <span className="text-[#e07b00]">Práce</span>
            </h1>
            <p className="mt-6 font-[family-name:var(--font-inter)] text-[#6b6560] max-w-xl leading-relaxed">
              Ukázky hotových zakázek z naší dílny. Fotografie budou průběžně
              doplňovány.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Video placeholder */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-video bg-[#111111] border border-[#1e1e1e] flex flex-col items-center justify-center gap-4 hover:border-[#e07b00]/20 transition-colors group"
        >
          <div className="w-14 h-14 border border-[#e07b00]/20 flex items-center justify-center group-hover:border-[#e07b00]/40 transition-colors">
            <Video size={22} className="text-[#e07b00]/30 group-hover:text-[#e07b00]/50 transition-colors" />
          </div>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#3d3a37]">
            Video z dílny – bude přidáno
          </p>
        </motion.div>
      </div>

      {/* Photo grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${item.span} ${item.aspect} bg-[#111111] border border-[#1e1e1e] flex flex-col items-center justify-center gap-2 group hover:border-[#e07b00]/20 transition-colors`}
            >
              <ImagePlus
                size={i === 0 ? 28 : 18}
                className="text-[#1e1e1e] group-hover:text-[#e07b00]/20 transition-colors"
              />
              <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#1e1e1e] group-hover:text-[#2a2a2a] transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center font-[family-name:var(--font-inter)] text-xs text-[#3d3a37]"
        >
          Fotografie a video budou přidány po nafocení zakázek.
        </motion.p>
      </div>
    </div>
  );
}
