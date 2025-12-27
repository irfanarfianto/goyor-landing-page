import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Collection from "@/components/Collection";
import Testimonials from "@/components/Testimonials";
import Artisans from "@/components/Artisans";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Collection />
      <Testimonials />
      <Artisans />
      <Contact />
      <FloatingWhatsApp />
    </main>
  );
}
