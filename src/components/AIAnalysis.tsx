
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, Target, Users, TrendingUp, Heart, Briefcase, 
  BookOpen, Crown, Star, Zap, Shield, Compass, 
  Lightbulb, Activity, Award, ChevronRight, Sparkles,
  BarChart3, FileText, Calendar, CheckCircle
} from 'lucide-react';
import PremiumSEEDProfile from './PremiumSEEDProfile';

interface AIAnalysisProps {
  analysis: {
    energizers: string[];
    avoid: string[];
    environments: string[];
    growth: string[];
  };
  deepDiveData: Array<{
    winNumber: number;
    process: string;
  }>;
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({ analysis, deepDiveData }) => {
  const [showPremium, setShowPremium] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');

  if (showPremium) {
    return (
      <PremiumSEEDProfile 
        analysis={analysis}
        deepDiveData={deepDiveData}
        onBack={() => setShowPremium(false)}
      />
    );
  }

  const renderBasicAnalysis = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-sage-green/10 via-cream to-warm-gold/10 p-8 rounded-2xl border border-sage-green/20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-sage-green to-forest-dark rounded-full shadow-lg">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-forest-dark via-sage-green to-warm-gold bg-clip-text text-transparent">
            Basic SEED Profile Analysis
          </h2>
        </div>
        <p className="text-earth-brown text-lg">
          Your foundational motivational pattern insights based on SIMA methodology
        </p>
      </div>

      {/* Basic Analysis Sections */}
      <div className="grid gap-6">
        <Card className="border-sage-green/30 bg-gradient-to-br from-white to-sage-green/5 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-sage-green/10 to-warm-gold/10 border-b border-sage-green/20">
            <CardTitle className="flex items-center gap-3 text-forest-dark">
              <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              What Energizes You
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-3">
              {analysis.energizers.map((energizer, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg border border-warm-gold/20">
                  <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-forest-dark leading-relaxed">{energizer}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-gradient-to-br from-white to-red-50/30 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
            <CardTitle className="flex items-center gap-3 text-forest-dark">
              <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              What to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-3">
              {analysis.avoid.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100">
                  <Shield className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-forest-dark leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50/30 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-200">
            <CardTitle className="flex items-center gap-3 text-forest-dark">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Compass className="h-5 w-5 text-white" />
              </div>
              Ideal Environments
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-3">
              {analysis.environments.map((env, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-100">
                  <Compass className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-forest-dark leading-relaxed">{env}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-br from-white to-purple-50/30 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-200">
            <CardTitle className="flex items-center gap-3 text-forest-dark">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              Growth Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-3">
              {analysis.growth.map((growth, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100">
                  <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-forest-dark leading-relaxed">{growth}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPlanSelection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-forest-dark mb-4">Choose Your SEED Profile Analysis</h2>
        <p className="text-earth-brown text-lg">Select the analysis depth that best fits your needs</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <Card className={`relative border-2 transition-all duration-300 cursor-pointer ${
          selectedPlan === 'basic' 
            ? 'border-sage-green shadow-xl scale-105' 
            : 'border-sage-green/30 hover:border-sage-green/60 shadow-lg'
        }`} onClick={() => setSelectedPlan('basic')}>
          <CardHeader className="bg-gradient-to-r from-sage-green/10 to-forest-dark/10 border-b border-sage-green/20">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <Brain className="h-6 w-6 text-sage-green" />
                Basic SEED Analysis
              </CardTitle>
              <Badge variant="secondary" className="bg-sage-green/20 text-sage-green">
                FREE
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-forest-dark mb-2">$0</div>
                <p className="text-earth-brown">Essential insights to get started</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-green" />
                  <span className="text-forest-dark">Core motivational patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-green" />
                  <span className="text-forest-dark">Basic energizers & avoidance areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-green" />
                  <span className="text-forest-dark">Ideal environment overview</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sage-green" />
                  <span className="text-forest-dark">Growth opportunity highlights</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className={`relative border-2 transition-all duration-300 cursor-pointer ${
          selectedPlan === 'premium' 
            ? 'border-warm-gold shadow-xl scale-105' 
            : 'border-warm-gold/30 hover:border-warm-gold/60 shadow-lg'
        }`} onClick={() => setSelectedPlan('premium')}>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-warm-gold to-amber-500 text-white px-4 py-1 text-sm font-bold">
              <Crown className="h-4 w-4 mr-1" />
              MOST POPULAR
            </Badge>
          </div>
          <CardHeader className="bg-gradient-to-r from-warm-gold/10 to-amber-500/10 border-b border-warm-gold/20">
            <CardTitle className="flex items-center gap-3 text-forest-dark">
              <Crown className="h-6 w-6 text-warm-gold" />
              Premium SEED Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-forest-dark mb-2">$49</div>
                <p className="text-earth-brown">Complete comprehensive analysis</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark font-semibold">Everything in Basic, plus:</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">15-page comprehensive report</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">Visual charts & analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">Career optimization guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">Leadership style analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">Decision-making patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">90-day action plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">Personal development roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-warm-gold" />
                  <span className="text-forest-dark">Relationship dynamics insights</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button 
          onClick={() => {
            if (selectedPlan === 'premium') {
              setShowPremium(true);
            }
          }}
          size="lg"
          className={`px-12 py-4 text-lg font-semibold transition-all duration-300 ${
            selectedPlan === 'basic'
              ? 'bg-sage-green hover:bg-forest-dark'
              : 'bg-gradient-to-r from-warm-gold to-amber-500 hover:from-amber-500 hover:to-warm-gold shadow-xl'
          }`}
        >
          {selectedPlan === 'basic' ? (
            <>
              <Brain className="h-5 w-5 mr-2" />
              View Basic Analysis
            </>
          ) : (
            <>
              <Crown className="h-5 w-5 mr-2" />
              Unlock Premium Analysis
            </>
          )}
          <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );

  return (
    <Card className="border-2 border-sage-green/30 bg-gradient-to-br from-cream via-white to-sage-green/10 shadow-2xl">
      <CardContent className="p-8">
        {selectedPlan === 'basic' && !showPremium ? renderBasicAnalysis() : renderPlanSelection()}
      </CardContent>
    </Card>
  );
};

export default AIAnalysis;
