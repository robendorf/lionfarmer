
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen } from "lucide-react";

const AboutSeedSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-cream to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-700 mb-6">
            About SEED
          </h2>
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-yellow-600" />
          </div>
        </div>

        <Card className="border-2 border-green-200 bg-white">
          <CardContent className="p-8">
            <div className="flex items-start mb-6">
              <BookOpen className="h-8 w-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  SEED was created to help believers discover their unique pattern of God-given talents, interests, and inner drives. 
                  Our mission is to help individuals live in alignment with what truly energizes them, make confident life decisions rooted in faith, 
                  and thrive in both work and relationships according to God's design.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We believe that God has woven His purposes into every person's story. Through the experiences that have shaped you, 
                  the challenges you've overcome, and the moments when you've felt most alive, He reveals the unique way He's designed you to serve and flourish.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  SEED helps you see these patterns through the lens of Scripture, giving you clarity not just about what you can do, 
                  but about who God has called you to be and how He wants to use your life for His glory and the good of others.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-lg italic text-gray-700 mb-4">
                "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."
              </p>
              <p className="text-right text-green-600 font-semibold">— Ephesians 2:10</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSeedSection;
