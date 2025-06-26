
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, TrendingUp, ArrowRight, Star, Book, Heart, Compass, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-warm-gold/20 to-sage-green/30">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0a4a09e8-5305-46df-a349-2b8c31e1814f.png" 
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
              How It Works
            </Button>
            <Button variant="ghost" className="text-forest-dark hover:text-primary">
              Pricing
            </Button>
            <Button variant="ghost" className="text-forest-dark hover:text-primary">
              Testimonials
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/0a4a09e8-5305-46df-a349-2b8c31e1814f.png" 
            alt="SEED Acorn" 
            className="w-24 h-24 object-contain"
          />
        </div>
        <h1 className="text-6xl font-bold text-forest-dark mb-2">
          SEED
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
          Discover Your God-Given Design
        </h2>
        <p className="text-xl text-forest-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Biblical strengths designed by God for kingdom impact
        </p>
        <p className="text-lg text-forest-dark/70 mb-8 max-w-3xl mx-auto">
          Uncover your unique motivational patterns through Scripture-inspired analysis and discover where you come alive in God's plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
            Start Your SEED Profile
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-forest-dark/20">
            Learn More
          </Button>
        </div>
      </section>

      {/* What is SEED Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            What is SEED Profile?
          </h2>
          <p className="text-lg text-forest-dark/70 max-w-3xl mx-auto">
            A Scripture-inspired discovery tool that reveals your God-given motivational patterns through personal stories and biblical wisdom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">What Energizes You</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Discover the activities and environments that bring you life and align with how God created you.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-warm-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6 text-warm-gold" />
              </div>
              <CardTitle className="text-warm-gold">Your Ideal Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Understand the conditions where you flourish and can make your greatest kingdom impact.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-sage-green" />
              </div>
              <CardTitle className="text-sage-green">Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Identify areas for spiritual and personal development aligned with God's design for your life.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 bg-white/40 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-forest-dark/70">
            Three simple steps to discover your God-given design
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-forest-dark mb-2">Complete Assessment</h3>
            <p className="text-sm text-forest-dark/60 mb-4">20-30 minutes of reflection</p>
            <p className="text-forest-dark/80">
              Share meaningful stories from your life that reveal your natural motivational patterns and God-given strengths.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-forest-dark mb-2">Discover Your Strengths</h3>
            <p className="text-sm text-forest-dark/60 mb-4">Receive your personalized profile</p>
            <p className="text-forest-dark/80">
              Get detailed insights into what energizes you, your ideal environment, and areas to avoid for optimal flourishing.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-forest-dark mb-2">Apply Your Design</h3>
            <p className="text-sm text-forest-dark/60 mb-4">Live out your purpose</p>
            <p className="text-forest-dark/80">
              Use your insights for career decisions, ministry opportunities, and personal growth aligned with God's plan.
            </p>
          </div>
        </div>
      </section>

      {/* Why SEED is Different */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            Why SEED Profile is Different
          </h2>
          <p className="text-lg text-forest-dark/70">
            Grounded in Scripture, focused on kingdom impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Biblical Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Rooted in Scripture and God's design for your unique purpose and calling.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-warm-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-warm-gold" />
              </div>
              <CardTitle className="text-warm-gold">Story-Based</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Uses personal narratives rather than questionnaires to reveal authentic patterns.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-sage-green" />
              </div>
              <CardTitle className="text-sage-green">Kingdom Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Designed specifically for spiritual impact and advancing God's kingdom.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-earth-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-earth-brown" />
              </div>
              <CardTitle className="text-earth-brown">Practical Application</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Actionable insights for real-world decisions and spiritual growth.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            Choose Your Profile
          </h2>
          <p className="text-lg text-forest-dark/70">
            Start with our free basic profile or unlock deeper insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/80 border-sage-green/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Badge className="mb-4 bg-sage-green/20 text-forest-dark border-sage-green/40">
                Free
              </Badge>
              <CardTitle className="text-2xl mb-2">Basic SEED Profile</CardTitle>
              <CardDescription className="mb-4">Perfect for getting started</CardDescription>
              <div className="text-4xl font-bold text-forest-dark">$0</div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage-green" />
                <span>What Energizes You</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage-green" />
                <span>What to Avoid</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage-green" />
                <span>Ideal Environment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage-green" />
                <span>Growth Opportunities</span>
              </div>
              <Button className="w-full mt-6 bg-sage-green hover:bg-sage-green/90">
                Start Free Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-primary/20 hover:shadow-lg transition-shadow relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
              Most Popular
            </Badge>
            <CardHeader className="text-center">
              <Badge className="mb-4 bg-primary/20 text-forest-dark border-primary/40">
                Premium
              </Badge>
              <CardTitle className="text-2xl mb-2">Premium SEED Profile</CardTitle>
              <CardDescription className="mb-4">Complete analysis and tools</CardDescription>
              <div className="text-4xl font-bold text-forest-dark">$5.99</div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Everything in Basic Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>15 Detailed Sections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Resume Builder</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Export & Share Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Detailed Analysis</span>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                Get Premium Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 bg-white/40 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            What People Are Saying
          </h2>
          <p className="text-lg text-forest-dark/70">
            Discover how SEED Profile is transforming lives
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/80 border-sage-green/20">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warm-gold fill-warm-gold" />
                ))}
              </div>
              <CardTitle className="text-lg">Life-Changing Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                "SEED Profile helped me understand how God designed me to serve in ministry. The biblical foundation made all the difference."
              </CardDescription>
              <p className="text-sm font-medium text-forest-dark">- Sarah M., Ministry Leader</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warm-gold fill-warm-gold" />
                ))}
              </div>
              <CardTitle className="text-lg">Perfect Career Clarity</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                "Finally found my calling! The insights from SEED Profile guided me to a career that aligns with God's design for my life."
              </CardDescription>
              <p className="text-sm font-medium text-forest-dark">- David R., Business Professional</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 border-sage-green/20">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warm-gold fill-warm-gold" />
                ))}
              </div>
              <CardTitle className="text-lg">Deeper Self-Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                "The Scripture-based approach helped me see myself through God's eyes. I now understand my unique purpose and gifts."
              </CardDescription>
              <p className="text-sm font-medium text-forest-dark">- Maria L., Teacher</p>
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
                src="/lovable-uploads/0a4a09e8-5305-46df-a349-2b8c31e1814f.png" 
                alt="SEED Acorn" 
                className="w-16 h-16 object-contain opacity-90"
              />
            </div>
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Ready to Discover Your God-Given Design?
            </CardTitle>
            <CardDescription className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who have discovered their unique purpose and calling through SEED Profile.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                Start Your Free Profile
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Download App
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-sage-green/20">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/0a4a09e8-5305-46df-a349-2b8c31e1814f.png" 
                alt="SEED Acorn Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-forest-dark text-lg">SEED Profile</span>
            </div>
            <p className="text-sm text-forest-dark/60 mb-4">
              Discover your God-given design and live out your unique purpose in His kingdom.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-forest-dark mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-forest-dark/60">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-forest-dark mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-forest-dark/60">
              <li><a href="#" className="hover:text-primary">Help Center</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-forest-dark mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-forest-dark/60">
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Community</a></li>
              <li><a href="#" className="hover:text-primary">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-green/20 mt-8 pt-8 text-center">
          <p className="text-sm text-forest-dark/60">
            © 2024 SEED Profile. All rights reserved. Discover the design you were born with.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
