'use client';

import { useBuilderStore } from '@/store/builder-store';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Settings } from 'lucide-react';

export default function SectionEditor() {
  const { sections, selectedSectionId, updateSection, deleteSection } = useBuilderStore();

  const selectedSection = sections.find(section => section.id === selectedSectionId);

  if (!selectedSection) {
    return (
      <div className="p-4 relative h-full flex items-center justify-center bg-[#C0BEB5]">
        <div className="text-center py-8 p-2 flex flex-col items-center">
          <Settings className="w-12 h-12 mx-auto mb-4 text-[#FFFBEB]" />
          <p className='text-[#FFFBEB] font-medium text-lg'>Select a section to edit its properties</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (key: string, value: string | number | boolean) => {
    updateSection(selectedSection.id, { [key]: value });
  };

  const handleDelete = () => {
    deleteSection(selectedSection.id);
  };

  const isColorField = (key: string) => {
    return key.toLowerCase().includes('color') || key.toLowerCase().includes('background');
  };

  const renderInputs = () => {
    const inputs = [];
    
    for (const [key, value] of Object.entries(selectedSection.props)) {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      
      if (typeof value === 'string' && value.length > 100) {
        inputs.push(
          <div key={key} className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <Textarea
              value={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        );
      } else if (typeof value === 'boolean') {
        inputs.push(
          <div key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={key}
              checked={value}
              onChange={(e) => handleInputChange(key, e.target.checked)}
              className="rounded border-gray-300"
            />
            <label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</label>
          </div>
        );
      } else if (isColorField(key)) {
        // Color picker for color fields
        inputs.push(
          <div key={key} className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={value as string}
                onChange={(e) => handleInputChange(key, e.target.value)}
                className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                title={`Choose ${label.toLowerCase()}`}
              />
              <Input
                value={value as string}
                onChange={(e) => handleInputChange(key, e.target.value)}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="flex-1"
              />
            </div>
          </div>
        );
      } else {
        inputs.push(
          <div key={key} className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <Input
              value={value as string}
              onChange={(e) => handleInputChange(key, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
            />
          </div>
        );
      }
    }
    
    return inputs;
  };

  return (
    <div className="p-2 lg:p-4">
      <div className="flex items-center justify-between mb-3 lg:mb-4">
        <h3 className="text-base lg:text-lg font-semibold text-gray-900">Section Editor</h3>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          className="flex items-center space-x-1 bg-[#B1AD9A] text-white"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </Button>
      </div>
      
      <Card className='bg-[#FFFBEB] mt-12 border-1 border-[#B1AD9A]'>
        <CardHeader>
          <CardTitle className="text-base capitalize">
            {selectedSection.type} Section
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-300px)]">
            <div className="space-y-4">
              {renderInputs()}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
} 