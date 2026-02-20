import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Kontakt | Svoboda Welding",
  description:
    "Kontaktujte nás pro nezávaznou poptávku. Pošlete výkres nebo popište co potřebujete a ozveme se s nabídkou.",
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
