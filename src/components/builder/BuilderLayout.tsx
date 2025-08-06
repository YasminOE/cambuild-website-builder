'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import SectionLibrary from './SectionLibrary';
import SectionList from './SectionList';
import SectionEditor from './SectionEditor';
import PreviewArea from './PreviewArea';
import ImportExport from './ImportExport';
import AIChatInput from './AIChatInput';
import { Button } from '@/components/ui/button';
import { Plus, Palette, Layers, Menu, X, Settings } from 'lucide-react';
import Image from 'next/image';

export default function BuilderLayout() {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#fffcf0ae] px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#B1AD9A] rounded-lg flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={42} height={42} className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-[#B1AD9A] capitalize">CAMBUILD</h1>
            </div>
            <Separator orientation="vertical" className="h-6 hidden lg:block" />
            <div className="hidden lg:block">
              <ImportExport />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Mobile Menu Buttons */}
            <Button 
              variant="outline" 
              size="sm" 
              className="lg:hidden bg-[#FFFBEB] text-[#B1AD9A]"
              onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
            >
              {isLeftSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="lg:hidden bg-[#FFFBEB] text-[#B1AD9A]"
              onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
            >
              <Settings className="w-4 h-4" />
            </Button>
            
            {/* Desktop Buttons */}
            <Button variant="outline" size="sm" className='hidden lg:flex bg-[#FFFBEB] text-[#B1AD9A]'>
              <Palette className="w-4 h-4 mr-2" />
              Themes
            </Button>
            <Button size="sm" className='hidden lg:flex bg-[#B1AD9A] text-white'>
              <Plus className="w-4 h-4 mr-2" />
              New Page
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative w-full">
        {/* Left Sidebar - Mobile Overlay */}
        <div className={`
          fixed inset-0 z-40 top-16 lg:hidden
          ${isLeftSidebarOpen ? 'block' : 'hidden'}
        `}>
          <div 
            className="absolute inset-0 bg-[#0000003d] bg-opacity-30 backdrop-blur-sm"
            onClick={() => setIsLeftSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 bg-[#C0BEB5] transform transition-transform duration-300 ease-in-out">
            <Tabs defaultValue="library" className="flex-1 flex flex-col h-full">
              <div className="p-4">
                <TabsList className="grid w-full grid-cols-2 bg-[#DCD7C1] h-12">
                  <TabsTrigger value="library" className="flex items-center space-x-2">
                    <Plus className="w-6 h-6 lg:w-12 lg:h-12 text-[#B1AD9A]" />
                    <span className='text-[#B1AD9A] text-sm lg:text-base'>Library</span>
                  </TabsTrigger>
                  <TabsTrigger value="sections" className="flex items-center space-x-2">
                    <Layers className="w-6 h-6 lg:w-12 lg:h-12 text-[#B1AD9A]" />
                    <span className='text-[#B1AD9A] text-sm lg:text-base'>Sections</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="library" className="flex-1 overflow-hidden">
                <SectionLibrary />
              </TabsContent>
              
              <TabsContent value="sections" className="flex-1 overflow-hidden">
                <SectionList />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Left Sidebar - Desktop */}
        <div className="hidden lg:block w-80 bg-[#C0BEB5] flex flex-col">
          <Tabs defaultValue="library" className="flex-1 flex flex-col">
            <div className="p-4">
              <TabsList className="grid w-full grid-cols-2 bg-[#DCD7C1] h-12">
                <TabsTrigger value="library" className="flex items-center space-x-2">
                  <Plus className="w-12 h-12 text-[#B1AD9A]" />
                  <span className='text-[#B1AD9A]'>Library</span>
                </TabsTrigger>
                <TabsTrigger value="sections" className="flex items-center space-x-2">
                  <Layers className="w-12 h-12 text-[#B1AD9A]" />
                  <span className='text-[#B1AD9A]'>Sections</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="library" className="flex-1 overflow-hidden">
              <SectionLibrary />
            </TabsContent>
            
            <TabsContent value="sections" className="flex-1 overflow-hidden">
              <SectionList />
            </TabsContent>
          </Tabs>
        </div>

        {/* Center Preview Area */}
        <div className="flex-1 flex flex-col w-full min-w-0">
          <PreviewArea />
        </div>

        {/* Right Sidebar - Mobile Overlay */}
        <div className={`
          fixed inset-0 z-40 top-16 lg:hidden
          ${isRightSidebarOpen ? 'block' : 'hidden'}
        `}>
          <div 
            className="absolute inset-0 bg-[#0000003d] bg-opacity-30 backdrop-blur-sm"
            onClick={() => setIsRightSidebarOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-[#C0BEB5] transform transition-transform duration-300 ease-in-out">
            <SectionEditor />
          </div>
        </div>

        {/* Right Sidebar - Desktop */}
        <div className="hidden lg:block w-80 bg-[#C0BEB5]">
          <SectionEditor />
        </div>
      </div>
      
      {/* AI Chat Input */}
      <AIChatInput />
    </div>
  );
} 