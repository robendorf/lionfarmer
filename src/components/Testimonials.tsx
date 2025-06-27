
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-cream to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-700 mb-12">
          What People Are Saying
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 border-2 border-green-200 bg-white hover:shadow-xl transition-all duration-300">
            <CardContent>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "SEED helped me connect the dots between the times I felt unstoppable and the times I burned out. 
                Now I know how to choose projects—and even relationships—that fit how God designed me."
              </p>
              <div className="text-right font-bold text-green-700">— Anna K., Nonprofit Director</div>
              <div className="text-right text-yellow-500 mt-1">⭐⭐⭐⭐⭐</div>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-yellow-200 bg-white hover:shadow-xl transition-all duration-300">
            <CardContent>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "I've taken all kinds of assessments. SEED was the first one that actually explained why certain 
                environments drain me and others make me thrive, all through a biblical lens."
              </p>
              <div className="text-right font-bold text-yellow-700">— Carlos M., IT Manager</div>
              <div className="text-right text-yellow-500 mt-1">⭐⭐⭐⭐⭐</div>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-blue-200 bg-white hover:shadow-xl transition-all duration-300">
            <CardContent>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "SEED gave me language to describe what I'm good at and why I love certain challenges. 
                It's changed how I talk about myself in interviews and how I see my calling."
              </p>
              <div className="text-right font-bold text-blue-700">— Rachel S., University Student</div>
              <div className="text-right text-yellow-500 mt-1">⭐⭐⭐⭐⭐</div>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 border-purple-200 bg-white hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "As a pastor, I've seen how SEED helps people discover their God-given design. 
                It's become an essential tool in our discipleship and leadership development."
              </p>
              <div className="text-right font-bold text-purple-700">— Pastor David L., Church Leader</div>
              <div className="text-right text-yellow-500 mt-1">⭐⭐⭐⭐⭐</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
