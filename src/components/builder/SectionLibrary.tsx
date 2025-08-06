'use client';

import { sectionTemplates } from '@/data/section-templates';
import { useBuilderStore } from '@/store/builder-store';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Layout, Star, Zap, Users, Mail } from 'lucide-react';
import { SectionType } from '@/types/builder';

const iconMap = {
  Layout,
  Star,
  Zap,
  Users,
  Mail,
};

export default function SectionLibrary() {
  const { addSection } = useBuilderStore();

  const handleAddSection = (type: SectionType) => {
    addSection(type);
  };

  return (
    <div className="p-2 lg:p-4">
      <h3 className="text-lg lg:text-2xl font-semibold mb-3 lg:mb-4 text-gray-900">Section Library</h3>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-3">
          {sectionTemplates.map((template) => {
            const IconComponent = iconMap[template.icon as keyof typeof iconMap] || Layout;
            
            return (
              <Card 
                key={template.type}
                className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02] border-2 border-transparent hover:border-[#B1AD9A] bg-[#FFFBEB]"
                onClick={() => handleAddSection(template.type)}
              >
                <CardHeader className="pb-2 lg:pb-3 flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#DCD7C1] rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-[#B1AD9A]" />
                    </div>
                    <CardTitle className="text-sm lg:text-base text-center mt-2">{template.name}</CardTitle>
                    <div className="text-center">
                      <CardDescription className="text-xs lg:text-sm text-center">
                        {template.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
} 