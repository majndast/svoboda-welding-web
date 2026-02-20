"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, { message: "Zadejte jméno" }),
  email: z.string().email({ message: "Neplatný e-mail" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Zpráva musí mít alespoň 10 znaků" }),
});

type FormData = z.infer<typeof schema>;

export function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

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
                Domluvte se s námi
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-barlow)] font-black text-6xl lg:text-8xl uppercase leading-[0.9] text-[#e8e4dc]">
              Kontakt
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[#6b6560] leading-relaxed mb-10">
              Pošlete nám poptávku nebo se rovnou ozvěte telefonem. Nejlépe
              přiložte výkres nebo popis toho, co potřebujete vyrobit – ozvu se
              co nejdříve.
            </p>

            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#e07b00]/30 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#e07b00]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-barlow)] font-bold text-xs tracking-widest uppercase text-[#3d3a37] mb-0.5">
                    Telefon
                  </div>
                  <a
                    href="tel:+420123456789"
                    className="font-[family-name:var(--font-inter)] text-[#e8e4dc] hover:text-[#e07b00] transition-colors"
                  >
                    +420 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#e07b00]/30 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#e07b00]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-barlow)] font-bold text-xs tracking-widest uppercase text-[#3d3a37] mb-0.5">
                    E-mail
                  </div>
                  <a
                    href="mailto:info@svobodawelding.cz"
                    className="font-[family-name:var(--font-inter)] text-[#e8e4dc] hover:text-[#e07b00] transition-colors"
                  >
                    info@svobodawelding.cz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#e07b00]/30 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#e07b00]" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-barlow)] font-bold text-xs tracking-widest uppercase text-[#3d3a37] mb-0.5">
                    Lokalita
                  </div>
                  <span className="font-[family-name:var(--font-inter)] text-[#e8e4dc]">
                    Česká republika
                  </span>
                </div>
              </li>
            </ul>

            {/* PSW watermark */}
            <div className="mt-16 pt-10 border-t border-[#1a1a1a]">
              <span className="psw-mono text-7xl text-[#e07b00]/10">PSW</span>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#6b6560] mb-2">
                  Jméno *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Jan Novák"
                  className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-[#e8e4dc] placeholder:text-[#3d3a37] focus:outline-none focus:border-[#e07b00]/50 transition-colors"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500/80 font-[family-name:var(--font-inter)]">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email + phone row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#6b6560] mb-2">
                    E-mail *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jan@firma.cz"
                    className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-[#e8e4dc] placeholder:text-[#3d3a37] focus:outline-none focus:border-[#e07b00]/50 transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500/80 font-[family-name:var(--font-inter)]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#6b6560] mb-2">
                    Telefon
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+420 xxx xxx xxx"
                    className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-[#e8e4dc] placeholder:text-[#3d3a37] focus:outline-none focus:border-[#e07b00]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#6b6560] mb-2">
                  Popis zakázky *
                </label>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Popište co potřebujete vyrobit, přibližné rozměry, materiál, počet kusů..."
                  className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-[#e8e4dc] placeholder:text-[#3d3a37] focus:outline-none focus:border-[#e07b00]/50 transition-colors resize-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500/80 font-[family-name:var(--font-inter)]">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <p className="font-[family-name:var(--font-inter)] text-xs text-[#3d3a37]">
                Výkresy a přílohy prosím pošlete e-mailem na{" "}
                <a
                  href="mailto:info@svobodawelding.cz"
                  className="text-[#6b6560] hover:text-[#e07b00] transition-colors"
                >
                  info@svobodawelding.cz
                </a>
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#e07b00] text-[#0c0c0c] font-[family-name:var(--font-inter)] font-semibold text-sm tracking-wide uppercase hover:bg-[#c96e00] disabled:opacity-60 transition-colors duration-200 self-start"
              >
                {status === "loading" ? (
                  "Odesílám..."
                ) : (
                  <>
                    Odeslat poptávku
                    <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-3 px-4 py-3 bg-green-900/20 border border-green-800/30">
                  <CheckCircle size={16} className="text-green-500 shrink-0" />
                  <p className="font-[family-name:var(--font-inter)] text-sm text-green-400">
                    Poptávka odeslána. Ozvu se co nejdříve!
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 px-4 py-3 bg-red-900/20 border border-red-800/30">
                  <AlertCircle size={16} className="text-red-500 shrink-0" />
                  <p className="font-[family-name:var(--font-inter)] text-sm text-red-400">
                    Něco se pokazilo. Zkuste to znovu nebo napište přímo na e-mail.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
