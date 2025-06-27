
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Users, BookOpen, Heart, Target, Sparkles, Zap, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              🌱 SEED Profile
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-green-700 font-semibold hover:text-yellow-600 transition-colors">Home</Link>
              <Link to="/about-seed" className="text-gray-700 hover:text-green-700 transition-colors">About SEED</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <Zap className="mr-2 h-5 w-5" />
              Take SEED Profile Now
            </Button>
            <Link to="/about-seed">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-green-600 text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
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

      {/* SEED Components */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">
              🌱 The SEED Profile Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how God has uniquely designed you through these four key areas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50">
              <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-green-700">💪 Strengths</h3>
              <p className="text-gray-700">Your natural God-given abilities and talents that energize you</p>
            </Card>

            <Card className="text-center p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-yellow-50 to-amber-50">
              <Heart className="h-16 w-16 text-yellow-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-yellow-700">📖 Experiences</h3>
              <p className="text-gray-700">Life lessons and trials that have shaped your perspective</p>
            </Card>

            <Card className="text-center p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-blue-700">🎓 Education</h3>
              <p className="text-gray-700">Knowledge, skills, and training you've acquired</p>
            </Card>

            <Card className="text-center p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50">
              <Target className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-purple-700">🌟 Dreams</h3>
              <p className="text-gray-700">Your God-inspired vision, passions, and calling</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent mb-12">
            💬 What People Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300">
              <CardContent>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  "The SEED Profile helped me understand my unique gifts and how to use them for God's glory. It's been a game-changer in my ministry! 🙌"
                </p>
                <div className="text-right font-bold text-green-700">- Sarah M., Pastor</div>
                <div className="text-right text-yellow-500">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-xl transition-all duration-300">
              <CardContent>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  "Finally, an assessment that considers my faith journey! The insights were spot-on and helped me find my place in ministry. ✨"
                </p>
                <div className="text-right font-bold text-yellow-700">- Michael R., Youth Leader</div>
                <div className="text-right text-yellow-500">⭐⭐⭐⭐⭐</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-4 bg-white text-green-700 hover:bg-yellow-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://replit.com/@your-username/seed-profile', '_blank')}
          >
            <Heart className="mr-2 h-5 w-5" />
            Take the Assessment Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-green-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent">
              🌱 SEED Profile
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discovering your God-given strengths through biblical wisdom and practical application.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 SEED Profile. All rights reserved. Built with faith and purpose. 💚
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
