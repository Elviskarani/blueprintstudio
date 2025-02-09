import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/Herosection';
import DigitalThinkersSection from './components/DigitalThinkers';
import ServicesSection from './components/ServicesSection';
import DesignProcessSection from './components/DesignProcessSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import InspireSection from './components/inspiresection';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    // Initialize AOS library with options (duration, easing, etc.)
    AOS.init({
      duration: 500,     // Animation duration (ms)
      easing: 'ease-in-out',
      once: false,         // Whether animation should happen only once on scroll
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* You can add the data-aos attribute to a wrapper div for the desired effect */}
      <div data-aos="fade-up">
        <HeroSection />
      </div>
      <div id="digital-thinkers" data-aos="fade-up">
        <DigitalThinkersSection />
      </div>
      <div id="services" data-aos="fade-up">
        <ServicesSection />
      </div>
      <div id="design-process" data-aos="fade-up">
        <DesignProcessSection />
      </div>
      <div id="portfolio" data-aos="fade-up">
        <PortfolioSection />
      </div>
      <div id="testimonials" data-aos="fade-up">
        <TestimonialsSection />
      </div>
      <div id="inspire" data-aos="fade-up">
        <InspireSection />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
