'use client';

import { SectionData } from '@/types/builder';

interface FooterProps {
  section: SectionData;
}

export default function Footer({ section }: FooterProps) {
  const { copyright, backgroundColor, textColor } = section.props;

  // Ensure proper typing
  const bgColor = typeof backgroundColor === 'string' ? backgroundColor : '#1f2937';
  const txtColor = typeof textColor === 'string' ? textColor : '#ffffff';

  return (
    <footer 
      className="py-12 px-6 transition-all duration-200"
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">CAMBUILD</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Create beautiful websites with CAMBUILD&apos;s intuitive drag-and-drop builder. 
              No coding required, just creativity and imagination.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">{typeof copyright === 'string' ? copyright.replace(/'/g, '&apos;') : copyright}</p>
        </div>
      </div>
    </footer>
  );
} 