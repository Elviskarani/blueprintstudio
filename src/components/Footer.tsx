import { Facebook, Linkedin, Github, Dribbble } from 'lucide-react';
import blueprint from '../images/blueprintstudio-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          {/* Logo and tagline */}
          <div className="flex items-center mb-2">
            <div className="mr-2">
              <img 
                src={blueprint} 
                alt="Blueprint Studio Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <span className="text-2xl font-bold">BluePrint</span>
              <span className="text-2xl ml-2">Studio</span>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-lg mb-8">
            Innovate. Inspire. Create
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              Copyright © 2023 BluePrint Studio. All rights reserved.
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Dribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;