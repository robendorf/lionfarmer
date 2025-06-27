
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowSeedWorks from "@/components/HowSeedWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Comparisons from "@/components/Comparisons";
import AboutSeedSection from "@/components/AboutSeedSection";
import AppPromotion from "@/components/AppPromotion";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-yellow-50 to-green-50">
      <Navigation />
      <HeroSection />
      <HowSeedWorks />
      <Features />
      <Testimonials />
      <Comparisons />
      <AboutSeedSection />
      <AppPromotion />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
