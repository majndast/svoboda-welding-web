"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Svařování MIG/MAG",
    desc: "Svařování různých druhů ocelí metodou MIG/MAG. Vhodné pro konstrukční díly, rámy, nosníky a příruby.",
  },
  {
    number: "02",
    title: "Svařování TIG",
    desc: "Přesné svařování metodou TIG pro náročnější materiály a místa, kde záleží na čistotě svaru.",
  },
  {
    number: "03",
    title: "Výroba rámů a konstrukcí",
    desc: "Kompletní výroba ocelových rámů, stojanů, pracovních stolů, regálů a dalších nosných konstrukcí.",
  },
  {
    number: "04",
    title: "Zakázkové dílce dle výkresů",
    desc: "Výroba přesných dílců přesně dle technické dokumentace. Malé série i jednotlivé kusy.",
  },
  {
    number: "05",
    title: "Opravy a modifikace",
    desc: "Opravy poškozených kovových dílů, přivařování, zesilování a úpravy existujících konstrukcí.",
  },
  {
    number: "06",
    title: "Konzultace a cenová nabídka",
    desc: "Před každou zakázkou se domluvíme na detailech. Cenová nabídka zdarma, bez závazků.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#e07b00]" />
              <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#e07b00]">
                Co děláme
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-barlow)] font-black text-5xl lg:text-6xl uppercase leading-[0.95] text-[#e8e4dc]">
              Naše
              <br />
              <span className="text-[#e07b00]">Služby</span>
            </h2>
          </div>
          <Link
            href="/sluzby"
            className="group inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-[#6b6560] hover:text-[#e07b00] transition-colors"
          >
            Všechny služby
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#1a1a1a]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="border-b border-r border-[#1a1a1a] p-7 lg:p-8 hover:bg-[#111111] transition-colors group"
            >
              <div className="font-[family-name:var(--font-barlow)] font-extrabold text-5xl text-[#e07b00]/20 leading-none mb-4 group-hover:text-[#e07b00]/30 transition-colors">
                {service.number}
              </div>
              <h3 className="font-[family-name:var(--font-barlow)] font-bold text-xl uppercase text-[#e8e4dc] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
