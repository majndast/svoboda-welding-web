import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GalleryPage } from "@/components/gallery-page";

export const metadata: Metadata = {
  title: "Naše práce | Svoboda Welding",
  description:
    "Galerie hotových prací – svařené konstrukce, rámy, dílce a další kovové výrobky z dílny Svoboda Welding.",
};

export default function PracePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <GalleryPage />
      </main>
      <Footer />
    </>
  );
}
