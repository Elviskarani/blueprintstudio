import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Star = ({ className }: { className: string }) => (
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

interface Testimonial {
  author: string;
  role: string;
  content: string;
}

const TestimonialCard = ({ author, role, content }: Testimonial) => (
  <div className="bg-gray-900 rounded-3xl p-8 relative transition-all duration-300 hover:transform hover:scale-[1.02]">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gray-600 rounded-full" />
      <div>
        <h3 className="text-white font-medium">{author}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
    <blockquote>
      <p className="text-gray-300 italic leading-relaxed">{content}</p>
    </blockquote>
  </div>
);

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      "author": "Robert Sanchez",
      "role": "CEO of YY Contractors",
      "content": "Our new landing page is a true reflection of our commitment to quality in the construction industry. The team understood our vision and delivered a design that is both professional and user-friendly, perfectly showcasing our services. Our digital presence has never looked better!"
    },
    {
      "author": "Linda Smith",
      "role": "COO at Pesa Flow",
      "content": "The landing page for Pesa Flow exceeded all our expectations. It seamlessly combines sleek design with intuitive navigation, capturing the essence of our fintech brand. Thanks to the team's innovative approach and attention to detail, our online identity has been significantly enhanced."
    },
    {
      "author": "Marcus Lee",
      "role": "Founder of Stab",
      "content": "Developing our crypto fintech application with this team has been a game-changing experience. Their technical expertise and innovative mindset ensured that our platform is not only secure but also incredibly user-friendly. We are excited to continue this journey and explore new horizons together."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div className="bg-gray-800 py-20 relative overflow-hidden">
      <Star className="absolute top-10 right-10" />
      <Star className="absolute bottom-40 left-10" />
      
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-lime-400" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="bg-lime-400 px-4 py-1 rounded-full text-gray-900">Testimonials</span> that
            <br />
            Speak to Our Results
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Read through our testimonials to see why our clients love working with us and how we 
            can help you achieve your business goals through creative and effective design.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Slide (Partially Visible) */}
            <div className="hidden md:block w-54 opacity-40 scale-90 transform -translate-x-32">
              <TestimonialCard {...testimonials[getSlideIndex(-1)]} />
            </div>

            {/* Current Slide */}
            <div className="w-full md:w-[2400px] z-10">
              <TestimonialCard {...testimonials[currentSlide]} />
            </div>

            {/* Next Slide (Partially Visible) */}
            <div className="hidden md:flex w-54  opacity-40 scale-90 transform translate-x-36">
              <TestimonialCard {...testimonials[getSlideIndex(1)]}/>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors text-white z-20"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors text-white z-20"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-lime-400 w-8' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;