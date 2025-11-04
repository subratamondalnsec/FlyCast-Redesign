import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-[#222321]">Hecita</div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-8 mb-6 md:mb-0">
            <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Home</a>
            <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Our Drones</a>
            <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Services</a>
            <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Solutions</a>
            <a href="#" className="text-[#222321] hover:text-[#9EAA72] transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-4 md:mb-0">
              © 2024 Hecita. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#9EAA72] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#9EAA72] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#9EAA72] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
