'use client';

import { SectionData } from '@/types/builder';

interface HeroProps {
  section: SectionData;
  isPreview?: boolean;
}

export default function Hero({ section, isPreview = false }: HeroProps) {
  const { title, subtitle, buttonText, buttonUrl, backgroundImage, backgroundColor } = section.props;

  return (
    <section 
      className="relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center px-4 lg:px-6 transition-all duration-200"
      style={{ 
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0"></div>
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFBEB] mb-4 lg:mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#FFFBEB] mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-[#B1AD9A] text-[#FFFBEB] font-semibold rounded-lg hover:bg-[#B1AD9A] transition-all duration-200 transform hover:scale-105 text-sm lg:text-base"
          >
            {buttonText}
          </a>
          <button className="inline-block px-6 lg:px-8 py-3 lg:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 text-sm lg:text-base">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 