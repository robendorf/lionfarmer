import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Zap, Target, Leaf, Crown, Star, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PremiumSEEDProfile from './PremiumSEEDProfile';

interface AIAnalysisProps {
  accomplishments: {
    [key: string]: string;
  };
  selectedWins: {
    [key: string]: boolean;
  };
  howIDidIt: {
    [key: string]: string;
  };
}

interface AnalysisResult {
  energizers: string[];
  avoid: string[];
  environments: string[];
  growth: string[];
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({
  accomplishments,
  selectedWins,
  howIDidIt
}) => {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(false); // This would come from auth/subscription
  const { toast } = useToast();

  const getSelectedWinNumbers = () => {
    return Object.keys(selectedWins).filter(key => selectedWins[key]).map(key => parseInt(key.replace('selected_win_', ''))).sort((a, b) => a - b);
  };

  const analyzePatterns = async () => {
    setIsAnalyzing(true);
    try {
      console.log('Starting AI analysis...');

      const selectedWinNumbers = getSelectedWinNumbers();
      console.log('Selected win numbers:', selectedWinNumbers);
      
      const analysisData = selectedWinNumbers.map(winNumber => {
        const howKey = `how_${winNumber}`;
        const process = howIDidIt[howKey] || '';
        console.log(`Win ${winNumber} - How I Did It:`, process.slice(0, 100));
        return {
          winNumber,
          process
        };
      }).filter(item => item.process.trim().length > 0);

      console.log('Analysis data after filtering (How I Did It only):', analysisData.length, 'items');
      
      if (analysisData.length < 3) {
        toast({
          title: "Insufficient Deep Dive Data",
          description: `Please provide at least 3 detailed "How I Did It" responses. Currently have ${analysisData.length} valid entries.`,
          variant: "destructive"
        });
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 3000));

      const simaAnalysis = generateSIMAAnalysis(analysisData);
      setAnalysis(simaAnalysis);
      
      toast({
        title: "SEED Profile Generated",
        description: "Your motivational pattern has been analyzed using SIMA methodology from your detailed processes!"
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

  const generateSIMAAnalysis = (data: Array<{ winNumber: number; process: string; }>): AnalysisResult => {
    console.log('Generating SIMA analysis for', data.length, 'How I Did It responses');

    const allProcesses = data.map(d => d.process).join(' ').toLowerCase();
    console.log('Analysis text length (How I Did It only):', allProcesses.length);
    
    const energizers = [];
    const avoid = [];
    const environments = [];
    const growth = [];

    if (allProcesses.includes('built') || allProcesses.includes('build') || allProcesses.includes('create') || allProcesses.includes('develop')) {
      energizers.push("Building complex projects from the ground up with strategic vision and execution");
      environments.push("Entrepreneurial environments where you can build systems and structures from scratch");
      growth.push("Scale your building expertise to larger, more complex ventures that impact communities");
    }

    if (allProcesses.includes('business') || allProcesses.includes('company') || allProcesses.includes('truck') || allProcesses.includes('wash')) {
      energizers.push("Creating and growing businesses that solve real problems and generate value");
      environments.push("Business ownership or senior leadership roles with P&L responsibility");
      growth.push("Expand into multiple business ventures or larger-scale operations");
    }

    if (allProcesses.includes('research') || allProcesses.includes('plan') || allProcesses.includes('analyze') || allProcesses.includes('step')) {
      energizers.push("Solving complex problems through systematic research and methodical planning");
      environments.push("Strategic roles where thorough analysis and planning are valued and rewarded");
    }

    if (allProcesses.includes('invent') || allProcesses.includes('design') || allProcesses.includes('creative') || allProcesses.includes('unique')) {
      energizers.push("Developing innovative solutions and creative approaches to challenges");
      environments.push("Innovation-focused roles where creative problem-solving drives results");
    }

    if (allProcesses.includes('myself') || allProcesses.includes('own') || allProcesses.includes('independent') || allProcesses.includes('control')) {
      energizers.push("Taking complete ownership and achieving goals through self-directed action");
      environments.push("Autonomous work settings where you have control over methods and decisions");
    }

    if (allProcesses.includes('learn') || allProcesses.includes('study') || allProcesses.includes('practice') || allProcesses.includes('master')) {
      energizers.push("Continuous learning and skill development to achieve mastery");
      environments.push("Growth-oriented environments that support learning and skill development");
    }

    if (allProcesses.includes('persisted') || allProcesses.includes('continued') || allProcesses.includes('despite') || allProcesses.includes('overcome')) {
      energizers.push("Persisting through challenges with determination and resilience");
      environments.push("Challenging environments where persistence and resilience are essential");
    }

    if (energizers.length < 3) {
      energizers.push("Transforming vision into reality through systematic execution and follow-through");
    }
    if (avoid.length < 2) {
      avoid.push("Highly structured environments that limit your ability to innovate and execute your approach");
      avoid.push("Roles where you can't see the direct impact of your methodology on outcomes");
    }
    if (environments.length < 3) {
      environments.push("Leadership positions where strategic thinking and execution methodology are essential");
    }
    if (growth.length < 2) {
      growth.push("Mentor others in systematic approaches and execution methodologies based on your experience");
    }

    const result = {
      energizers: energizers.slice(0, 3),
      avoid: avoid.slice(0, 2),
      environments: environments.slice(0, 3),
      growth: growth.slice(0, 2)
    };
    
    console.log('Generated SIMA analysis from How I Did It data:', result);
    return result;
  };

  const handlePremiumUpgrade = () => {
    if (isPremiumUser) {
      setShowPremium(true);
    } else {
      toast({
        title: "Premium Feature",
        description: "Upgrade to Premium to access the comprehensive 5+ page SEED Profile with detailed insights!",
        variant: "default"
      });
    }
  };

  const selectedCount = getSelectedWinNumbers().length;
  const deepDiveCount = getSelectedWinNumbers().filter(winNumber => {
    const howKey = `how_${winNumber}`;
    const hasDeepDive = howIDidIt[howKey]?.trim().length > 0;
    return hasDeepDive;
  }).length;

  const isReadyForAnalysis = selectedCount >= 6;

  if (!isReadyForAnalysis) {
    return null;
  }

  if (showPremium && analysis) {
    return <PremiumSEEDProfile 
      analysis={analysis}
      deepDiveData={getSelectedWinNumbers().map(winNumber => ({
        winNumber,
        process: howIDidIt[`how_${winNumber}`] || ''
      })).filter(item => item.process.trim().length > 0)}
      onBack={() => setShowPremium(false)}
    />;
  }

  return <Card className="border-2 border-purple-200 bg-purple-50/50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-purple-600" />
          <CardTitle className="text-purple-800">Free SEED Profile</CardTitle>
        </div>
        <Button 
          onClick={handlePremiumUpgrade}
          variant="outline"
          className="border-amber-300 text-amber-700 hover:bg-amber-50"
        >
          <Crown className="h-4 w-4 mr-2" />
          Upgrade to Premium
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      {!analysis ? (
        <div className="space-y-4">
          <p className="text-purple-700">
            Ready to discover your unique motivational pattern! Using SIMA (System for Identifying Motivated Abilities) methodology, 
            our analysis will examine your detailed "How I Did It" processes to identify your core motivational themes.
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
            <p>• Deep dive responses completed: {deepDiveCount}</p>
            <p className="mt-2 italic">
              {deepDiveCount >= 3 ? '✅ Ready for analysis with your detailed process data!' : `⏳ Need ${3 - deepDiveCount} more detailed "How I Did It" responses for analysis`}
            </p>
          </div>
          <Button onClick={analyzePatterns} disabled={isAnalyzing || deepDiveCount < 3} className="w-full">
            {isAnalyzing ? 'Analyzing Your Pattern...' : 'Generate My SEED Profile'}
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              🎯 Your SEED Profile (Free Version)
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
              <div className="flex items-center gap-2 text-amber-800 mb-2">
                <Crown className="h-4 w-4" />
                <span className="font-semibold">Premium Available!</span>
              </div>
              <p className="text-sm text-amber-700">
                Upgrade to get a comprehensive 5+ page analysis with expanded insights, career recommendations, 
                relationship patterns, decision-making styles, and personalized action plans.
              </p>
              <Button 
                onClick={handlePremiumUpgrade} 
                className="mt-2 bg-amber-600 hover:bg-amber-700"
                size="sm"
              >
                <Crown className="h-4 w-4 mr-1" />
                Unlock Premium Analysis
              </Button>
            </div>
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
                These insights were generated based on your detailed "How I Did It" processes. 
                Your SEED Profile reflects your natural approach to achieving results and what sustains your energy over time.
              </p>
            </div>
          </div>
        </div>
      )}
    </CardContent>
  </Card>;
};

export default AIAnalysis;
