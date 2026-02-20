"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Svařování MIG/MAG",
    desc: "Svařování různých druhů ocelí metodou MIG/MAG. Nejběžnější metoda pro konstrukční díly, rámy, nosníky a příruby. Vhodná pro středně silné a silné materiály.",
    details: [
      "Konstrukční oceli",
      "Svary v různých polohách",
      "Tloušťky od 2mm výše",
      "Servisní i zakázková výroba",
    ],
  },
  {
    number: "02",
    title: "Svařování TIG",
    desc: "Přesné svařování metodou TIG pro náročnější situace. Čistý svar, vhodný pro tenčí materiály nebo místa s vyššími požadavky na kvalitu svaru.",
    details: [
      "Tenčí materiály",
      "Vyšší kvalita svaru",
      "Nerezová ocel",
      "Náročnější místa přístupu",
    ],
  },
  {
    number: "03",
    title: "Výroba rámů a konstrukcí",
    desc: "Kompletní výroba ocelových rámů, stojanů, pracovních stolů, regálů, nosných rámů strojů a dalších ocelových konstrukcí přesně dle výkresů zákazníka.",
    details: [
      "Pracovní stoly a stojany",
      "Nosné rámy a regály",
      "Vstupní brány a zábradlí",
      "Dle výkresů i dle návrhu",
    ],
  },
  {
    number: "04",
    title: "Zakázkové dílce dle výkresů",
    desc: "Výroba přesných kovových dílců přesně podle technické dokumentace zákazníka. Pracujeme s výkresy v PDF, DXF nebo DWG formátech. Malé série i jednotlivé kusy.",
    details: [
      "PDF, DXF, DWG výkresy",
      "Drobné i větší dílce",
      "Malé série i jednotlivé kusy",
      "Přesná výroba dle tolerancí",
    ],
  },
  {
    number: "05",
    title: "Opravy a modifikace",
    desc: "Opravy poškozených kovových dílů a svařenců. Přivařování nových prvků, zesilování existujících konstrukcí, odstraňování trhlin a poškozených svarů.",
    details: [
      "Opravy trhlin a poškozených svarů",
      "Zesilování konstrukcí",
      "Přivařování nových prvků",
      "Modifikace dle požadavků",
    ],
  },
  {
    number: "06",
    title: "Konzultace a nacenění",
    desc: "Před každou zakázkou probereme detaily – materiál, výkresovou dokumentaci, tolerance a termín. Cenová nabídka je zdarma a nezávazná.",
    details: [
      "Bezplatné nacenění",
      "Konzultace výkresů",
      "Doporučení materiálu",
      "Termín domluvou",
    ],
  },
];

export function ServicesPage() {
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
                Co nabízíme
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-barlow)] font-black text-6xl lg:text-8xl uppercase leading-[0.9] text-[#e8e4dc]">
              Naše
              <br />
              <span className="text-[#e07b00]">Služby</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col gap-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-12 border-b border-[#1a1a1a]"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="font-[family-name:var(--font-barlow)] font-extrabold text-4xl text-[#e07b00]/25">
                  {service.number}
                </span>
              </div>

              {/* Title + desc */}
              <div className="lg:col-span-5">
                <h2 className="font-[family-name:var(--font-barlow)] font-extrabold text-2xl lg:text-3xl uppercase text-[#e8e4dc] mb-3 leading-tight">
                  {service.title}
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Details */}
              <div className="lg:col-span-5 lg:col-start-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-[#e07b00] shrink-0" />
                      <span className="font-[family-name:var(--font-inter)] text-sm text-[#9a9087]">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e07b00] text-[#0c0c0c] font-[family-name:var(--font-inter)] font-semibold text-sm tracking-wide uppercase hover:bg-[#c96e00] transition-colors"
          >
            Nezávazná poptávka
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
