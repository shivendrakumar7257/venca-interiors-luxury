import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    title: 'Modern Living Space',
    location: 'Dubai, UAE',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    title: 'Minimalist Villa',
    location: 'Tokyo, Japan',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    title: 'Luxury Penthouse',
    location: 'New York, USA',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    title: 'Contemporary Home',
    location: 'London, UK',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
    title: 'Coastal Retreat',
    location: 'Sydney, Australia',
  },
];

const ProjectsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length;
  };

  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-white tracking-wider uppercase"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              to="/about"
              className="text-white/60 hover:text-white text-sm font-body tracking-wider underline underline-offset-4 transition-colors duration-300"
            >
              Discover more
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4">
          {/* Left Preview */}
          <motion.div
            className="hidden md:block w-48 lg:w-64 h-64 lg:h-80 relative opacity-40 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={projects[getSlideIndex(-1)].image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-white/60 text-xs font-body uppercase tracking-wider">
                {projects[getSlideIndex(-1)].location}
              </p>
            </div>
          </motion.div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-auto md:relative z-10 w-12 h-12 flex items-center justify-center border border-[#4A90D9]/50 rounded-full text-[#4A90D9] hover:border-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-3xl lg:max-w-4xl aspect-[16/10]"
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              {/* Project Info */}
              <div className="absolute bottom-6 right-6 text-right">
                <p className="text-white/80 text-xs font-body uppercase tracking-wider">
                  {projects[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-auto md:relative z-10 w-12 h-12 flex items-center justify-center border border-[#4A90D9]/50 rounded-full text-[#4A90D9] hover:border-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Right Preview */}
          <motion.div
            className="hidden md:block w-48 lg:w-64 h-64 lg:h-80 relative opacity-40 flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={projects[getSlideIndex(1)].image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-white/60 text-xs font-body uppercase tracking-wider">
                {projects[getSlideIndex(1)].location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
