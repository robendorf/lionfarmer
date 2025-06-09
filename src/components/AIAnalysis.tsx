import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Brain, Target, Users, TrendingUp, Heart, Briefcase, 
  BookOpen, Crown, Zap, Shield, Compass, Lightbulb,
  Star, Award, Check, Lock, Unlock
} from 'lucide-react';
import PremiumSEEDProfile from './PremiumSEEDProfile';

interface AIAnalysisProps {
  accomplishments: string[];
  selectedWins: SelectedWins;
  howIDidIt: HowIDidItData;
  onBack: () => void;
}

interface SelectedWins {
  [key: string]: boolean;
}

interface HowIDidItData {
  [key: string]: string;
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({ 
  accomplishments, 
  selectedWins, 
  howIDidIt, 
  onBack 
}) => {
  const [showBasicProfile, setShowBasicProfile] = useState(false);
  const [showPremiumUpgrade, setShowPremiumUpgrade] = useState(false);
  const [showPremiumProfile, setShowPremiumProfile] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');

  const generateAnalysis = () => {
    const selectedAccomplishments = accomplishments.filter((_, index) => 
      selectedWins[index.toString()]
    );
    
    const processData = selectedAccomplishments.map((accomplishment, index) => ({
      winNumber: index + 1,
      process: howIDidIt[index.toString()] || "No process described"
    }));

    const allProcesses = processData.map(d => d.process).join(' ').toLowerCase();
    
    // Simple keyword analysis for SEED categories
    const analysis = {
      energizers: [],
      avoid: [],
      environments: [],
      growth: []
    };

    // Energizers - what gives energy
    if (allProcesses.includes('lead') || allProcesses.includes('manage') || allProcesses.includes('direct')) {
      analysis.energizers.push('Leadership and taking charge of situations');
    }
    if (allProcesses.includes('create') || allProcesses.includes('design') || allProcesses.includes('build')) {
      analysis.energizers.push('Creating and building new things');
    }
    if (allProcesses.includes('help') || allProcesses.includes('support') || allProcesses.includes('assist')) {
      analysis.energizers.push('Helping and supporting others');
    }
    if (allProcesses.includes('solve') || allProcesses.includes('fix') || allProcesses.includes('improve')) {
      analysis.energizers.push('Problem-solving and improvement');
    }

    // What to avoid
    if (allProcesses.includes('routine') || allProcesses.includes('repetitive')) {
      analysis.avoid.push('Repetitive, routine tasks without variety');
    } else {
      analysis.avoid.push('Overly chaotic environments without structure');
    }
    
    if (allProcesses.includes('alone') || allProcesses.includes('independent')) {
      analysis.avoid.push('Forced collaboration without autonomy');
    } else {
      analysis.avoid.push('Isolated work without team interaction');
    }

    // Environments
    if (allProcesses.includes('team') || allProcesses.includes('group') || allProcesses.includes('collaborate')) {
      analysis.environments.push('Collaborative team environments');
    }
    if (allProcesses.includes('fast') || allProcesses.includes('quick') || allProcesses.includes('urgent')) {
      analysis.environments.push('Fast-paced, dynamic workplaces');
    }
    if (allProcesses.includes('plan') || allProcesses.includes('organize') || allProcesses.includes('structure')) {
      analysis.environments.push('Well-organized, structured settings');
    }

    // Growth areas
    analysis.growth.push('Developing advanced leadership skills');
    analysis.growth.push('Expanding technical expertise');
    analysis.growth.push('Building stronger communication abilities');

    return { analysis, processData };
  };

  const { analysis, processData } = generateAnalysis();

  // Sample verbiage for Basic SEED Profile preview
  const sampleContent = {
    energizers: [
      "Leading teams and driving meaningful change in your organization.",
      "Creating innovative solutions that make a lasting impact."
    ],
    environments: [
      "Collaborative team settings where your voice is valued and heard.",
      "Dynamic workplaces that encourage growth and personal development."
    ],
    avoid: [
      "Micromanaged environments that stifle your natural creativity.",
      "Routine tasks without opportunity for strategic thinking."
    ],
    growth: [
      "Developing advanced leadership skills to amplify your natural influence.",
      "Expanding your expertise to become a recognized thought leader."
    ]
  };

  const handlePromoCodeSubmit = () => {
    if (promoCode.toUpperCase() === 'FREE') {
      setShowPremiumProfile(true);
      setShowPremiumUpgrade(false);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Please try again.');
    }
  };

  const handleUpgradeClick = () => {
    setShowPremiumUpgrade(true);
  };

  if (showPremiumProfile) {
    return (
      <PremiumSEEDProfile 
        analysis={analysis}
        deepDiveData={processData}
        onBack={() => setShowPremiumProfile(false)}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Button 
        onClick={onBack}
        variant="outline"
        className="border-sage-green text-forest-dark hover:bg-sage-green hover:text-white"
      >
        ← Back to Accomplishments
      </Button>

      {/* Initial Analysis Summary */}
      <Card className="border-2 border-sage-green/30 bg-gradient-to-br from-cream via-white to-sage-green/10 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-sage-green/10 to-warm-gold/10 border-b border-sage-green/20">
          <CardTitle className="text-2xl font-bold text-center text-forest-dark flex items-center justify-center gap-3">
            <Brain className="h-8 w-8 text-sage-green" />
            Your SEED Profile Analysis
            <span className="text-sm font-normal text-earth-brown ml-2">Inspired by Scripture</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <p className="text-lg text-forest-dark leading-relaxed">
              Based on your {Object.values(selectedWins).filter(Boolean).length} selected accomplishments and the detailed processes you described, 
              we've analyzed your natural motivational patterns and strengths.
            </p>
            
            <div className="bg-gradient-to-r from-warm-gold/20 via-sage-green/20 to-warm-gold/20 p-6 rounded-xl border border-warm-gold/30">
              <h3 className="text-xl font-bold text-forest-dark mb-4">Your Accomplishments Analysis</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-warm-gold text-2xl">{Object.values(selectedWins).filter(Boolean).length}</div>
                  <div className="text-earth-brown">Selected Wins</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-sage-green text-2xl">{processData.length}</div>
                  <div className="text-earth-brown">Detailed Processes</div>
                </div>
              </div>
            </div>

            {!showBasicProfile && (
              <Button 
                onClick={() => setShowBasicProfile(true)}
                className="bg-sage-green hover:bg-forest-dark text-white px-8 py-3 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Unlock className="h-5 w-5 mr-2" />
                Discover My Basic SEED Profile
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Basic SEED Profile Preview (always visible) */}
      <Card className="border-2 border-warm-gold/30 bg-gradient-to-br from-cream via-white to-warm-gold/10 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-warm-gold/10 to-sage-green/10 border-b border-warm-gold/20">
          <CardTitle className="text-2xl font-bold text-center text-forest-dark flex items-center justify-center gap-3">
            <Star className="h-8 w-8 text-warm-gold" />
            Basic SEED Profile Analysis
            {!showBasicProfile && <span className="text-sm font-normal text-earth-brown ml-2">(Preview)</span>}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid gap-8">
            {/* S - Satisfying Activities */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 shadow-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                Satisfying Activities (What Energizes You)
              </h3>
              <div className="space-y-3">
                {(showBasicProfile ? analysis.energizers : sampleContent.energizers).length > 0 ? 
                  (showBasicProfile ? analysis.energizers : sampleContent.energizers).map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/80 rounded-lg shadow-sm">
                      <Zap className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-forest-dark leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  )) : (
                    <p className="text-forest-dark p-4 bg-white/80 rounded-lg">
                      You find energy in making meaningful contributions and seeing tangible results from your efforts.
                      Your satisfaction comes from work that aligns with your values and creates positive change.
                    </p>
                  )}
              </div>
            </div>

            {/* E - Effective Environments */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 shadow-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                Effective Environments (Where You Thrive)
              </h3>
              <div className="space-y-3">
                {(showBasicProfile ? analysis.environments : sampleContent.environments).length > 0 ? 
                  (showBasicProfile ? analysis.environments : sampleContent.environments).map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/80 rounded-lg shadow-sm">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-forest-dark leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  )) : (
                    <p className="text-forest-dark p-4 bg-white/80 rounded-lg">
                      You thrive in environments that value both individual contribution and collaborative growth.
                      Settings that encourage innovation while providing clear direction bring out your best work.
                    </p>
                  )}
              </div>
            </div>

            {/* E - Environments to Avoid */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 shadow-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                Environments to Avoid (What Drains Your Energy)
              </h3>
              <div className="space-y-3">
                {(showBasicProfile ? analysis.avoid : sampleContent.avoid).length > 0 ? 
                  (showBasicProfile ? analysis.avoid : sampleContent.avoid).map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/80 rounded-lg shadow-sm">
                      <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-forest-dark leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  )) : (
                    <p className="text-forest-dark p-4 bg-white/80 rounded-lg">
                      You should avoid environments that lack clear purpose or prevent you from using your natural abilities.
                      Settings with excessive micromanagement or unclear expectations can drain your motivation and effectiveness.
                    </p>
                  )}
              </div>
            </div>

            {/* D - Development Areas */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200 shadow-lg">
              <h3 className="text-xl font-bold text-forest-dark mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                Development Areas (Growth Opportunities)
              </h3>
              <div className="space-y-3">
                {(showBasicProfile ? analysis.growth : sampleContent.growth).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/80 rounded-lg shadow-sm">
                    <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-forest-dark leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Upgrade Section */}
          {showBasicProfile && (
            <div className="mt-12 pt-8 border-t border-warm-gold/20">
              <div className="bg-gradient-to-br from-warm-gold/20 via-sage-green/20 to-warm-gold/20 p-8 rounded-2xl border border-warm-gold/30 shadow-xl">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Crown className="h-12 w-12 text-warm-gold" />
                    <h3 className="text-3xl font-bold text-forest-dark">Unlock Your Premium SEED Profile</h3>
                  </div>
                  
                  <p className="text-lg text-forest-dark leading-relaxed max-w-3xl mx-auto">
                    Your Basic profile reveals the foundation of your motivational patterns. The Premium version provides 
                    a comprehensive 10-page analysis with deep insights, specific career guidance, relationship patterns, 
                    and a personalized development roadmap designed to maximize your God-given potential.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="bg-white/70 p-6 rounded-xl border border-sage-green/30 shadow-lg">
                      <Award className="h-10 w-10 text-warm-gold mx-auto mb-3" />
                      <h4 className="font-bold text-forest-dark mb-2">10-Page Deep Dive</h4>
                      <p className="text-earth-brown text-sm">Comprehensive analysis with detailed insights into your unique motivational DNA</p>
                    </div>
                    <div className="bg-white/70 p-6 rounded-xl border border-sage-green/30 shadow-lg">
                      <Briefcase className="h-10 w-10 text-sage-green mx-auto mb-3" />
                      <h4 className="font-bold text-forest-dark mb-2">Career Guidance</h4>
                      <p className="text-earth-brown text-sm">Specific role recommendations and industry insights tailored to your profile</p>
                    </div>
                    <div className="bg-white/70 p-6 rounded-xl border border-sage-green/30 shadow-lg">
                      <BookOpen className="h-10 w-10 text-forest-dark mx-auto mb-3" />
                      <h4 className="font-bold text-forest-dark mb-2">Development Plan</h4>
                      <p className="text-earth-brown text-sm">Personalized roadmap for growth and maximizing your potential</p>
                    </div>
                  </div>

                  <Button 
                    onClick={handleUpgradeClick}
                    className="bg-gradient-to-r from-warm-gold to-amber-500 hover:from-amber-500 hover:to-warm-gold text-white px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Crown className="h-6 w-6 mr-2" />
                    Upgrade to Premium - TBD
                  </Button>

                  <p className="text-sm text-earth-brown">
                    Or enter promo code for special access
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Premium Upgrade Modal */}
      {showPremiumUpgrade && (
        <Card className="border-2 border-warm-gold/50 bg-gradient-to-br from-warm-gold/10 via-white to-sage-green/10 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-warm-gold/20 to-sage-green/20 border-b border-warm-gold/30">
            <CardTitle className="text-2xl font-bold text-center text-forest-dark flex items-center justify-center gap-3">
              <Crown className="h-8 w-8 text-warm-gold" />
              Unlock Premium SEED Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200">
                <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest-dark mb-4">Special Promo Code Access</h3>
                <p className="text-forest-dark mb-4">
                  Have a promo code? Enter it below to unlock your Premium SEED Profile for free!
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3 max-w-md mx-auto">
                    <Input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                        setPromoError('');
                      }}
                      className="border-sage-green focus:border-warm-gold"
                    />
                    <Button 
                      onClick={handlePromoCodeSubmit}
                      className="bg-sage-green hover:bg-forest-dark"
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {promoError && (
                    <p className="text-red-600 text-sm">{promoError}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Button 
                  onClick={() => setShowPremiumUpgrade(false)}
                  variant="outline"
                  className="border-sage-green text-forest-dark hover:bg-sage-green hover:text-white"
                >
                  Back to Basic Profile
                </Button>
                <Button 
                  className="bg-gradient-to-r from-warm-gold to-amber-500 hover:from-amber-500 hover:to-warm-gold text-white"
                  onClick={() => {
                    // Here you would integrate with your payment system
                    alert('Payment integration would go here');
                  }}
                >
                  Purchase Premium - TBD
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIAnalysis;
