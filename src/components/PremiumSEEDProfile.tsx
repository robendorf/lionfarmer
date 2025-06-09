import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Crown, ChevronLeft, ChevronRight, Brain, Target, Users, 
  TrendingUp, Heart, Briefcase, BookOpen, ArrowLeft, Star,
  Zap, Shield, Compass, Lightbulb, Activity, BarChart3,
  Award, Calendar, Clock, Puzzle, MessageCircle, Eye,
  Rocket, Building, Network, PieChart, ArrowUpCircle
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
  const totalPages = 15;

  const generateExpandedAnalysis = () => {
    const allProcesses = deepDiveData.map(d => d.process).join(' ').toLowerCase();
    
    return {
      executiveSummary: {
        profileType: "Systematic Innovation Leader",
        coreStrengths: [
          "Strategic thinking with systematic execution",
          "Natural problem-solving and pattern recognition",
          "Building sustainable systems and processes",
          "Inspiring others through methodical excellence"
        ],
        keyInsights: [
          "You thrive when combining creative innovation with structured approaches",
          "Your energy peaks when you can see direct impact from your systematic methods",
          "Leadership effectiveness comes from empowering others with proven frameworks"
        ]
      },
      coreMotivationalDNA: {
        primaryDrivers: [
          "Systematic Innovation: You are energized by creating structured approaches to complex challenges while maintaining creative flexibility",
          "Ownership Excellence: Deep satisfaction comes from having complete accountability and seeing direct results from your methodical approach",
          "Value Creation: You thrive when building something meaningful that solves real problems and creates lasting impact for others",
          "Knowledge Mastery: You are motivated by continuously learning and developing expertise in your areas of focus"
        ],
        energyPatterns: [
          "Peak energy during planning and execution phases where you can apply systematic thinking",
          "Sustained motivation when you can see clear progress toward meaningful outcomes",
          "Renewed enthusiasm when facing complex challenges that require innovative solutions",
          "High engagement when mentoring others and sharing your systematic approaches"
        ],
        stressIndicators: [
          "Energy drain in highly micromanaged environments that limit your autonomy",
          "Frustration when forced to work without adequate planning or preparation time",
          "Burnout risk in roles where you cannot see the impact of your systematic approach",
          "Tension when working with people who consistently resist structured methodologies"
        ],
        motivationalTriggers: [
          "Being asked to solve complex, multi-faceted problems",
          "Opportunities to design and implement new systems",
          "Recognition for the effectiveness of your methodical approaches",
          "Chances to teach and develop others' capabilities"
        ]
      },
      cognitiveProfile: {
        thinkingStyle: "Analytical Systems Architect",
        informationProcessing: [
          "Sequential Processing: You prefer to work through information in logical, step-by-step sequences",
          "Pattern Recognition: Natural ability to identify recurring themes and underlying structures",
          "Systematic Integration: Excellent at combining multiple data points into comprehensive frameworks",
          "Future-Focused Analysis: Strong capability to project current patterns into future scenarios"
        ],
        problemSolving: [
          "Root Cause Analysis: You instinctively dig deep to understand fundamental issues",
          "Framework Development: Natural tendency to create reusable methodologies for similar problems",
          "Risk Assessment: Thorough evaluation of potential obstacles and mitigation strategies",
          "Solution Testing: Preference for piloting and refining approaches before full implementation"
        ],
        creativityStyle: [
          "Structured Innovation: You generate creative solutions within systematic frameworks",
          "Improvement-Oriented: Focus on enhancing existing systems rather than completely reinventing",
          "Collaborative Ideation: Most creative when building on others' ideas with your analytical insights",
          "Practical Creativity: Ideas are always filtered through feasibility and implementation considerations"
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
          "You lead by example, demonstrating thorough preparation and methodical execution",
          "You empower others by sharing your systematic approaches and frameworks",
          "You build trust through consistent delivery and transparent communication",
          "You create psychological safety by providing clear structure and expectations"
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
          "Strategic Operations Leader: Roles where you design and implement systematic approaches to complex business challenges",
          "Innovation Manager: Positions that combine creative problem-solving with structured execution and measurable outcomes",
          "Entrepreneurial Executive: Leadership roles in growing organizations where you can build systems and see direct impact",
          "Management Consultant: Helping organizations optimize their processes and systems for better performance",
          "Product Development Director: Leading teams to create innovative solutions through systematic development processes"
        ],
        industryFit: [
          "Technology and Innovation: Where systematic approaches to complex problems are highly valued",
          "Consulting and Strategy: Where your analytical skills and systematic thinking directly impact client success",
          "Entrepreneurship and Startups: Where you can build systems from the ground up and see immediate impact",
          "Manufacturing and Operations: Where process optimization and systematic improvements drive success",
          "Healthcare and Life Sciences: Where systematic approaches to complex challenges can save lives and improve outcomes"
        ],
        avoidanceZones: [
          "Highly bureaucratic organizations with rigid processes that cannot be improved or customized",
          "Roles focused purely on maintenance without opportunities for innovation or improvement",
          "Positions where success is measured solely on relationship-building rather than systematic achievement",
          "Environments with constantly changing priorities that prevent systematic approach development",
          "Organizations that resist data-driven decision making and systematic process improvements"
        ],
        careerProgression: [
          "Start in roles that allow you to demonstrate your systematic problem-solving abilities",
          "Seek opportunities to lead process improvement or innovation initiatives",
          "Build a reputation as someone who can tackle complex, multi-faceted challenges",
          "Move into leadership roles where you can scale your systematic approaches through others",
          "Consider entrepreneurial opportunities where you can build systems from the ground up"
        ]
      },
      developmentPlan: {
        shortTerm: [
          "Enhance your delegation skills to leverage your systematic approaches through others",
          "Develop rapid prototyping abilities to complement your thorough planning with quick testing",
          "Strengthen your networking to create opportunities for applying your systematic innovation",
          "Practice making decisions with incomplete information to improve agility",
          "Build presentation skills to better communicate your systematic insights to diverse audiences"
        ],
        longTerm: [
          "Build a portfolio of proven methodologies that you can apply across different contexts",
          "Develop thought leadership in your area of systematic innovation through speaking and writing",
          "Create mentorship programs to scale your impact by developing others' systematic thinking skills",
          "Establish yourself as a go-to expert for complex problem-solving in your industry",
          "Consider starting your own consulting practice or business based on your systematic approaches"
        ],
        skillBuilding: [
          "Advanced project management methodologies to enhance your natural systematic approach",
          "Design thinking principles to add creative frameworks to your analytical strengths",
          "Change management skills to help organizations adopt your innovative systematic approaches",
          "Data analytics and visualization tools to better support your systematic insights",
          "Executive communication skills to effectively present your ideas to senior leadership"
        ],
        experientialLearning: [
          "Lead a cross-functional project that requires systematic coordination of diverse teams",
          "Take on a role in a startup environment to experience building systems from scratch",
          "Volunteer to lead a process improvement initiative in your current organization",
          "Participate in consulting projects to practice applying your systematic approaches in new contexts",
          "Join professional associations related to your field to network with other systematic thinkers"
        ]
      },
      workEnvironment: {
        physicalSpace: [
          "Organized workspace with systems for managing information and projects",
          "Access to whiteboards or digital tools for mapping out complex problems",
          "Quiet space for deep thinking and analysis when needed",
          "Collaborative areas for team meetings and systematic problem-solving sessions"
        ],
        culturalFit: [
          "Organizations that value systematic approaches and continuous improvement",
          "Cultures that encourage innovation within structured frameworks",
          "Environments where expertise and proven methodologies are respected",
          "Teams that appreciate thorough planning and methodical execution"
        ],
        managementStyle: [
          "Managers who provide clear objectives and then give autonomy in approach",
          "Leaders who value systematic thinking and data-driven decision making",
          "Supervisors who recognize and reward methodical excellence and innovation",
          "Management that encourages process improvement and systematic optimization"
        ],
        teamComposition: [
          "Mix of analytical thinkers and creative contributors who complement your systematic approach",
          "Team members who appreciate structure and are willing to follow proven methodologies",
          "Colleagues who share your commitment to quality and continuous improvement",
          "Diverse perspectives that can challenge and refine your systematic approaches"
        ]
      },
      stressManagement: {
        stressTriggers: [
          "Constantly changing priorities that prevent systematic approach development",
          "Micromanagement that limits your autonomy in developing and implementing solutions",
          "Pressure to make quick decisions without adequate analysis or planning time",
          "Working with people who consistently resist systematic approaches or structured methodologies"
        ],
        copingStrategies: [
          "Develop flexible frameworks that can adapt to changing circumstances",
          "Create rapid assessment tools for situations requiring quick decisions",
          "Build strong relationships with stakeholders to reduce resistance to your approaches",
          "Establish clear boundaries around planning and preparation time needed for complex projects"
        ],
        resilienceBuilding: [
          "Practice mindfulness and stress-reduction techniques to maintain clarity during high-pressure situations",
          "Build a support network of other systematic thinkers who can provide perspective and advice",
          "Develop contingency plans for common stressful situations to reduce anxiety",
          "Regularly review and celebrate the success of your systematic approaches to build confidence"
        ],
        workLifeBalance: [
          "Set clear boundaries between work and personal time to prevent burnout",
          "Apply your systematic approaches to personal life management for better efficiency",
          "Engage in hobbies that provide creative outlets outside of your analytical work",
          "Schedule regular time for reflection and strategic thinking about your career and life goals"
        ]
      },
      financialProfile: {
        moneyMotivations: [
          "Financial security to support your systematic approach to life planning",
          "Resources to invest in tools and systems that enhance your effectiveness",
          "Ability to take calculated risks on innovative projects or entrepreneurial ventures",
          "Freedom to choose roles and projects that align with your systematic innovation strengths"
        ],
        spendingPatterns: [
          "Systematic approach to financial planning with clear budgets and goals",
          "Investment in quality tools, technology, and resources that enhance productivity",
          "Careful evaluation of purchases based on long-term value and systematic benefits",
          "Preference for financial products and services that offer transparency and control"
        ],
        investmentStyle: [
          "Long-term, systematic approach to building wealth through consistent investing",
          "Preference for diversified portfolios based on thorough analysis and research",
          "Interest in investment opportunities that align with your values and expertise",
          "Systematic monitoring and rebalancing of investments based on performance data"
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
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-warm-gold text-lg">15</div>
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
                    Your Profile Type: {expandedAnalysis.executiveSummary.profileType}
                  </h3>
                  <p className="text-forest-dark leading-relaxed mb-4">
                    You are a natural leader who combines analytical thinking with systematic execution. Your strength lies in creating innovative solutions through structured approaches, making you highly effective at solving complex challenges while building sustainable systems.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                    <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-warm-gold" />
                      Core Strengths
                    </h3>
                    <div className="space-y-3">
                      {expandedAnalysis.executiveSummary.coreStrengths.map((strength, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-forest-dark text-sm leading-relaxed">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                    <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-sage-green" />
                      Key Insights
                    </h3>
                    <div className="space-y-3">
                      {expandedAnalysis.executiveSummary.keyInsights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-sage-green mt-0.5 flex-shrink-0" />
                          <span className="text-forest-dark text-sm leading-relaxed">{insight}</span>
                        </div>
                      ))}
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
                    {expandedAnalysis.coreMotivationalDNA.primaryDrivers.map((driver, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-transparent rounded-lg">
                        <div className="w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-red-200">
                    <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-500" />
                      Stress Indicators
                    </h3>
                    <div className="space-y-3">
                      {expandedAnalysis.coreMotivationalDNA.stressIndicators.map((indicator, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100">
                          <Shield className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-forest-dark text-sm leading-relaxed">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-green-200">
                    <h3 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-green-500" />
                      Motivational Triggers
                    </h3>
                    <div className="space-y-3">
                      {expandedAnalysis.coreMotivationalDNA.motivationalTriggers.map((trigger, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100">
                          <Rocket className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-forest-dark text-sm leading-relaxed">{trigger}</span>
                        </div>
                      ))}
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

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 via-white to-sage-green/10 p-8 rounded-2xl border border-sage-green/20 shadow-xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-green to-forest-dark text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                    <Brain className="h-6 w-6" />
                    {expandedAnalysis.cognitiveProfile.thinkingStyle}
                  </div>
                </div>
                
                <div className="grid gap-8">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                    <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-600" />
                      Information Processing Style
                    </h4>
                    <div className="space-y-4">
                      {expandedAnalysis.cognitiveProfile.informationProcessing.map((style, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-forest-dark leading-relaxed">{style}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                    <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Puzzle className="h-5 w-5 text-purple-600" />
                      Problem-Solving Approach
                    </h4>
                    <div className="space-y-4">
                      {expandedAnalysis.cognitiveProfile.problemSolving.map((approach, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg">
                          <Puzzle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-forest-dark leading-relaxed">{approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                    <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      Creativity Style
                    </h4>
                    <div className="space-y-4">
                      {expandedAnalysis.cognitiveProfile.creativityStyle.map((style, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-amber-50 to-transparent rounded-lg">
                          <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-forest-dark leading-relaxed">{style}</span>
                        </div>
                      ))}
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
                  {expandedAnalysis.decisionMaking.style}
                </div>
              </div>
              
              <div className="grid gap-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sage-green/30">
                  <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Compass className="h-5 w-5 text-sage-green" />
                    Decision Process
                  </h4>
                  <div className="space-y-4">
                    {expandedAnalysis.decisionMaking.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-sage-green to-forest-dark text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-forest-dark leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
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

                  <div className="bg-amber-50/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200">
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

                <div className="bg-green-50/80 backdrop-blur-sm p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <ArrowUpCircle className="h-5 w-5 text-green-600" />
                    Optimization Strategies
                  </h4>
                  <div className="space-y-3">
                    {expandedAnalysis.decisionMaking.optimizationStrategies.map((strategy, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <ArrowUpCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-forest-dark leading-relaxed">{strategy}</span>
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
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    Communication Preferences
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.relationships.communication.map((style, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <MessageCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">{style}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200 shadow-lg">
                  <h3 className="text-lg font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                    Conflict Resolution
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.relationships.conflictResolution.map((approach, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <Shield className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">{approach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-200 shadow-lg">
                  <h3 className="text-lg font-bold text-forest-dark mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    Influence Style
                  </h3>
                  <div className="space-y-3">
                    {expandedAnalysis.relationships.influenceStyle.map((style, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <TrendingUp className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-forest-dark text-sm leading-relaxed">{style}</span>
                      </div>
                    ))}
                  </div>
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
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                Career Optimization Guide
              </h2>
            </div>
            {/* Career content implementation */}
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
            {/* Personal development content implementation */}
          </div>
        );

      case 8:
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
            {/* Action plan content implementation */}
          </div>
        );

      case 9:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                Time Management Strategies
              </h2>
            </div>
            {/* Time management content implementation */}
          </div>
        );

      case 10:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Network className="h-8 w-8 text-white" />
                </div>
                Networking Strategies
              </h2>
            </div>
            {/* Networking content implementation */}
          </div>
        );

      case 11:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <PieChart className="h-8 w-8 text-white" />
                </div>
                Financial Planning
              </h2>
            </div>
            {/* Financial planning content implementation */}
          </div>
        );

      case 12:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                Goal Setting
              </h2>
            </div>
            {/* Goal setting content implementation */}
          </div>
        );

      case 13:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                Work-Life Balance
              </h2>
            </div>
            {/* Work-life balance content implementation */}
          </div>
        );

      case 14:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forest-dark flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sage-green to-forest-dark rounded-lg">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                Innovation Strategies
              </h2>
            </div>
            {/* Innovation strategies content implementation */}
          </div>
        );

      case 15:
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
            {/* Action plan content implementation */}
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
