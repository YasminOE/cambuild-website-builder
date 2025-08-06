'use client';

import { SectionData } from '@/types/builder';
import Image from 'next/image';

interface AboutProps {
  section: SectionData;
}

export default function About({ section }: AboutProps) {
  const { title, content, imageUrl, backgroundColor } = section.props;

  // Ensure proper typing
  const bgColor = typeof backgroundColor === 'string' ? backgroundColor : '#f8fafc';
  const imgUrl = typeof imageUrl === 'string' ? imageUrl : '';

  return (
    <section 
      className="py-20 px-6 transition-all duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {content}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="relative">
            {imgUrl ? (
              <Image 
                src={imgUrl} 
                alt="About Us" 
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg font-semibold">Add an image</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 