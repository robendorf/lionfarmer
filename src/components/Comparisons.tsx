
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const Comparisons = () => {
  const comparisons = [
    {
      aspect: "Basis of Analysis",
      seed: "Real-life stories and biblical principles",
      others: "Hypothetical questions and scenarios"
    },
    {
      aspect: "Focus",
      seed: "God-given motivations and calling",
      others: "Personality traits or broad categories"
    },
    {
      aspect: "Personalization",
      seed: "Highly individualized based on your unique story",
      others: "Generic categories with broad descriptions"
    },
    {
      aspect: "Practical Application",
      seed: "Specific insights for career, relationships, and ministry",
      others: "General advice that may or may not fit"
    },
    {
      aspect: "Foundation",
      seed: "Rooted in biblical wisdom and God's design",
      others: "Based on psychological theories or secular frameworks"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-700 mb-6">
            SEED vs. Other Assessments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how SEED's biblical approach differs from typical personality tests and secular assessments.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-yellow-50">
            <CardTitle className="text-2xl text-center text-green-700">Comparison Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-green-200">
                    <th className="text-left p-4 font-semibold text-gray-700">Aspect</th>
                    <th className="text-center p-4 font-semibold text-green-700 bg-green-50">SEED Profile</th>
                    <th className="text-center p-4 font-semibold text-gray-700">Other Assessments</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-800">{comparison.aspect}</td>
                      <td className="p-4 text-center bg-green-50">
                        <div className="flex items-center justify-center mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        </div>
                        <span className="text-green-700">{comparison.seed}</span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <XCircle className="h-5 w-5 text-gray-400 mr-2" />
                        </div>
                        <span className="text-gray-600">{comparison.others}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Comparisons;
