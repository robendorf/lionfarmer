
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Save, CheckCircle, Star, Lightbulb } from 'lucide-react';
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
    <div className="space-y-6">
      {/* Progress Section */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={calculateProgress()} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{Object.values(accomplishments).filter(v => v.trim().length > 0).length} of 20 completed</span>
              <span>{Math.round(calculateProgress())}% complete</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="text-foreground font-medium">
                {getSelectedCount()} favorites selected (aim for 6-8)
              </span>
            </div>
            <p className="text-center text-foreground font-medium">
              {getProgressMessage()}
            </p>
            {lastSaved && (
              <p className="text-xs text-muted-foreground text-center">
                Last saved: {lastSaved.toLocaleTimeString()}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground">
              Think of 20 accomplishments that gave you a sense of satisfaction and achievement. 
              These can be from any period of your life - childhood, school, work, personal projects, 
              relationships, or hobbies. Focus on moments when you felt energized and fulfilled by what you accomplished.
            </p>
            <p className="text-muted-foreground mt-3">
              <strong>After writing your accomplishments, check the boxes next to your 6-8 favorites.</strong> 
              These will be used for deeper analysis in the "How I Did It" section.
            </p>
            <ul className="text-muted-foreground text-sm mt-4 space-y-1">
              <li>• Keep each entry to 1-2 lines (quick one-liners)</li>
              <li>• Include accomplishments from different life stages</li>
              <li>• Focus on what YOU specifically contributed</li>
              <li>• Include both big and small wins that mattered to you</li>
              <li>• These are your personal bragging rights - moments you felt proud</li>
              <li>• Select 6-8 favorites that you're most excited to explore further</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Accomplishments Input Form */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Your 20 Accomplishments</CardTitle>
            <Button onClick={handleManualSave} variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save Progress
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {Array.from({ length: 20 }, (_, index) => {
              const fieldId = `win_${index + 1}`;
              const selectedFieldId = `selected_${fieldId}`;
              const fieldNumber = index + 1;
              return (
                <div key={fieldId} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={selectedFieldId}
                      checked={selectedWins[selectedFieldId] || false}
                      onCheckedChange={(checked) => handleCheckboxChange(selectedFieldId, checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor={fieldId} className="text-sm font-medium flex-1">
                      Win {fieldNumber}
                      {selectedWins[selectedFieldId] && (
                        <Star className="inline h-4 w-4 ml-1 text-amber-500 fill-amber-500" />
                      )}
                    </Label>
                  </div>
                  <Textarea
                    id={fieldId}
                    placeholder={exampleAccomplishments[index]}
                    value={accomplishments[fieldId] || ''}
                    onChange={(e) => handleInputChange(fieldId, e.target.value)}
                    className="min-h-[60px] resize-none ml-7"
                    rows={2}
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* How I Did It Section */}
      {getSelectedCount() > 0 && (
        <Card className="border-2 border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              How I Did It - Action Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <p className="text-blue-700 mb-4">
                  For each of your selected favorite accomplishments, describe in detail HOW you made it happen. 
                  Focus on your specific actions and steps taken.
                </p>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• What specific steps did you take?</li>
                  <li>• What was your process or approach?</li>
                  <li>• How did you overcome obstacles?</li>
                  <li>• What actions led to the successful outcome?</li>
                  <li>• What was your methodology or strategy?</li>
                </ul>
              </div>

              <div className="grid gap-6">
                {getSelectedWinNumbers().slice(0, 8).map((winNumber) => {
                  const accomplishmentKey = `win_${winNumber}`;
                  const howKey = `how_${winNumber}`;
                  const accomplishmentText = accomplishments[accomplishmentKey] || '';
                  
                  return (
                    <div key={howKey} className="space-y-3">
                      <div className="bg-white p-3 rounded-lg border border-blue-200">
                        <Label className="text-sm font-medium text-blue-800 flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                          Win {winNumber}: {accomplishmentText.slice(0, 100)}{accomplishmentText.length > 100 ? '...' : ''}
                        </Label>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={howKey} className="text-sm font-medium text-blue-700">
                          How I Did It (for Win {winNumber})
                        </Label>
                        <Textarea
                          id={howKey}
                          placeholder={`Describe in detail how you accomplished this win. What specific steps did you take? What was your process or approach? How did you overcome obstacles?`}
                          value={howIDidIt[howKey] || ''}
                          onChange={(e) => handleHowIDidItChange(howKey, e.target.value)}
                          className="min-h-[120px] resize-none"
                          rows={5}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Analysis Section */}
      <AIAnalysis 
        accomplishments={accomplishments}
        selectedWins={selectedWins}
        howIDidIt={howIDidIt}
      />

      {/* Selection Guidance */}
      {getSelectedCount() > 8 && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <Star className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <p className="text-amber-800 text-sm">
                You've selected {getSelectedCount()} favorites. Consider narrowing it down to 6-8 
                accomplishments for the most focused analysis.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Next Steps Preview */}
      {calculateProgress() >= 80 && getSelectedCount() >= 6 && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Ready for Deep Dive!
              </h3>
              <p className="text-green-700">
                You've completed your accomplishments and selected {getSelectedCount()} favorites. 
                You're ready for the "How I Did It" analysis phase to uncover your motivational patterns.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AccomplishmentsForm;
