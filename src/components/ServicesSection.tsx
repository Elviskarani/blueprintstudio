import React, { useState } from 'react';
import { ArrowUpRight, Plus, ArrowRight } from 'lucide-react';
import socialmedia from '../images/socialmediamanagement.jpg';
import webdevelopment from '../images/webdesign.png';
import softwaredevelopment from '../images/softwaredevelopment.jpg';
import uidesign from '../images/uiuxdesign.png';

interface ServiceItemProps {
  number: string;
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-between p-4 rounded-full hover:bg-gray-800 hover:text-white transition-all cursor-pointer group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gray-800 transition-transform duration-300 ${isHovered ? 'translate-x-0' : '-translate-x-full'
        }`} />

      <div className="flex items-center gap-4 relative z-10">
        <span className={`text-sm font-medium transition-colors duration-300 ${isHovered ? 'text-lime-400' : 'text-gray-500'
          }`}>{number}</span>
        <span className={`text-lg font-medium transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'
          }`}>{title}</span>
      </div>

      <div className="relative z-10 flex items-center gap-2">
        <ArrowUpRight
          className={`transform transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-4'
            }`}
          size={20}
        />
        <Plus
          className={`transform transition-all duration-300 ${isHovered ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
            }`}
          size={20}
        />
      </div>
    </div>
  );
};

interface ActionCardProps {
  isDark: boolean;
  title: string;
  subtitle: string;
  className: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ isDark, title, subtitle, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 rounded-3xl ${className} cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col justify-between relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'
            }`}
        />

        <p className="text-sm mb-8 relative z-10">{subtitle}</p>
        <div className="flex items-center justify-between relative z-10">
          <span className="text-xl font-medium">{title}</span>
          <div className={`rounded-full p-2 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-800'
            }`}>
            <ArrowRight
              size={20}
              className={`transform transition-all duration-300 ${isHovered ? 'translate-x-1 text-lime-400' : isDark ? 'text-gray-900' : 'text-white'
                }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const serviceImages = [
    uidesign,
    webdevelopment,
    softwaredevelopment,
    socialmedia
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <h2 className="text-4xl font-bold transform transition-transform group-hover:translate-x-2">Our</h2>
            <div className="bg-lime-400 px-4 py-2 rounded-full transform transition-all duration-300 group-hover:scale-105 hover:shadow-lg">
              <span className="text-4xl font-bold">Services</span>
            </div>
          </div>

          <p className="text-gray-600 mb-8 transform transition-all duration-300 hover:translate-x-2">
            BluePrint Studio offers a range of design services that
            are tailored to meet the unique needs of each client
          </p>

          <div className="space-y-4">
            {['UI/UX Design', 'Web Development', 'Software Development', 'Social Media Management'].map((service, index) => (
              <div
                key={service}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <ServiceItem
                  number={`0${index + 1}`}
                  title={service}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden">
            {serviceImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  // Show the image if its index matches activeService,
                  // or if activeService is null, default to showing the first image (index 0)
                  activeService === index || (activeService === null && index === 0)
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                  }`}
              >
                <img
                  src={image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/10 rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 space-y-4">
          <ActionCard
            isDark={true}
            subtitle="Ever wondered how design magic happens?"
            title="See how we work"
            className="bg-gray-800 text-white"
          />

          <ActionCard
            isDark={false}
            subtitle="Looking for design experts who can bring your vision to life?"
            title="Meet our expert"
            className="bg-lime-400"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;