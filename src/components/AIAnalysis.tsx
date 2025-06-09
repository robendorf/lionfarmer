import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { useCompletion } from 'ai/react';

interface AIAnalysisProps {
  accomplishments: string[];
  onBack: () => void;
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

const AIAnalysis = ({ accomplishments, onBack }: AIAnalysisProps) => {
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

  const { complete, completion } = useCompletion({
    api: "/api/completion",
  });

  useEffect(() => {
    if (completion) {
      try {
        const parsedCompletion = JSON.parse(completion);
        if (parsedCompletion && typeof parsedCompletion === 'object') {
          if (parsedCompletion.analysis) {
            setAnalysis(parsedCompletion.analysis);
          }
          if (parsedCompletion.deepDiveData) {
            setDeepDiveData(parsedCompletion.deepDiveData);
          }
        } else {
          console.error('Parsed completion is not an object:', parsedCompletion);
        }
      } catch (error) {
        console.error('Failed to parse completion:', error);
      }
    }
  }, [completion]);

  const generateAnalysis = async () => {
    setIsGenerating(true);
    setShowProgressBar(true);
    setProgress(0);

    const prompt = `Given the following accomplishments, provide an analysis of what energizes the person, what they should avoid, ideal environments for them, and growth opportunities. Also, provide a list of "deep dive" data for each accomplishment.
Accomplishments: ${accomplishments.join(", ")}
Analysis should be in JSON format:
{
  "analysis": {
    "energizers": [],
    "avoid": [],
    "environments": [],
    "growth": []
  },
 "deepDiveData": [
    {
      "winNumber": 1,
      "process": "Detailed explanation of the accomplishment"
    }
  ]
}
`;

    try {
      let accumulatedCompletion = '';
      const stream = await complete(prompt);

      if (stream && stream.body) {
        const reader = stream.body.getReader();
        const decoder = new TextDecoder();
        let chunksReceived = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          chunksReceived++;
          const chunk = decoder.decode(value);
          accumulatedCompletion += chunk;

          try {
            const parsedChunk = JSON.parse(accumulatedCompletion);
            if (parsedChunk && typeof parsedChunk === 'object') {
              if (parsedChunk.analysis) {
                setAnalysis(parsedChunk.analysis);
              }
              if (parsedChunk.deepDiveData) {
                setDeepDiveData(parsedChunk.deepDiveData);
              }
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }

          const currentProgress = Math.min((chunksReceived / 50) * 100, 100);
          setProgress(currentProgress);
        }
      }

      toast({
        title: "Analysis Generated",
        description: "The AI has generated your analysis.",
      });
    } catch (error) {
      console.error("Completion failed:", error);
      toast({
        title: "Analysis Failed",
        description: "There was an error generating the analysis. Please try again.",
        variant: "destructive",
      });
    } finally {
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
            <Checkbox id="premium" onCheckedChange={(checked) => setShowPremium(checked || false)} />
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
