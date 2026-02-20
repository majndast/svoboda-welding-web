import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Svoboda Welding | Zakázková výroba z kovu",
  description:
    "Pavel Svoboda – zakázková svářečská výroba. Vyrábíme přesné kovové konstrukce a součásti dle výkresů. Kontaktujte nás pro cenovou nabídku.",
  keywords: ["svářeč", "zakázková výroba", "kovové konstrukce", "svařování", "Pavel Svoboda"],
  openGraph: {
    title: "Svoboda Welding | Zakázková výroba z kovu",
    description: "Přesná svářečská výroba na zakázku dle vašich výkresů.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="dark">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
