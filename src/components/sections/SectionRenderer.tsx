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
}

export default function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case 'header':
      return <Header section={section} />;
    case 'hero':
      return <Hero section={section} />;
    case 'features':
      return <Features section={section} />;
    case 'about':
      return <About section={section} />;
    case 'contact':
      return <Contact section={section} />;
    case 'footer':
      return <Footer section={section} />;
    default:
      return <div>Unknown section type: {section.type}</div>;
  }
} 