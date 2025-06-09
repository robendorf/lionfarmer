
import jsPDF from 'jspdf';

interface ProfileData {
  motivatedAbilities: string[];
  subjectMatter: string[];
  circumstances: string[];
  operatingRelationship: string[];
  centralMotivation: string;
  personalityTraits: string[];
  strengthsAndGifts: string[];
  idealWorkEnvironment: string[];
  careerRecommendations: string[];
  personalDevelopment: string[];
}

// Helper function to add gradient effect using multiple rectangles
const addGradientBackground = (
  doc: jsPDF, 
  x: number, 
  y: number, 
  width: number, 
  height: number, 
  startColor: [number, number, number], 
  endColor: [number, number, number]
) => {
  const steps = 20;
  const stepHeight = height / steps;
  
  for (let i = 0; i < steps; i++) {
    const ratio = i / (steps - 1);
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * ratio);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * ratio);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * ratio);
    
    doc.setFillColor(r, g, b);
    doc.rect(x, y + i * stepHeight, width, stepHeight, 'F');
  }
};

// Helper function to add rounded rectangle
const addRoundedRect = (
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  style: 'S' | 'F' | 'DF' = 'S'
) => {
  // Simple rounded rectangle using lines and arcs
  doc.roundedRect(x, y, width, height, radius, radius, style);
};

// Helper function to add shadow effect
const addShadow = (
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  offset: number = 2
) => {
  doc.setFillColor(200, 200, 200);
  addRoundedRect(doc, x + offset, y + offset, width, height, 3, 'F');
};

// Helper function to add bullet point
const addBulletPoint = (
  doc: jsPDF,
  x: number,
  y: number,
  text: string,
  maxWidth: number
) => {
  doc.setFillColor(94, 127, 85); // sage-green
  doc.circle(x + 3, y - 1, 1.5, 'F');
  
  const lines = doc.splitTextToSize(text, maxWidth - 15);
  doc.text(lines, x + 10, y);
  
  return lines.length * 5;
};

// Helper function to add spacing
const addSpacing = (height: number) => {
  return height;
};

// Helper function to add section header
const addSectionHeader = (
  doc: jsPDF,
  x: number,
  y: number,
  title: string,
  pageWidth: number
) => {
  // Add colored background for header
  doc.setFillColor(94, 127, 85); // sage-green
  addRoundedRect(doc, x, y - 8, pageWidth - 40, 20, 5, 'F');
  
  // Add header text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(title, x + 10, y + 5);
  
  // Reset text color
  doc.setTextColor(60, 50, 40);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  return 25;
};

// Helper function to add colored background
const addColoredBackground = (
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  height: number,
  color: [number, number, number],
  opacity: number = 0.1
) => {
  // Simulate opacity by lightening the color
  const lightColor = color.map(c => Math.min(255, c + (255 - c) * (1 - opacity))) as [number, number, number];
  doc.setFillColor(...lightColor);
  addRoundedRect(doc, x, y, width, height, 3, 'F');
};

export const generatePDF = (profileData: ProfileData): jsPDF => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let currentY = margin;

  // Page background gradient
  addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);

  // Header section with premium styling
  doc.setFillColor(255, 255, 255);
  addShadow(doc, margin - 5, currentY - 5, contentWidth + 10, 70);
  addRoundedRect(doc, margin, currentY, contentWidth, 65, 8, 'F');
  
  // Add decorative border
  doc.setDrawColor(94, 127, 85);
  doc.setLineWidth(2);
  addRoundedRect(doc, margin, currentY, contentWidth, 65, 8, 'S');

  // Title with icon
  doc.setTextColor(94, 127, 85);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.text('🎯', margin + 15, currentY + 25);
  doc.text('Personal SEED Profile', margin + 35, currentY + 25);

  // Subtitle
  doc.setTextColor(121, 85, 72);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.text('Discover the Design You Were Born With', margin + 35, currentY + 35);

  // Date and methodology info
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin + 35, currentY + 45);
  doc.text('Based on SIMA Methodology', margin + 35, currentY + 55);

  currentY += 85;

  // Central Motivation Section
  if (profileData.centralMotivation) {
    addColoredBackground(doc, margin, currentY, contentWidth, 40, [94, 127, 85], 0.1);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(94, 72, 30);
    doc.text('🌟 Your Central Motivation', margin + 10, currentY + 15);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(60, 50, 40);
    const maxWidth = contentWidth - 20;
    const motivationLines = doc.splitTextToSize(profileData.centralMotivation, maxWidth);
    doc.text(motivationLines, margin + 10, currentY + 28);
    
    currentY += Math.max(45, motivationLines.length * 5 + 20);
  }

  // Motivated Abilities Section
  if (profileData.motivatedAbilities?.length > 0) {
    currentY += addSectionHeader(doc, margin, currentY, '💪 Your Motivated Abilities', pageWidth);
    
    profileData.motivatedAbilities.forEach((ability) => {
      if (currentY > pageHeight - 40) {
        doc.addPage();
        addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
        currentY = margin;
      }
      currentY += addBulletPoint(doc, margin + 10, currentY, ability, contentWidth);
    });
    currentY += addSpacing(10);
  }

  // Subject Matter Section
  if (profileData.subjectMatter?.length > 0) {
    if (currentY > pageHeight - 60) {
      doc.addPage();
      addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
      currentY = margin;
    }
    
    currentY += addSectionHeader(doc, margin, currentY, '📚 Your Subject Matter Interests', pageWidth);
    
    profileData.subjectMatter.forEach((subject) => {
      if (currentY > pageHeight - 40) {
        doc.addPage();
        addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
        currentY = margin;
      }
      currentY += addBulletPoint(doc, margin + 10, currentY, subject, contentWidth);
    });
    currentY += addSpacing(10);
  }

  // Circumstances Section
  if (profileData.circumstances?.length > 0) {
    if (currentY > pageHeight - 60) {
      doc.addPage();
      addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
      currentY = margin;
    }
    
    currentY += addSectionHeader(doc, margin, currentY, '🎯 Your Preferred Circumstances', pageWidth);
    
    profileData.circumstances.forEach((circumstance) => {
      if (currentY > pageHeight - 40) {
        doc.addPage();
        addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
        currentY = margin;
      }
      currentY += addBulletPoint(doc, margin + 10, currentY, circumstance, contentWidth);
    });
    currentY += addSpacing(10);
  }

  // Operating Relationship Section
  if (profileData.operatingRelationship?.length > 0) {
    if (currentY > pageHeight - 60) {
      doc.addPage();
      addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
      currentY = margin;
    }
    
    currentY += addSectionHeader(doc, margin, currentY, '🤝 Your Operating Relationships', pageWidth);
    
    profileData.operatingRelationship.forEach((relationship) => {
      if (currentY > pageHeight - 40) {
        doc.addPage();
        addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
        currentY = margin;
      }
      currentY += addBulletPoint(doc, margin + 10, currentY, relationship, contentWidth);
    });
    currentY += addSpacing(10);
  }

  // Career Recommendations Section
  if (profileData.careerRecommendations?.length > 0) {
    if (currentY > pageHeight - 60) {
      doc.addPage();
      addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
      currentY = margin;
    }
    
    currentY += addSectionHeader(doc, margin, currentY, '🚀 Career Recommendations', pageWidth);
    
    // Group recommendations by category
    const categories = {
      'Leadership Roles': profileData.careerRecommendations.filter(rec => rec.includes('leadership') || rec.includes('management') || rec.includes('director')),
      'Creative Positions': profileData.careerRecommendations.filter(rec => rec.includes('creative') || rec.includes('design') || rec.includes('innovation')),
      'Analytical Roles': profileData.careerRecommendations.filter(rec => rec.includes('analysis') || rec.includes('research') || rec.includes('strategy'))
    };

    Object.entries(categories).forEach(([category, recs]) => {
      if (recs.length > 0) {
        currentY += addBulletPoint(doc, margin + 10, currentY, `${category}:`, contentWidth);
        recs.forEach(rec => {
          currentY += addBulletPoint(doc, margin + 20, currentY, rec, contentWidth - 10);
        });
        currentY += addSpacing(5);
      }
    });

    // Add any remaining recommendations
    const remaining = profileData.careerRecommendations.filter(rec => 
      !Object.values(categories).flat().includes(rec)
    );
    remaining.forEach(rec => {
      currentY += addBulletPoint(doc, margin + 10, currentY, rec, contentWidth);
    });
    currentY += addSpacing(10);
  }

  // Footer
  if (currentY > pageHeight - 60) {
    doc.addPage();
    addGradientBackground(doc, 0, 0, pageWidth, pageHeight, [252, 249, 245], [240, 245, 235]);
    currentY = margin;
  }

  addColoredBackground(doc, margin, pageHeight - 50, contentWidth, 30, [191, 155, 88]);
  
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Your journey of self-discovery continues...', pageWidth / 2, pageHeight - 35, { align: 'center' });
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('This profile represents your unique motivational pattern based on your accomplishments.', pageWidth / 2, pageHeight - 25, { align: 'center' });

  return doc;
};
