
import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-600 via-emerald-600 to-yellow-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-12 w-12 text-yellow-300 animate-spin" />
        </div>
        <h2 className="text-5xl font-bold mb-6">
          Your SEED Journey Starts Now! 🚀
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands who have discovered their God-given design through the SEED Profile.
        </p>
        <a href="https://seed-community-lionfarmer.replit.app/" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-4 bg-white text-green-700 hover:bg-yellow-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Heart className="mr-2 h-5 w-5" />
            Take the Assessment Now
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
