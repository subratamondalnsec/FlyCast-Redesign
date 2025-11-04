import React from 'react';
import AnimatedSection from './AnimatedSection';

const Statistics = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#222321] leading-tight">
              How effectively can your fields be
              <br />
              <span className="text-[#9EAA72]">scanned</span>, treated, and optimized
              <br />
              using drones?
            </h2>
            
            <p className="text-gray-600 text-lg max-w-md">
              Our advanced drone technology provides comprehensive field analysis, 
              precise treatment application, and real-time optimization for maximum crop yield.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#222321] text-white px-6 py-3 rounded-full hover:bg-[#9EAA72] transition-colors">
                Scanning
              </button>
              <button className="border-2 border-gray-300 text-[#222321] px-6 py-3 rounded-full hover:border-[#9EAA72] hover:text-[#9EAA72] transition-colors">
                Pest Detection
              </button>
              <button className="border-2 border-gray-300 text-[#222321] px-6 py-3 rounded-full hover:border-[#9EAA72] hover:text-[#9EAA72] transition-colors">
                Spraying
              </button>
            </div>
          </AnimatedSection>
          
          {/* Right Content - Stats and Drone */}
          <AnimatedSection delay={300} className="relative">
            {/* Drone image placeholder */}
            <div className="relative mb-12">
              <div className="w-64 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mx-auto flex items-center justify-center">
                <div className="text-4xl float-animation">🚁</div>
              </div>
              {/* Grass effect */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#9EAA72] to-transparent opacity-30 rounded-b-2xl"></div>
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#222321] mb-2">89%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#222321] mb-2">380k</div>
                <div className="text-gray-600">Fields Scanned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#222321] mb-2">97%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#222321] mb-2">130+</div>
                <div className="text-gray-600">Happy Farmers</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
