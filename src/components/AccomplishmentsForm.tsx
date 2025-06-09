
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Save, CheckCircle, Star, Lightbulb, Target, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AIAnalysis from './AIAnalysis';

interface AccomplishmentData {
  [key: string]: string;
}

interface SelectedWins {
  [key: string]: boolean;
}

interface HowIDidItData {
  [key: string]: string;
}

const AccomplishmentsForm = () => {
  const [accomplishments, setAccomplishments] = useState<AccomplishmentData>({});
  const [selectedWins, setSelectedWins] = useState<SelectedWins>({});
  const [howIDidIt, setHowIDidIt] = useState<HowIDidItData>({});
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const { toast } = useToast();

  // Example accomplishments for placeholders - spanning ages 3 to 93
  const exampleAccomplishments = [
    "Potty training myself at age 3 without any accidents",
    "Speaking in front of my 1st grade class about my pet hamster",
    "Learning to ride a bike without training wheels at age 7",
    "Winning the school spelling bee in 3rd grade",
    "Building a treehouse with my dad when I was 10",
    "Starting a lemonade stand that made $50 in one summer",
    "Learning to play my favorite song on the piano in middle school",
    "Making varsity soccer team as a freshman in high school",
    "Getting my driver's license on the first try at 16",
    "Graduating as valedictorian of my high school class",
    "Getting accepted into my dream college with a scholarship",
    "Completing my first marathon at age 22",
    "Landing my first job after college interviews",
    "Buying my first house at 25 and renovating it myself",
    "Getting promoted to manager within 3 years at work",
    "Starting my own business and making it profitable",
    "Raising two children who became successful adults",
    "Completing my master's degree while working full-time",
    "Mentoring 50+ young professionals throughout my career",
    "Learning to speak fluent Spanish at age 93"
  ];

  // Load saved data on component mount
  useEffect(() => {
    const saved = localStorage.getItem('motivated-abilities-accomplishments');
    const savedSelections = localStorage.getItem('motivated-abilities-selected-wins');
    const savedHowIDidIt = localStorage.getItem('motivated-abilities-how-i-did-it');
    
    if (saved) {
      try {
        setAccomplishments(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved accomplishments:', error);
      }
    }
    
    if (savedSelections) {
      try {
        setSelectedWins(JSON.parse(savedSelections));
      } catch (error) {
        console.error('Error loading saved selections:', error);
      }
    }

    if (savedHowIDidIt) {
      try {
        setHowIDidIt(JSON.parse(savedHowIDidIt));
      } catch (error) {
        console.error('Error loading saved how I did it:', error);
      }
    }
  }, []);

  // Auto-save every 2 seconds when data changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.keys(accomplishments).length > 0) {
        localStorage.setItem('motivated-abilities-accomplishments', JSON.stringify(accomplishments));
        localStorage.setItem('motivated-abilities-selected-wins', JSON.stringify(selectedWins));
        localStorage.setItem('motivated-abilities-how-i-did-it', JSON.stringify(howIDidIt));
        setLastSaved(new Date());
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [accomplishments, selectedWins, howIDidIt]);

  const handleInputChange = (fieldId: string, value: string) => {
    setAccomplishments(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleCheckboxChange = (fieldId: string, checked: boolean) => {
    if (checked) {
      // Count current selections
      const currentCount = Object.values(selectedWins).filter(Boolean).length;
      if (currentCount >= 8) {
        // Show toast and prevent selection
        toast({
          title: "Selection Limit Reached",
          description: "You can select a maximum of 8 favorite accomplishments.",
          variant: "destructive"
        });
        return;
      }
    }
    
    // Allow the change if under limit or unchecking
    setSelectedWins(prev => ({
      ...prev,
      [fieldId]: checked
    }));
  };

  const handleHowIDidItChange = (fieldId: string, value: string) => {
    setHowIDidIt(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleManualSave = () => {
    localStorage.setItem('motivated-abilities-accomplishments', JSON.stringify(accomplishments));
    localStorage.setItem('motivated-abilities-selected-wins', JSON.stringify(selectedWins));
    localStorage.setItem('motivated-abilities-how-i-did-it', JSON.stringify(howIDidIt));
    setLastSaved(new Date());
    toast({
      title: "Progress Saved",
      description: "Your accomplishments, selections, and analysis have been saved successfully.",
    });
  };

  const calculateProgress = () => {
    const filledFields = Object.values(accomplishments).filter(value => value.trim().length > 0).length;
    return (filledFields / 20) * 100;
  };

  const getSelectedCount = () => {
    return Object.values(selectedWins).filter(Boolean).length;
  };

  const getProgressMessage = () => {
    const filled = Object.values(accomplishments).filter(value => value.trim().length > 0).length;
    if (filled === 0) return "Ready to start your journey of discovery!";
    if (filled < 5) return "Great start! Keep thinking about those memorable wins.";
    if (filled < 10) return "You're building momentum! Dig deeper into your experiences.";
    if (filled < 15) return "Excellent progress! Your pattern is starting to emerge.";
    if (filled < 20) return "Almost there! Just a few more accomplishments to capture.";
    return "Amazing! You've captured all 20 accomplishments. Your motivational pattern awaits analysis.";
  };

  const getSelectedWinNumbers = () => {
    return Object.keys(selectedWins)
      .filter(key => selectedWins[key])
      .map(key => parseInt(key.replace('selected_win_', '')))
      .sort((a, b) => a - b);
  };

  return (
    <div className="space-y-8">
      {/* Progress Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/10 via-sage-green/5 to-earth-brown/10 rounded-3xl blur-sm"></div>
        <Card className="relative z-10 border-2 border-sage-green/30 bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-gradient-to-r from-sage-green/10 via-warm-gold/10 to-sage-green/10">
            <CardTitle className="flex items-center gap-3 text-forest-dark">
              <div className="p-2 bg-gradient-to-br from-warm-gold to-amber-400 rounded-full shadow-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              Your Discovery Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="relative">
                <Progress value={calculateProgress()} className="w-full h-3 bg-sage-green/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-sage-green/20 via-warm-gold/20 to-sage-green/20 rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm text-earth-brown font-medium">
                <span>{Object.values(accomplishments).filter(v => v.trim().length > 0).length} of 20 completed</span>
                <span>{Math.round(calculateProgress())}% complete</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-warm-gold/10 to-amber-100/50 rounded-xl border border-warm-gold/30">
                <Star className="h-5 w-5 text-warm-gold" />
                <span className="text-forest-dark font-semibold text-lg">
                  {getSelectedCount()} favorites selected (aim for 6-8)
                </span>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-sage-green/10 to-forest-dark/5 rounded-xl">
                <p className="text-forest-dark font-medium text-lg">
                  {getProgressMessage()}
                </p>
                {lastSaved && (
                  <p className="text-sm text-earth-brown mt-2">
                    Last saved: {lastSaved.toLocaleTimeString()}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 via-cream/50 to-warm-gold/10 rounded-3xl blur-sm"></div>
        <Card className="relative z-10 border-2 border-sage-green/30 bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-gradient-to-r from-forest-dark/5 via-sage-green/10 to-forest-dark/5">
            <CardTitle className="text-forest-dark flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-sage-green to-forest-dark rounded-full shadow-lg">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              Instructions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="prose prose-sm max-w-none">
              <div className="bg-gradient-to-r from-cream via-white to-cream p-6 rounded-xl border border-sage-green/20 shadow-inner">
                <p className="text-earth-brown text-base leading-relaxed mb-4">
                  Think of 20 accomplishments that gave you a sense of satisfaction and achievement. 
                  These can be from any period of your life - childhood, school, work, personal projects, 
                  relationships, or hobbies. Focus on moments when you felt energized and fulfilled by what you accomplished.
                </p>
                <div className="bg-warm-gold/10 p-4 rounded-lg border border-warm-gold/30 mb-4">
                  <p className="text-forest-dark font-semibold text-base">
                    <strong>After writing your accomplishments, check the boxes next to your 6-8 favorites.</strong> 
                    These will be used for deeper analysis in the "How I Did It" section.
                  </p>
                </div>
                <div className="bg-sage-green/10 p-4 rounded-lg border border-sage-green/30">
                  <ul className="text-earth-brown text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-sage-green mt-1">•</span>
                      Keep each entry to 1-2 lines (quick one-liners)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-green mt-1">•</span>
                      Include accomplishments from different life stages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-green mt-1">•</span>
                      Focus on what YOU specifically contributed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-green mt-1">•</span>
                      Include both big and small wins that mattered to you
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-green mt-1">•</span>
                      These are your personal bragging rights - moments you felt proud
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-green mt-1">•</span>
                      Select 6-8 favorites that you're most excited to explore further
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accomplishments Input Form */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/10 via-sage-green/5 to-earth-brown/10 rounded-3xl blur-sm"></div>
        <Card className="relative z-10 border-2 border-sage-green/30 bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="bg-gradient-to-r from-sage-green/10 via-warm-gold/10 to-sage-green/10">
            <div className="flex justify-between items-center">
              <CardTitle className="text-forest-dark flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-warm-gold to-amber-400 rounded-full shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                Your 20 Accomplishments
              </CardTitle>
              <Button onClick={handleManualSave} variant="outline" size="sm" className="border-sage-green text-forest-dark hover:bg-sage-green hover:text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Progress
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-6">
              {Array.from({ length: 20 }, (_, index) => {
                const fieldId = `win_${index + 1}`;
                const selectedFieldId = `selected_${fieldId}`;
                const fieldNumber = index + 1;
                return (
                  <div key={fieldId} className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-sage-green/5 via-transparent to-warm-gold/5 rounded-xl"></div>
                    <div className="relative z-10 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-sage-green/20 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={selectedFieldId}
                            checked={selectedWins[selectedFieldId] || false}
                            onCheckedChange={(checked) => handleCheckboxChange(selectedFieldId, checked as boolean)}
                            className="border-sage-green data-[state=checked]:bg-sage-green data-[state=checked]:border-sage-green"
                          />
                          <Label htmlFor={fieldId} className="text-sm font-semibold text-forest-dark flex-1 flex items-center gap-2">
                            <span className="bg-gradient-to-r from-sage-green to-forest-dark bg-clip-text text-transparent">
                              Win {fieldNumber}
                            </span>
                            {selectedWins[selectedFieldId] && (
                              <Star className="h-4 w-4 text-warm-gold fill-warm-gold animate-pulse" />
                            )}
                          </Label>
                        </div>
                        <Textarea
                          id={fieldId}
                          placeholder={exampleAccomplishments[index]}
                          value={accomplishments[fieldId] || ''}
                          onChange={(e) => handleInputChange(fieldId, e.target.value)}
                          className="min-h-[60px] resize-none ml-7 border-sage-green/30 focus:border-sage-green bg-white/90"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How I Did It Section */}
      {getSelectedCount() > 0 && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 via-warm-gold/5 to-forest-dark/10 rounded-3xl blur-sm"></div>
          <Card className="relative z-10 border-2 border-sage-green/30 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="bg-gradient-to-r from-sage-green/10 via-warm-gold/10 to-sage-green/10">
              <CardTitle className="flex items-center gap-3 text-forest-dark">
                <div className="p-2 bg-gradient-to-br from-sage-green to-forest-dark rounded-full shadow-lg">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                How I Did It - Action Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cream via-white to-cream p-6 rounded-xl border border-sage-green/20 shadow-inner">
                  <p className="text-forest-dark text-base leading-relaxed mb-4 font-medium">
                    For each of your selected favorite accomplishments, describe in detail HOW you made it happen. 
                    Focus on your specific actions and steps taken.
                  </p>
                  <div className="bg-warm-gold/10 p-4 rounded-lg border border-warm-gold/30">
                    <ul className="text-earth-brown text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        What specific steps did you take?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        What was your process or approach?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        How did you overcome obstacles?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        What actions led to the successful outcome?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        What was your methodology or strategy?
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-6">
                  {getSelectedWinNumbers().slice(0, 8).map((winNumber) => {
                    const accomplishmentKey = `win_${winNumber}`;
                    const howKey = `how_${winNumber}`;
                    const accomplishmentText = accomplishments[accomplishmentKey] || '';
                    
                    return (
                      <div key={howKey} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-sage-green/5 via-transparent to-warm-gold/5 rounded-xl"></div>
                        <div className="relative z-10 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-sage-green/20 shadow-sm hover:shadow-md transition-shadow">
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-warm-gold/10 via-amber-50 to-warm-gold/10 p-4 rounded-lg border border-warm-gold/30">
                              <Label className="text-sm font-semibold text-forest-dark flex items-center gap-2">
                                <Star className="h-4 w-4 text-warm-gold fill-warm-gold" />
                                Win {winNumber}: {accomplishmentText.slice(0, 100)}{accomplishmentText.length > 100 ? '...' : ''}
                              </Label>
                            </div>
                            <div className="space-y-3">
                              <Label htmlFor={howKey} className="text-sm font-semibold text-forest-dark flex items-center gap-2">
                                <Zap className="h-4 w-4 text-sage-green" />
                                How I Did It (for Win {winNumber})
                              </Label>
                              <Textarea
                                id={howKey}
                                placeholder={`Describe in detail how you accomplished this win. What specific steps did you take? What was your process or approach? How did you overcome obstacles?`}
                                value={howIDidIt[howKey] || ''}
                                onChange={(e) => handleHowIDidItChange(howKey, e.target.value)}
                                className="min-h-[120px] resize-none border-sage-green/30 focus:border-sage-green bg-white/90"
                                rows={5}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* AI Analysis Section */}
      <AIAnalysis 
        accomplishments={accomplishments}
        selectedWins={selectedWins}
        howIDidIt={howIDidIt}
      />

      {/* Selection Guidance */}
      {getSelectedCount() > 8 && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/20 to-amber-100/30 rounded-3xl blur-sm"></div>
          <Card className="relative z-10 border-2 border-warm-gold/40 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="pt-6">
              <div className="text-center p-6 bg-gradient-to-r from-warm-gold/10 to-amber-100/50 rounded-xl">
                <Star className="h-8 w-8 text-warm-gold mx-auto mb-3" />
                <p className="text-forest-dark font-medium">
                  You've selected {getSelectedCount()} favorites. Consider narrowing it down to 6-8 
                  accomplishments for the most focused analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Next Steps Preview */}
      {calculateProgress() >= 80 && getSelectedCount() >= 6 && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-forest-dark/10 rounded-3xl blur-sm"></div>
          <Card className="relative z-10 border-2 border-sage-green/40 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="pt-6">
              <div className="text-center p-6 bg-gradient-to-r from-sage-green/10 to-forest-dark/5 rounded-xl">
                <CheckCircle className="h-12 w-12 text-sage-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest-dark mb-3">
                  Ready for Deep Dive!
                </h3>
                <p className="text-earth-brown font-medium">
                  You've completed your accomplishments and selected {getSelectedCount()} favorites. 
                  You're ready for the "How I Did It" analysis phase to uncover your motivational patterns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AccomplishmentsForm;
