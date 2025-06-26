import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, TrendingUp, ArrowRight, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-warm-gold/20 to-sage-green/30">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/47c096f3-cf33-4c1d-800b-053837385909.png" 
              alt="SEED Acorn Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-forest-dark">SEED Profile</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-forest-dark hover:text-primary">
              Features
            </Button>
            <Button variant="ghost" className="text-forest-dark hover:text-primary">
              Pricing
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Try Now
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/47c096f3-cf33-4c1d-800b-053837385909.png" 
            alt="SEED Acorn" 
            className="w-24 h-24 object-contain"
          />
        </div>
        <Badge className="mb-4 bg-warm-gold/20 text-forest-dark border-warm-gold/40">
          ✨ AI-Powered Career Analysis
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-forest-dark mb-6 leading-tight">
          Unlock Your Career
          <span className="text-primary block">Potential with SEED</span>
        </h1>
        <p className="text-xl text-forest-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your accomplishments into actionable career insights. Our AI analyzes your Skills, Experience, Education, and Drive to create your personalized career profile.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
            Start Your SEED Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-forest-dark/20">
            Watch Demo
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-forest-dark/60">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-warm-gold fill-warm-gold" />
            <span>4.9/5 rating</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>10,000+ profiles created</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            The SEED Methodology
          </h2>
          <p className="text-lg text-forest-dark/70 max-w-2xl mx-auto">
            Our comprehensive framework evaluates four key dimensions of your professional profile
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Technical and soft skills that set you apart in your field
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-warm-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-warm-gold" />
              </div>
              <CardTitle className="text-warm-gold">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Professional achievements and career progression
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-sage-green" />
              </div>
              <CardTitle className="text-sage-green">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Academic background and continuous learning initiatives
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-earth-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-earth-brown" />
              </div>
              <CardTitle className="text-earth-brown">Drive</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Motivation, goals, and career aspirations that fuel your growth
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary to-sage-green text-white">
          <CardHeader className="text-center py-12">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/47c096f3-cf33-4c1d-800b-053837385909.png" 
                alt="SEED Acorn" 
                className="w-16 h-16 object-contain opacity-90"
              />
            </div>
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Ready to Discover Your SEED Profile?
            </CardTitle>
            <CardDescription className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with personalized AI insights
            </CardDescription>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-sage-green/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/47c096f3-cf33-4c1d-800b-053837385909.png" 
              alt="SEED Acorn Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="font-semibold text-forest-dark">SEED Profile</span>
          </div>
          <div className="text-sm text-forest-dark/60">
            © 2024 SEED Profile. Transforming careers with AI.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
