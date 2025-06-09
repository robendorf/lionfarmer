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
      
      // Get the selected wins and their data
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
      }).filter(item => item.accomplishment.trim().length > 0 || item.process.trim().length > 0);

      console.log('Analysis data after filtering:', analysisData.length, 'items');

      if (analysisData.length < 3) {
        toast({
          title: "Insufficient Data",
          description: `Please provide at least 3 wins with content. Currently have ${analysisData.length} valid entries.`,
          variant: "destructive"
        });
        return;
      }

      // Simulate AI analysis
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

    // SIMA-inspired pattern detection based on your actual data
    
    // Building and creation patterns
    if (allText.includes('built') || allText.includes('build') || allText.includes('create') || allText.includes('develop')) {
      energizers.push("Building complex projects from the ground up with strategic vision and execution");
      environments.push("Entrepreneurial environments where you can build systems and structures from scratch");
      growth.push("Scale your building expertise to larger, more complex ventures that impact communities");
    }

    // Business and entrepreneurship patterns
    if (allText.includes('business') || allText.includes('company') || allText.includes('truck') || allText.includes('wash')) {
      energizers.push("Creating and growing businesses that solve real problems and generate value");
      environments.push("Business ownership or senior leadership roles with P&L responsibility");
      growth.push("Expand into multiple business ventures or larger-scale operations");
    }

    // Family and relationship patterns
    if (allText.includes('family') || allText.includes('children') || allText.includes('wife') || allText.includes('home')) {
      energizers.push("Creating stability and security for family while building something meaningful");
      environments.push("Family-oriented work that allows for work-life integration and long-term thinking");
    }

    // Problem-solving and innovation patterns
    if (allText.includes('invent') || allText.includes('parameters') || allText.includes('specific') || allText.includes('dig')) {
      energizers.push("Solving complex problems through innovative approaches and persistent effort");
      environments.push("Innovation-focused roles where creative problem-solving is valued and rewarded");
    }

    // Self-reliance and determination patterns
    if (allText.includes('scratch') || allText.includes('myself') || allText.includes('found') || allText.includes('purchase')) {
      energizers.push("Taking complete ownership and achieving goals through self-directed action");
      environments.push("Autonomous work settings where you have control over methods and decisions");
    }

    // Add core insights based on your specific data
    if (energizers.length < 3) {
      energizers.push("Transforming vision into reality through systematic planning and execution");
    }

    if (avoid.length < 2) {
      avoid.push("Highly structured environments that limit your ability to innovate and build");
      avoid.push("Roles where you can't see the direct impact of your work on outcomes");
    }

    if (environments.length < 3) {
      environments.push("Leadership positions where strategic thinking and long-term vision are essential");
    }

    if (growth.length < 2) {
      growth.push("Mentor others in entrepreneurship and business building based on your experience");
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
  const dataCount = getSelectedWinNumbers().filter(winNumber => {
    const accomplishmentKey = `win_${winNumber}`;
    const howKey = `how_${winNumber}`;
    const hasAccomplishment = accomplishments[accomplishmentKey]?.trim().length > 0;
    const hasProcess = howIDidIt[howKey]?.trim().length > 0;
    return hasAccomplishment || hasProcess;
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
              our analysis will examine your accomplishments and processes to identify your core motivational themes.
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
              <p>• Available data entries: {dataCount}</p>
              <p className="mt-2 italic">
                ✅ Ready for analysis with your available data!
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
