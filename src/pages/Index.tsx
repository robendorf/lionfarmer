
import React from 'react';
import AccomplishmentsForm from '../components/AccomplishmentsForm';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-sage-green/20 to-warm-gold/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-warm-gold/10 via-transparent to-sage-green/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-green/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-warm-gold/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-earth-brown/5 rounded-full blur-lg"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced header with premium styling */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-green/5 to-transparent rounded-3xl"></div>
            <div className="relative z-10 py-12 px-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-warm-gold via-amber-400 to-warm-gold rounded-full shadow-xl mb-8 animate-pulse">
                <span className="text-3xl">🎯</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-forest-dark via-sage-green to-earth-brown bg-clip-text text-transparent mb-8 leading-tight drop-shadow-sm">
                Discover the Design You Were Born With
              </h1>
              
              <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-sage-green/20">
                <p className="text-2xl text-earth-brown leading-relaxed font-medium">
                  Let's identify your natural motivational patterns by reflecting on your meaningful accomplishments from childhood to now.
                </p>
                
                <div className="flex items-center justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sage-green">
                    <div className="w-3 h-3 bg-sage-green rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">SEED Methodology</span>
                  </div>
                  <div className="w-1 h-1 bg-earth-brown/30 rounded-full"></div>
                  <div className="flex items-center gap-2 text-warm-gold">
                    <div className="w-3 h-3 bg-warm-gold rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Personalized Analysis</span>
                  </div>
                  <div className="w-1 h-1 bg-earth-brown/30 rounded-full"></div>
                  <div className="flex items-center gap-2 text-earth-brown">
                    <div className="w-3 h-3 bg-earth-brown rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Actionable Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced form container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-sage-green/5 to-warm-gold/10 rounded-3xl blur-sm"></div>
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-sage-green/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-green via-warm-gold to-sage-green"></div>
              <AccomplishmentsForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sage-green/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;
