import HeroSection from './components/Herosection';
import DigitalThinkersSection from './components/DigitalThinkers';
import ServicesSection from './components/ServicesSection';
import DesignProcessSection from './components/DesignProcessSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import InspireSection from './components/inspiresection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div id="digital-thinkers">
        <DigitalThinkersSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="design-process">
        <DesignProcessSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="inspire">
        <InspireSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;