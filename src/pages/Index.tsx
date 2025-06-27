
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AppPromotion from "@/components/AppPromotion";
import SeedComponents from "@/components/SeedComponents";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-emerald-50">
      <Navigation />
      <HeroSection />
      <AppPromotion />
      <SeedComponents />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
