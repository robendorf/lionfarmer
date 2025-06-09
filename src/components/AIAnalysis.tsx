
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Lightbulb, Target, TrendingUp, Users, Building, ArrowLeft, Sparkles, Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  premiumInsights?: {
    motivationalThemes: string[];
    careerRecommendations: string[];
    skillDevelopment: string[];
  };
}

const AIAnalysis = ({ accomplishments, onBack, selectedWins, howIDidIt }: AIAnalysisProps) => {
  const [analysis, setAnalysis] = useState<AnalysisResult>({
    energizers: [],
    avoid: [],
    environments: [],
    growth: [],
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const { toast } = useToast();

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
      
      // Generate analysis based on accomplishments and selected wins
      const selectedCount = selectedWins ? Object.values(selectedWins).filter(Boolean).length : 0;
      const hasHowIDidIt = howIDidIt ? Object.values(howIDidIt).some(text => text.trim().length > 0) : false;
      
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

      // Add premium insights if enabled
      if (showPremium) {
        mockAnalysis.premiumInsights = {
          motivationalThemes: [
            "Achievement through systematic problem-solving",
            "Drive for continuous learning and mastery",
            "Satisfaction from building lasting impact",
            "Energy from collaborative success"
          ],
          careerRecommendations: [
            "Product Management roles in tech companies",
            "Consulting positions requiring strategic thinking",
            "Leadership roles in innovation-focused teams",
            "Entrepreneurial ventures in emerging markets"
          ],
          skillDevelopment: [
            "Advanced project management methodologies",
            "Strategic communication and stakeholder management",
            "Data analysis and decision-making frameworks",
            "Cross-functional team leadership"
          ]
        };
      }

      setAnalysis(mockAnalysis);
      setProgress(100);

      toast({
        title: "Analysis Complete",
        description: `Generated ${showPremium ? 'Premium' : 'Free'} SEED profile based on ${accomplishments.length} accomplishments.`,
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

  const handlePremiumChange = (checked: boolean) => {
    setShowPremium(checked);
  };

  const hasAnalysis = analysis.energizers.length > 0;
  const selectedCount = selectedWins ? Object.values(selectedWins).filter(Boolean).length : 0;

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 via-warm-gold/5 to-forest-dark/10 rounded-3xl blur-sm"></div>
        <Card className="relative z-10 border-2 border-sage-green/30 bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-gradient-to-r from-sage-green/10 via-warm-gold/10 to-sage-green/10">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <div className="p-2 bg-gradient-to-br from-sage-green to-forest-dark rounded-full shadow-lg">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                AI SEED Profile Analysis
              </CardTitle>
              <Button onClick={onBack} variant="outline" size="sm" className="border-sage-green text-forest-dark hover:bg-sage-green hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cream via-white to-cream p-6 rounded-xl border border-sage-green/20 shadow-inner">
                <p className="text-forest-dark text-base leading-relaxed mb-4">
                  Ready to discover your unique motivational pattern? Based on your {accomplishments.length} accomplishments
                  {selectedCount > 0 && ` and ${selectedCount} selected favorites`}, 
                  I'll analyze what energizes you, what environments you thrive in, and what you should focus on for growth.
                </p>
              </div>

              {/* Premium Toggle */}
              <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-warm-gold/10 to-amber-100/50 rounded-xl border border-warm-gold/30">
                <Checkbox 
                  id="premium" 
                  checked={showPremium}
                  onCheckedChange={handlePremiumChange}
                  className="border-warm-gold data-[state=checked]:bg-warm-gold data-[state=checked]:border-warm-gold"
                />
                <Label htmlFor="premium" className="flex items-center gap-2 text-forest-dark font-semibold">
                  <Crown className="h-4 w-4 text-warm-gold" />
                  Enable Premium Analysis
                </Label>
                <Sparkles className="h-4 w-4 text-warm-gold animate-pulse" />
              </div>

              {/* Generate Button */}
              {!hasAnalysis && (
                <div className="text-center">
                  <Button 
                    onClick={generateAnalysis} 
                    disabled={isGenerating}
                    size="lg"
                    className="bg-gradient-to-r from-sage-green to-forest-dark hover:from-sage-green/90 hover:to-forest-dark/90 text-white px-8 py-3 rounded-xl shadow-lg"
                  >
                    {isGenerating ? "Analyzing..." : "Generate AI Analysis"}
                  </Button>
                </div>
              )}

              {/* Progress Bar */}
              {showProgressBar && (
                <div className="space-y-2">
                  <Progress value={progress} className="w-full h-3 bg-sage-green/20" />
                  <p className="text-center text-sm text-earth-brown">
                    Analyzing your accomplishments... {progress}%
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Results */}
      {hasAnalysis && (
        <>
          {/* What Energizes You */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 to-forest-dark/10 rounded-3xl blur-sm"></div>
            <Card className="relative z-10 border-2 border-sage-green/30 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="bg-gradient-to-r from-sage-green/10 via-warm-gold/10 to-sage-green/10">
                <CardTitle className="flex items-center gap-3 text-forest-dark">
                  <div className="p-2 bg-gradient-to-br from-sage-green to-forest-dark rounded-full shadow-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  What Energizes You
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {analysis.energizers.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 bg-sage-green/5 rounded-lg">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-forest-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* What to Avoid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/10 to-amber-100/20 rounded-3xl blur-sm"></div>
            <Card className="relative z-10 border-2 border-warm-gold/30 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="bg-gradient-to-r from-warm-gold/10 via-amber-100/20 to-warm-gold/10">
                <CardTitle className="flex items-center gap-3 text-forest-dark">
                  <div className="p-2 bg-gradient-to-br from-warm-gold to-amber-400 rounded-full shadow-lg">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  What to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {analysis.avoid.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 bg-warm-gold/5 rounded-lg">
                      <div className="w-2 h-2 bg-warm-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-forest-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Ideal Environments */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/10 to-forest-dark/10 rounded-3xl blur-sm"></div>
            <Card className="relative z-10 border-2 border-earth-brown/30 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="bg-gradient-to-r from-earth-brown/10 via-sage-green/10 to-earth-brown/10">
                <CardTitle className="flex items-center gap-3 text-forest-dark">
                  <div className="p-2 bg-gradient-to-br from-earth-brown to-forest-dark rounded-full shadow-lg">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  Ideal Environments
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {analysis.environments.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 bg-earth-brown/5 rounded-lg">
                      <div className="w-2 h-2 bg-earth-brown rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-forest-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Growth Opportunities */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 to-warm-gold/10 rounded-3xl blur-sm"></div>
            <Card className="relative z-10 border-2 border-sage-green/30 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader className="bg-gradient-to-r from-sage-green/10 via-warm-gold/10 to-sage-green/10">
                <CardTitle className="flex items-center gap-3 text-forest-dark">
                  <div className="p-2 bg-gradient-to-br from-sage-green to-warm-gold rounded-full shadow-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  Growth Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {analysis.growth.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-sage-green/5 to-warm-gold/5 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-sage-green to-warm-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-forest-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Premium Insights */}
          {showPremium && analysis.premiumInsights && (
            <>
              {/* Motivational Themes */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/20 to-amber-200/30 rounded-3xl blur-sm"></div>
                <Card className="relative z-10 border-2 border-warm-gold/50 bg-white/90 backdrop-blur-sm shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-warm-gold/20 via-amber-100/30 to-warm-gold/20">
                    <CardTitle className="flex items-center gap-3 text-forest-dark">
                      <div className="p-2 bg-gradient-to-br from-warm-gold to-amber-400 rounded-full shadow-lg">
                        <Crown className="h-5 w-5 text-white" />
                      </div>
                      Premium: Core Motivational Themes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {analysis.premiumInsights.motivationalThemes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-amber-100/20 rounded-lg border border-warm-gold/20">
                          <Sparkles className="h-4 w-4 text-warm-gold mt-1 flex-shrink-0" />
                          <span className="text-forest-dark font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Career Recommendations */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/20 to-amber-200/30 rounded-3xl blur-sm"></div>
                <Card className="relative z-10 border-2 border-warm-gold/50 bg-white/90 backdrop-blur-sm shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-warm-gold/20 via-amber-100/30 to-warm-gold/20">
                    <CardTitle className="flex items-center gap-3 text-forest-dark">
                      <div className="p-2 bg-gradient-to-br from-warm-gold to-amber-400 rounded-full shadow-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      Premium: Career Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {analysis.premiumInsights.careerRecommendations.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-amber-100/20 rounded-lg border border-warm-gold/20">
                          <Sparkles className="h-4 w-4 text-warm-gold mt-1 flex-shrink-0" />
                          <span className="text-forest-dark font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Skill Development */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/20 to-amber-200/30 rounded-3xl blur-sm"></div>
                <Card className="relative z-10 border-2 border-warm-gold/50 bg-white/90 backdrop-blur-sm shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-warm-gold/20 via-amber-100/30 to-warm-gold/20">
                    <CardTitle className="flex items-center gap-3 text-forest-dark">
                      <div className="p-2 bg-gradient-to-br from-warm-gold to-amber-400 rounded-full shadow-lg">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      Premium: Strategic Skill Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {analysis.premiumInsights.skillDevelopment.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-amber-100/20 rounded-lg border border-warm-gold/20">
                          <Sparkles className="h-4 w-4 text-warm-gold mt-1 flex-shrink-0" />
                          <span className="text-forest-dark font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* Regenerate Button */}
          <div className="text-center">
            <Button 
              onClick={generateAnalysis} 
              disabled={isGenerating}
              variant="outline"
              className="border-sage-green text-forest-dark hover:bg-sage-green hover:text-white"
            >
              {isGenerating ? "Regenerating..." : "Regenerate Analysis"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AIAnalysis;
