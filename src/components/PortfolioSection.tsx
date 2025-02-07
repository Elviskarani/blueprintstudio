import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import yycontractor from '../images/yycontractorscreenshot.png';
import pesaflow from '../images/pesaflow.png';
import stab from '../images/stablogo.jpg';

interface ProjectSlideProps {
  tags: string[];
  title: string;
  description: string;
  image: string;
}

const ProjectSlide = ({ tags, title, description, image }: ProjectSlideProps) => (
  <div className="space-y-4 max-w-3xl mx-auto">
    <div className="aspect-[16/10] rounded-3xl w-full transform transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-wrap gap-3 mt-4">
      {tags.map((tag, index) => (
        <span key={index} className="text-sm text-gray-500 px-4 py-1 bg-gray-100 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold group-hover:text-lime-500 transition-colors">
          {title}
        </h3>
        <div className="bg-lime-400 p-2 rounded-full transform transition-all duration-300 hover:scale-110">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      tags: ['UX Research', 'Wireframe', 'Visual Design'],
      title: 'YY-Contractors Landing Page',
      description:
        'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.',
      image: yycontractor
    },
    {
      tags: ['Web Development', 'React', 'UI Design'],
      title: 'Pesaflow Landing Page',
      description:
        'A comprehensive financial dashboard that helps users track their investments, analyze market trends, and make informed decisions through intuitive visualizations and real-time data updates.',
      image: pesaflow
    },
    {
      tags: ['Mobile App', 'iOS', 'Android'],
      title: 'STAB',
      description:
        'A cross-platform mobile application designed to help users send recive and save money for free so keep a lookout.',
      image: stab
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center relative mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="block">
            Our <span className="bg-lime-400 px-4 py-1 rounded-full">Best Work</span> of
          </span>
          Successful Projects
        </h2>

        <div className="mt-6 md:mt-0 md:absolute md:right-4">
          <button className="border border-gray-200 text-gray-700 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors">
            See More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative px-8">
        <div className="transition-all duration-500 ease-in-out">
          <div className="group cursor-pointer">
            <ProjectSlide {...projects[currentSlide]} />
          </div>
        </div>

        <button
          onClick={prevSlide}
          title="Previous Slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          title="Next Slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;