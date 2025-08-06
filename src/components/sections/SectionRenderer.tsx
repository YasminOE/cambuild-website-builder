'use client';

import { SectionData } from '@/types/builder';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

interface SectionRendererProps {
  section: SectionData;
  isPreview?: boolean;
}

export default function SectionRenderer({ section, isPreview = false }: SectionRendererProps) {
  switch (section.type) {
    case 'header':
      return <Header section={section} isPreview={isPreview} />;
    case 'hero':
      return <Hero section={section} isPreview={isPreview} />;
    case 'features':
      return <Features section={section} isPreview={isPreview} />;
    case 'about':
      return <About section={section} isPreview={isPreview} />;
    case 'contact':
      return <Contact section={section} isPreview={isPreview} />;
    case 'footer':
      return <Footer section={section} isPreview={isPreview} />;
    default:
      return <div>Unknown section type: {section.type}</div>;
  }
} 