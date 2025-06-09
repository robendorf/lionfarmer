
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Crown, ChevronLeft, ChevronRight, Brain, Target, Users, 
  TrendingUp, Heart, Briefcase, BookOpen, ArrowLeft, Star,
  Zap, Shield, Compass, Lightbulb, Activity
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
  const totalPages = 6;

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
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="h-8 w-8 text-amber-500" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-amber-600 bg-clip-text text-transparent">
                  Premium SEED Profile
                </h1>
              </div>
              <p className="text-lg text-purple-700 mb-6">
                Comprehensive Motivational Pattern Analysis
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-amber-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Your Core Motivational DNA
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-700 mb-2">Primary Drivers</h3>
                  <ul className="space-y-2">
                    {expandedAnalysis.coreMotivationalDNA.primaryDrivers.map((driver, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-purple-600">{driver}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-700 mb-2">Energy Patterns</h3>
                  <ul className="space-y-2">
                    {expandedAnalysis.coreMotivationalDNA.energyPatterns.map((pattern, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Activity className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-purple-600">{pattern}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-700 mb-2">Stress Indicators</h3>
                  <ul className="space-y-2">
                    {expandedAnalysis.coreMotivationalDNA.stressIndicators.map((indicator, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-purple-600">{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Decision-Making Style Analysis
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Your Style: {expandedAnalysis.decisionMaking.style}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Decision Process</h4>
                  <ul className="space-y-2">
                    {expandedAnalysis.decisionMaking.process.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-blue-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {expandedAnalysis.decisionMaking.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-green-500 mt-1" />
                        <span className="text-blue-600">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-blue-700 mb-3">Potential Blind Spots</h4>
                <ul className="space-y-2">
                  {expandedAnalysis.decisionMaking.blindSpots.map((blindSpot, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Compass className="h-4 w-4 text-amber-500 mt-1" />
                      <span className="text-blue-600">{blindSpot}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              <Users className="h-6 w-6" />
              Relationship & Leadership Patterns
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Leadership Style: {expandedAnalysis.relationships.leadershipStyle}
                </h3>
                <ul className="space-y-2">
                  {expandedAnalysis.relationships.teamDynamics.map((dynamic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Crown className="h-4 w-4 text-green-600 mt-1" />
                      <span className="text-green-700">{dynamic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Collaboration Preferences</h3>
                <ul className="space-y-2">
                  {expandedAnalysis.relationships.collaboration.map((pref, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Heart className="h-4 w-4 text-purple-600 mt-1" />
                      <span className="text-purple-700">{pref}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Communication Style</h3>
                <ul className="space-y-2">
                  {expandedAnalysis.relationships.communication.map((style, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-blue-600 mt-1" />
                      <span className="text-blue-700">{style}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Career Optimization Guide
            </h2>

            <div className="space-y-6">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">Ideal Roles</h3>
                <ul className="space-y-3">
                  {expandedAnalysis.careerOptimization.idealRoles.map((role, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600 mt-1" />
                      <span className="text-emerald-700">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Industry Fit</h3>
                <ul className="space-y-2">
                  {expandedAnalysis.careerOptimization.industryFit.map((industry, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Briefcase className="h-4 w-4 text-blue-600 mt-1" />
                      <span className="text-blue-700">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Avoidance Zones</h3>
                <ul className="space-y-2">
                  {expandedAnalysis.careerOptimization.avoidanceZones.map((zone, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-red-600 mt-1" />
                      <span className="text-red-700">{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Personal Development Plan
            </h2>

            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Short-Term Focus (3-6 months)</h3>
                <ul className="space-y-2">
                  {expandedAnalysis.developmentPlan.shortTerm.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-amber-600 mt-1" />
                      <span className="text-amber-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Long-Term Vision (1-3 years)</h3>
                <ul className="space-y-2">
                  {expandedAnalysis.developmentPlan.longTerm.map((vision, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-green-600 mt-1" />
                      <span className="text-green-700">{vision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Skill Building Priorities</h3>
                <ul className="space-y-2">
                  {expandedAnalysis.developmentPlan.skillBuilding.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-purple-600 mt-1" />
                      <span className="text-purple-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
              <Star className="h-6 w-6" />
              Action Plan & Next Steps
            </h2>

            <div className="bg-gradient-to-r from-purple-100 to-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Your 30-60-90 Day Implementation Plan</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-2">First 30 Days</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Audit current role against ideal environment criteria</li>
                    <li>• Identify 3 systematic improvements you can implement</li>
                    <li>• Begin documenting your proven methodologies</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-2">Next 30 Days</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Implement one systematic improvement project</li>
                    <li>• Start networking with innovation-focused professionals</li>
                    <li>• Practice delegation using your systematic frameworks</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-2">Following 30 Days</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Evaluate progress and refine your approach</li>
                    <li>• Seek feedback on your systematic innovations</li>
                    <li>• Plan next phase of development or career moves</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Success Indicators</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-blue-700">You feel energized by your daily work and see clear progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-blue-700">Others seek your systematic approach for solving complex problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 mt-1" />
                  <span className="text-blue-700">You're building systems and processes that create lasting value</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-purple-700 italic">
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
    <Card className="border-2 border-amber-200 bg-gradient-to-br from-purple-50 to-amber-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button 
            onClick={onBack}
            variant="outline"
            size="sm"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Overview
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-purple-600">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i + 1 === currentPage ? 'bg-purple-600' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="min-h-[600px]">
          {renderPage()}
        </div>
        
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-purple-200">
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="bg-purple-600 hover:bg-purple-700"
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
