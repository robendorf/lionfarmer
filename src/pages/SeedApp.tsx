
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const SeedApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-yellow-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent mb-4">
            SEED Profile Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover your God-given design through our comprehensive assessment. This will take approximately 15-20 minutes to complete.
          </p>
        </div>

        {/* Main embed section */}
        <Card className="border-2 border-green-200 bg-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-700">
              🌱 Complete Your SEED Assessment
            </CardTitle>
            <CardDescription className="text-lg">
              Answer thoughtful questions about your life experiences and discover your motivational blueprint
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Embed container - ready for iframe */}
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center min-h-[600px] flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                SEED Profile App Embed Location
              </h3>
              <p className="text-gray-600 mb-6 max-w-md">
                This is where the SEED Profile assessment will be embedded. The iframe or embed code can be placed here.
              </p>
              <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm text-gray-500 mb-6">
                {`<iframe 
  src="[SEED_APP_URL]" 
  width="100%" 
  height="600" 
  frameborder="0">
</iframe>`}
              </div>
              <Button 
                variant="outline"
                onClick={() => window.open('https://replit.com/@your-username/seed-profile', '_blank')}
                className="border-green-600 text-green-700 hover:bg-green-50"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in New Tab (Temporary)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8 bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-green-700 mb-3">
              What to Expect:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Questions about your life experiences and meaningful moments
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Reflections on times when you felt most energized and fulfilled
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Insights into your natural strengths and motivational patterns
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                A personalized report revealing your unique SEED profile
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SeedApp;
