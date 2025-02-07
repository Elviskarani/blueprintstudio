import React from 'react';
import blueprint from '../images/blueprintstudio-removebg-preview.png';
import pesaflow from '../images/logo4.png'
import savannah from '../images/logo2.png'
import stab from '../images/stablogo-removebg-preview.png'
import yycontaractors from '../images/logologo.png'

const HeroSection = () => {
  const rotations = ['rotate-3', '-rotate-3', 'rotate-6', '-rotate-6'];
  const navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#digital-thinkers' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#design-process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254791001601?text=Hello%20I%20am%20interested%20in%20your%20services', '_blank');
  };

  return (
    <div id="hero" className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src={blueprint} alt="Blueprint Studio" className="h-12 w-auto" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-200 hover:text-lime-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleWhatsAppClick}
                className="bg-lime-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-lime-500 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 bg-gray-800 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="inline-flex flex-wrap justify-center items-center text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-lime-400 text-gray-900 px-6 py-3 rounded-lg mb-4 md:mb-0 md:mr-4">
                BluePrint
              </span>
              <span className="text-white w-full md:w-auto">Studio</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-200 mb-12">
              Kenyan-Based Digital Agency
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              Blueprint Design Studio is a dynamic and innovative design agency
              that brings creative ideas to life. We work with a wide range of
              clients to develop unique and effective branding, web design, and
              graphic design solutions.
            </p>

            <h2 className="text-2xl md:text-3xl text-gray-200 mb-12">
              Our Partners
            </h2>

            {/* Partner Logos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[pesaflow, savannah, stab, yycontaractors].map((image, index) => (
                <div
                  key={index}
                  className={`bg-white/5 rounded-2xl aspect-square transform ${rotations[index]}
                  hover:rotate-0 hover:scale-105 transition-all duration-300 ease-in-out
                  hover:shadow-2xl hover:bg-white/20 cursor-pointer p-6`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={image}
                      alt="Partner logo"
                      className="max-w-[80%] max-h-[80%] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;