
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Lightbulb } from "lucide-react";

const HowSeedWorks = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-cream to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-700 mb-6">
            How SEED Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your God-given design through a simple three-step process rooted in biblical wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-white">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">1. Tell Your Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Share your real-life experiences, challenges, and moments when you felt most alive. 
              God has woven His purposes into your story.
            </p>
          </Card>

          <Card className="text-center p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl bg-white">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-700">2. Find the Patterns</h3>
            <p className="text-gray-700 leading-relaxed">
              Our biblical framework reveals the consistent themes and motivations that God has placed within you—
              your unique fingerprint of strengths.
            </p>
          </Card>

          <Card className="text-center p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl bg-white">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-700">3. Apply What You Learn</h3>
            <p className="text-gray-700 leading-relaxed">
              Receive practical insights for how to steward your gifts in relationships, career, and ministry. 
              Live in alignment with how God designed you.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://replit.com/@your-username/seed-profile', '_blank')}
          >
            Discover What Drives Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowSeedWorks;
