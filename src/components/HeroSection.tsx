
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 blur-3xl"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-16 w-16 text-green-600 animate-pulse" />
        </div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-green-700 via-yellow-600 to-emerald-600 bg-clip-text text-transparent mb-6">
          Discover Your God-Given Strengths
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
          🌟 Take the SEED Profile assessment and unlock your potential for Kingdom impact through biblical wisdom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://replit.com/@your-username/seed-profile', '_blank')}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Take SEED Profile Now
          </Button>
          <Link to="/about-seed">
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-green-600 text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
