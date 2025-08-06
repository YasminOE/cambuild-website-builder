'use client';

import { useBuilderStore } from '@/store/builder-store';
import SectionRenderer from '@/components/sections/SectionRenderer';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Smartphone, Monitor } from 'lucide-react';
import { useState } from 'react';

export default function PreviewArea() {
  const { sections, isPreviewMode, togglePreviewMode } = useBuilderStore();
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col h-full">
      {/* Preview Controls */}
      <div className="flex items-center justify-end space-x-2 lg:space-x-4 p-3 lg:p-6 border-b border-[#FFFBEB] bg-[#C0BEB5] shadow-sm">
        <div className="flex items-center space-x-2">
          <Button
            variant={isPreviewMode ? "default" : "outline"}
            size="sm"
            onClick={togglePreviewMode}
            className="flex items-center space-x-1 bg-[#B1AD9A] hover:bg-[#FFFBEB] hover:text-[#B1AD9A]"
          >
            {isPreviewMode ? <EyeOff className="w-4 h-4 text-[#FFFBEB] hover:text-[#B1AD9A]" /> : <Eye className="w-4 h-4 text-[#FFFBEB] hover:text-[#B1AD9A]" />}
            <span className='text-[#FFFBEB] hover:text-[#B1AD9A] hidden sm:inline'>{isPreviewMode ? 'Exit Preview' : 'Preview'}</span>
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'desktop' ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode('desktop')}
            className={`bg-[#FFFBEB] ${viewMode === 'desktop' ? 'bg-[#B1AD9A] text-[#FFFBEB]' : ''}`}

          >
            <Monitor className={`w-6 h-6 lg:w-8 lg:h-8 ${viewMode === 'desktop' ? 'text-[#FFFBEB]' : 'text-[#B1AD9A]'}`} />
          </Button>
          <Button
            variant={viewMode === 'mobile' ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode('mobile')}
            className={`bg-[#FFFBEB] ${viewMode === 'mobile' ? 'bg-[#B1AD9A] text-[#FFFBEB]' : ''}`}
          >
            <Smartphone className={`w-6 h-6 lg:w-8 lg:h-8 ${viewMode === 'mobile' ? 'text-[#FFFBEB]' : 'text-[#B1AD9A]'}`} />
          </Button>
        </div>
      </div>
      {/* Preview Content */}
      <div className="flex-1 overflow-auto bg-[#fffcf0ae] border-t border-[#B1AD9A] w-full">
        <div className={`mx-auto transition-all duration-300 ${
          viewMode === 'mobile' ? 'max-w-sm' : 'max-w-4xl'
        } px-2 lg:px-0 w-full`}>
          <div className={`bg-[#fffcf080] min-h-screen shadow-lg ${
            viewMode === 'mobile' ? 'mx-2 my-2 rounded-lg' : ''
          }`}>
            {sortedSections.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-screen"> 
                <div className="text-center px-4">
                  <div className="text-6xl lg:text-8xl mb-4">🏗️</div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2 text-[#B1AD9A]">Start Building</h3>
                  <p className="text-sm lg:text-base text-[#B1AD9A] opacity-70">Add sections from the library to create your website</p>
                </div>
              </div>
            ) : (
              sortedSections.map((section) => (
                <div key={section.id}>
                  <SectionRenderer section={section} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 