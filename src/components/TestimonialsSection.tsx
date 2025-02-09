import { useState, useEffect } from 'react';
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

const TestimonialCard = ({ author, role, content, isCurrent, isPrev, isNext }: Testimonial & { isCurrent?: boolean, isPrev?: boolean, isNext?: boolean, className?: string }) => {
  let cardClassName = "bg-gray-900 rounded-3xl p-8 relative transition-all duration-800 ease-in-out";
  
  if (isPrev) {
    cardClassName += " opacity-40 scale-90 transform -translate-x-24";
  } else if (isNext) {
    cardClassName += " opacity-40 scale-90 transform translate-x-24";
  } else if (isCurrent) {
    cardClassName += " scale-110 z-10";
  }

  return (
    <div className={`${cardClassName} w-96 flex-shrink-0`}>
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
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      "author": "Robert Otieno",
      "role": "CEO of YY Contractors",
      "content": "Our new landing page is a true reflection of our commitment to quality in the construction industry. The team understood our vision and delivered a design that is both professional and user-friendly, perfectly showcasing our services. Our digital presence has never looked better!"
    },
    {
      "author": "Linda Smith",
      "role": "COO at Pesa Flow",
      "content": "The landing page for Pesa Flow exceeded all our expectations. It seamlessly combines sleek design with intuitive navigation, capturing the essence of our fintech brand. Thanks to the team's innovative approach and attention to detail, our online identity has been significantly enhanced."
    },
    {
      "author": "Levi Kigunda",
      "role": "Co-Founder of Stab",
      "content": "Developing our crypto fintech application with this team has been a game-changing experience. Their technical expertise and innovative mindset ensured that our platform is not only secure but also incredibly user-friendly. We are excited to continue this journey and explore new horizons together."
    },
    {
      "author": "Elvis Karani",
      "role": "Co-Founder of Stab",
      "content": "BluePrint studio is a gift from God without them we would have never achieved anything i would work with them any time i am grateful i ever met and worked with them."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Function to get array indices for visible cards
  const getVisibleIndices = () => {
    const lastIndex = testimonials.length - 1;
    return {
      prev: currentIndex === 0 ? lastIndex : currentIndex - 1,
      current: currentIndex,
      next: currentIndex === lastIndex ? 0 : currentIndex + 1
    };
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection(-1);
    setIsTransitioning(true);
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection(1);
    setIsTransitioning(true);
    setCurrentIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const indices = getVisibleIndices();

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

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards Container */}
          <div className="relative overflow-hidden">
            <div className="flex justify-center items-center gap-8">
              {/* Previous Card */}
              <TestimonialCard
                {...testimonials[indices.prev]}
                isPrev={true}
                className={isTransitioning && direction === -1 ? 'translate-x-0 opacity-100 scale-110' : 
                          isTransitioning && direction === 1 ? '-translate-x-48 opacity-0' : ''}
              />

              {/* Current Card */}
              <TestimonialCard
                {...testimonials[indices.current]}
                isCurrent={true}
                className={isTransitioning ? 'opacity-40 scale-100' : ''}
              />

              {/* Next Card */}
              <TestimonialCard
                {...testimonials[indices.next]}
                isNext={true}
                className={isTransitioning && direction === 1 ? 'translate-x-0 opacity-100 scale-110' : 
                          isTransitioning && direction === -1 ? 'translate-x-48 opacity-0' : ''}
              />
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning || index === currentIndex) return;
                  setDirection(index > currentIndex ? 1 : -1);
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 800);
                }}
                className={`transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-lime-400 w-8 h-2 rounded-full' 
                    : 'bg-gray-700 w-2 h-2 rounded-full'
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