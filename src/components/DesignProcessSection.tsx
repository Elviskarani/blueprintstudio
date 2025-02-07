import React, { useState } from 'react';
import design from '../images/design.png';
import strategy from '../images/strategy.png';
import development from '../images/development.png';
import discovery from '../images/discovery.png';

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ number, title, description, image }) => {
  const setIsHovered = useState(false)[1];
  
  return (
    <div
      className="bg-gray-900 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-gray-500 text-lg">{number}</span>
      <div className="aspect-video w-full rounded-2xl transform transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-white text-2xl font-medium pt-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Star: React.FC<{ className: string }> = ({ className }) => (
  <div className={`${className} animate-pulse`}>
    <svg
      className="w-6 h-6 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
    </svg>
  </div>
);

const DesignProcessSection = () => {
  return (
    <div className="bg-gray-800 py-20 px-4 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-lime-400" />
      
      {/* Stars */}
      <Star className="absolute top-20 left-20" />
      <Star className="absolute top-40 right-20" />
      
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How Our Design
            <br />
            Process <span className="bg-lime-400 px-4 py-1 rounded-full text-gray-900">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Blueprint Studio follows a collaborative and iterative approach to design, with a 
            focus on understanding and meeting the unique needs of each client.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProcessCard 
            number="01"
            title="Discovery"
            description="We start by getting to know our clients, their business goals, and their target audience."
            image={discovery}
          />
          <ProcessCard 
            number="02"
            title="Strategy"
            description="We develop a strategy that outlines the design approach, user experience, and key features of the project."
            image={strategy}
          />
          <ProcessCard 
            number="03"
            title="Design"
            description="We work closely with our clients to get feedback and iterate on the design until it meets their needs and vision."
            image={design}
          />
          <ProcessCard 
            number="04"
            title="Development"
            description="Once the design is finalized, our development team takes over to build the final product."
            image={development}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSection;