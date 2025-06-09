
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Crown, ChevronLeft, ChevronRight, Brain, Target, Users, 
  TrendingUp, Heart, Briefcase, BookOpen, ArrowLeft, Star,
  Zap, Shield, Compass, Lightbulb, Activity, Download
} from 'lucide-react';
import { generateSEEDProfilePDF } from '../utils/pdfGenerator';
import { useToast } from '@/hooks/use-toast';

interface PremiumSEEDProfileProps {
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
  onBack: () => void;
}

const PremiumSEEDProfile: React.FC<PremiumSEEDProfileProps> = ({
  analysis,
  deepDiveData,
  onBack
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const { toast } = useToast();

  const handleDownloadPDF = () => {
    const pdf = generateSEEDProfilePDF(analysis, deepDiveData, true);
    pdf.save(`SEED-Profile-Premium-${new Date().toISOString().split('T')[0]}.pdf`);
    
    toast({
      title: "PDF Downloaded",
      description: "Your Premium SEED Profile has been downloaded successfully!"
    });
  };

  const generateExpandedAnalysis = () => {
    const allProcesses = deepDiveData.map(d => d.process).join(' ').toLowerCase();
    
    return {
      coreMotivationalDNA: {
        primaryDrivers: [
          "Systematic Innovation: You are energized by creating structured approaches to complex challenges while maintaining creative flexibility",
          "Ownership Excellence: Deep satisfaction comes from having complete accountability and seeing direct results from your methodical approach",
          "Value Creation: You thrive when building something meaningful that solves real problems and creates lasting impact for others"
        ],
        energyPatterns: [
          "Peak energy during planning and execution phases where you can apply systematic thinking",
          "Sustained motivation when you can see clear progress toward meaningful outcomes",
          "Renewed enthusiasm when facing complex challenges that require innovative solutions"
        ],
        stressIndicators: [
          "Energy drain in highly micromanaged environments that limit your autonomy",
          "Frustration when forced to work without adequate planning or preparation time",
          "Burnout risk in roles where you cannot see the impact of your systematic approach"
        ]
      },
      decisionMaking: {
        style: "Analytical Visionary",
        process: [
          "Comprehensive Research: You gather extensive information before making important decisions",
          "Systematic Evaluation: You create structured frameworks to assess options and outcomes",
          "Strategic Implementation: You develop detailed plans with clear milestones and success metrics"
        ],
        strengths: [
          "Excellent at identifying potential problems and developing contingency plans",
          "Natural ability to see long-term implications of short-term decisions",
          "Strong pattern recognition that helps predict successful approaches"
        ],
        blindSpots: [
          "May over-analyze situations where quick decisions are needed",
          "Could miss opportunities while waiting for perfect information",
          "Might undervalue intuitive or emotional factors in decision-making"
        ]
      },
      relationships: {
        leadershipStyle: "Systematic Enabler",
        teamDynamics: [
          "You lead by example, demonstrating thorough preparation and methodical execution",
          "You empower others by sharing your systematic approaches and frameworks",
          "You build trust through consistent delivery and transparent communication"
        ],
        collaboration: [
          "Most effective in partnerships where you can contribute strategic thinking and planning",
          "Value team members who share your commitment to quality and systematic approaches",
          "Excel at mentoring others in developing structured problem-solving skills"
        ],
        communication: [
          "Prefer detailed, fact-based discussions with clear objectives",
          "Effective at translating complex concepts into actionable steps",
          "Value regular check-ins and progress updates to maintain alignment"
        ]
      },
      careerOptimization: {
        idealRoles: [
          "Strategic Operations Leader: Roles where you design and implement systematic approaches to complex business challenges",
          "Innovation Manager: Positions that combine creative problem-solving with structured execution and measurable outcomes",
          "Entrepreneurial Executive: Leadership roles in growing organizations where you can build systems and see direct impact"
        ],
        industryFit: [
          "Technology and Innovation: Where systematic approaches to complex problems are highly valued",
          "Consulting and Strategy: Where your analytical skills and systematic thinking directly impact client success",
          "Entrepreneurship and Startups: Where you can build systems from the ground up and see immediate impact"
        ],
        avoidanceZones: [
          "Highly bureaucratic organizations with rigid processes that cannot be improved or customized",
          "Roles focused purely on maintenance without opportunities for innovation or improvement",
          "Positions where success is measured solely on relationship-building rather than systematic achievement"
        ]
      },
      developmentPlan: {
        shortTerm: [
          "Enhance your delegation skills to leverage your systematic approaches through others",
          "Develop rapid prototyping abilities to complement your thorough planning with quick testing",
          "Strengthen your networking to create opportunities for applying your systematic innovation"
        ],
        longTerm: [
          "Build a portfolio of proven methodologies that you can apply across different contexts",
          "Develop thought leadership in your area of systematic innovation through speaking and writing",
          "Create mentorship programs to scale your impact by developing others' systematic thinking skills"
        ],
        skillBuilding: [
          "Advanced project management methodologies to enhance your natural systematic approach",
          "Design thinking principles to add creative frameworks to your analytical strengths",
          "Change management skills to help organizations adopt your innovative systematic approaches"
        ]
      }
    };
  };

  const expandedAnalysis = generateExpandedAnalysis();

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/20 via-sage-green/20 to-warm-gold/20 rounded-2xl"></div>
              <div className="relative z-10 py-12 px-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-warm-gold to-amber-500 rounded-full shadow-lg">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-forest-dark via-sage-green to-warm-gold bg-clip-text text-transparent">
                    Premium SEED Profile
                  </h1>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <p className="text-xl text-forest-dark mb-2 font-semibold">
                    Comprehensive Motivational Pattern Analysis
                  </p>
                  <p className="text-earth-brown">
                    Based on SIMA methodology and your detailed achievement processes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sage-green/10 via-cream to-warm-gold/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <h2 className="text-2xl font-bold text-forest-dark mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                Your Core Motivational DNA
              </h2>
              
              <div className="grid gap-6">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-warm-gold" />
                    Primary Drivers
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.coreMotivationalDNA.primaryDrivers.map((driver, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                        <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-forest-dark leading-relaxed">{driver}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-sage-green" />
                    Energy Patterns
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.coreMotivationalDNA.energyPatterns.map((pattern, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-sage-green/10 to-transparent rounded-lg">
                        <Zap className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark leading-relaxed">{pattern}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-red-200">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-500" />
                    Stress Indicators
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.coreMotivationalDNA.stressIndicators.map((indicator, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100">
                        <Shield className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark leading-relaxed">{indicator}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                Decision-Making Style Analysis
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-green to-forest-dark text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                  <Brain className="h-6 w-6" />
                  {expandedAnalysis.decisionMaking.style}
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Compass className="h-5 w-5 text-sage-green" />
                    Decision Process
                  </h4>
                  <div className="space-y-4">
                    {expandedAnalysis.decisionMaking.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-sage-green to-forest-dark text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-forest-dark leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-warm-gold" />
                    Core Strengths
                  </h4>
                  <div className="space-y-3">
                    {expandedAnalysis.decisionMaking.strengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                        <Star className="h-5 w-5 text-warm-gold mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark leading-relaxed">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-amber-50/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200">
                <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  Areas for Awareness
                </h4>
                <div className="space-y-3">
                  {expandedAnalysis.decisionMaking.blindSpots.map((blindSpot, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                      <Compass className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-forest-dark leading-relaxed">{blindSpot}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                Relationship & Leadership Patterns
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-sage-green/10 via-white to-warm-gold/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-green to-forest-dark text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                    <Crown className="h-6 w-6" />
                    {expandedAnalysis.relationships.leadershipStyle}
                  </div>
                </div>
                <div className="space-y-4">
                  {expandedAnalysis.relationships.teamDynamics.map((dynamic, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-sage-green/20">
                      <div className="w-8 h-8 bg-gradient-to-r from-warm-gold to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Crown className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-forest-dark leading-relaxed">{dynamic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200 shadow-lg">
                  <h3 className="text-lg font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-purple-600" />
                    Collaboration Style
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.relationships.collaboration.map((pref, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <Heart className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">{pref}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200 shadow-lg">
                  <h3 className="text-lg font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Communication Preferences
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.relationships.communication.map((style, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <Users className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">{style}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                Career Optimization Guide
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200 shadow-xl">
                <h3 className="text-xl font-bold text-forest-dark mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                  Ideal Role Profiles
                </h3>
                <div className="space-y-4">
                  {expandedAnalysis.careerOptimization.idealRoles.map((role, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-sage-green rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-forest-dark leading-relaxed font-medium">{role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200 shadow-lg">
                  <h3 className="text-lg font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    Industry Sweet Spots
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.careerOptimization.industryFit.map((industry, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-forest-dark text-sm leading-relaxed">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-200 shadow-lg">
                  <h3 className="text-lg font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    Career Pitfalls to Avoid
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.careerOptimization.avoidanceZones.map((zone, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <Shield className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">{zone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                Personal Development Roadmap
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200 shadow-xl">
                <h3 className="text-xl font-bold text-forest-dark mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6 text-amber-600" />
                  Short-Term Focus (3-6 months)
                </h3>
                <div className="grid gap-4">
                  {expandedAnalysis.developmentPlan.shortTerm.map((goal, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-warm-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-forest-dark leading-relaxed">{goal}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-sage-green/10 to-white p-8 rounded-2xl border border-sage-green/20 shadow-xl">
                <h3 className="text-xl font-bold text-forest-dark mb-6 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-sage-green" />
                  Long-Term Vision (1-3 years)
                </h3>
                <div className="grid gap-4">
                  {expandedAnalysis.developmentPlan.longTerm.map((vision, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-sage-green to-forest-dark rounded-full flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-forest-dark leading-relaxed">{vision}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 shadow-xl">
                <h3 className="text-xl font-bold text-forest-dark mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  Skill Building Priorities
                </h3>
                <div className="grid gap-4">
                  {expandedAnalysis.developmentPlan.skillBuilding.map((skill, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-purple-200 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-forest-dark leading-relaxed">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                Your Action Plan & Next Steps
              </h2>
            </div>

            <div className="bg-gradient-to-br from-warm-gold/10 via-cream to-sage-green/10 p-8 rounded-2xl border border-warm-gold/30 shadow-xl">
              <h3 className="text-2xl font-bold text-forest-dark mb-8 text-center">Your 30-60-90 Day Implementation Plan</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-warm-gold/30 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-warm-gold to-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-lg">30</span>
                    </div>
                    <h4 className="font-bold text-forest-dark">First 30 Days</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-forest-dark">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-warm-gold rounded-full mt-2 flex-shrink-0"></div>
                      Audit current role against ideal environment criteria
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-warm-gold rounded-full mt-2 flex-shrink-0"></div>
                      Identify 3 systematic improvements you can implement
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-warm-gold rounded-full mt-2 flex-shrink-0"></div>
                      Begin documenting your proven methodologies
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-sage-green to-forest-dark rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-lg">60</span>
                    </div>
                    <h4 className="font-bold text-forest-dark">Next 30 Days</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-forest-dark">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      Implement one systematic improvement project
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      Start networking with innovation-focused professionals
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      Practice delegation using your systematic frameworks
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-forest-dark/30 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-forest-dark to-sage-green rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-lg">90</span>
                    </div>
                    <h4 className="font-bold text-forest-dark">Following 30 Days</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-forest-dark">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-forest-dark rounded-full mt-2 flex-shrink-0"></div>
                      Evaluate progress and refine your approach
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-forest-dark rounded-full mt-2 flex-shrink-0"></div>
                      Seek feedback on your systematic innovations
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-forest-dark rounded-full mt-2 flex-shrink-0"></div>
                      Plan next phase of development or career moves
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sage-green/10 to-white p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <h3 className="text-xl font-bold text-forest-dark mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-sage-green" />
                Key Success Indicators
              </h3>
              <div className="grid gap-4">
                {[
                  "You feel energized by your daily work and see clear progress",
                  "Others seek your systematic approach for solving complex problems",
                  "You're building systems and processes that create lasting value"
                ].map((indicator, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-sage-green/20">
                    <div className="w-8 h-8 bg-gradient-to-r from-sage-green to-forest-dark rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-forest-dark leading-relaxed">{indicator}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-warm-gold/20 to-sage-green/20 p-8 rounded-2xl border border-warm-gold/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="h-6 w-6 text-warm-gold" />
                <Lightbulb className="h-6 w-6 text-sage-green" />
                <Star className="h-6 w-6 text-warm-gold" />
              </div>
              <p className="text-forest-dark italic text-lg font-medium">
                Remember: Your SEED Profile is a living document. Revisit and refine it as you grow and gain new experiences.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="border-2 border-warm-gold/30 bg-gradient-to-br from-cream via-white to-sage-green/10 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-warm-gold/10 to-sage-green/10 border-b border-warm-gold/20">
        <div className="flex items-center justify-between">
          <Button 
            onClick={onBack}
            variant="outline"
            size="sm"
            className="border-sage-green text-forest-dark hover:bg-sage-green hover:text-white transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Overview
          </Button>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleDownloadPDF}
              className="bg-warm-gold hover:bg-earth-brown text-white shadow-lg transition-all duration-200"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Premium PDF
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-forest-dark font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all duration-200 ${
                      i + 1 === currentPage ? 'bg-warm-gold w-6' : 'bg-sage-green/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-8">
        <div className="min-h-[700px]">
          {renderPage()}
        </div>
        
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-sage-green/20">
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant="outline"
            className="border-sage-green text-forest-dark hover:bg-sage-green hover:text-white disabled:opacity-50 transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="text-center flex items-center gap-4">
            <p className="text-sm text-earth-brown">
              Premium Analysis • {totalPages} Pages • Personalized Insights
            </p>
            <Button 
              onClick={handleDownloadPDF}
              size="sm"
              className="bg-warm-gold hover:bg-earth-brown text-white shadow-lg transition-all duration-200"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
          
          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="bg-sage-green hover:bg-forest-dark disabled:opacity-50 transition-all duration-200"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PremiumSEEDProfile;
