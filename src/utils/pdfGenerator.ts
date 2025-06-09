
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

  // Color palette matching the website
  const colors = {
    forestDark: [42, 63, 45],
    sageGreen: [106, 140, 115],
    warmGold: [218, 165, 32],
    earthBrown: [101, 67, 33],
    cream: [245, 245, 240]
  };

  // Helper function to add colored rectangle backgrounds
  const addColoredBackground = (x: number, y: number, width: number, height: number, color: number[], opacity: number = 0.1) => {
    pdf.setFillColor(color[0], color[1], color[2]);
    pdf.setGlobalAlpha(opacity);
    pdf.rect(x, y, width, height, 'F');
    pdf.setGlobalAlpha(1);
  };

  // Helper function to add text with styling
  const addStyledText = (text: string, x: number, y: number, options: {
    fontSize?: number;
    isBold?: boolean;
    color?: number[];
    align?: 'left' | 'center' | 'right';
    maxWidth?: number;
  } = {}) => {
    const {
      fontSize = 12,
      isBold = false,
      color = colors.forestDark,
      align = 'left',
      maxWidth = maxWidth
    } = options;

    pdf.setFontSize(fontSize);
    pdf.setFont(undefined, isBold ? 'bold' : 'normal');
    pdf.setTextColor(color[0], color[1], color[2]);
    
    if (maxWidth && maxWidth < pdf.internal.pageSize.width - 2 * margin) {
      const lines = pdf.splitTextToSize(text, maxWidth);
      pdf.text(lines, x, y, { align });
      return lines.length * fontSize * 0.35;
    } else {
      pdf.text(text, x, y, { align });
      return fontSize * 0.35;
    }
  };

  // Helper function to add section header with background
  const addSectionHeader = (title: string, icon: string = '') => {
    if (yPosition > pageHeight - 60) {
      pdf.addPage();
      yPosition = 20;
    }

    // Add gradient-like background
    addColoredBackground(margin, yPosition - 5, maxWidth, 25, colors.warmGold, 0.15);
    addColoredBackground(margin, yPosition - 5, maxWidth, 25, colors.sageGreen, 0.1);
    
    // Add border
    pdf.setDrawColor(colors.warmGold[0], colors.warmGold[1], colors.warmGold[2]);
    pdf.setLineWidth(1);
    pdf.rect(margin, yPosition - 5, maxWidth, 25);
    
    const textHeight = addStyledText(`${icon} ${title}`, margin + 10, yPosition + 10, {
      fontSize: 16,
      isBold: true,
      color: colors.forestDark
    });
    
    yPosition += 35;
    return textHeight;
  };

  // Helper function to add bullet points with styling
  const addBulletPoint = (text: string, level: number = 0) => {
    if (yPosition > pageHeight - 30) {
      pdf.addPage();
      yPosition = 20;
    }

    const indent = margin + (level * 15);
    const bulletX = indent;
    const textX = indent + 15;
    
    // Add background for bullet points
    if (level === 0) {
      addColoredBackground(margin, yPosition - 3, maxWidth, 15, colors.cream, 0.3);
    }
    
    // Add bullet
    pdf.setFillColor(colors.warmGold[0], colors.warmGold[1], colors.warmGold[2]);
    pdf.circle(bulletX + 3, yPosition + 2, 2, 'F');
    
    // Add text
    const lines = pdf.splitTextToSize(text, maxWidth - (textX - margin));
    addStyledText(lines.join('\n'), textX, yPosition + 5, {
      fontSize: 11,
      color: colors.forestDark,
      maxWidth: maxWidth - (textX - margin)
    });
    
    yPosition += Math.max(lines.length * 12, 18);
  };

  // Add spacing
  const addSpacing = (space: number = 15) => {
    yPosition += space;
  };

  // Title Page with styling
  addColoredBackground(0, 0, pdf.internal.pageSize.width, 80, colors.sageGreen, 0.1);
  addColoredBackground(0, 0, pdf.internal.pageSize.width, 80, colors.warmGold, 0.05);
  
  addStyledText('🎯 SEED PROFILE ANALYSIS', pdf.internal.pageSize.width / 2, 35, {
    fontSize: 24,
    isBold: true,
    color: colors.forestDark,
    align: 'center'
  });
  
  addStyledText(isPremium ? '👑 Premium Report' : 'Free Report', pdf.internal.pageSize.width / 2, 55, {
    fontSize: 16,
    color: colors.warmGold,
    align: 'center'
  });
  
  addStyledText(`Generated on: ${new Date().toLocaleDateString()}`, pdf.internal.pageSize.width / 2, 70, {
    fontSize: 12,
    color: colors.earthBrown,
    align: 'center'
  });

  yPosition = 100;

  if (isPremium) {
    addStyledText('Comprehensive Motivational Pattern Analysis', pdf.internal.pageSize.width / 2, yPosition, {
      fontSize: 14,
      isBold: true,
      color: colors.sageGreen,
      align: 'center'
    });
    yPosition += 30;
  }

  // Core SEED sections with enhanced styling
  addSectionHeader('⚡ WHAT ENERGIZES YOU');
  analysis.energizers.forEach((item, index) => {
    addBulletPoint(`${item}`);
  });
  addSpacing();

  addSectionHeader('🚫 WHAT TO AVOID');
  analysis.avoid.forEach((item, index) => {
    addBulletPoint(`${item}`);
  });
  addSpacing();

  addSectionHeader('🏢 IDEAL WORK & CONTRIBUTION ENVIRONMENTS');
  analysis.environments.forEach((item, index) => {
    addBulletPoint(`${item}`);
  });
  addSpacing();

  addSectionHeader('📈 GROWTH OPPORTUNITIES');
  analysis.growth.forEach((item, index) => {
    addBulletPoint(`${item}`);
  });

  if (isPremium) {
    const expandedAnalysis = {
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
    
    // Add new page for premium content
    pdf.addPage();
    yPosition = 20;
    
    addSectionHeader('🧠 CORE MOTIVATIONAL DNA');
    
    addStyledText('Primary Drivers:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.coreMotivationalDNA.primaryDrivers.forEach((driver) => {
      addBulletPoint(driver);
    });
    addSpacing();
    
    addStyledText('Energy Patterns:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.coreMotivationalDNA.energyPatterns.forEach((pattern) => {
      addBulletPoint(pattern);
    });
    addSpacing();
    
    addStyledText('Stress Indicators:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.earthBrown });
    yPosition += 20;
    expandedAnalysis.coreMotivationalDNA.stressIndicators.forEach((indicator) => {
      addBulletPoint(indicator);
    });
    addSpacing(20);

    // Decision-Making Style
    addSectionHeader('🎯 DECISION-MAKING STYLE ANALYSIS');
    addStyledText(`Your Style: ${expandedAnalysis.decisionMaking.style}`, margin, yPosition, { 
      fontSize: 14, 
      isBold: true, 
      color: colors.warmGold 
    });
    yPosition += 25;
    
    addStyledText('Decision Process:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.decisionMaking.process.forEach((step, index) => {
      addBulletPoint(`${step}`);
    });
    addSpacing();
    
    addStyledText('Strengths:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.decisionMaking.strengths.forEach((strength) => {
      addBulletPoint(strength);
    });
    addSpacing();
    
    addStyledText('Areas for Awareness:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.earthBrown });
    yPosition += 20;
    expandedAnalysis.decisionMaking.blindSpots.forEach((blindSpot) => {
      addBulletPoint(blindSpot);
    });
    addSpacing(20);

    // Add new page for relationships
    pdf.addPage();
    yPosition = 20;
    
    // Relationship & Leadership Patterns
    addSectionHeader('👥 RELATIONSHIP & LEADERSHIP PATTERNS');
    addStyledText(`Leadership Style: ${expandedAnalysis.relationships.leadershipStyle}`, margin, yPosition, { 
      fontSize: 14, 
      isBold: true, 
      color: colors.warmGold 
    });
    yPosition += 25;
    
    expandedAnalysis.relationships.teamDynamics.forEach((dynamic) => {
      addBulletPoint(dynamic);
    });
    addSpacing();
    
    addStyledText('Collaboration Preferences:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.relationships.collaboration.forEach((pref) => {
      addBulletPoint(pref);
    });
    addSpacing();
    
    addStyledText('Communication Style:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.relationships.communication.forEach((style) => {
      addBulletPoint(style);
    });
    addSpacing(20);

    // Career Optimization Guide
    addSectionHeader('💼 CAREER OPTIMIZATION GUIDE');
    
    addStyledText('Ideal Roles:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.careerOptimization.idealRoles.forEach((role) => {
      addBulletPoint(role);
    });
    addSpacing();
    
    addStyledText('Industry Sweet Spots:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.careerOptimization.industryFit.forEach((industry) => {
      addBulletPoint(industry);
    });
    addSpacing();
    
    addStyledText('Career Pitfalls to Avoid:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.earthBrown });
    yPosition += 20;
    expandedAnalysis.careerOptimization.avoidanceZones.forEach((zone) => {
      addBulletPoint(zone);
    });
    addSpacing(20);

    // Add new page for development plan
    pdf.addPage();
    yPosition = 20;
    
    // Personal Development Plan
    addSectionHeader('📚 PERSONAL DEVELOPMENT ROADMAP');
    
    addStyledText('Short-Term Focus (3-6 months):', margin, yPosition, { fontSize: 14, isBold: true, color: colors.warmGold });
    yPosition += 20;
    expandedAnalysis.developmentPlan.shortTerm.forEach((goal) => {
      addBulletPoint(goal);
    });
    addSpacing();
    
    addStyledText('Long-Term Vision (1-3 years):', margin, yPosition, { fontSize: 14, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.developmentPlan.longTerm.forEach((vision) => {
      addBulletPoint(vision);
    });
    addSpacing();
    
    addStyledText('Skill Building Priorities:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    expandedAnalysis.developmentPlan.skillBuilding.forEach((skill) => {
      addBulletPoint(skill);
    });
    addSpacing(20);

    // Action Plan & Next Steps
    addSectionHeader('⭐ YOUR ACTION PLAN & NEXT STEPS');
    addStyledText('Your 30-60-90 Day Implementation Plan', margin, yPosition, { 
      fontSize: 14, 
      isBold: true, 
      color: colors.warmGold 
    });
    yPosition += 25;
    
    addStyledText('First 30 Days:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    addBulletPoint('Audit current role against ideal environment criteria');
    addBulletPoint('Identify 3 systematic improvements you can implement');
    addBulletPoint('Begin documenting your proven methodologies');
    addSpacing();
    
    addStyledText('Next 30 Days:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    addBulletPoint('Implement one systematic improvement project');
    addBulletPoint('Start networking with innovation-focused professionals');
    addBulletPoint('Practice delegation using your systematic frameworks');
    addSpacing();
    
    addStyledText('Following 30 Days:', margin, yPosition, { fontSize: 13, isBold: true, color: colors.sageGreen });
    yPosition += 20;
    addBulletPoint('Evaluate progress and refine your approach');
    addBulletPoint('Seek feedback on your systematic innovations');
    addBulletPoint('Plan next phase of development or career moves');
    addSpacing();
    
    addStyledText('Key Success Indicators:', margin, yPosition, { fontSize: 14, isBold: true, color: colors.warmGold });
    yPosition += 20;
    addBulletPoint('You feel energized by your daily work and see clear progress');
    addBulletPoint('Others seek your systematic approach for solving complex problems');
    addBulletPoint('You\'re building systems and processes that create lasting value');
    addSpacing(20);
    
    // Final message with background
    addColoredBackground(margin, yPosition - 5, maxWidth, 30, colors.warmGold, 0.1);
    addColoredBackground(margin, yPosition - 5, maxWidth, 30, colors.sageGreen, 0.05);
    
    addStyledText('⭐ Remember: Your SEED Profile is a living document. Revisit and refine it as you grow and gain new experiences. ⭐', 
      pdf.internal.pageSize.width / 2, yPosition + 15, { 
      fontSize: 12, 
      isBold: true, 
      color: colors.forestDark,
      align: 'center'
    });
  }

  // Footer on last page
  pdf.setFontSize(10);
  pdf.setFont(undefined, 'italic');
  pdf.setTextColor(colors.earthBrown[0], colors.earthBrown[1], colors.earthBrown[2]);
  pdf.text('Generated by SEED Profile Analysis Tool • lionfarmer.com', margin, pageHeight - 15);

  return pdf;
};
