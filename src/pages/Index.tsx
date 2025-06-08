
import React from 'react';
import AccomplishmentsForm from '../components/AccomplishmentsForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Discover Your Motivated Abilities
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's identify your natural motivational patterns by reflecting on your meaningful accomplishments from childhood to now.
            </p>
          </div>
          
          <AccomplishmentsForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
