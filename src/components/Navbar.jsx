import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-xl font-bold text-[#222321]">Hecita</div>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Home</a>
        <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Our Drones</a>
        <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Services</a>
        <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Solutions</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="bg-[#222321] text-white px-6 py-2 rounded-full hover:bg-[#9EAA72] transition-colors">
          Get Started
        </button>
        <div className="w-8 h-8 bg-[#DEF687] rounded-full flex items-center justify-center">
          <span className="text-[#222321] text-sm font-medium">S</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
