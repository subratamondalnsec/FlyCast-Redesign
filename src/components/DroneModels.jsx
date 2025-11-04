import React from 'react';
import AnimatedSection from './AnimatedSection';

const DroneModels = () => {
  const droneModels = [
    {
      id: 1,
      name: "Hecita One",
      price: "$2.5k",
      image: "🚁",
      features: ["Basic scanning", "Entry level"]
    },
    {
      id: 2,
      name: "Hecita Scout",
      price: "$7.1k",
      image: "🚁",
      features: ["Advanced scanning", "Pest detection"]
    },
    {
      id: 3,
      name: "Hecita Pro",
      price: "$4.1k",
      image: "🚁",
      features: ["Professional grade", "Multi-purpose"]
    },
    {
      id: 4,
      name: "Hecita Mini",
      price: "$1.3k",
      image: "🚁",
      features: ["Compact design", "Portable"]
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#222321] mb-4">
            Drone
            <br />
            Models
          </h2>
        </div>
        
        {/* Drone Models Grid */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {droneModels.map((drone, index) => (
            <div key={drone.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover-scale hover-glow">
              {/* Price */}
              <div className="text-right mb-4">
                <span className="text-2xl font-bold text-[#222321]">{drone.price}</span>
              </div>
              
              {/* Drone Image */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">{drone.image}</span>
                </div>
              </div>
              
              {/* Drone Name */}
              <h3 className="text-xl font-bold text-[#222321] text-center mb-4">
                {drone.name}
              </h3>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                {drone.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-gray-600 text-sm text-center">
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* Action Button */}
              <div className="flex justify-center">
                <button className="w-12 h-12 bg-[#DEF687] rounded-full flex items-center justify-center hover:bg-[#9EAA72] transition-colors">
                  <span className="text-[#222321] font-bold">→</span>
                </button>
              </div>
            </div>
          ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DroneModels;
