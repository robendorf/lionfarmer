
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSeed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-green-600">
              SEED Profile
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link to="/about-seed" className="text-green-600 font-semibold">
                About SEED
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About SEED Profile
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover your God-given strengths through biblical narratives and unlock your potential for Kingdom impact.
          </p>
        </div>
      </section>

      {/* What is SEED Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-900">
                What Does SEED Stand For?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">S</div>
                  <h3 className="text-xl font-semibold mb-2">Strengths</h3>
                  <p className="text-gray-600">Your natural God-given abilities and talents</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">E</div>
                  <h3 className="text-xl font-semibold mb-2">Experiences</h3>
                  <p className="text-gray-600">Life lessons that shape your perspective</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">E</div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-600">Knowledge and skills you've acquired</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">D</div>
                  <h3 className="text-xl font-semibold mb-2">Dreams</h3>
                  <p className="text-gray-600">Your God-inspired vision and calling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Rooted in Scripture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The SEED Profile is built on the biblical truth that God has uniquely gifted each person for His purposes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
                <p className="text-lg italic text-gray-700 mb-4">
                  "For we are God's handiwork, created in Christ Jesus to do good works, 
                  which God prepared in advance for us to do."
                </p>
                <p className="text-right text-green-600 font-semibold">- Ephesians 2:10</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg italic text-gray-700 mb-4">
                  "Each of you should use whatever gift you have to serve others, 
                  as faithful stewards of God's grace in its various forms."
                </p>
                <p className="text-right text-blue-600 font-semibold">- 1 Peter 4:10</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Story-Based</h3>
                <p className="text-gray-600">Learn through biblical narratives and character studies</p>
              </Card>
              
              <Card className="text-center p-6">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Heart-Centered</h3>
                <p className="text-gray-600">Focus on God's design for your life and calling</p>
              </Card>
              
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Discover how your gifts serve the body of Christ</p>
              </Card>
              
              <Card className="text-center p-6">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Purpose</h3>
                <p className="text-gray-600">Align your strengths with God's mission</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The SEED Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Story Behind SEED
          </h2>
          
          <Card className="p-8">
            <CardContent>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The SEED Profile was born out of a desire to help believers discover their unique design 
                in God's kingdom. Unlike secular assessments that focus solely on personality or skills, 
                SEED recognizes that our identity and purpose are rooted in our relationship with Christ.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through years of ministry and coaching, we've seen how God uses our natural strengths, 
                life experiences, education, and dreams to shape us for His purposes. The SEED Profile 
                helps you see the beautiful tapestry God is weaving in your life.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                By understanding your SEED, you'll gain clarity on how God has uniquely equipped you 
                to serve Him and make a Kingdom impact in your family, church, workplace, and community.
              </p>
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
          <Link to="/">
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

export default AboutSeed;
