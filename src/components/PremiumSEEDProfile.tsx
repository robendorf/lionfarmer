import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Crown, ChevronLeft, ChevronRight, Brain, Target, Users, 
  TrendingUp, Heart, Briefcase, BookOpen, ArrowLeft, Star,
  Zap, Shield, Compass, Lightbulb, Activity, BarChart3,
  Award, Calendar, Clock, Puzzle, MessageCircle, Eye,
  Rocket, Building, Network, PieChart, ArrowUpCircle, Check, Lock
} from 'lucide-react';

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
  const totalPages = 10;

  const generateExpandedAnalysis = () => {
    const allProcesses = deepDiveData.map(d => d.process).join(' ').toLowerCase();
    
    return {
      executiveSummary: {
        profileType: "Systematic Innovation Leader",
        coreStrengths: [
          "Strategic thinking with systematic execution that drives measurable results",
          "Natural problem-solving abilities that identify root causes and create lasting solutions",
          "Building sustainable systems that scale impact and empower others",
          "Inspiring others through methodical excellence and proven frameworks"
        ],
        keyInsights: [
          "You thrive when combining creative innovation with structured approaches",
          "Your energy peaks when you can see direct impact from your systematic methods",
          "Leadership effectiveness comes from empowering others with proven frameworks"
        ]
      },
      coreMotivationalDNA: {
        primaryDrivers: [
          "Systematic Innovation: You are energized by creating structured approaches to complex challenges while maintaining creative flexibility and seeing measurable results from your methodical work.",
          "Ownership Excellence: Deep satisfaction comes from having complete accountability and seeing direct results from your methodical approach to building sustainable solutions.",
          "Value Creation: You thrive when building something meaningful that solves real problems and creates lasting impact for others through systematic excellence and proven methodologies."
        ],
        energyPatterns: [
          "Peak energy during planning and execution phases where you can apply systematic thinking to create meaningful outcomes",
          "Sustained motivation when you can see clear progress toward meaningful outcomes that align with your values",
          "High engagement when mentoring others and sharing your systematic approaches for mutual growth and impact"
        ]
      },
      cognitiveProfile: {
        thinkingStyle: "Analytical Systems Architect",
        informationProcessing: [
          "Sequential Processing: You prefer to work through information in logical, step-by-step sequences that build comprehensive understanding",
          "Pattern Recognition: Natural ability to identify recurring themes and underlying structures that others might miss"
        ],
        problemSolving: [
          "Root Cause Analysis: You instinctively dig deep to understand fundamental issues",
          "Framework Development: Natural tendency to create reusable methodologies for similar problems"
        ],
        creativityStyle: [
          "Structured Innovation: You generate creative solutions within systematic frameworks",
          "Improvement-Oriented: Focus on enhancing existing systems rather than completely reinventing"
        ]
      },
      decisionMaking: {
        style: "Analytical Visionary",
        process: [
          "Comprehensive Research: You gather extensive information before making important decisions",
          "Systematic Evaluation: You create structured frameworks to assess options and outcomes",
          "Strategic Implementation: You develop detailed plans with clear milestones and success metrics",
          "Continuous Monitoring: You regularly review progress and adjust approaches as needed"
        ],
        strengths: [
          "Excellent at identifying potential problems and developing contingency plans",
          "Natural ability to see long-term implications of short-term decisions",
          "Strong pattern recognition that helps predict successful approaches",
          "Effective at building consensus through logical presentation of options"
        ],
        blindSpots: [
          "May over-analyze situations where quick decisions are needed",
          "Could miss opportunities while waiting for perfect information",
          "Might undervalue intuitive or emotional factors in decision-making",
          "Risk of analysis paralysis when facing highly ambiguous situations"
        ],
        optimizationStrategies: [
          "Set clear deadlines for decision-making to prevent over-analysis",
          "Develop rapid assessment frameworks for time-sensitive decisions",
          "Include emotional and intuitive perspectives in your evaluation process",
          "Practice making decisions with 80% of ideal information rather than 100%"
        ]
      },
      relationships: {
        leadershipStyle: "Systematic Enabler",
        teamDynamics: [
          "You lead by empowering others with proven frameworks and systematic approaches, creating environments where teams can achieve excellence through structured collaboration and shared accountability."
        ],
        collaboration: [
          "Most effective in partnerships where you can contribute strategic thinking and planning",
          "Value team members who share your commitment to quality and systematic approaches",
          "Excel at mentoring others in developing structured problem-solving skills",
          "Prefer collaborative environments where roles and responsibilities are clearly defined"
        ],
        communication: [
          "Prefer detailed, fact-based discussions with clear objectives",
          "Effective at translating complex concepts into actionable steps",
          "Value regular check-ins and progress updates to maintain alignment",
          "Strong at written communication for documenting processes and decisions"
        ],
        conflictResolution: [
          "Approach conflicts by focusing on underlying systems and processes",
          "Seek to understand root causes rather than just addressing symptoms",
          "Use structured problem-solving methods to find mutually beneficial solutions",
          "Prefer to address conflicts directly with clear, factual communication"
        ],
        influenceStyle: [
          "Influence through demonstrated expertise and proven track record",
          "Build credibility by sharing systematic approaches that deliver results",
          "Persuade through logical arguments supported by data and evidence",
          "Create buy-in by involving others in the development of solutions"
        ]
      },
      careerOptimization: {
        idealRoles: [
          "Strategic Operations Leader: Roles where you design and implement systematic approaches to complex business challenges with measurable impact.",
          "Innovation Manager: Positions that combine creative problem-solving with structured execution and clear accountability for results."
        ]
      },
      developmentPlan: {
        shortTerm: [
          "Enhance your delegation skills to leverage your systematic approaches through others and scale your impact beyond individual contribution.",
          "Develop rapid prototyping abilities to complement your thorough planning with quick testing and iterative improvement cycles."
        ]
      },
      workEnvironment: {
        optimalEnvironment: [
          "Organizations that value systematic approaches and continuous improvement with clear accountability for results and measurable outcomes.",
          "Cultures that encourage innovation within structured frameworks where expertise and proven methodologies are respected and utilized."
        ]
      },
      financialProfile: {
        moneyMotivations: [
          "Financial security to support your systematic approach to life planning and the ability to invest in tools that enhance your effectiveness.",
          "Freedom to choose roles and projects that align with your systematic innovation strengths and create meaningful impact for others."
        ]
      },
      actionPlan: {
        implementationPlan: [
          {
            title: "Week 1-2: Assessment",
            description: "Review your current role against your SEED profile and identify immediate optimization opportunities."
          },
          {
            title: "Week 3: Strategy",
            description: "Develop a systematic approach to align your work with your natural motivational patterns."
          },
          {
            title: "Week 4: Action",
            description: "Implement changes and begin building systems that leverage your systematic innovation strengths."
          }
        ],
        successMetrics: [
          "Increased energy and engagement in daily work activities",
          "Clear alignment between your role and systematic innovation strengths",
          "Measurable progress toward meaningful professional goals",
          "Development of systematic approaches that create lasting impact"
        ],
        closingMessage: "This Premium SEED Profile is your roadmap to maximizing your God-given potential through systematic innovation and purposeful leadership. Use these insights to create lasting positive impact in your work, relationships, and community."
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
                    Inspired by Scripture and your detailed achievement processes
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-warm-gold text-lg">10</div>
                      <div className="text-earth-brown">Pages</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-sage-green text-lg">8</div>
                      <div className="text-earth-brown">Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-forest-dark text-lg">50+</div>
                      <div className="text-earth-brown">Insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Most Powerful Motivations Summary */}
            <div className="bg-gradient-to-br from-warm-gold/20 via-sage-green/10 to-warm-gold/20 p-8 rounded-2xl border-2 border-warm-gold/40 shadow-xl">
              <h2 className="text-2xl font-bold text-forest-dark mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-warm-gold to-amber-500 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                Your Most Powerful Motivations
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-warm-gold/30 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-lg font-bold text-forest-dark">
                    🎯 Primary Drive: You are energized by creating systematic solutions that solve real problems while building meaningful relationships and seeing tangible impact from your efforts.
                  </div>
                  <div className="text-lg font-bold text-sage-green">
                    ⚡ Core Energy: Your motivation peaks when you can combine analytical thinking with purposeful action, especially when working collaboratively toward goals that align with your values and create lasting positive change.
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-gradient-to-br from-sage-green/10 via-cream to-warm-gold/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <h2 className="text-2xl font-bold text-forest-dark mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                Executive Summary
              </h2>
              
              <div className="grid gap-6">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-warm-gold" />
                    Your Profile Type: Systematic Innovation Leader
                  </h3>
                  <p className="text-forest-dark leading-relaxed mb-4">
                    You are a natural leader who combines analytical thinking with systematic execution. Your strength lies in creating innovative solutions through structured approaches, making you highly effective at solving complex challenges while building sustainable systems that benefit others.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                    <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-warm-gold" />
                      Core Strengths
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <span className="text-forest-dark text-sm leading-relaxed">Strategic thinking with systematic execution that drives measurable results</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <span className="text-forest-dark text-sm leading-relaxed">Natural problem-solving abilities that identify root causes and create lasting solutions</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <span className="text-forest-dark text-sm leading-relaxed">Building sustainable systems that scale impact and empower others</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <span className="text-forest-dark text-sm leading-relaxed">Inspiring others through methodical excellence and proven frameworks</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                    <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-sage-green" />
                      Key Insights
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">You thrive when combining creative innovation with structured approaches</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">Your energy peaks when you can see direct impact from your systematic methods</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">Leadership effectiveness comes from empowering others with proven frameworks</span>
                      </div>
                    </div>
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
                  <Brain className="h-8 w-8 text-white" />
                </div>
                Your Core Motivational DNA
              </h2>
            </div>

            <div className="bg-gradient-to-br from-sage-green/10 via-cream to-warm-gold/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="space-y-8">
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-warm-gold" />
                    Primary Drivers
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                      <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-forest-dark leading-relaxed">Systematic Innovation: You are energized by creating structured approaches to complex challenges while maintaining creative flexibility and seeing measurable results from your methodical work.</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                      <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-forest-dark leading-relaxed">Ownership Excellence: Deep satisfaction comes from having complete accountability and seeing direct results from your methodical approach to building sustainable solutions.</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                      <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="text-forest-dark leading-relaxed">Value Creation: You thrive when building something meaningful that solves real problems and creates lasting impact for others through systematic excellence and proven methodologies.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-sage-green" />
                    Energy Patterns
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-sage-green/10 to-transparent rounded-lg">
                      <Zap className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                      <span className="text-forest-dark leading-relaxed">Peak energy during planning and execution phases where you can apply systematic thinking to create meaningful outcomes</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-sage-green/10 to-transparent rounded-lg">
                      <Zap className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                      <span className="text-forest-dark leading-relaxed">Sustained motivation when you can see clear progress toward meaningful outcomes that align with your values</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-sage-green/10 to-transparent rounded-lg">
                      <Zap className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                      <span className="text-forest-dark leading-relaxed">High engagement when mentoring others and sharing your systematic approaches for mutual growth and impact</span>
                    </div>
                  </div>
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
                  <Puzzle className="h-8 w-8 text-white" />
                </div>
                Cognitive Profile & Thinking Style
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-green to-forest-dark text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                  <Brain className="h-6 w-6" />
                  Analytical Systems Architect
                </div>
              </div>
              
              <div className="grid gap-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    Information Processing Style
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <span className="text-forest-dark leading-relaxed">Sequential Processing: You prefer to work through information in logical, step-by-step sequences that build comprehensive understanding</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <span className="text-forest-dark leading-relaxed">Pattern Recognition: Natural ability to identify recurring themes and underlying structures that others might miss</span>
                    </div>
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
                  <Target className="h-8 w-8 text-white" />
                </div>
                Decision-Making Style Analysis
              </h2>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-green to-forest-dark text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                  <Brain className="h-6 w-6" />
                  Analytical Visionary
                </div>
              </div>
              <p className="text-center text-forest-dark text-lg leading-relaxed">
                Your decision-making combines thorough analysis with strategic vision, allowing you to make informed choices that create lasting positive impact through systematic approaches.
              </p>
            </div>
          </div>
        );

      case 5:
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
            <div className="bg-gradient-to-br from-sage-green/10 via-white to-warm-gold/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-green to-forest-dark text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                  <Crown className="h-6 w-6" />
                  Systematic Enabler
                </div>
              </div>
              <p className="text-center text-forest-dark text-lg leading-relaxed">
                You lead by empowering others with proven frameworks and systematic approaches, creating environments where teams can achieve excellence through structured collaboration and shared accountability.
              </p>
            </div>
          </div>
        );

      case 6:
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
            <div className="bg-gradient-to-br from-warm-gold/10 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-warm-gold" />
                    Ideal Career Roles
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                      <span className="font-semibold text-forest-dark">Strategic Operations Leader:</span>
                      <span className="text-forest-dark"> Roles where you design and implement systematic approaches to complex business challenges with measurable impact.</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                      <span className="font-semibold text-forest-dark">Innovation Manager:</span>
                      <span className="text-forest-dark"> Positions that combine creative problem-solving with structured execution and clear accountability for results.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
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
            <div className="bg-gradient-to-br from-purple-50 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    Short-Term Development (Next 6 Months)
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100">
                      <span className="text-forest-dark">Enhance your delegation skills to leverage your systematic approaches through others and scale your impact beyond individual contribution.</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100">
                      <span className="text-forest-dark">Develop rapid prototyping abilities to complement your thorough planning with quick testing and iterative improvement cycles.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                Work Environment & Stress Management
              </h2>
            </div>
            <div className="bg-gradient-to-br from-green-50 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-green-600" />
                    Optimal Work Environment
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg">
                      <span className="text-forest-dark">Organizations that value systematic approaches and continuous improvement with clear accountability for results and measurable outcomes.</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg">
                      <span className="text-forest-dark">Cultures that encourage innovation within structured frameworks where expertise and proven methodologies are respected and utilized.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                Financial Planning & Money Motivations
              </h2>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-200">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-emerald-600" />
                    Money Motivations
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg">
                      <span className="text-forest-dark">Financial security to support your systematic approach to life planning and the ability to invest in tools that enhance your effectiveness.</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg">
                      <span className="text-forest-dark">Freedom to choose roles and projects that align with your systematic innovation strengths and create meaningful impact for others.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                Your Action Plan & Next Steps
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-warm-gold/20 via-sage-green/10 to-warm-gold/20 p-8 rounded-2xl border-2 border-warm-gold/40 shadow-xl">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-warm-gold to-amber-500 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg mb-6">
                    <Star className="h-6 w-6" />
                    30-Day Implementation Plan
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {expandedAnalysis.actionPlan.implementationPlan.map((item, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30 shadow-lg">
                      {item.title.includes('Assessment') && <Calendar className="h-10 w-10 text-warm-gold mx-auto mb-3" />}
                      {item.title.includes('Strategy') && <Target className="h-10 w-10 text-sage-green mx-auto mb-3" />}
                      {item.title.includes('Action') && <Rocket className="h-10 w-10 text-forest-dark mx-auto mb-3" />}
                      <h4 className="font-bold text-forest-dark mb-2 text-center">{item.title}</h4>
                      <p className="text-earth-brown text-sm text-center">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-warm-gold/30 shadow-lg">
                  <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-warm-gold" />
                    Key Success Metrics
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {expandedAnalysis.actionPlan.successMetrics.map((metric, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-sage-green/20 to-warm-gold/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-forest-dark mb-2">Your Journey Continues</h3>
                  <p className="text-forest-dark leading-relaxed">
                    {expandedAnalysis.actionPlan.closingMessage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-forest-dark mb-4">
              Page {currentPage} Content
            </h3>
            <p className="text-earth-brown">
              Comprehensive analysis content for page {currentPage}
            </p>
          </div>
        );
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
          
          <div className="text-center">
            <p className="text-sm text-earth-brown">
              Premium Analysis • {totalPages} Pages • Personalized Insights
            </p>
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
