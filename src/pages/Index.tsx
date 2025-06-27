import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Users, BookOpen, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-green-600">SEED Profile</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-green-600 font-semibold">Home</Link>
              <Link to="/about-seed" className="text-gray-700 hover:text-green-600">About SEED</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Your God-Given Strengths
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Unlock your potential for Kingdom impact through biblical narratives and practical application.
          </p>
          <Link to="/about-seed">
            <Button size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the core components of the SEED Profile and how they can help you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Foundation</CardTitle>
                <CardDescription>Rooted in Scripture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Discover how the SEED Profile aligns with biblical principles and truths.
                </p>
                <CheckCircle className="h-6 w-6 text-green-600 mt-4" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personalized Insights</CardTitle>
                <CardDescription>Tailored to You</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Receive customized guidance based on your unique strengths and experiences.
                </p>
                <Star className="h-6 w-6 text-yellow-600 mt-4" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Focus</CardTitle>
                <CardDescription>Serving Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Learn how your gifts can contribute to the body of Christ and your community.
                </p>
                <Users className="h-6 w-6 text-blue-600 mt-4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEED Components */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The SEED Profile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the four key components that make up your unique SEED.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            <Card className="text-center p-6">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Strengths</h3>
              <p className="text-gray-600">Your natural God-given abilities and talents</p>
            </Card>

            <Card className="text-center p-6">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Experiences</h3>
              <p className="text-gray-600">Life lessons that shape your perspective</p>
            </Card>

            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Knowledge and skills you've acquired</p>
            </Card>

            <Card className="text-center p-6">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Dreams</h3>
              <p className="text-gray-600">Your God-inspired vision and calling</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What People Are Saying
          </h2>

          <Card className="p-8">
            <CardContent>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The SEED Profile helped me understand my unique gifts and how to use them for God's
                glory. It's been a game-changer in my ministry!"
              </p>
              <div className="text-right font-semibold">- John Smith, Pastor</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover Your SEED?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step in understanding how God has uniquely designed you for His purposes.
          </p>
          <Link to="/about-seed">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Your SEED Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">SEED Profile</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discovering your God-given strengths through biblical wisdom and practical application.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 SEED Profile. All rights reserved. Built with faith and purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
