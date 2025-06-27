
import { Card, CardContent } from "@/components/ui/card";
import { Heart, User, Target, Map, Compass } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-700 mb-6">
            Why SEED is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike secular assessments, SEED recognizes that your identity and purpose are rooted in God's design for your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-green-50 to-white">
            <CardContent className="text-center p-4">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-green-700">Grounded in Your Real-Life Stories</h3>
              <p className="text-gray-700 leading-relaxed">
                Instead of hypothetical scenarios, we analyze the actual moments where God has shown up in your life and revealed your strengths.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-yellow-50 to-white">
            <CardContent className="text-center p-4">
              <User className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-yellow-700">Practical and Personalized</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive specific guidance for how to steward your unique gifts in marriage, parenting, work, and ministry.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="text-center p-4">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-blue-700">Beyond Skills—Into Motivation</h3>
              <p className="text-gray-700 leading-relaxed">
                Discover not just what you're good at, but what God has designed you to be passionate about and energized by.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="text-center p-4">
              <Map className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-700">Contextual Clarity</h3>
              <p className="text-gray-700 leading-relaxed">
                Understand how your strengths show up differently in various environments and relationships, guided by biblical wisdom.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-emerald-50 to-white">
            <CardContent className="text-center p-4">
              <Compass className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-emerald-700">A Tool for Life Transitions</h3>
              <p className="text-gray-700 leading-relaxed">
                Whether you're changing careers, entering a new season, or seeking God's direction, SEED provides clarity for the journey ahead.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
