import React from 'react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#222321] leading-tight">
              Smart drones for
              <br />
              <span className="text-[#9EAA72]">scanning</span>, spraying
              <br />
              and precision farming
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md">
              Advanced agricultural technology for modern farmers. Increase efficiency and crop yields with our intelligent drone solutions.
            </p>
            
            <button className="bg-[#222321] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#9EAA72] transition-colors">
              Get Started
            </button>
            
            {/* Stats Icons */}
            <div className="flex space-x-4 pt-8">
              <div className="w-12 h-12 bg-[#DEF687] rounded-lg flex items-center justify-center">
                <span className="text-[#222321] font-bold">📊</span>
              </div>
              <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-[#222321] font-bold">🌱</span>
              </div>
              <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-[#222321] font-bold">🚁</span>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right Content - Drone Image */}
          <AnimatedSection delay={300} className="relative">
            <div className="relative z-10">
              {/* Drone placeholder - you can replace with actual drone image */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-6xl float-animation">🚁</div>
              </div>
            </div>
            
            {/* Background grass effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#9EAA72] to-transparent opacity-30 rounded-b-2xl"></div>
            
            {/* Floating stats card */}
            <div className="absolute top-8 right-8 bg-[#222321] text-white p-4 rounded-2xl">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm opacity-80">Efficiency</div>
              <div className="w-8 h-8 bg-[#DEF687] rounded-full mt-2"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Grass background at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#9EAA72] to-transparent opacity-20"></div>
    </section>
  );
};

export default HeroSection;
