
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Users, BookOpen, Heart, Target, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ✨ SEED Profile
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-purple-600 font-semibold hover:text-pink-600 transition-colors">Home</Link>
              <Link to="/about-seed" className="text-gray-700 hover:text-purple-600 transition-colors">About SEED</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-purple-600 animate-pulse" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
            Discover Your God-Given Strengths
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
            🌟 Unlock your potential for Kingdom impact through biblical narratives and practical application.
          </p>
          <Link to="/about-seed">
            <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Zap className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              ✨ Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the core components that make SEED Profile special and transformative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-purple-700">📖 Biblical Foundation</CardTitle>
                <CardDescription className="text-purple-600">Rooted in Scripture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Discover how the SEED Profile aligns with biblical principles and truths.
                </p>
                <CheckCircle className="h-8 w-8 text-green-500 animate-bounce" />
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-pink-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-pink-700">🎯 Personalized Insights</CardTitle>
                <CardDescription className="text-pink-600">Tailored to You</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Receive customized guidance based on your unique strengths and experiences.
                </p>
                <Star className="h-8 w-8 text-yellow-500 animate-pulse" />
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-blue-700">👥 Community Focus</CardTitle>
                <CardDescription className="text-blue-600">Serving Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Learn how your gifts can contribute to the body of Christ and your community.
                </p>
                <Users className="h-8 w-8 text-blue-500 animate-bounce" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEED Components */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              🌱 The SEED Profile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the four key components that make up your unique SEED.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50">
              <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-green-700">💪 Strengths</h3>
              <p className="text-gray-700">Your natural God-given abilities and talents</p>
            </Card>

            <Card className="text-center p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-red-50 to-pink-50">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-red-700">💭 Experiences</h3>
              <p className="text-gray-700">Life lessons that shape your perspective</p>
            </Card>

            <Card className="text-center p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-blue-700">🎓 Education</h3>
              <p className="text-gray-700">Knowledge and skills you've acquired</p>
            </Card>

            <Card className="text-center p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50">
              <Target className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-3 text-purple-700">🌟 Dreams</h3>
              <p className="text-gray-700">Your God-inspired vision and calling</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            💬 What People Are Saying
          </h2>

          <Card className="p-8 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-xl transition-all duration-300">
            <CardContent>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                "The SEED Profile helped me understand my unique gifts and how to use them for God's
                glory. It's been a game-changer in my ministry! 🙌"
              </p>
              <div className="text-right font-bold text-purple-600">- John Smith, Pastor ⭐⭐⭐⭐⭐</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-yellow-300 animate-spin" />
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Ready to Discover Your SEED? 🚀
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step in understanding how God has uniquely designed you for His purposes.
          </p>
          <Link to="/about-seed">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-yellow-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Heart className="mr-2 h-5 w-5" />
              Start Your SEED Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              ✨ SEED Profile
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discovering your God-given strengths through biblical wisdom and practical application.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 SEED Profile. All rights reserved. Built with faith and purpose. 💜
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
