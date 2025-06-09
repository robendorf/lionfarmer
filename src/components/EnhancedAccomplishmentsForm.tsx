
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, Trash2, Sparkles, Target, Lightbulb, 
  CheckCircle, ArrowRight, Star 
} from 'lucide-react';

const EnhancedAccomplishmentsForm = () => {
  const [accomplishments, setAccomplishments] = useState([
    { id: 1, text: '', isCompleted: false }
  ]);

  const addAccomplishment = () => {
    const newId = Math.max(...accomplishments.map(a => a.id)) + 1;
    setAccomplishments([...accomplishments, { id: newId, text: '', isCompleted: false }]);
  };

  const removeAccomplishment = (id: number) => {
    if (accomplishments.length > 1) {
      setAccomplishments(accomplishments.filter(a => a.id !== id));
    }
  };

  const updateAccomplishment = (id: number, text: string) => {
    setAccomplishments(accomplishments.map(a => 
      a.id === id ? { ...a, text, isCompleted: text.length > 50 } : a
    ));
  };

  const completedCount = accomplishments.filter(a => a.isCompleted).length;
  const progressPercentage = (completedCount / accomplishments.length) * 100;

  return (
    <div className="space-y-8 p-8">
      {/* Progress header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sage-green/10 to-warm-gold/10 px-6 py-3 rounded-full border border-sage-green/20">
          <Sparkles className="h-5 w-5 text-warm-gold" />
          <span className="font-semibold text-forest-dark">
            Share Your Meaningful Accomplishments
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.ceil(completedCount / 2) ? 'text-warm-gold fill-warm-gold' : 'text-sage-green/30'}`} 
              />
            ))}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm text-earth-brown mb-2">
            <span>Progress</span>
            <span>{completedCount} of {accomplishments.length} detailed</span>
          </div>
          <div className="w-full bg-sage-green/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-sage-green to-warm-gold h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Accomplishments list */}
      <div className="space-y-6">
        {accomplishments.map((accomplishment, index) => (
          <Card 
            key={accomplishment.id} 
            className={`relative overflow-hidden transition-all duration-300 border-2 ${
              accomplishment.isCompleted 
                ? 'border-sage-green/40 bg-gradient-to-br from-sage-green/5 to-warm-gold/5 shadow-lg' 
                : 'border-sage-green/20 bg-white/90 hover:border-warm-gold/40 hover:shadow-md'
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-green via-warm-gold to-sage-green opacity-60"></div>
            
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    accomplishment.isCompleted 
                      ? 'bg-gradient-to-r from-sage-green to-forest-dark text-white' 
                      : 'bg-sage-green/20 text-sage-green'
                  }`}>
                    {accomplishment.isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span className="font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest-dark">
                      Accomplishment #{index + 1}
                    </h3>
                    <p className="text-sm text-earth-brown">
                      Describe a meaningful achievement from any time in your life
                    </p>
                  </div>
                </div>
                
                {accomplishments.length > 1 && (
                  <Button
                    onClick={() => removeAccomplishment(accomplishment.id)}
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="relative">
                <Textarea
                  value={accomplishment.text}
                  onChange={(e) => updateAccomplishment(accomplishment.id, e.target.value)}
                  placeholder="Share the story of this accomplishment. What did you do? How did you approach it? What made it meaningful to you? Be as detailed as possible..."
                  className="min-h-32 resize-none border-sage-green/30 focus:border-warm-gold/60 focus:ring-warm-gold/20 bg-white/80"
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className={`text-xs ${
                    accomplishment.text.length > 50 ? 'text-sage-green' : 'text-earth-brown/60'
                  }`}>
                    {accomplishment.text.length} characters
                  </span>
                  {accomplishment.text.length > 50 && (
                    <CheckCircle className="h-4 w-4 text-sage-green" />
                  )}
                </div>
              </div>
              
              {/* Guidance hints */}
              <div className="bg-gradient-to-r from-warm-gold/10 to-sage-green/10 rounded-lg p-4 border border-warm-gold/20">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-warm-gold mt-0.5 flex-shrink-0" />
                  <div className="space-y-2 text-sm text-forest-dark">
                    <p className="font-medium">Consider including:</p>
                    <ul className="space-y-1 text-earth-brown">
                      <li>• What specific actions you took</li>
                      <li>• Challenges you overcame</li>
                      <li>• What motivated you throughout</li>
                      <li>• The impact or result you achieved</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          onClick={addAccomplishment}
          variant="outline"
          className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white transition-all duration-200 shadow-md"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Another Accomplishment
        </Button>
        
        <Button
          disabled={completedCount === 0}
          className={`shadow-lg transition-all duration-200 ${
            completedCount > 0 
              ? 'bg-gradient-to-r from-sage-green to-forest-dark hover:from-forest-dark hover:to-sage-green' 
              : ''
          }`}
        >
          <Target className="h-4 w-4 mr-2" />
          Analyze My Profile
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
      
      {/* Encouragement message */}
      {completedCount >= 3 && (
        <div className="text-center p-6 bg-gradient-to-r from-sage-green/10 to-warm-gold/10 rounded-2xl border border-sage-green/20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="h-6 w-6 text-warm-gold fill-warm-gold" />
            <span className="text-lg font-semibold text-forest-dark">Excellent Progress!</span>
            <Star className="h-6 w-6 text-warm-gold fill-warm-gold" />
          </div>
          <p className="text-earth-brown">
            You've shared enough detailed accomplishments for a comprehensive analysis. 
            Ready to discover your unique motivational pattern?
          </p>
        </div>
      )}
    </div>
  );
};

export default EnhancedAccomplishmentsForm;
