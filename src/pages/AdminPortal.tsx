
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageManager from '@/components/admin/ImageManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Image, Settings } from 'lucide-react';

const AdminPortal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-yellow-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Shield className="h-8 w-8 text-green-700 mr-3" />
          <h1 className="text-4xl font-bold text-green-700">Admin Portal</h1>
        </div>

        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="images" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Image Management
            </TabsTrigger>
            <TabsTrigger value="site-settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Site Settings
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Content Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="images">
            <ImageManager />
          </TabsContent>

          <TabsContent value="site-settings">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Site Settings</h2>
              <p className="text-gray-600">Site configuration options coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Content Management</h2>
              <p className="text-gray-600">Content editing tools coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPortal;
