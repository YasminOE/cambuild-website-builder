'use client';

import { SectionData } from '@/types/builder';

interface FeaturesProps {
  section: SectionData;
  isPreview?: boolean;
}

export default function Features({ section, isPreview = false }: FeaturesProps) {
  const { 
    title, 
    subtitle, 
    feature1Title, 
    feature1Description, 
    feature2Title, 
    feature2Description, 
    feature3Title, 
    feature3Description, 
    backgroundColor 
  } = section.props;

  const features = [
    { title: feature1Title, description: feature1Description, icon: '🚀' },
    { title: feature2Title, description: feature2Description, icon: '⚡' },
    { title: feature3Title, description: feature3Description, icon: '🎯' },
  ];

  return (
    <section 
      className="py-20 px-6 transition-all duration-200"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 