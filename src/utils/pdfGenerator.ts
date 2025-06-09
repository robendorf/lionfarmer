
import jsPDF from 'jspdf';

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

export const generateSEEDProfilePDF = (
  analysis: AnalysisResult,
  deepDiveData: DeepDiveData[],
  isPremium: boolean = false
) => {
  const pdf = new jsPDF();
  let yPosition = 20;
  const pageHeight = pdf.internal.pageSize.height;
  const margin = 20;
  const maxWidth = pdf.internal.pageSize.width - 2 * margin;

  // Helper function to add text with line wrapping
  const addWrappedText = (text: string, fontSize: number = 12, isBold: boolean = false) => {
    pdf.setFontSize(fontSize);
    if (isBold) {
      pdf.setFont(undefined, 'bold');
    } else {
      pdf.setFont(undefined, 'normal');
    }
    
    const lines = pdf.splitTextToSize(text, maxWidth);
    
    // Check if we need a new page
    if (yPosition + (lines.length * fontSize * 0.35) > pageHeight - margin) {
      pdf.addPage();
      yPosition = 20;
    }
    
    pdf.text(lines, margin, yPosition);
    yPosition += lines.length * fontSize * 0.35 + 8;
  };

  const addSpacing = (space: number = 10) => {
    yPosition += space;
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

  // Title Page
  addWrappedText('SEED PROFILE ANALYSIS', 24, true);
  addWrappedText(isPremium ? 'Premium Report' : 'Free Report', 16);
  addWrappedText(`Generated on: ${new Date().toLocaleDateString()}`, 12);
  addSpacing(20);

  if (isPremium) {
    addWrappedText('Comprehensive Motivational Pattern Analysis', 14, true);
    addSpacing(15);
  }

  // Core SEED Profile sections
  addWrappedText('WHAT ENERGIZES YOU', 16, true);
  analysis.energizers.forEach((item, index) => {
    addWrappedText(`${index + 1}. ${item}`, 12);
  });
  addSpacing();

  addWrappedText('WHAT TO AVOID', 16, true);
  analysis.avoid.forEach((item, index) => {
    addWrappedText(`${index + 1}. ${item}`, 12);
  });
  addSpacing();

  addWrappedText('IDEAL WORK & CONTRIBUTION ENVIRONMENTS', 16, true);
  analysis.environments.forEach((item, index) => {
    addWrappedText(`${index + 1}. ${item}`, 12);
  });
  addSpacing();

  addWrappedText('GROWTH OPPORTUNITIES', 16, true);
  analysis.growth.forEach((item, index) => {
    addWrappedText(`${index + 1}. ${item}`, 12);
  });

  if (isPremium) {
    const expandedAnalysis = generateExpandedAnalysis();
    
    // Add new page for premium content
    pdf.addPage();
    yPosition = 20;
    
    addWrappedText('PREMIUM ANALYSIS SECTIONS', 18, true);
    addWrappedText('This premium analysis includes expanded insights based on your detailed process descriptions and SIMA methodology.', 12);
    addSpacing(15);
    
    // Core Motivational DNA
    addWrappedText('CORE MOTIVATIONAL DNA', 16, true);
    
    addWrappedText('Primary Drivers:', 14, true);
    expandedAnalysis.coreMotivationalDNA.primaryDrivers.forEach((driver, index) => {
      addWrappedText(`• ${driver}`, 11);
    });
    addSpacing();
    
    addWrappedText('Energy Patterns:', 14, true);
    expandedAnalysis.coreMotivationalDNA.energyPatterns.forEach((pattern, index) => {
      addWrappedText(`• ${pattern}`, 11);
    });
    addSpacing();
    
    addWrappedText('Stress Indicators:', 14, true);
    expandedAnalysis.coreMotivationalDNA.stressIndicators.forEach((indicator, index) => {
      addWrappedText(`• ${indicator}`, 11);
    });
    addSpacing(15);

    // Decision-Making Style
    addWrappedText('DECISION-MAKING STYLE ANALYSIS', 16, true);
    addWrappedText(`Your Style: ${expandedAnalysis.decisionMaking.style}`, 14, true);
    
    addWrappedText('Decision Process:', 13, true);
    expandedAnalysis.decisionMaking.process.forEach((step, index) => {
      addWrappedText(`${index + 1}. ${step}`, 11);
    });
    addSpacing();
    
    addWrappedText('Strengths:', 13, true);
    expandedAnalysis.decisionMaking.strengths.forEach((strength, index) => {
      addWrappedText(`• ${strength}`, 11);
    });
    addSpacing();
    
    addWrappedText('Potential Blind Spots:', 13, true);
    expandedAnalysis.decisionMaking.blindSpots.forEach((blindSpot, index) => {
      addWrappedText(`• ${blindSpot}`, 11);
    });
    addSpacing(15);

    // Add new page for relationships
    pdf.addPage();
    yPosition = 20;
    
    // Relationship & Leadership Patterns
    addWrappedText('RELATIONSHIP & LEADERSHIP PATTERNS', 16, true);
    addWrappedText(`Leadership Style: ${expandedAnalysis.relationships.leadershipStyle}`, 14, true);
    
    expandedAnalysis.relationships.teamDynamics.forEach((dynamic, index) => {
      addWrappedText(`• ${dynamic}`, 11);
    });
    addSpacing();
    
    addWrappedText('Collaboration Preferences:', 13, true);
    expandedAnalysis.relationships.collaboration.forEach((pref, index) => {
      addWrappedText(`• ${pref}`, 11);
    });
    addSpacing();
    
    addWrappedText('Communication Style:', 13, true);
    expandedAnalysis.relationships.communication.forEach((style, index) => {
      addWrappedText(`• ${style}`, 11);
    });
    addSpacing(15);

    // Career Optimization Guide
    addWrappedText('CAREER OPTIMIZATION GUIDE', 16, true);
    
    addWrappedText('Ideal Roles:', 14, true);
    expandedAnalysis.careerOptimization.idealRoles.forEach((role, index) => {
      addWrappedText(`• ${role}`, 11);
    });
    addSpacing();
    
    addWrappedText('Industry Fit:', 14, true);
    expandedAnalysis.careerOptimization.industryFit.forEach((industry, index) => {
      addWrappedText(`• ${industry}`, 11);
    });
    addSpacing();
    
    addWrappedText('Avoidance Zones:', 14, true);
    expandedAnalysis.careerOptimization.avoidanceZones.forEach((zone, index) => {
      addWrappedText(`• ${zone}`, 11);
    });
    addSpacing(15);

    // Add new page for development plan
    pdf.addPage();
    yPosition = 20;
    
    // Personal Development Plan
    addWrappedText('PERSONAL DEVELOPMENT PLAN', 16, true);
    
    addWrappedText('Short-Term Focus (3-6 months):', 14, true);
    expandedAnalysis.developmentPlan.shortTerm.forEach((goal, index) => {
      addWrappedText(`• ${goal}`, 11);
    });
    addSpacing();
    
    addWrappedText('Long-Term Vision (1-3 years):', 14, true);
    expandedAnalysis.developmentPlan.longTerm.forEach((vision, index) => {
      addWrappedText(`• ${vision}`, 11);
    });
    addSpacing();
    
    addWrappedText('Skill Building Priorities:', 14, true);
    expandedAnalysis.developmentPlan.skillBuilding.forEach((skill, index) => {
      addWrappedText(`• ${skill}`, 11);
    });
    addSpacing(15);

    // Action Plan & Next Steps
    addWrappedText('ACTION PLAN & NEXT STEPS', 16, true);
    addWrappedText('Your 30-60-90 Day Implementation Plan', 14, true);
    
    addWrappedText('First 30 Days:', 13, true);
    addWrappedText('• Audit current role against ideal environment criteria', 11);
    addWrappedText('• Identify 3 systematic improvements you can implement', 11);
    addWrappedText('• Begin documenting your proven methodologies', 11);
    addSpacing();
    
    addWrappedText('Next 30 Days:', 13, true);
    addWrappedText('• Implement one systematic improvement project', 11);
    addWrappedText('• Start networking with innovation-focused professionals', 11);
    addWrappedText('• Practice delegation using your systematic frameworks', 11);
    addSpacing();
    
    addWrappedText('Following 30 Days:', 13, true);
    addWrappedText('• Evaluate progress and refine your approach', 11);
    addWrappedText('• Seek feedback on your systematic innovations', 11);
    addWrappedText('• Plan next phase of development or career moves', 11);
    addSpacing();
    
    addWrappedText('Key Success Indicators:', 14, true);
    addWrappedText('• You feel energized by your daily work and see clear progress', 11);
    addWrappedText('• Others seek your systematic approach for solving complex problems', 11);
    addWrappedText('• You\'re building systems and processes that create lasting value', 11);
    addSpacing(15);
    
    addWrappedText('Remember: Your SEED Profile is a living document. Revisit and refine it as you grow and gain new experiences.', 12, true);
  }

  // Footer on last page
  pdf.setFontSize(10);
  pdf.setFont(undefined, 'italic');
  pdf.text('Generated by SEED Profile Analysis Tool', margin, pageHeight - 15);

  return pdf;
};
