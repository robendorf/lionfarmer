
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Zap, Target, Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AIAnalysisProps {
  accomplishments: { [key: string]: string };
  selectedWins: { [key: string]: boolean };
  howIDidIt: { [key: string]: string };
}

interface AnalysisResult {
  energizers: string[];
  avoid: string[];
  environments: string[];
  growth: string[];
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({ accomplishments, selectedWins, howIDidIt }) => {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const getSelectedWinNumbers = () => {
    return Object.keys(selectedWins)
      .filter(key => selectedWins[key])
      .map(key => parseInt(key.replace('selected_win_', '')))
      .sort((a, b) => a - b);
  };

  const analyzePatterns = async () => {
    setIsAnalyzing(true);
    
    try {
      // Get the selected wins and their "how I did it" descriptions
      const selectedWinNumbers = getSelectedWinNumbers();
      const analysisData = selectedWinNumbers.map(winNumber => {
        const accomplishmentKey = `win_${winNumber}`;
        const howKey = `how_${winNumber}`;
        return {
          accomplishment: accomplishments[accomplishmentKey] || '',
          process: howIDidIt[howKey] || ''
        };
      }).filter(item => item.accomplishment && item.process);

      if (analysisData.length < 3) {
        toast({
          title: "Insufficient Data",
          description: "Please complete at least 3 'How I Did It' sections for meaningful analysis.",
          variant: "destructive"
        });
        return;
      }

      // Simulate AI analysis (in a real implementation, this would call an AI service)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Generate analysis based on patterns (this is a simplified version)
      const mockAnalysis = generateMockAnalysis(analysisData);
      setAnalysis(mockAnalysis);

      toast({
        title: "Analysis Complete",
        description: "Your motivational pattern blueprint has been generated!",
      });

    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your patterns. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateMockAnalysis = (data: Array<{accomplishment: string, process: string}>): AnalysisResult => {
    // This is a simplified pattern recognition - in reality, this would use AI
    const allText = data.map(d => d.process).join(' ').toLowerCase();
    
    const energizers = [];
    const avoid = [];
    const environments = [];
    const growth = [];

    // Pattern detection logic (simplified)
    if (allText.includes('team') || allText.includes('collaborate') || allText.includes('others')) {
      energizers.push("Collaborative work where you can leverage team dynamics and collective problem-solving");
      environments.push("Team-oriented environments with regular collaboration and shared goals");
    }

    if (allText.includes('problem') || allText.includes('solve') || allText.includes('challenge')) {
      energizers.push("Tackling complex problems that require analytical thinking and creative solutions");
      growth.push("Seek increasingly complex challenges that stretch your problem-solving abilities");
    }

    if (allText.includes('learn') || allText.includes('research') || allText.includes('study')) {
      energizers.push("Continuous learning and knowledge acquisition in areas that fascinate you");
      environments.push("Learning-rich environments with access to new information and skill development");
    }

    if (allText.includes('create') || allText.includes('build') || allText.includes('design')) {
      energizers.push("Creating something new from concept to completion");
      environments.push("Innovation-friendly spaces where creativity and experimentation are valued");
    }

    if (allText.includes('help') || allText.includes('support') || allText.includes('mentor')) {
      energizers.push("Making a positive impact on others and seeing them succeed");
      growth.push("Develop deeper mentoring and coaching skills to amplify your impact");
    }

    // Add default insights if not enough were generated
    if (energizers.length < 3) {
      energizers.push("Taking ownership of projects and seeing them through to completion");
    }
    if (avoid.length < 2) {
      avoid.push("Highly repetitive tasks without room for improvement or creativity");
      avoid.push("Environments where your input and ideas are not valued or heard");
    }
    if (environments.length < 3) {
      environments.push("Autonomous work settings where you can control your approach and methods");
    }
    if (growth.length < 2) {
      growth.push("Expand your influence by taking on leadership roles in areas you're passionate about");
    }

    return {
      energizers: energizers.slice(0, 3),
      avoid: avoid.slice(0, 2),
      environments: environments.slice(0, 3),
      growth: growth.slice(0, 2)
    };
  };

  const selectedCount = getSelectedWinNumbers().length;
  const completedHowCount = getSelectedWinNumbers().filter(winNumber => {
    const howKey = `how_${winNumber}`;
    return howIDidIt[howKey]?.trim().length > 50; // At least 50 characters
  }).length;

  const isReadyForAnalysis = selectedCount >= 6 && completedHowCount >= 3;

  if (!isReadyForAnalysis) {
    return null;
  }

  return (
    <Card className="border-2 border-purple-200 bg-purple-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-purple-600" />
          AI Pattern Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!analysis ? (
          <div className="space-y-4">
            <p className="text-purple-700">
              Ready to discover your unique motivational pattern! Our AI will analyze your accomplishments 
              and the detailed "How I Did It" descriptions to identify what energizes you most.
            </p>
            <div className="text-sm text-purple-600">
              <p>Analysis will include:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>What energizes and motivates you</li>
                <li>Environments where you thrive</li>
                <li>What to avoid for optimal performance</li>
                <li>Growth opportunities aligned with your strengths</li>
              </ul>
            </div>
            <Button 
              onClick={analyzePatterns} 
              disabled={isAnalyzing}
              className="w-full"
            >
              {isAnalyzing ? 'Analyzing Your Pattern...' : 'Generate My Motivational Blueprint'}
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-2">
                🎯 Your Motivational Pattern Blueprint
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-800 mb-3">
                  <Zap className="h-5 w-5" />
                  🧠 What Energizes You
                </h3>
                <ul className="space-y-2">
                  {analysis.energizers.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-purple-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-purple-200" />

              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  🚫 What to Avoid
                </h3>
                <ul className="space-y-2">
                  {analysis.avoid.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-purple-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-purple-200" />

              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-800 mb-3">
                  <Leaf className="h-5 w-5" />
                  🏞️ Ideal Work & Contribution Environments
                </h3>
                <ul className="space-y-2">
                  {analysis.environments.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-purple-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-purple-200" />

              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-800 mb-3">
                  <Lightbulb className="h-5 w-5" />
                  🌱 Growth Opportunities
                </h3>
                <ul className="space-y-2">
                  {analysis.growth.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-purple-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <p className="text-sm text-purple-700 italic text-center">
                  These insights were generated based on your unique stories of impact. 
                  Your pattern reflects where you do your best work and what sustains your energy over time.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIAnalysis;
