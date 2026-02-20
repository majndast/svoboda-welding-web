import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesPage } from "@/components/services-page";

export const metadata: Metadata = {
  title: "Služby | Svoboda Welding",
  description:
    "Kompletní přehled svářečských a kovářských služeb. Svařování MIG/MAG, TIG, zakázková výroba konstrukcí a dílů dle výkresů.",
};

export default function SluzbyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
