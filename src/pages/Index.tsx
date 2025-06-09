
import React from 'react';
import AccomplishmentsForm from '../components/AccomplishmentsForm';

const Index = () => {
  return (
    <div className="min-h-screen lion-gradient">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-forest-dark mb-6 drop-shadow-sm">
              Discover the Design You Were Born With
            </h1>
            <p className="text-xl text-earth-brown max-w-2xl mx-auto leading-relaxed">
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
