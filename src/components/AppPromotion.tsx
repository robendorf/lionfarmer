
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Heart, ExternalLink } from "lucide-react";

const AppPromotion = () => {
  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent mb-6">
            🚀 Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The SEED Profile app is live and ready to help you discover your unique design in God's kingdom.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 border-green-200 bg-gradient-to-br from-green-50 to-yellow-50 hover:shadow-2xl transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-green-700 mb-4">
              🌱 Access the SEED Profile App
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Complete your assessment in just 15-20 minutes and receive personalized insights
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-700 mb-2">Complete Assessment</h3>
                  <p className="text-gray-600 text-sm">Answer thoughtful questions about your strengths and experiences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-yellow-700 mb-2">Get Your Results</h3>
                  <p className="text-gray-600 text-sm">Receive personalized insights about your SEED profile</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-emerald-700 mb-2">Apply Your Gifts</h3>
                  <p className="text-gray-600 text-sm">Use your results to serve God and others more effectively</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://replit.com/@your-username/seed-profile', '_blank')}
            >
              <ExternalLink className="mr-3 h-6 w-6" />
              Launch SEED Profile App
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Opens in a new tab • Hosted on Replit • Free to use
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppPromotion;
