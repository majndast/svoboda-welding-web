"use client";

import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Ruler } from "lucide-react";

const values = [
  {
    icon: Ruler,
    title: "Výroba dle výkresů",
    desc: "Pracujeme přesně podle vašich technických výkresů a specifikací. Každý díl musí sedět.",
  },
  {
    icon: Wrench,
    title: "Ruční řemeslo",
    desc: "Každý svár provádíme ručně s důrazem na kvalitu. Žádná sériová výroba – každá zakázka je jedinečná.",
  },
  {
    icon: ShieldCheck,
    title: "Kontrola kvality",
    desc: "Každý výrobek prochází kontrolou před předáním zákazníkovi. Stojíme si za svojí prací.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#e07b00]" />
              <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#e07b00]">
                O nás
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-barlow)] font-black text-5xl lg:text-6xl uppercase leading-[0.95] text-[#e8e4dc] mb-6">
              Pavel
              <br />
              Svoboda
            </h2>

            <p className="font-[family-name:var(--font-inter)] text-[#6b6560] leading-relaxed mb-4">
              Jsem svářeč s vášní pro precizní kovářskou práci. Vyrábím kovové
              konstrukce a součásti ručně, přímo dle vašich výkresů a požadavků.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#6b6560] leading-relaxed">
              Věnuji se zakázkové výrobě – od malých dílů po větší celky. Každá
              zakázka dostane plnou pozornost a péči. Výsledek musí být přesný,
              pevný a hezky hotový.
            </p>

            {/* Amber rule */}
            <div className="h-px bg-gradient-to-r from-[#e07b00]/40 to-transparent mt-10 mb-6" />

            <p className="font-[family-name:var(--font-barlow)] font-bold text-xl uppercase text-[#e8e4dc] tracking-wide">
              Svoboda Welding
              <span className="block font-[family-name:var(--font-inter)] font-400 text-sm text-[#6b6560] tracking-normal normal-case mt-1">
                Zakázková svářečská dílna
              </span>
            </p>
          </motion.div>

          {/* Right - values */}
          <div className="flex flex-col gap-0">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`flex gap-5 py-7 ${
                  i !== values.length - 1
                    ? "border-b border-[#1e1e1e]"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-[#e07b00]/30 text-[#e07b00]">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-barlow)] font-bold text-lg uppercase text-[#e8e4dc] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
