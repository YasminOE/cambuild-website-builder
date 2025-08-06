'use client';

import { SectionData } from '@/types/builder';

interface HeaderProps {
  section: SectionData;
  isPreview?: boolean;
}

export default function Header({ section, isPreview = false }: HeaderProps) {
  const { title, showNav, backgroundColor } = section.props;

  return (
    <header 
      className="w-full py-3 lg:py-4 px-4 lg:px-6 shadow-sm transition-all duration-200"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <h1 className="text-lg lg:text-xl font-bold text-gray-900">{title}</h1>
        </div>
        
        {showNav && (
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        )}
        
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="px-2 lg:px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">
            Sign In
          </button>
          <button className="px-2 lg:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
} 