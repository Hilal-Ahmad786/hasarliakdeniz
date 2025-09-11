import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import StatBar from "@/components/home/StatBar";
import ProcessSteps from "@/components/home/ProcessSteps";
import ServiceAreas from "@/components/home/ServiceAreas";
import Gallery from "@/components/home/Gallery";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FAQ from "@/components/home/FAQ";
import ContactStrip from "@/components/home/ContactStrip";
import StickyCallBar from "@/components/home/StickyCallBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBar />
      <TrustBadges />
      <ProcessSteps />
      <Gallery />
      <TestimonialsCarousel />
      <ServiceAreas />
      <ContactStrip />
      <FAQ />
      <StickyCallBar />
    </>
  );
}
