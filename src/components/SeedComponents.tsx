
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Users, Target } from "lucide-react";

const SeedComponents = () => {
  return (
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
  );
};

export default SeedComponents;
