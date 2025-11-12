import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import IntroducingBiztali from "@/components/IntroducingBiztali";
import Features from "@/components/Features";
import TheDifference from "@/components/TheDifference";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Challenge />
      <IntroducingBiztali />
      <Features />
      <TheDifference />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
