import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="psw-mono text-3xl">PSW</span>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560] leading-relaxed max-w-xs">
              Zakázková svářečská výroba. Vyrábíme přesné kovové konstrukce a
              součásti dle vašich výkresů a specifikací.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow)] font-bold text-xs tracking-widest uppercase text-[#e07b00] mb-4">
              Navigace
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Úvod" },
                { href: "/sluzby", label: "Služby" },
                { href: "/prace", label: "Naše práce" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560] hover:text-[#e8e4dc] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-barlow)] font-bold text-xs tracking-widest uppercase text-[#e07b00] mb-4">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#e07b00] shrink-0" />
                <a
                  href="tel:+420123456789"
                  className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560] hover:text-[#e8e4dc] transition-colors"
                >
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#e07b00] shrink-0" />
                <a
                  href="mailto:info@svobodawelding.cz"
                  className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560] hover:text-[#e8e4dc] transition-colors"
                >
                  info@svobodawelding.cz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#e07b00] shrink-0 mt-0.5" />
                <span className="font-[family-name:var(--font-inter)] text-sm text-[#6b6560]">
                  Česká republika
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#3d3a37]">
            © {new Date().getFullYear()} Svoboda Welding – Pavel Svoboda. Všechna práva vyhrazena.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#3d3a37]">
            IČO: XXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
