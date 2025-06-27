
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
