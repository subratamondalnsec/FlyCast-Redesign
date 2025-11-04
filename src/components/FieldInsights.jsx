import React from 'react';

const FieldInsights = () => {
  return (
    <section className="bg-[#222321] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Field
              <br />
              Insights
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg opacity-90">
                91% of agro-operations and farm managers rely on drone data to make smarter, data-driven decisions every day.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DEF687] rounded-full"></div>
                  <span className="opacity-90">Real-time field monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DEF687] rounded-full"></div>
                  <span className="opacity-90">Crop health analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DEF687] rounded-full"></div>
                  <span className="opacity-90">Yield prediction</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Card 1 - 2 weeks */}
            <div className="bg-[#DEF687] text-[#222321] p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold mb-2">2 weeks</h3>
                  <p className="text-sm opacity-80">Setup</p>
                </div>
                <div className="w-12 h-12 bg-[#222321] rounded-full flex items-center justify-center">
                  <span className="text-[#DEF687] text-xl">🚁</span>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Drone is your field's smartest partner
              </p>
            </div>
            
            {/* Card 2 - 5 days */}
            <div className="bg-[#DEF687] text-[#222321] p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold mb-2">5 days</h3>
                  <p className="text-sm opacity-80">Optimization</p>
                </div>
                <div className="w-12 h-12 bg-[#222321] rounded-full flex items-center justify-center">
                  <span className="text-[#DEF687] text-xl">📊</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#222321] rounded-full"></div>
                  <span className="text-sm">Hecita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#222321] rounded-full"></div>
                  <span className="text-sm">Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#222321] rounded-full"></div>
                  <span className="text-sm">Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">80+</div>
              <div className="text-sm opacity-70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-70">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-sm opacity-70">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-70">Happy Clients</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-6 opacity-90">
              We install smart field modules that track weather, soil, and crop data to help drones optimize routes and spraying decisions every day.
            </p>
            <button className="bg-[#DEF687] text-[#222321] px-8 py-4 rounded-full font-medium hover:bg-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom field image section */}
      <div className="mt-20 relative">
        <div className="h-64 bg-gradient-to-t from-[#9EAA72] to-[#DEF687] opacity-30"></div>
        <div className="absolute bottom-8 right-8 bg-white text-[#222321] p-4 rounded-2xl">
          <div className="text-2xl font-bold">94%</div>
          <div className="text-sm opacity-80">Field Coverage</div>
        </div>
      </div>
    </section>
  );
};

export default FieldInsights;
