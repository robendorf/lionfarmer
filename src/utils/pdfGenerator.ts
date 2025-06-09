
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
  // Create new PDF document
  const doc = new jsPDF();
  
  // Set up colors and styling
  const primaryColor = [76, 110, 87]; // sage-green
  const accentColor = [180, 142, 73]; // warm-gold
  const textColor = [87, 83, 74]; // earth-brown
  const backgroundColor = [248, 246, 239]; // cream
  
  let yPosition = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  // Helper function to add spacing
  const addSpacing = (space: number = 10) => {
    yPosition += space;
  };
  
  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 30) => {
    if (yPosition + requiredSpace > doc.internal.pageSize.getHeight() - 30) {
      doc.addPage();
      yPosition = 20;
    }
  };
  
  // Helper function to add section headers
  const addSectionHeader = (title: string, emoji: string = '') => {
    checkNewPage(25);
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(margin, yPosition - 5, contentWidth, 15, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`${emoji} ${title}`, margin + 5, yPosition + 5);
    yPosition += 20;
  };
  
  // Helper function to add bullet points
  const addBulletPoint = (text: string, indent: number = 0) => {
    checkNewPage();
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const bulletX = margin + indent;
    const textX = bulletX + 10;
    const maxWidth = contentWidth - indent - 10;
    
    // Add bullet point
    doc.setFontSize(12);
    doc.text('•', bulletX, yPosition);
    
    // Add text with word wrapping
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, textX, yPosition);
    yPosition += lines.length * 5;
  };
  
  // Helper function to add colored background
  const addColoredBackground = (color: number[]) => {
    doc.setFillColor(color[0], color[1], color[2]);
    doc.rect(margin, yPosition - 5, contentWidth, 10, 'F');
  };
  
  // Title page
  doc.setFillColor(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
  doc.rect(0, 0, pageWidth, doc.internal.pageSize.getHeight(), 'F');
  
  // Add decorative header
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('🎯 Your SEED Profile', pageWidth / 2, 30, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(isPremium ? 'Premium Analysis Report' : 'Analysis Report', pageWidth / 2, 45, { align: 'center' });
  
  yPosition = 80;
  
  // Introduction
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const introText = `This SEED Profile reveals your unique motivational pattern based on SIMA (System for Identifying Motivated Abilities) methodology. The analysis examines your detailed accomplishment processes to identify what energizes you, ideal environments, what to avoid, and growth opportunities.`;
  const introLines = doc.splitTextToSize(introText, contentWidth);
  doc.text(introLines, margin, yPosition);
  yPosition += introLines.length * 6 + 15;
  
  // Analysis date
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, margin, yPosition);
  addSpacing(20);
  
  // What Energizes You section
  addSectionHeader('What Energizes You', '🧠');
  analysis.energizers.forEach(item => {
    addBulletPoint(item);
    addSpacing(3);
  });
  addSpacing(15);
  
  // What to Avoid section
  addSectionHeader('What to Avoid', '🚫');
  analysis.avoid.forEach(item => {
    addBulletPoint(item);
    addSpacing(3);
  });
  addSpacing(15);
  
  // Ideal Environments section
  addSectionHeader('Ideal Work & Contribution Environments', '🏞️');
  analysis.environments.forEach(item => {
    addBulletPoint(item);
    addSpacing(3);
  });
  addSpacing(15);
  
  // Growth Opportunities section
  addSectionHeader('Growth Opportunities', '🌱');
  analysis.growth.forEach(item => {
    addBulletPoint(item);
    addSpacing(3);
  });
  addSpacing(20);
  
  if (isPremium) {
    // Add premium sections
    addSectionHeader('Career Recommendations', '💼');
    addBulletPoint('Leadership roles in entrepreneurial or growth-stage companies');
    addBulletPoint('Business development positions with strategic planning components');
    addBulletPoint('Consulting roles where you can build systems and solve complex problems');
    addSpacing();
    
    addSectionHeader('Relationship Patterns', '🤝');
    addBulletPoint('You work best with people who appreciate systematic approaches');
    addBulletPoint('You thrive in partnerships where you can take ownership of execution');
    addBulletPoint('You value collaborators who support your vision-building process');
    addSpacing();
    
    addSectionHeader('Decision-Making Style', '🧭');
    addBulletPoint('You prefer to research thoroughly before making major decisions');
    addBulletPoint('You consider long-term implications and systematic approaches');
    addBulletPoint('You value data and evidence to support your strategic choices');
    addSpacing();
    
    addSectionHeader('Personal Development Plan', '📈');
    addBulletPoint('Continue developing your strategic planning and execution skills');
    addBulletPoint('Seek opportunities to lead larger, more complex initiatives');
    addBulletPoint('Build networks in entrepreneurial and innovation-focused communities');
    addSpacing();
    
    addSectionHeader('Your Accomplishment Analysis', '📊');
    
    addColoredBackground([240, 240, 240]);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.text('Based on your detailed "How I Did It" responses:', margin + 5, yPosition + 3);
    yPosition += 10;
  }
  
  // Footer
  const addFooter = () => {
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('SEED Profile - Discover the Design You Were Born With', pageWidth / 2, pageHeight - 8, { align: 'center' });
  };
  
  // Add footer to all pages
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    addFooter();
  }
  
  return doc;
};
