
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Edit, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageItem {
  id: string;
  name: string;
  currentPath: string;
  description: string;
  category: string;
}

const ImageManager = () => {
  const { toast } = useToast();
  const [editingImage, setEditingImage] = useState<string | null>(null);
  const [newImagePath, setNewImagePath] = useState<string>('');

  const imageCategories = [
    {
      category: 'Brand Assets',
      images: [
        {
          id: 'logo-nav',
          name: 'Navigation Logo',
          currentPath: '/lovable-uploads/0ec9aaf3-ff60-4349-84b0-5cb5ab6f62a0.png',
          description: 'Logo displayed in the navigation header',
          category: 'brand'
        },
        {
          id: 'favicon',
          name: 'Favicon',
          currentPath: '/lovable-uploads/0ec9aaf3-ff60-4349-84b0-5cb5ab6f62a0.png',
          description: 'Browser tab icon',
          category: 'brand'
        }
      ]
    },
    {
      category: 'Hero Section',
      images: [
        {
          id: 'hero-bg',
          name: 'Hero Background',
          currentPath: 'gradient-background',
          description: 'Background gradient for hero section',
          category: 'hero'
        }
      ]
    },
    {
      category: 'Feature Images',
      images: [
        {
          id: 'feature-1',
          name: 'Grounded in Stories',
          currentPath: 'lucide-heart-icon',
          description: 'Icon for "Grounded in Your Real-Life Stories" feature',
          category: 'features'
        },
        {
          id: 'feature-2',
          name: 'Practical and Personalized',
          currentPath: 'lucide-user-icon',
          description: 'Icon for "Practical and Personalized" feature',
          category: 'features'
        }
      ]
    }
  ];

  const handleImageUpload = (imageId: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // In a real implementation, you would upload the file and get the new path
        // For now, we'll simulate this
        const newPath = `/lovable-uploads/${Date.now()}-${file.name}`;
        setNewImagePath(newPath);
        toast({
          title: "Image uploaded successfully",
          description: `New image path: ${newPath}`,
        });
      }
    };
    input.click();
  };

  const handleSaveImage = (imageId: string) => {
    // Here you would update the actual file references
    toast({
      title: "Image updated",
      description: "The image reference has been updated successfully.",
    });
    setEditingImage(null);
    setNewImagePath('');
  };

  const handleCancelEdit = () => {
    setEditingImage(null);
    setNewImagePath('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Image Management</h2>
        
        {imageCategories.map((category) => (
          <div key={category.category} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.images.map((image) => (
                <Card key={image.id} className="border-2 border-gray-200 hover:border-green-300 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-green-700">{image.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-4 min-h-[100px] flex items-center justify-center">
                        {image.currentPath.startsWith('/lovable-uploads/') ? (
                          <img 
                            src={image.currentPath} 
                            alt={image.name}
                            className="max-h-16 max-w-full object-contain"
                          />
                        ) : (
                          <div className="text-gray-500 text-sm text-center">
                            {image.currentPath}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600">{image.description}</p>
                      
                      {editingImage === image.id ? (
                        <div className="space-y-2">
                          <Label htmlFor={`path-${image.id}`}>New Image Path</Label>
                          <Input
                            id={`path-${image.id}`}
                            value={newImagePath || image.currentPath}
                            onChange={(e) => setNewImagePath(e.target.value)}
                            placeholder="Enter new image path"
                          />
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              onClick={() => handleSaveImage(image.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Save className="h-4 w-4 mr-1" />
                              Save
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={handleCancelEdit}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleImageUpload(image.id)}
                            className="flex-1"
                          >
                            <Upload className="h-4 w-4 mr-1" />
                            Upload New
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => setEditingImage(image.id)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit Path
                          </Button>
                        </div>
                      )}
                      
                      <div className="text-xs text-gray-500 break-all">
                        Current: {image.currentPath}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManager;
