import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Brain, Target, Users, TrendingUp, Heart, Briefcase, 
  BookOpen, Crown, Star, Zap, Shield, Compass, 
  Lightbulb, Activity, Award, ChevronRight, Sparkles,
  BarChart3, FileText, Calendar, CheckCircle, Gift
} from 'lucide-react';
import PremiumSEEDProfile from './PremiumSEEDProfile';

interface SelectedWins {
  [key: string]: boolean;
}

interface HowIDidItData {
  [key: string]: string;
}

interface AIAnalysisProps {
  accomplishments: string[];
  onBack: () => void;
  selectedWins: SelectedWins;
  howIDidIt: HowIDidItData;
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({ accomplishments, onBack, selectedWins, howIDidIt }) => {
  const [showPremium, setShowPremium] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');
  const [showBasicAnalysis, setShowBasicAnalysis] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Generate mock analysis data from accomplishments
  const generateAnalysis = () => {
    return {
      energizers: [
        "Taking initiative and launching new projects energizes you deeply, as you find profound fulfillment in being the catalyst for positive change and innovation. This drive stems from your God-given desire to be a steward of opportunities and to multiply the talents you've been entrusted with.",
        "Problem-solving and overcoming complex challenges brings out your best qualities, as you naturally approach obstacles with a combination of analytical thinking and creative solutions. Your ability to see beyond immediate difficulties reflects the wisdom and perseverance that Scripture encourages in times of trial.",
        "Learning new skills and developing expertise fills you with purpose, as continuous growth aligns with the biblical principle of becoming excellent in all you do. Your hunger for knowledge and improvement demonstrates a heart that seeks to honor God through competence and mastery.",
        "Helping others achieve their goals and reach their potential is where you find your deepest satisfaction, reflecting the servant leadership model that Christ demonstrated. Your investment in others' success reveals a generous spirit and an understanding that true fulfillment comes through lifting others up."
      ],
      avoid: [
        "Repetitive tasks without learning opportunities drain your energy because your mind craves growth and new challenges. You function best when you can see how your work contributes to a larger purpose and allows you to develop new capabilities that honor your calling.",
        "Environments with excessive micromanagement stifle your natural leadership abilities and diminish your sense of ownership. You thrive when trusted with autonomy and the freedom to apply your gifts in ways that align with your God-given strengths and values.",
        "Situations lacking clear goals or meaningful purpose leave you feeling unfulfilled, as you need to understand how your efforts contribute to something greater than yourself. Your heart seeks alignment with work that has eternal significance and positive impact on others."
      ],
      environments: [
        "Collaborative teams with shared vision and mutual respect provide the ideal setting for your gifts to flourish. You excel in environments where diverse perspectives are valued and where collective wisdom leads to better outcomes for everyone involved.",
        "Dynamic environments with continuous growth opportunities and room for innovation allow you to use your natural curiosity and drive for excellence. These settings challenge you to develop new skills while making meaningful contributions to worthwhile causes.",
        "Organizations where integrity, innovation, and people development are core values create the perfect culture for your leadership style. You thrive in places where character matters as much as competence and where success is measured by positive impact on others."
      ],
      growth: [
        "Developing your leadership communication skills will amplify your ability to inspire and guide others toward shared goals. Focus on learning how to articulate vision clearly, listen with empathy, and communicate in ways that motivate and encourage those around you.",
        "Expanding your strategic thinking capabilities will enhance your natural problem-solving abilities and help you see the bigger picture. Invest time in understanding systems thinking, long-term planning, and how to anticipate future challenges and opportunities.",
        "Building deeper expertise in emerging technologies and industry trends will position you as a valuable resource and thought leader. Stay curious about innovations that can improve efficiency, create value, and solve meaningful problems in your field of influence."
      ]
    };
  };

  // Generate deep dive data from selected wins
  const generateDeepDiveData = () => {
    return Object.keys(selectedWins)
      .filter(key => selectedWins[key])
      .map(key => {
        const winNumber = parseInt(key.replace('selected_win_', ''));
        const processKey = `how_${winNumber}`;
        return {
          winNumber,
          process: howIDidIt[processKey] || "Process details to be analyzed"
        };
      });
  };

  const handlePromoCode = () => {
    if (promoCode.toUpperCase() === 'FREE') {
      setPromoApplied(true);
      setShowPremium(true);
    }
  };

  const analysis = generateAnalysis();
  const deepDiveData = generateDeepDiveData();

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
          Your foundational motivational pattern insights inspired by Scripture
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
            <div className="grid gap-4">
              {analysis.energizers.map((energizer, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg border border-warm-gold/20">
                  <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-forest-dark leading-relaxed text-sm">{energizer}</span>
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
            <div className="grid gap-4">
              {analysis.avoid.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100">
                  <Shield className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-forest-dark leading-relaxed text-sm">{item}</span>
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
            <div className="grid gap-4">
              {analysis.environments.map((env, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-100">
                  <Compass className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-forest-dark leading-relaxed text-sm">{env}</span>
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
            <div className="grid gap-4">
              {analysis.growth.map((growth, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100">
                  <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-forest-dark leading-relaxed text-sm">{growth}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Premium Upgrade Section */}
      <Card className="border-2 border-warm-gold/40 bg-gradient-to-br from-warm-gold/5 to-amber-50/30 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="h-8 w-8 text-warm-gold" />
              <h3 className="text-2xl font-bold text-forest-dark">Unlock Your Complete SEED Profile</h3>
            </div>
            <p className="text-earth-brown text-lg leading-relaxed">
              Ready to dive deeper? Your Premium SEED Analysis includes 15 comprehensive pages with detailed insights, visual charts, career optimization strategies, and a personalized 90-day action plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-forest-dark flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-warm-gold" />
                What You'll Get:
              </h4>
              <div className="space-y-2 text-sm text-earth-brown">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-warm-gold" />
                  <span>15-page comprehensive report</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-warm-gold" />
                  <span>Visual charts & analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-warm-gold" />
                  <span>Career optimization guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-warm-gold" />
                  <span>90-day action plan</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 p-6 rounded-lg border border-warm-gold/20">
              <div className="text-center mb-4">
                <Gift className="h-6 w-6 text-warm-gold mx-auto mb-2" />
                <h4 className="font-semibold text-forest-dark">Have a Promo Code?</h4>
                <p className="text-sm text-earth-brown">Enter your code to unlock premium features</p>
              </div>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="promo" className="text-sm font-medium text-forest-dark">
                    Promo Code
                  </Label>
                  <Input
                    id="promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code here"
                    className="mt-1"
                  />
                </div>
                <Button 
                  onClick={handlePromoCode}
                  className="w-full bg-warm-gold hover:bg-amber-500"
                  disabled={!promoCode.trim()}
                >
                  Apply Code
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => setShowPremium(true)}
              size="lg"
              className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-warm-gold to-amber-500 hover:from-amber-500 hover:to-warm-gold shadow-xl"
            >
              <Crown className="h-5 w-5 mr-2" />
              Upgrade to Premium Analysis
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <p className="text-sm text-earth-brown mt-3">
              Only $49 - Unlock your complete motivational blueprint
            </p>
          </div>
        </CardContent>
      </Card>
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
            } else {
              setShowBasicAnalysis(true);
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
              Discover my Basic SEED Profile
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
        {showBasicAnalysis ? renderBasicAnalysis() : renderPlanSelection()}
      </CardContent>
    </Card>
  );
};

export default AIAnalysis;
