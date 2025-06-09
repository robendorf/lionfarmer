
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
      console.log('Starting AI analysis...');
      
      // Get the selected wins and their "how I did it" descriptions
      const selectedWinNumbers = getSelectedWinNumbers();
      console.log('Selected win numbers:', selectedWinNumbers);
      
      const analysisData = selectedWinNumbers.map(winNumber => {
        const accomplishmentKey = `win_${winNumber}`;
        const howKey = `how_${winNumber}`;
        const accomplishment = accomplishments[accomplishmentKey] || '';
        const process = howIDidIt[howKey] || '';
        
        console.log(`Win ${winNumber}:`, { accomplishment: accomplishment.slice(0, 50), process: process.slice(0, 50) });
        
        return {
          winNumber,
          accomplishment,
          process
        };
      }).filter(item => item.accomplishment.trim().length > 0);

      console.log('Analysis data after filtering:', analysisData.length, 'items');

      if (analysisData.length < 6) {
        toast({
          title: "Insufficient Data",
          description: `Please select at least 6 accomplishments with content. Currently have ${analysisData.length} valid accomplishments.`,
          variant: "destructive"
        });
        return;
      }

      // Count how many have detailed "How I Did It" sections
      const detailedAnalysis = analysisData.filter(item => item.process.trim().length > 20);
      console.log('Items with detailed How I Did It:', detailedAnalysis.length);

      if (detailedAnalysis.length < 3) {
        toast({
          title: "Need More Detail",
          description: `Please complete the "How I Did It" sections for at least 3 of your selected wins. Currently have ${detailedAnalysis.length} detailed descriptions.`,
          variant: "destructive"
        });
        return;
      }

      // Simulate AI analysis (in a real implementation, this would call an AI service)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Generate SIMA-inspired analysis
      const simaAnalysis = generateSIMAAnalysis(analysisData);
      setAnalysis(simaAnalysis);

      toast({
        title: "SEED Profile Generated",
        description: "Your motivational pattern has been analyzed using SIMA methodology!",
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

  const generateSIMAAnalysis = (data: Array<{winNumber: number, accomplishment: string, process: string}>): AnalysisResult => {
    console.log('Generating SIMA analysis for', data.length, 'accomplishments');
    
    // Combine all text for pattern analysis
    const allAccomplishments = data.map(d => d.accomplishment).join(' ').toLowerCase();
    const allProcesses = data.map(d => d.process).join(' ').toLowerCase();
    const allText = (allAccomplishments + ' ' + allProcesses).toLowerCase();
    
    console.log('Analysis text length:', allText.length);

    const energizers = [];
    const avoid = [];
    const environments = [];
    const growth = [];

    // SIMA-inspired pattern detection - analyzing HOW they achieved success
    
    // Leadership and influence patterns
    if (allText.includes('lead') || allText.includes('manage') || allText.includes('direct') || allText.includes('organize')) {
      energizers.push("Taking leadership roles and guiding others toward shared goals");
      environments.push("Leadership positions where you can influence direction and outcomes");
      growth.push("Seek opportunities to lead larger teams or more complex initiatives");
    }

    // Collaboration and teamwork patterns
    if (allText.includes('team') || allText.includes('collaborate') || allText.includes('together') || allText.includes('group')) {
      energizers.push("Collaborative work where you leverage collective intelligence and team synergy");
      environments.push("Team-oriented environments with strong collaboration and shared accountability");
    }

    // Problem-solving and analytical patterns
    if (allText.includes('problem') || allText.includes('solve') || allText.includes('analyze') || allText.includes('figure') || allText.includes('challenge')) {
      energizers.push("Tackling complex problems that require deep analysis and creative solutions");
      environments.push("Intellectually stimulating environments with challenging problems to solve");
      growth.push("Take on increasingly complex analytical challenges that stretch your capabilities");
    }

    // Learning and development patterns
    if (allText.includes('learn') || allText.includes('study') || allText.includes('research') || allText.includes('understand')) {
      energizers.push("Continuous learning and mastering new knowledge or skills");
      environments.push("Learning-rich environments with access to new information and development opportunities");
    }

    // Creation and innovation patterns
    if (allText.includes('create') || allText.includes('build') || allText.includes('design') || allText.includes('develop') || allText.includes('make')) {
      energizers.push("Creating something meaningful from concept to completion");
      environments.push("Innovation-friendly spaces where creativity and experimentation are valued");
      growth.push("Expand your creative influence by building solutions that impact more people");
    }

    // Helping and mentoring patterns
    if (allText.includes('help') || allText.includes('support') || allText.includes('teach') || allText.includes('mentor') || allText.includes('guide')) {
      energizers.push("Making a positive impact by helping others succeed and grow");
      environments.push("Mentoring or coaching roles where you can develop others");
    }

    // Communication and presentation patterns
    if (allText.includes('present') || allText.includes('speak') || allText.includes('communicate') || allText.includes('explain')) {
      energizers.push("Communicating ideas effectively and influencing through clear expression");
      environments.push("Roles requiring strong communication and presentation skills");
    }

    // Achievement and goal-oriented patterns
    if (allText.includes('achieve') || allText.includes('goal') || allText.includes('complete') || allText.includes('finish') || allText.includes('accomplish')) {
      energizers.push("Setting and achieving meaningful goals with measurable outcomes");
      environments.push("Results-oriented environments with clear objectives and accountability");
    }

    // Add universal insights based on SIMA methodology
    if (energizers.length < 3) {
      energizers.push("Taking ownership of important projects and seeing them through to successful completion");
      energizers.push("Working in areas where your unique strengths can make a significant impact");
    }

    if (avoid.length < 2) {
      avoid.push("Highly repetitive tasks that don't utilize your core strengths and motivational patterns");
      avoid.push("Environments where your ideas and contributions are not valued or recognized");
    }

    if (environments.length < 3) {
      environments.push("Autonomous work settings where you can apply your strengths in your preferred way");
      environments.push("Purpose-driven organizations aligned with your values and interests");
    }

    if (growth.length < 2) {
      growth.push("Expand your influence by taking on roles that amplify your natural motivational themes");
      growth.push("Develop expertise in areas that energize you most and create opportunities to use them");
    }

    const result = {
      energizers: energizers.slice(0, 3),
      avoid: avoid.slice(0, 2),
      environments: environments.slice(0, 3),
      growth: growth.slice(0, 2)
    };

    console.log('Generated SIMA analysis:', result);
    return result;
  };

  const selectedCount = getSelectedWinNumbers().length;
  const completedHowCount = getSelectedWinNumbers().filter(winNumber => {
    const howKey = `how_${winNumber}`;
    return howIDidIt[howKey]?.trim().length > 20;
  }).length;

  const isReadyForAnalysis = selectedCount >= 6;

  if (!isReadyForAnalysis) {
    return null;
  }

  return (
    <Card className="border-2 border-purple-200 bg-purple-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-purple-600" />
          SIMA-Inspired Pattern Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!analysis ? (
          <div className="space-y-4">
            <p className="text-purple-700">
              Ready to discover your unique motivational pattern! Using SIMA (System for Identifying Motivated Abilities) methodology, 
              our analysis will examine your accomplishments and detailed processes to identify your core motivational themes.
            </p>
            <div className="text-sm text-purple-600">
              <p>Your SEED Profile will include:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>What energizes and motivates you most deeply</li>
                <li>Ideal environments where you thrive and excel</li>
                <li>What to avoid for optimal performance and satisfaction</li>
                <li>Growth opportunities aligned with your natural motivational patterns</li>
              </ul>
            </div>
            <div className="text-xs text-purple-600 bg-purple-100 p-3 rounded">
              <p><strong>Analysis Status:</strong></p>
              <p>• Selected wins: {selectedCount}/8</p>
              <p>• Detailed "How I Did It" sections: {completedHowCount}</p>
              <p className="mt-2 italic">
                {completedHowCount >= 3 
                  ? "✅ Ready for analysis!" 
                  : `⏳ Complete ${3 - completedHowCount} more "How I Did It" sections for optimal analysis`
                }
              </p>
            </div>
            <Button 
              onClick={analyzePatterns} 
              disabled={isAnalyzing}
              className="w-full"
            >
              {isAnalyzing ? 'Analyzing Your Pattern...' : 'Generate My SEED Profile'}
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-2">
                🎯 Your SEED Profile
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
                  Your SEED Profile reflects where you do your best work and what sustains your energy over time.
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
