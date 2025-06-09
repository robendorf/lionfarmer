
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
): jsPDF => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.width;
  const pageHeight = pdf.internal.pageSize.height;
  const margin = 20;
  let currentY = margin;

  // Color palette matching the website
  const colors = {
    primary: [34, 77, 65], // forest-dark
    secondary: [119, 162, 119], // sage-green
    accent: [204, 145, 51], // warm-gold
    text: [74, 54, 42], // earth-brown
    light: [247, 244, 237], // cream
    white: [255, 255, 255]
  };

  // Helper function to add gradient-like background
  const addGradientBackground = (startY: number, height: number, startColor: number[], endColor: number[]) => {
    const steps = 20;
    const stepHeight = height / steps;
    
    for (let i = 0; i < steps; i++) {
      const ratio = i / steps;
      const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
      const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
      const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
      
      pdf.setFillColor(r, g, b);
      pdf.rect(0, startY + (i * stepHeight), pageWidth, stepHeight, 'F');
    }
  };

  // Helper function to add colored background
  const addColoredBackground = (x: number, y: number, width: number, height: number, color: number[], opacity: number = 0.1) => {
    pdf.setFillColor(color[0], color[1], color[2]);
    pdf.setGState(new pdf.GState({ opacity }));
    pdf.roundedRect(x, y, width, height, 3, 3, 'F');
    pdf.setGState(new pdf.GState({ opacity: 1 }));
  };

  // Helper function to add section header with styling
  const addSectionHeader = (text: string, icon: string = '') => {
    if (currentY > pageHeight - 40) {
      pdf.addPage();
      currentY = margin;
    }

    // Add background for header
    addColoredBackground(margin - 5, currentY - 5, pageWidth - 2 * margin + 10, 15, colors.secondary, 0.15);
    
    // Add icon and text
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    pdf.text(`${icon} ${text}`, margin, currentY + 5);
    
    currentY += 20;
  };

  // Helper function to add bullet points with better styling
  const addBulletPoint = (text: string, indent: number = 0) => {
    if (currentY > pageHeight - 30) {
      pdf.addPage();
      currentY = margin;
    }

    const maxWidth = pageWidth - 2 * margin - indent - 10;
    const lines = pdf.splitTextToSize(text, maxWidth);
    
    // Add bullet background
    addColoredBackground(margin + indent - 2, currentY - 2, pageWidth - 2 * margin - indent + 4, lines.length * 6 + 4, colors.light, 0.3);
    
    // Add bullet point
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(colors.secondary[0], colors.secondary[1], colors.secondary[2]);
    pdf.text('•', margin + indent, currentY + 3);
    
    // Add text
    pdf.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    pdf.text(lines, margin + indent + 5, currentY + 3);
    
    currentY += lines.length * 6 + 2;
  };

  // Helper function to add spacing
  const addSpacing = (space: number = 8) => {
    currentY += space;
  };

  // Helper function to check for page break
  const checkPageBreak = (spaceNeeded: number = 30) => {
    if (currentY > pageHeight - spaceNeeded) {
      pdf.addPage();
      currentY = margin;
      return true;
    }
    return false;
  };

  // Title page with enhanced styling
  addGradientBackground(0, 60, colors.accent, colors.secondary);
  
  // Add decorative elements
  pdf.setFillColor(colors.white[0], colors.white[1], colors.white[2]);
  pdf.setGState(new pdf.GState({ opacity: 0.9 }));
  pdf.roundedRect(margin, 20, pageWidth - 2 * margin, 40, 8, 8, 'F');
  pdf.setGState(new pdf.GState({ opacity: 1 }));

  // Title
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(24);
  pdf.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
  pdf.text('🎯 Your SEED Profile', pageWidth / 2, 35, { align: 'center' });
  
  pdf.setFontSize(14);
  pdf.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
  pdf.text(isPremium ? 'Premium Analysis' : 'Free Analysis', pageWidth / 2, 50, { align: 'center' });

  currentY = 80;

  // Subtitle with methodology
  addColoredBackground(margin, currentY, pageWidth - 2 * margin, 20, colors.light, 0.5);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(12);
  pdf.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
  pdf.text('Based on SIMA methodology and your detailed achievement processes', pageWidth / 2, currentY + 10, { align: 'center' });
  
  currentY += 35;

  // Core Analysis - What Energizes You
  addSectionHeader('What Energizes You', '🧠');
  analysis.energizers.forEach(item => {
    addBulletPoint(item);
  });
  addSpacing();

  // What to Avoid
  addSectionHeader('What to Avoid', '🚫');
  analysis.avoid.forEach(item => {
    addBulletPoint(item);
  });
  addSpacing();

  // Ideal Environments
  addSectionHeader('Ideal Work & Contribution Environments', '🏞️');
  analysis.environments.forEach(item => {
    addBulletPoint(item);
  });
  addSpacing();

  // Growth Opportunities
  addSectionHeader('Growth Opportunities', '🌱');
  analysis.growth.forEach(item => {
    addBulletPoint(item);
  });

  if (isPremium) {
    // Add premium content
    pdf.addPage();
    currentY = margin;

    // Premium header
    addGradientBackground(0, 0, 30, colors.accent, colors.primary);
    pdf.setFillColor(colors.white[0], colors.white[1], colors.white[2]);
    pdf.setGState(new pdf.GState({ opacity: 0.95 }));
    pdf.roundedRect(margin, 10, pageWidth - 2 * margin, 25, 5, 5, 'F');
    pdf.setGState(new pdf.GState({ opacity: 1 }));
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    pdf.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    pdf.text('👑 Premium Analysis', pageWidth / 2, 25, { align: 'center' });
    
    currentY = 50;

    // Core Motivational DNA
    addSectionHeader('Your Core Motivational DNA', '🧬');
    addBulletPoint('Systematic Innovation: You are energized by creating structured approaches to complex challenges while maintaining creative flexibility');
    addBulletPoint('Ownership Excellence: Deep satisfaction comes from having complete accountability and seeing direct results from your methodical approach');
    addBulletPoint('Value Creation: You thrive when building something meaningful that solves real problems and creates lasting impact for others');
    addSpacing();

    // Decision-Making Style
    addSectionHeader('Decision-Making Style: Analytical Visionary', '🎯');
    addBulletPoint('Comprehensive Research: You gather extensive information before making important decisions');
    addBulletPoint('Systematic Evaluation: You create structured frameworks to assess options and outcomes');
    addBulletPoint('Strategic Implementation: You develop detailed plans with clear milestones and success metrics');
    addSpacing();

    // Leadership Style
    addSectionHeader('Leadership Style: Systematic Enabler', '👥');
    addBulletPoint('You lead by example, demonstrating thorough preparation and methodical execution');
    addBulletPoint('You empower others by sharing your systematic approaches and frameworks');
    addBulletPoint('You build trust through consistent delivery and transparent communication');
    addSpacing();

    // Career Optimization
    addSectionHeader('Career Optimization', '📈');
    addBulletPoint('Strategic Operations Leader: Roles where you design and implement systematic approaches to complex business challenges');
    addBulletPoint('Innovation Manager: Positions that combine creative problem-solving with structured execution and measurable outcomes');
    addBulletPoint('Entrepreneurial Executive: Leadership roles in growing organizations where you can build systems and see direct impact');
    addSpacing();

    // Development Plan
    addSectionHeader('30-60-90 Day Development Plan', '📅');
    
    // 30 Days
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(colors.accent[0], colors.accent[1], colors.accent[2]);
    pdf.text('First 30 Days:', margin, currentY);
    currentY += 6;
    
    addBulletPoint('Audit current role against ideal environment criteria');
    addBulletPoint('Identify 3 systematic improvements you can implement');
    addBulletPoint('Begin documenting your proven methodologies');
    addSpacing();

    checkPageBreak();

    // 60 Days
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(colors.accent[0], colors.accent[1], colors.accent[2]);
    pdf.text('Next 30 Days:', margin, currentY);
    currentY += 6;
    
    addBulletPoint('Implement one systematic improvement project');
    addBulletPoint('Start networking with innovation-focused professionals');
    addBulletPoint('Practice delegation using your systematic frameworks');
    addSpacing();

    // 90 Days
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(colors.accent[0], colors.accent[1], colors.accent[2]);
    pdf.text('Following 30 Days:', margin, currentY);
    currentY += 6;
    
    addBulletPoint('Evaluate progress and refine your approach');
    addBulletPoint('Seek feedback on your systematic innovations');
    addBulletPoint('Plan next phase of development or career moves');
  }

  // Footer on each page
  const pageCount = pdf.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    
    // Add footer background
    addColoredBackground(0, pageHeight - 15, pageWidth, 15, colors.secondary, 0.1);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    pdf.text(`SEED Profile Analysis • Page ${i} of ${pageCount} • Generated ${new Date().toLocaleDateString()}`, 
             pageWidth / 2, pageHeight - 5, { align: 'center' });
  }

  return pdf;
};
