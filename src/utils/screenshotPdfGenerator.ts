
import html2canvas from 'html2canvas';
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

export const generateScreenshotPDF = async (
  analysis: AnalysisResult,
  deepDiveData: DeepDiveData[],
  isPremium: boolean = false
): Promise<jsPDF> => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Helper function to add text overlay for searchability
  const addSearchableText = (text: string[], yStart: number) => {
    doc.setTextColor(255, 255, 255, 0); // Invisible text
    doc.setFontSize(8);
    let y = yStart;
    
    text.forEach(item => {
      const lines = doc.splitTextToSize(item, pageWidth - 20);
      doc.text(lines, 10, y);
      y += lines.length * 3;
    });
  };

  // Create a temporary container for rendering
  const createTempContainer = (content: string): HTMLElement => {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '800px';
    container.style.backgroundColor = 'white';
    container.style.padding = '40px';
    container.style.fontFamily = 'Arial, sans-serif';
    container.innerHTML = content;
    document.body.appendChild(container);
    return container;
  };

  // Generate title page
  const titlePageContent = `
    <div style="text-align: center; padding: 60px 40px;">
      <div style="background: linear-gradient(135deg, #4c6e57, #b48e49); color: white; padding: 40px; border-radius: 20px; margin-bottom: 40px;">
        <h1 style="font-size: 48px; margin: 0 0 20px 0; font-weight: bold;">🎯 Your SEED Profile</h1>
        <p style="font-size: 18px; margin: 0;">${isPremium ? 'Premium Analysis Report' : 'Analysis Report'}</p>
      </div>
      <div style="background: #f8f6ef; padding: 30px; border-radius: 15px; border: 2px solid #4c6e57;">
        <p style="font-size: 16px; color: #57534e; line-height: 1.6; margin: 0;">
          This SEED Profile reveals your unique motivational pattern based on SEED methodology. 
          The analysis examines your accomplishment processes to identify what energizes you, 
          ideal environments, what to avoid, and growth opportunities.
        </p>
        <p style="margin-top: 20px; color: #78716c; font-size: 14px;">
          Generated on: ${new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  `;

  const titleContainer = createTempContainer(titlePageContent);
  const titleCanvas = await html2canvas(titleContainer, {
    width: 800,
    height: 1000,
    backgroundColor: '#ffffff'
  });
  
  const titleImgData = titleCanvas.toDataURL('image/png');
  doc.addImage(titleImgData, 'PNG', 0, 0, pageWidth, pageHeight);
  document.body.removeChild(titleContainer);

  // Generate analysis pages
  const sections = [
    {
      title: '🧠 What Energizes You',
      items: analysis.energizers,
      color: '#4c6e57'
    },
    {
      title: '🚫 What to Avoid', 
      items: analysis.avoid,
      color: '#dc2626'
    },
    {
      title: '🏞️ Ideal Work & Contribution Environments',
      items: analysis.environments,
      color: '#059669'
    },
    {
      title: '🌱 Growth Opportunities',
      items: analysis.growth,
      color: '#b48e49'
    }
  ];

  for (const section of sections) {
    doc.addPage();
    
    const sectionContent = `
      <div style="padding: 40px;">
        <div style="background: ${section.color}; color: white; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
          <h2 style="font-size: 24px; margin: 0; font-weight: bold;">${section.title}</h2>
        </div>
        <div style="space-y: 15px;">
          ${section.items.map(item => `
            <div style="background: #f8f6ef; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid ${section.color};">
              <p style="margin: 0; font-size: 14px; color: #57534e; line-height: 1.5;">• ${item}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const sectionContainer = createTempContainer(sectionContent);
    const sectionCanvas = await html2canvas(sectionContainer, {
      width: 800,
      height: 1000,
      backgroundColor: '#ffffff'
    });
    
    const sectionImgData = sectionCanvas.toDataURL('image/png');
    doc.addImage(sectionImgData, 'PNG', 0, 0, pageWidth, pageHeight);
    
    // Add searchable text overlay
    addSearchableText(section.items, 80);
    
    document.body.removeChild(sectionContainer);
  }

  // Add premium sections if requested
  if (isPremium) {
    const premiumSections = [
      {
        title: '💼 Career Recommendations',
        items: [
          'Leadership roles in entrepreneurial or growth-stage companies',
          'Business development positions with strategic planning components',
          'Consulting roles where you can build systems and solve complex problems'
        ]
      },
      {
        title: '🤝 Relationship Patterns',
        items: [
          'You work best with people who appreciate systematic approaches',
          'You thrive in partnerships where you can take ownership of execution',
          'You value collaborators who support your vision-building process'
        ]
      },
      {
        title: '🧭 Decision-Making Style',
        items: [
          'You prefer to research thoroughly before making major decisions',
          'You consider long-term implications and systematic approaches',
          'You value data and evidence to support your strategic choices'
        ]
      }
    ];

    for (const section of premiumSections) {
      doc.addPage();
      
      const premiumContent = `
        <div style="padding: 40px;">
          <div style="background: linear-gradient(135deg, #4c6e57, #b48e49); color: white; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
            <h2 style="font-size: 24px; margin: 0; font-weight: bold;">${section.title}</h2>
          </div>
          <div style="space-y: 15px;">
            ${section.items.map(item => `
              <div style="background: #f8f6ef; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #b48e49;">
                <p style="margin: 0; font-size: 14px; color: #57534e; line-height: 1.5;">• ${item}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      const premiumContainer = createTempContainer(premiumContent);
      const premiumCanvas = await html2canvas(premiumContainer, {
        width: 800,
        height: 1000,
        backgroundColor: '#ffffff'
      });
      
      const premiumImgData = premiumCanvas.toDataURL('image/png');
      doc.addImage(premiumImgData, 'PNG', 0, 0, pageWidth, pageHeight);
      
      // Add searchable text overlay
      addSearchableText(section.items, 80);
      
      document.body.removeChild(premiumContainer);
    }

    // Add accomplishment analysis if there's deep dive data
    if (deepDiveData.length > 0) {
      doc.addPage();
      
      const analysisContent = `
        <div style="padding: 40px;">
          <div style="background: #4c6e57; color: white; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
            <h2 style="font-size: 24px; margin: 0; font-weight: bold;">📊 Your Accomplishment Analysis</h2>
          </div>
          <div style="background: #f0f0f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="font-style: italic; color: #57534e; margin: 0;">Based on your detailed "How I Did It" responses:</p>
          </div>
          ${deepDiveData.map((item, index) => `
            <div style="background: #f8f6ef; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #4c6e57;">
              <h4 style="color: #4c6e57; margin: 0 0 10px 0;">Win #${item.winNumber}</h4>
              <p style="margin: 0; font-size: 14px; color: #57534e; line-height: 1.5;">${item.process}</p>
            </div>
          `).join('')}
        </div>
      `;

      const analysisContainer = createTempContainer(analysisContent);
      const analysisCanvas = await html2canvas(analysisContainer, {
        width: 800,
        height: 1000,
        backgroundColor: '#ffffff'
      });
      
      const analysisImgData = analysisCanvas.toDataURL('image/png');
      doc.addImage(analysisImgData, 'PNG', 0, 0, pageWidth, pageHeight);
      
      // Add searchable text overlay
      const searchableText = deepDiveData.map(item => `Win #${item.winNumber}: ${item.process}`);
      addSearchableText(searchableText, 120);
      
      document.body.removeChild(analysisContainer);
    }
  }

  return doc;
};
