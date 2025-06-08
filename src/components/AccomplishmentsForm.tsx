
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AccomplishmentData {
  [key: string]: string;
}

const AccomplishmentsForm = () => {
  const [accomplishments, setAccomplishments] = useState<AccomplishmentData>({});
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const { toast } = useToast();

  // Load saved data on component mount
  useEffect(() => {
    const saved = localStorage.getItem('motivated-abilities-accomplishments');
    if (saved) {
      try {
        setAccomplishments(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved accomplishments:', error);
      }
    }
  }, []);

  // Auto-save every 2 seconds when data changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.keys(accomplishments).length > 0) {
        localStorage.setItem('motivated-abilities-accomplishments', JSON.stringify(accomplishments));
        setLastSaved(new Date());
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [accomplishments]);

  const handleInputChange = (fieldId: string, value: string) => {
    setAccomplishments(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleManualSave = () => {
    localStorage.setItem('motivated-abilities-accomplishments', JSON.stringify(accomplishments));
    setLastSaved(new Date());
    toast({
      title: "Progress Saved",
      description: "Your accomplishments have been saved successfully.",
    });
  };

  const calculateProgress = () => {
    const filledFields = Object.values(accomplishments).filter(value => value.trim().length > 0).length;
    return (filledFields / 20) * 100;
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
            <ul className="text-muted-foreground text-sm mt-4 space-y-1">
              <li>• Keep each entry to 1-2 lines</li>
              <li>• Include accomplishments from different life stages</li>
              <li>• Focus on what YOU specifically contributed</li>
              <li>• Include both big and small wins that mattered to you</li>
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
              const fieldNumber = index + 1;
              return (
                <div key={fieldId} className="space-y-2">
                  <Label htmlFor={fieldId} className="text-sm font-medium">
                    Win {fieldNumber}
                  </Label>
                  <Textarea
                    id={fieldId}
                    placeholder={`Describe a meaningful accomplishment from any period of your life...`}
                    value={accomplishments[fieldId] || ''}
                    onChange={(e) => handleInputChange(fieldId, e.target.value)}
                    className="min-h-[60px] resize-none"
                    rows={2}
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps Preview */}
      {calculateProgress() >= 80 && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Excellent Progress!
              </h3>
              <p className="text-green-700">
                You're ready for the next phase of analysis. Soon you'll be able to 
                identify the common themes and motivational patterns across your accomplishments.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AccomplishmentsForm;
