import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"

interface SelectedWins {
  [key: string]: boolean;
}

interface HowIDidItData {
  [key: string]: string;
}

interface AIAnalysisProps {
  accomplishments: string[];
  onBack: () => void;
  selectedWins?: SelectedWins;
  howIDidIt?: HowIDidItData;
}

interface AnalysisResult {
  energizers: string[];
  avoid: string[];
  environments: string[];
  growth: string[];
}

interface DeepDiveData {
  winNumber: number;
  process: string;
}

const AIAnalysis = ({ accomplishments, onBack, selectedWins, howIDidIt }: AIAnalysisProps) => {
  const [analysis, setAnalysis] = useState<AnalysisResult>({
    energizers: [],
    avoid: [],
    environments: [],
    growth: [],
  });
  const [deepDiveData, setDeepDiveData] = useState<DeepDiveData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [deepDiveIndex, setDeepDiveIndex] = useState<number | null>(null);
  const [deepDiveText, setDeepDiveText] = useState('');
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  const generateAnalysis = async () => {
    setIsGenerating(true);
    setShowProgressBar(true);
    setProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Simulate AI analysis - in a real app, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate mock analysis based on accomplishments
      const mockAnalysis: AnalysisResult = {
        energizers: [
          "Building and creating new systems or processes",
          "Taking initiative and leading projects",
          "Problem-solving and overcoming challenges",
          "Learning new skills and growing professionally"
        ],
        avoid: [
          "Repetitive tasks without growth opportunities",
          "Micromanagement or overly restrictive environments",
          "Working in isolation without collaboration",
          "Roles without clear goals or direction"
        ],
        environments: [
          "Dynamic, growth-oriented organizations",
          "Collaborative teams with shared goals",
          "Environments that value innovation and creativity",
          "Companies with learning and development opportunities"
        ],
        growth: [
          "Develop leadership and mentoring skills",
          "Expand strategic thinking capabilities",
          "Build expertise in emerging technologies",
          "Strengthen communication and presentation skills"
        ]
      };

      const mockDeepDive: DeepDiveData[] = accomplishments.slice(0, 5).map((acc, index) => ({
        winNumber: index + 1,
        process: `Analysis of accomplishment: ${acc.substring(0, 100)}...`
      }));

      setAnalysis(mockAnalysis);
      setDeepDiveData(mockDeepDive);
      setProgress(100);

      toast({
        title: "Analysis Generated",
        description: "The AI has generated your analysis.",
      });
    } catch (error) {
      console.error("Analysis failed:", error);
      toast({
        title: "Analysis Failed",
        description: "There was an error generating the analysis. Please try again.",
        variant: "destructive",
      });
    } finally {
      clearInterval(progressInterval);
      setIsGenerating(false);
      setShowProgressBar(false);
    }
  };

  const downloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Use the new screenshot-based PDF generator
      const { generateScreenshotPDF } = await import('../utils/screenshotPdfGenerator');
      const pdf = await generateScreenshotPDF(analysis, deepDiveData, showPremium);
      
      const fileName = showPremium ? 'premium-seed-profile.pdf' : 'seed-profile.pdf';
      pdf.save(fileName);
      
      toast({
        title: "PDF Generated Successfully",
        description: `Your ${showPremium ? 'Premium ' : ''}SEED Profile has been downloaded.`,
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleDeepDive = (index: number) => {
    setDeepDiveIndex(index);
    setDeepDiveText(deepDiveData[index]?.process || '');
  };

  const handlePremiumChange = (checked: boolean) => {
    setShowPremium(checked);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">AI Analysis</h1>
      {isGenerating ? (
        <>
          {showProgressBar && <Progress value={progress} />}
          <p>Generating analysis... please wait.</p>
        </>
      ) : (
        <>
          <div className="mb-4">
            <Button onClick={onBack} variant="secondary">Back to Accomplishments</Button>
            <Button onClick={generateAnalysis} className="ml-2">Generate Analysis</Button>
          </div>

          {analysis.energizers.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">What Energizes You</h2>
              <ul>
                {analysis.energizers.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {analysis.avoid.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">What to Avoid</h2>
              <ul>
                {analysis.avoid.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {analysis.environments.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Ideal Environments</h2>
              <ul>
                {analysis.environments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {analysis.growth.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Growth Opportunities</h2>
              <ul>
                {analysis.growth.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {deepDiveData.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Deep Dive Data</h2>
              <ul>
                {deepDiveData.map((item, index) => (
                  <li key={index}>
                    <Button onClick={() => handleDeepDive(index)}>Win #{item.winNumber}</Button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {deepDiveIndex !== null && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Deep Dive - Win #{deepDiveIndex + 1}</h2>
              <Textarea
                value={deepDiveText}
                onChange={(e) => setDeepDiveText(e.target.value)}
                placeholder="Enter your deep dive analysis here."
                className="w-full"
              />
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox id="premium" onCheckedChange={handlePremiumChange} />
            <Label htmlFor="premium">Show Premium Analysis</Label>
          </div>

          <Button onClick={downloadPDF} disabled={isGeneratingPDF}>
            {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
          </Button>
        </>
      )}
    </div>
  );
};

export default AIAnalysis;
