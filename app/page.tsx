import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { GalleryPreview } from "@/components/gallery-preview";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GalleryPreview />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
