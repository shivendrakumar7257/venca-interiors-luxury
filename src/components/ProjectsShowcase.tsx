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

      {/* Mobile Slider - Simple horizontal scroll */}
      <div className="md:hidden relative px-4">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="z-10 w-10 h-10 flex items-center justify-center border border-[#4A90D9]/50 rounded-full text-[#4A90D9] hover:border-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-sm aspect-[4/3] overflow-hidden rounded-sm"
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-display tracking-wide">
                  {projects[currentIndex].title}
                </p>
                <p className="text-white/60 text-xs font-body uppercase tracking-wider mt-1">
                  {projects[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextSlide}
            className="z-10 w-10 h-10 flex items-center justify-center border border-[#4A90D9]/50 rounded-full text-[#4A90D9] hover:border-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Cinematic Slider */}
      <div className="hidden md:block relative">
        <div className="flex items-center justify-center gap-6 lg:gap-10 px-8">
          {/* Far Left Preview - Smaller */}
          <motion.div
            className="hidden lg:block w-32 xl:w-40 h-48 xl:h-56 relative opacity-30 flex-shrink-0 overflow-hidden rounded-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={projects[getSlideIndex(-2)].image}
              alt=""
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>

          {/* Left Preview */}
          <motion.div
            className="w-44 lg:w-56 xl:w-64 h-56 lg:h-72 xl:h-80 relative opacity-50 flex-shrink-0 overflow-hidden rounded-sm cursor-pointer group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            onClick={prevSlide}
            whileHover={{ opacity: 0.7, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={projects[getSlideIndex(-1)].image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-xs font-body uppercase tracking-wider">
                {projects[getSlideIndex(-1)].location}
              </p>
            </div>
          </motion.div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="z-10 w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white/60 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 flex-shrink-0"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Main Center Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl aspect-[16/10] overflow-hidden rounded-sm shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Project Info */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 flex justify-between items-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h3 className="text-white text-xl lg:text-2xl font-display tracking-wide mb-1">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-white/70 text-sm font-body uppercase tracking-wider">
                    {projects[currentIndex].location}
                  </p>
                </div>
                <span className="text-white/50 text-sm font-body">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="z-10 w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white/60 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 flex-shrink-0"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Right Preview */}
          <motion.div
            className="w-44 lg:w-56 xl:w-64 h-56 lg:h-72 xl:h-80 relative opacity-50 flex-shrink-0 overflow-hidden rounded-sm cursor-pointer group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            viewport={{ once: true }}
            onClick={nextSlide}
            whileHover={{ opacity: 0.7, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={projects[getSlideIndex(1)].image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-xs font-body uppercase tracking-wider">
                {projects[getSlideIndex(1)].location}
              </p>
            </div>
          </motion.div>

          {/* Far Right Preview - Smaller */}
          <motion.div
            className="hidden lg:block w-32 xl:w-40 h-48 xl:h-56 relative opacity-30 flex-shrink-0 overflow-hidden rounded-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={projects[getSlideIndex(2)].image}
              alt=""
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
