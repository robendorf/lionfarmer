
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Lightbulb, Target, TrendingUp, Users, Building, ArrowLeft, Sparkles, Crown, FileText, BarChart3, Download, Star } from 'lucide-react';
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
    detailedAnalysis: string[];
    careerPath: string[];
    strengths: string[];
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
  const [analysisGenerated, setAnalysisGenerated] = useState(false);
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
          ],
          detailedAnalysis: [
            "Your pattern shows high achievement orientation combined with collaborative leadership",
            "You thrive in environments that balance structure with flexibility",
            "Your motivation peaks when solving complex problems with tangible outcomes"
          ],
          careerPath: [
            "Short-term: Focus on cross-functional project leadership roles",
            "Medium-term: Transition to strategic planning and team management",
            "Long-term: Executive leadership or entrepreneurial ventures"
          ],
          strengths: [
            "Systems thinking and process optimization",
            "Adaptability in changing environments",
            "Natural mentoring and development abilities",
            "Strategic problem-solving approach"
          ]
        };
      }

      setAnalysis(mockAnalysis);
      setAnalysisGenerated(true);
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

  const togglePremium = () => {
    setShowPremium(!showPremium);
    if (analysisGenerated) {
      // Regenerate analysis with new premium status
      generateAnalysis();
    }
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

              {/* Premium Toggle Section */}
              <div className="bg-gradient-to-br from-warm-gold/5 via-amber-50 to-warm-gold/10 rounded-2xl border-2 border-warm-gold/20 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Crown className="h-6 w-6 text-warm-gold" />
                        <h3 className="text-xl font-bold text-forest-dark">Premium SEED Analysis</h3>
                        <div className="px-3 py-1 bg-warm-gold text-white text-xs font-bold rounded-full">UPGRADE</div>
                      </div>
                      <p className="text-forest-dark/80 text-sm mb-4">
                        Unlock the complete picture of your motivational design with our comprehensive premium analysis.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Label htmlFor="premium-toggle" className="text-sm font-medium text-forest-dark">
                        {showPremium ? 'Premium' : 'Free'}
                      </Label>
                      <Checkbox 
                        id="premium-toggle" 
                        checked={showPremium}
                        onCheckedChange={togglePremium}
                        className="border-warm-gold data-[state=checked]:bg-warm-gold data-[state=checked]:border-warm-gold"
                      />
                    </div>
                  </div>

                  {/* Premium Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <FileText className="h-4 w-4 text-warm-gold flex-shrink-0" />
                        <span className="text-forest-dark">10-page comprehensive report</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <BarChart3 className="h-4 w-4 text-warm-gold flex-shrink-0" />
                        <span className="text-forest-dark">Visual charts & motivation mapping</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Target className="h-4 w-4 text-warm-gold flex-shrink-0" />
                        <span className="text-forest-dark">Detailed career path recommendations</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <TrendingUp className="h-4 w-4 text-warm-gold flex-shrink-0" />
                        <span className="text-forest-dark">Strategic skill development plan</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Users className="h-4 w-4 text-warm-gold flex-shrink-0" />
                        <span className="text-forest-dark">Team dynamics & leadership insights</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Download className="h-4 w-4 text-warm-gold flex-shrink-0" />
                        <span className="text-forest-dark">Downloadable PDF report</span>
                      </div>
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="bg-white/80 rounded-xl p-4 border border-warm-gold/30">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-forest-dark">Free Analysis</h4>
                        <div className="text-2xl font-bold text-sage-green">4</div>
                        <p className="text-xs text-forest-dark/70">Core insights</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-forest-dark flex items-center justify-center gap-1">
                          <Crown className="h-4 w-4 text-warm-gold" />
                          Premium
                        </h4>
                        <div className="text-2xl font-bold text-warm-gold">15+</div>
                        <p className="text-xs text-forest-dark/70">Detailed insights</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                    {isGenerating ? "Analyzing..." : `Generate ${showPremium ? 'Premium' : 'Free'} Analysis`}
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

      {/* Free Analysis Results */}
      {hasAnalysis && !showPremium && (
        <>
          {/* What Energizes You */}
          <Card className="border-2 border-sage-green/30 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-sage-green/10 to-sage-green/5">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <Target className="h-5 w-5 text-sage-green" />
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

          {/* What to Avoid */}
          <Card className="border-2 border-warm-gold/30 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-warm-gold/10 to-warm-gold/5">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <Lightbulb className="h-5 w-5 text-warm-gold" />
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

          {/* Ideal Environments */}
          <Card className="border-2 border-earth-brown/30 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-earth-brown/10 to-earth-brown/5">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <Building className="h-5 w-5 text-earth-brown" />
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

          {/* Growth Opportunities */}
          <Card className="border-2 border-sage-green/30 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-sage-green/10 to-sage-green/5">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <TrendingUp className="h-5 w-5 text-sage-green" />
                Growth Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {analysis.growth.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-sage-green/5 rounded-lg">
                    <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-forest-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Upgrade Prompt */}
          <Card className="border-2 border-warm-gold/50 bg-gradient-to-r from-warm-gold/5 to-amber-50 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Crown className="h-6 w-6 text-warm-gold" />
                  <h3 className="text-xl font-bold text-forest-dark">Want More Insights?</h3>
                </div>
                <p className="text-forest-dark/80">
                  Upgrade to Premium for detailed career recommendations, visual charts, and a comprehensive 10-page report.
                </p>
                <Button 
                  onClick={togglePremium}
                  className="bg-gradient-to-r from-warm-gold to-amber-400 hover:from-warm-gold/90 hover:to-amber-400/90 text-white"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Try Premium Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Premium Analysis Results */}
      {hasAnalysis && showPremium && analysis.premiumInsights && (
        <>
          {/* Core Free Sections with Premium Styling */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-warm-gold/50 bg-gradient-to-br from-warm-gold/5 to-amber-50 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-warm-gold/20 to-amber-100/30">
                <CardTitle className="flex items-center gap-3 text-forest-dark">
                  <Crown className="h-5 w-5 text-warm-gold" />
                  What Energizes You
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {analysis.energizers.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 bg-warm-gold/10 rounded-lg border border-warm-gold/20">
                      <Sparkles className="h-4 w-4 text-warm-gold mt-1 flex-shrink-0" />
                      <span className="text-forest-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-warm-gold/50 bg-gradient-to-br from-warm-gold/5 to-amber-50 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-warm-gold/20 to-amber-100/30">
                <CardTitle className="flex items-center gap-3 text-forest-dark">
                  <Crown className="h-5 w-5 text-warm-gold" />
                  What to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {analysis.avoid.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 bg-warm-gold/10 rounded-lg border border-warm-gold/20">
                      <Sparkles className="h-4 w-4 text-warm-gold mt-1 flex-shrink-0" />
                      <span className="text-forest-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Premium Exclusive Sections */}
          <Card className="border-2 border-warm-gold/50 bg-gradient-to-br from-warm-gold/10 to-amber-100/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-warm-gold/20 to-amber-100/30">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <Crown className="h-5 w-5 text-warm-gold" />
                Core Motivational Themes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {analysis.premiumInsights.motivationalThemes.map((item, index) => (
                  <div key={index} className="p-4 bg-warm-gold/10 rounded-lg border border-warm-gold/20">
                    <div className="flex items-start gap-3">
                      <Star className="h-4 w-4 text-warm-gold mt-1 flex-shrink-0" />
                      <span className="text-forest-dark font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-warm-gold/50 bg-gradient-to-br from-warm-gold/10 to-amber-100/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-warm-gold/20 to-amber-100/30">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <Users className="h-5 w-5 text-warm-gold" />
                Strategic Career Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {analysis.premiumInsights.careerRecommendations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-warm-gold/10 rounded-lg border border-warm-gold/20">
                    <TrendingUp className="h-4 w-4 text-warm-gold mt-1 flex-shrink-0" />
                    <span className="text-forest-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}

      {/* Regenerate Button */}
      {hasAnalysis && (
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
      )}
    </div>
  );
};

export default AIAnalysis;
